import { Component } from '@angular/core';
import { AppMenuComponent } from "../../../shared/components/app-menu/app-menu.component";

@Component({
  selector: 'app-quiz',
  standalone: true,
  imports: [
    AppMenuComponent
  ],
  templateUrl: './quiz.component.html',
  styleUrl: './quiz.component.scss'
})
export class QuizComponent {

}
