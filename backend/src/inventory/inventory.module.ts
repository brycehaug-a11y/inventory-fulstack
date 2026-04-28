import { Module } from '@nestjs/common';
import { InventoryService } from './inventory.service';
import { InventoryController } from './inventory.controller';
import { databaseProviders } from 'src/backendprovider';
import { Column, Entity, PrimaryColumn } from 'typeorm';
import { text } from 'stream/consumers';

@Module({
  controllers: [InventoryController],
  providers: [InventoryService], ...databaseProviders
})
export class InventoryModule {}

