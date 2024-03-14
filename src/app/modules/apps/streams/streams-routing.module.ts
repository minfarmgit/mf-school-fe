import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { StreamsComponent } from "./streams.component";

const routes: Routes = [
  {
    path: '',
    component: StreamsComponent,
    children: [],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StreamsRoutingModule { }
