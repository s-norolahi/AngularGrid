import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './SharedComponents/main/main.component';
import { GridComponent } from './SharedComponents/grid/grid.component';
import { PersonComponent } from './Person/person/person.component';
import { FormsModule } from '@angular/forms';
import { PaginationComponent } from './SharedComponents/pagination/pagination.component';
@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    GridComponent,
    PersonComponent,
    PaginationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
