import { Module } from '@nestjs/common';
import  { ImovelService } from './imovel.service';
import { ImovelController } from './imovel.controller';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [ImovelController],
  providers: [ImovelService],
  exports: [ImovelService],
})
export class imovelModule {}
