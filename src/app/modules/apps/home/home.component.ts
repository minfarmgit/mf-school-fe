import { Component } from '@angular/core';
import { AppMenuComponent } from "../../../shared/components/app-menu/app-menu.component";
import { PreviewTestComponent } from "../../../shared/components/preview-test/preview-test.component";
import { DbService } from "../../../shared/services/db.service";
import { from, Observable } from "rxjs";
import { Test } from "../../../shared/interfaces";
import { AsyncPipe, CommonModule } from "@angular/common";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    AppMenuComponent,
    PreviewTestComponent,
    AsyncPipe
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  public tests: Observable<Test[]>;

  constructor(
    private db: DbService,
  ) {
    this.tests = from(this.db.pb.collection<Test>('tests').getFullList({
      sort: '-created',
    }));
  }
}
