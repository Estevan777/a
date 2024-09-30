import { Module } from '@nestjs/common';
import  { ImovelService } from './imovel.service';
import { ImoveisController } from './imovel.controller';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [ImoveisController],
  providers: [ImovelService],
  exports: [ImovelService],
})
export class imovelModule {}
