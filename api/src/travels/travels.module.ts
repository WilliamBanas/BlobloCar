import { Module } from '@nestjs/common';
import { TravelsService } from './travels.service';
import { TravelsController } from './travels.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [TravelsController],
  providers: [TravelsService],
  imports: [PrismaModule],
})
export class TravelsModule {}
