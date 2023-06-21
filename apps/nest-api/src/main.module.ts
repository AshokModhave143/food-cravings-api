import { Module } from '@nestjs/common';
import { AppModule } from './app/app.module';
import { ProfileModule, CategoriesModule } from '@food-cravings-api/core';

@Module({
  imports: [AppModule, CategoriesModule, ProfileModule],
})
export class MainModule {}
