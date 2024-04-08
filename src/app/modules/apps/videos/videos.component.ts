import { Component } from '@angular/core';
import { AppMenuComponent } from "../../../shared/components/app-menu/app-menu.component";

@Component({
  selector: 'app-videos',
  standalone: true,
  imports: [
    AppMenuComponent
  ],
  templateUrl: './videos.component.html',
  styleUrl: './videos.component.scss'
})
export class VideosComponent {

}
