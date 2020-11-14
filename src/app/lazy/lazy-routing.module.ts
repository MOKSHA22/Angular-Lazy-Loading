import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LazyComponentComponent } from './lazy-component/lazy-component.component';
import { LazyComponentTwoComponent } from './lazy-component-two/lazy-component-two.component';


const routes: Routes = [
  {path: '', component: LazyComponentComponent},
  {path: 'two', component: LazyComponentTwoComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LazyRoutingModule { }
