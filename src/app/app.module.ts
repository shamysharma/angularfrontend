import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms'; // Import ReactiveFormsModule
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LeaveFormComponent } from './leave-form/leave-form.component';
import { LeaveTableComponent } from './leave-table/leave-table.component';

@NgModule({
  declarations: [AppComponent, LeaveFormComponent, LeaveTableComponent],
  imports: [BrowserModule, ReactiveFormsModule], // Add ReactiveFormsModule here
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
