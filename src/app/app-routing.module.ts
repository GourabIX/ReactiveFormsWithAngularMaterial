import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArrayFormComponent } from './array-form/array-form.component';
import { ValidatedReactiveFormComponent } from './validated-reactive-form/validated-reactive-form.component';


const routes: Routes = [
  {
    path: 'arrayForm',
    component: ArrayFormComponent
  },
  {
    path: 'validReactiveForm',
    component: ValidatedReactiveFormComponent
  },
  {
    path: '**',
    component: ArrayFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
