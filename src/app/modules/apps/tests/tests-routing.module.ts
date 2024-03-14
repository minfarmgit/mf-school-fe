import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { TestsComponent } from "./tests.component";

const routes: Routes = [
  {
    path: '',
    component: TestsComponent,
    children: [],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TestsRoutingModule { }
