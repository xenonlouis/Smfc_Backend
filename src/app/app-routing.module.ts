import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AutomationsComponent } from './components/automations/automations.component';
import { JourneysComponent } from './components/journeys/journeys.component';
import {DataExtensionComponent} from "./components/data-extension/data-extension.component";

const routes: Routes = [
  { path: '', redirectTo: '/automations', pathMatch: 'full' },
  { path: 'automations', component: AutomationsComponent },
  { path: 'data-extensions', component: DataExtensionComponent },
  { path: 'journeys', component: JourneysComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
