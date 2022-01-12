import { Controller, Get } from '@nestjs/common';
import { CoreService } from './core.service';

@Controller()
export class CoreController {
  constructor(private readonly coreService: CoreService) {}

  @Get('status')
  getStatus() {
    return true;
  }

  @Get('git-rev')
  getGitRev() {
    return this.coreService.getGitRev();
  }
}
