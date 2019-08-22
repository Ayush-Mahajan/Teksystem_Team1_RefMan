import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgoDashboardRoutingModule } from './ngo-dashboard-routing.module';
import { MapComponent } from './components/map/map.component';
import { InventoryComponent } from './components/inventory/inventory.component';
import { AlertComponent } from './components/alert/alert.component';
import { Navbar1Component } from './components/navbar1/navbar1.component';
import { NgoDashboardComponent } from './components/ngo-dashboard/ngo-dashboard.component';


@NgModule({
  declarations: [MapComponent, InventoryComponent, AlertComponent, Navbar1Component, NgoDashboardComponent],
  imports: [
    CommonModule,
    NgoDashboardRoutingModule
  ]
})
export class NgoDashboardModule { }
