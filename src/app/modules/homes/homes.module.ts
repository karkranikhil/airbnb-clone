import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeListContainerComponent } from './containers/home-list-container/home-list-container.component';
import {HomeRoutingModule} from './homes-routing.module'
import { HomeListComponent } from './components/home-list/home-list.component';
import { HomeComponent } from './components/home/home.component'
@NgModule({
  declarations: [HomeListContainerComponent, HomeListComponent, HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomesModule { }
