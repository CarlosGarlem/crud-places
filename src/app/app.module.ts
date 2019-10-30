import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlacesReadComponent } from './places-read/places-read.component';
import { PlacesCreateComponent } from './places-create/places-create.component';
import { PlacesEditComponent } from './places-edit/places-edit.component';
import { PlacesHomeComponent } from './places-home/places-home.component';

@NgModule({
  declarations: [
    AppComponent,
    PlacesReadComponent,
    PlacesCreateComponent,
    PlacesEditComponent,
    PlacesHomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
