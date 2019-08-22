import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DisasterRoutingModule } from './disaster-routing.module';
import { Navbar2Component } from './navbar2/navbar2.component';
import { SummaryComponent } from './summary/summary.component';
import { SendComponent } from './send/send.component';


@NgModule({
  declarations: [Navbar2Component, SummaryComponent, SendComponent],
  imports: [
    CommonModule,
    DisasterRoutingModule
  ]
})
export class DisasterModule { }
