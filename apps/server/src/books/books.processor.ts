import { UpdateJobLogsProcessor, logger } from '@bookius/general';
import { Process, Processor } from '@nestjs/bull';
import { Job } from 'bull';
import { COLLECT_BOOKS_DATA_JOB, MODULE_QUEUE_NAME } from './books.constants';

@Processor(MODULE_QUEUE_NAME)
export class BookProcessor extends UpdateJobLogsProcessor {
  @Process(COLLECT_BOOKS_DATA_JOB)
  async collectBookData(job: Job<{ isbn: string[] }>) {
    const { isbn } = job.data;
    logger.info(isbn);
    return;
  }
}
