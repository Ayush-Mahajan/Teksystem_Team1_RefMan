import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NgoDashboardComponent } from './components/ngo-dashboard/ngo-dashboard.component';
import { MapComponent } from './components/map/map.component';
import { InventoryComponent } from './components/inventory/inventory.component';
import { AlertComponent } from './components/alert/alert.component';


const routes: Routes = [
  {path: '', component: NgoDashboardComponent},
  {path: '', redirectTo: '/map', pathMatch: 'full'},
  {path: 'map', component: MapComponent},
  {path: 'inventory', component: InventoryComponent},
  {path: 'alert', component: AlertComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NgoDashboardRoutingModule { }
