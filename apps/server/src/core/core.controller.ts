import { Controller, ForbiddenException, Get, Headers } from '@nestjs/common';
import { CoreService } from './core.service';

@Controller()
export class CoreController {
  constructor(private readonly coreService: CoreService) {}

  @Get('status')
  getStatus() {
    return true;
  }

  @Get('git-rev')
  getGitRev(@Headers('user-agent') userAgent: string) {
    if (userAgent !== 'gh-actions-automated-script')
      throw new ForbiddenException(
        `UA '${userAgent}' is not allowed to access this endpoint`
      );
    return this.coreService.getGitRev();
  }
}
