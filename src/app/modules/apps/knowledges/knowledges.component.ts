import { Component } from '@angular/core';
import { AppMenuComponent } from "../../../shared/components/app-menu/app-menu.component";

@Component({
  selector: 'app-knowledges',
  standalone: true,
  imports: [
    AppMenuComponent
  ],
  templateUrl: './knowledges.component.html',
  styleUrl: './knowledges.component.scss'
})
export class KnowledgesComponent {

}
