import { Component, OnInit } from '@angular/core';
import { TuiSvgModule } from "@taiga-ui/core";
import { Observable, shareReplay, switchMap } from "rxjs";
import { TestDetails } from "../../../../shared/interfaces";
import { TestsService } from "../tests.service";
import { ActivatedRoute, RouterLink } from "@angular/router";
import { AsyncPipe } from "@angular/common";
import { TuiLetModule } from "@taiga-ui/cdk";

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [
    TuiSvgModule,
    AsyncPipe,
    TuiLetModule,
    RouterLink
  ],
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss'
})
export class DetailsComponent implements OnInit {
  public test: Observable<TestDetails>;

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

  public ngOnInit() {
    this.test.subscribe(res => {
      console.log(res);
    })
  }
}
