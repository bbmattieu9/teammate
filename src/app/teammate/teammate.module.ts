import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeammateRoutingModule } from './teammate-routing.module';
import { TeammateShellComponent } from './teammate-shell/teammate-shell.component';
import { TeammateProfileComponent } from './teammate-profile/teammate-profile.component';
import { TeammateListComponent } from './teammate-list/teammate-list.component';


@NgModule({
  declarations: [TeammateShellComponent, TeammateProfileComponent, TeammateListComponent],
  imports: [
    CommonModule,
    TeammateRoutingModule
  ]
})
export class TeammateModule { }
