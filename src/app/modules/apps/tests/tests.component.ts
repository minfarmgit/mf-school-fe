import { Component } from '@angular/core';
import { AppMenuComponent } from "../../../shared/components/app-menu/app-menu.component";

@Component({
  selector: 'app-tests',
  standalone: true,
  imports: [
    AppMenuComponent
  ],
  templateUrl: './tests.component.html',
  styleUrl: './tests.component.scss'
})
export class TestsComponent {

}
