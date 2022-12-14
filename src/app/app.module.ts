import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormComponent } from './components/form/form.component';
import { ConnectionsComponent } from './components/connections/connections.component';
import {ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { ClosestStationsComponent } from './components/closest-stations/closest-stations.component';
import {TimeDiffMinutes} from "./pipe/timeDiffMinutes";
import {AmntOfChanges} from "./pipe/amntOfChanges";
import {MinutesToHours} from "./pipe/minutesToHours";

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    ConnectionsComponent,
    ClosestStationsComponent,
    TimeDiffMinutes,
    AmntOfChanges,
    MinutesToHours
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [FormComponent, ConnectionsComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
