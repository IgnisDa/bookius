import { PrismaService } from '@bookius/model';
import { OnQueueActive, OnQueueCompleted, OnQueueFailed } from '@nestjs/bull';
import { Injectable } from '@nestjs/common';
import { JobStatus } from '@prisma/client';
import { Job, JobPromise } from 'bull';
import { DateTime } from 'luxon';
import { setTimeout } from 'node:timers/promises';

@Injectable()
export class BaseLogsProcessor {}

@Injectable()
export class DatabaseInjectedProcessor extends BaseLogsProcessor {
  constructor(public readonly prisma: PrismaService) {
    super();
  }
}

/**
 * This processor will update the `JobLog` model in the database with the status of the job
 * that had to be processed.
 */
// The `setTimeout`s are there because `onQueueActive` is not called asynchronously(??). In
// case of very small tasks, the task is finished before the `JobLog` model is inserted
// into the database, and thus the subsequent update calls in the `onQueueCompleted`
// sometimes fail.
@Injectable()
export class UpdateJobLogsProcessor extends DatabaseInjectedProcessor {
  /**
   * Called when a job enters the queue and processing has not started yet
   */
  @OnQueueActive()
  private async internalOnQueueActive(job: Job, _jobPromise: JobPromise) {
    try {
      await this.prisma.jobLog.create({
        data: {
          id: Number(job.id),
          name: job.name,
          data: job.data,
          queueName: job.queue.name,
          startedOn: DateTime.now().toJSDate(),
        },
      });
    } catch {
      // a job with that ID is already present
      await this.prisma.jobLog.update({
        where: { id: Number(job.id) },
        data: {
          id: Number(job.id),
          name: job.name,
          data: job.data,
          queueName: job.queue.name,
          startedOn: DateTime.now().toJSDate(),
          status: JobStatus.STARTED,
        },
      });
    }
  }

  /**
   * Called when a job in the queue failed to complete
   */
  @OnQueueFailed()
  private async internalOnQueueFailed(job: Job, error: Error) {
    await setTimeout(1000);
    await this.prisma.jobLog.update({
      where: { id: Number(job.id) },
      data: {
        status: JobStatus.FAILED,
        errorLog: error.stack,
      },
    });
  }

  /**
   * Called when a job was completed successfully
   * @param result: The data returned from the job
   */
  @OnQueueCompleted()
  private async internalOnJobCompleted(job: Job, result: any) {
    await setTimeout(1000);
    await this.prisma.jobLog.update({
      where: { id: Number(job.id) },
      data: {
        status: JobStatus.SUCCESSFUL,
        completedOn: DateTime.now().toJSDate(),
      },
    });
  }
}
