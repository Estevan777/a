import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ImovelService } from './imovel.service';
import { CreateImovelDto } from './dto/create-imovel.dto';
import { UpdateImovelDto } from './dto/update-imovel.dto';

@Controller('imoveis')
export class ImoveisController {
  constructor(private readonly ImovelService: ImovelService) {}

  @Post()
  create(@Body() createImovelDto: CreateImovelDto) {
    return this.ImovelService.create(createImovelDto);
  }

  @Get()
  findAll() {
    return this.ImovelService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ImovelService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateImovelDto: UpdateImovelDto) {
    return this.ImovelService.update(+id, updateImovelDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ImovelService.remove(+id);
  }
}
