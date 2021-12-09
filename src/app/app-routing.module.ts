import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './landing/home/home.component';


const routes: Routes = [

  { path: 'welcome', component: HomeComponent },
      {
        path: 'teammate',
        loadChildren: () =>
          import('./teammate/teammate.module').then(m => m.TeammateModule)
      },
      { path: '', redirectTo: 'welcome', pathMatch: 'full' },
      // { path: '**', component: PageNotFoundComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
