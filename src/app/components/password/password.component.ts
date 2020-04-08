import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ZXCVBNScore } from 'zxcvbn';
import { PasswordService } from '../../services/password.service';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PasswordComponent implements OnInit {
  password = '';
  score: ZXCVBNScore = 0;
  labels = [
    '☹️',
    '😕',
    '😐',
    '😊',
    '🥳'
  ];

  constructor(private passwordService: PasswordService) {
  }

  get label() {
    return this.labels[this.score];
  }

  ngOnInit(): void {
    this.updateScore();
  }

  onInput(password: string) {
    this.password = password;
    this.updateScore();
  }

  updateScore() {
    this.score = this.passwordService.getStrength(this.password);
  }
}
