import { Component } from '@angular/core';
import { AppMenuComponent } from "../../../shared/components/app-menu/app-menu.component";
import { AsyncPipe } from "@angular/common";
import { PreviewTestComponent } from "../../../shared/components/preview-test/preview-test.component";
import { Observable } from "rxjs";
import { Test } from "../../../shared/interfaces";
import { TestsService } from "./tests.service";

@Component({
  selector: 'app-tests',
  standalone: true,
  imports: [
    AppMenuComponent,
    AsyncPipe,
    PreviewTestComponent
  ],
  templateUrl: './tests.component.html',
  styleUrl: './tests.component.scss'
})
export class TestsComponent {
  public tests: Observable<Test[]>;

  constructor(
    private testsService: TestsService,
  ) {
    this.tests = this.testsService.getAllTests();
  }
}
