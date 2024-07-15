import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AutomationsComponent } from './components/automations/automations.component';
import { JourneysComponent } from './components/journeys/journeys.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MaterialModule} from "./material/material.module";
import {MatGridListModule} from "@angular/material/grid-list";
import {MatTableModule} from "@angular/material/table";
import { AutomationDetailsDialogComponent } from './components/automation-details-dialog/automation-details-dialog.component';
import {MatDialogModule} from "@angular/material/dialog";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { JourneyDetailsDialogComponent } from './components/journey-details-dialog/journey-details-dialog.component';
import {DataExtensionComponent} from "./components/data-extension/data-extension.component";
import { AddAutomationDialogComponent } from './components/add-automation-dialog/add-automation-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    AutomationsComponent,
    DataExtensionComponent,
    JourneysComponent,
    AutomationDetailsDialogComponent,
    JourneyDetailsDialogComponent,
    AddAutomationDialogComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    MatGridListModule,
    MatTableModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
