import { Controller, Get } from '@nestjs/common';

@Controller('admin')
@Controller({ host: 'admin.example.com' })
export class AdminController {
  @Get()
  async index(): Promise<any> {
    const ret = await new Promise((resolve) => {
      setTimeout(() => {
        resolve('Hello Admin');
      }, 4000);
    });
    return ret;
  }
}
