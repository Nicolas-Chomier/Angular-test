import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';
import { SpanLabelComponent } from './span-label/span-label.component';
import { FieldSetComponent } from './field-set/field-set.component';
import { ColorPickerComponent } from './color-picker/color-picker.component';

@NgModule({
  declarations: [AppComponent, SpanLabelComponent, FieldSetComponent, ColorPickerComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
