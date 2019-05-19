import { AppRoutingModule } from './router-config.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { TableComponent } from './table/table.component';
// import appRoutes from './router-config';
import { HomeComponent } from './home/home.component';
import { ReactiveFormsModule } from '@angular/forms';
// import { AppRoutingModule } from './router-config';


@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: []
})
export class AppModule { }
