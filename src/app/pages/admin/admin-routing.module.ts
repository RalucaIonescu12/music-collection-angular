import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin/admin.component';
import { RouterModule, Routes } from '@angular/router';
import { AdminHomeComponent } from './admin-home/admin-home.component';

//comp
const routes: Routes = [{
  path: "",
  component: AdminComponent,
  children:
    [
    ]
},
  {
    path: "homr",
    component: AdminHomeComponent

  }
]
//modules

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
