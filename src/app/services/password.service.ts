import { Injectable } from '@angular/core';
import * as zxcvbn from 'zxcvbn';
import { ZXCVBNScore } from 'zxcvbn';

@Injectable({
  providedIn: 'root'
})
export class PasswordService {
  getStrength(password: string): ZXCVBNScore {
    return zxcvbn(password || '').score;
  }
}
