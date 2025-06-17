import {
  Body,
  Controller,
  Get,
  Header,
  HttpCode,
  Param,
  Post,
  Query,
  Redirect,
} from '@nestjs/common';
import { CreateCatDto } from './interfaces/cats';

@Controller('cats')
export class CatsController {
  @Get()
  findAll(@Query('age') age: number, @Query('breed') breed: string): string {
    return `This action returns all cats filtered by age: ${age} and breed: ${breed}`;
  }

  @Get(':id')
  findOne(@Param() params: { id: string }): string {
    console.log(params.id);
    return `This action returns a #${params.id} cat`;
  }

  @Get('breed')
  breed(): string {
    return 'This action returns all cats of a specific breed';
  }

  @Get('abcd/*')
  wildcard(): string {
    return 'This action returns all cats with a wildcard path';
  }

  @Post()
  @Header('Cache-Control', 'no-cache')
  @HttpCode(200)
  create(@Body() createCatDto: CreateCatDto): CreateCatDto {
    return createCatDto;
  }

  @Get('docs')
  @Redirect('https://nest.nodejs.cn', 302)
  getDocs(@Query('version') version) {
    console.log('version', version);
    if (version && version === '5') {
      return { url: 'https://baidu.com' };
    }
  }
}
