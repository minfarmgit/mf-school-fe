import { Component } from '@angular/core';
import { AppMenuComponent } from "../../../shared/components/app-menu/app-menu.component";

@Component({
  selector: 'app-streams',
  standalone: true,
  imports: [
    AppMenuComponent
  ],
  templateUrl: './streams.component.html',
  styleUrl: './streams.component.scss'
})
export class StreamsComponent {

}
