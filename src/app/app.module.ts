import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormComponent } from './components/form/form.component';
import { ConnectionsComponent } from './components/connections/connections.component';
import {ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { ClosestStationsComponent } from './components/closest-stations/closest-stations.component';
import { SelectListComponent } from './components/select-list/select-list.component';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    ConnectionsComponent,
    ClosestStationsComponent,
    SelectListComponent
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
