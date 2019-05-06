import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeListContainerComponent } from './containers/home-list-container/home-list-container.component';
import {HomeRoutingModule} from './homes-routing.module'
@NgModule({
  declarations: [HomeListContainerComponent],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomesModule { }
