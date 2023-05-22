import { Injectable } from '@nestjs/common';
import { Categoty } from './categories.types';
import CategoryData from './categories.json';

@Injectable()
export class CategoriesService {
  getCategories(): Categoty[] {
    return CategoryData;
  }
}
