import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TableComponent } from './table/table.component';
import { App } from './app.routing.ts/app.routing.ts.module';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent
  ],
  imports: [
    BrowserModule,
    App.Routing.TsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
