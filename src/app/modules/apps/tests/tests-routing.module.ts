import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { TestsComponent } from "./tests.component";
import { DetailsComponent } from "./details/details.component";

const routes: Routes = [
  {
    path: '',
    component: TestsComponent,
  },
  {
    path: ':id',
    component: DetailsComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TestsRoutingModule { }
