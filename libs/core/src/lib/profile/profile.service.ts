import { Injectable } from '@nestjs/common';
import { Profile } from './profile.types';
import ProfileData from './profile.json';

@Injectable()
export class ProfileService {
  getProfile(): Profile {
    return ProfileData;
  }
}
