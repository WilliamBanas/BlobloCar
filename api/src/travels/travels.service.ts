import { Injectable } from '@nestjs/common';
import { CreateTravelDto } from './dto/create-travel.dto';
import { UpdateTravelDto } from './dto/update-travel.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class TravelsService {
  constructor(private prisma: PrismaService) {}

  create(createTravelDto: CreateTravelDto) {
    return this.prisma.travel.create({ data: createTravelDto });
  }

  findAll() {
    return this.prisma.travel.findMany();
  }

  findOne(id: number) {
    return this.prisma.travel.findUnique({ where: { id } });
  }

  update(id: number, updateTravelDto: UpdateTravelDto) {
    return this.prisma.travel.update({ where: { id }, data: updateTravelDto });
  }

  remove(id: number) {
    return this.prisma.travel.delete({ where: { id } });
  }
}
