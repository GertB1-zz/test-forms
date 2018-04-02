import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';  // <-- #1 import module


import { AppComponent } from './app.component';
import { UnitEditComponent } from './unit-edit/unit-edit.component';
import { UnitService } from './unit.service';


@NgModule({
  declarations: [
    AppComponent,
    UnitEditComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [
    UnitService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
