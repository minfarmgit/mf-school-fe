import { Component, OnInit, signal } from '@angular/core';
import { TuiButtonModule, TuiSvgModule } from "@taiga-ui/core";
import { Observable, shareReplay, switchMap } from "rxjs";
import { TestDetails } from "../../../../shared/interfaces";
import { TestsService } from "../tests.service";
import { ActivatedRoute, RouterLink } from "@angular/router";
import { AsyncPipe } from "@angular/common";
import { TuiLetModule } from "@taiga-ui/cdk";
import { PdfViewerModule } from "ng2-pdf-viewer";

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [
    TuiSvgModule,
    AsyncPipe,
    TuiLetModule,
    RouterLink,
    PdfViewerModule,
    TuiButtonModule
  ],
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss'
})
export class DetailsComponent {
  public test: Observable<TestDetails>;
  public currentPage = 1;
  public maxPage = 1;

  constructor(
    private testsService: TestsService,
    private route: ActivatedRoute,
  ) {
    this.test = this.route.params.pipe(
      switchMap(params => {
        return this.testsService.getTestById(params['id']);
      }),
      shareReplay(1),
    );
  }

  public setCurrPage(direction: -1 | 1): void {
    switch (direction) {
      case 1:
        if (this.currentPage < this.maxPage) {
          this.currentPage+= 1;
        }
        return;
      case -1:
        if (this.currentPage > 1) {
          this.currentPage-= 1;
        }
        return;
    }
  }

  pageInitialized(e: any) {
    this.maxPage = e.source.pdfDocument._pdfInfo.numPages;
  }
}
