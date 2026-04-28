import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { InventoryModule } from './inventory/inventory.module';
import { databaseProviders } from './backendprovider';

@Module({
  imports: [InventoryModule],
  controllers: [AppController],
  providers: [AppService], ...databaseProviders,
})
export class AppModule {}
