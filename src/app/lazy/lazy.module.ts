import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LazyRoutingModule } from './lazy-routing.module';
import { LazyComponentComponent } from './lazy-component/lazy-component.component';
import { LazyComponentTwoComponent } from './lazy-component-two/lazy-component-two.component';


@NgModule({
  imports: [
    CommonModule,
    LazyRoutingModule
  ],
  declarations: [LazyComponentComponent, LazyComponentTwoComponent]
})
export class LazyModule { }
