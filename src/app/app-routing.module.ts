import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KhachhangComponent } from './khachhang/khachhang.component';

const routes: Routes = [
  {
    path: "khachhang", component:KhachhangComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
