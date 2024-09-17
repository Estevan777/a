import { Module } from '@nestjs/common';
import { imovelModule } from './imoveis/imoveis.module';

@Module({
  imports: [imovelModule],
})
export class AppModule {}