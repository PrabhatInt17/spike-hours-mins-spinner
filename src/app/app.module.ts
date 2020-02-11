import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import {  ReactiveFormsModule } from '@angular/forms';
import { TimeHoursDirective } from './directive/time-hours.directive';
import { TimeMinsDirective } from './directive/time-mins.directive';
import { NgxMaterialTimepickerModule } from 'ngx-material-timepicker';

@NgModule({
  imports:      [ BrowserModule, FormsModule,MatTooltipModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    NgxMaterialTimepickerModule, ],
  declarations: [ AppComponent, HelloComponent,TimeHoursDirective,
    TimeMinsDirective ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
