import { Controller, Get } from '@nestjs/common';

@Controller()
export class CoreController {
  @Get('status')
  getStatus() {
    return true;
  }
}
