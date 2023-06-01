import { Component } from '@angular/core';

interface WelcomeFeature {
  img: string;
  name: string;
}

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent {
  public features: WelcomeFeature[] = [
    {
      img: 'assets/welcome/tests.svg',
      name: 'Тесты',
    },
    {
      img: 'assets/welcome/videos.svg',
      name: 'Видео',
    },
    {
      img: 'assets/welcome/seminars.svg',
      name: 'Семинары',
    },
    {
      img: 'assets/welcome/base.svg',
      name: 'База знаний',
    },
    {
      img: 'assets/welcome/presentations.svg',
      name: 'Презентации',
    },
  ]
}
