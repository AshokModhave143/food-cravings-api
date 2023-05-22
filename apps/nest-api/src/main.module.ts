import { Module } from '@nestjs/common';
import { AppModule } from './app/app.module';
import { CategoriesModule } from './categories/categories.module';

@Module({
  imports: [AppModule, CategoriesModule],
})
export class MainModule {}
