import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TeammateShellComponent } from './teammate-shell/teammate-shell.component';


const routes: Routes = [

  {
    path: '',
    component: TeammateShellComponent
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeammateRoutingModule { }
