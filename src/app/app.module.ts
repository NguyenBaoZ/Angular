// **** TS module **** //

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloComponent } from '../hello/hello.component';
import { HiComponent } from './hi/hi.component';
import { FormsModule } from '@angular/forms';
import { AuthorComponent } from './author/author.component';

// TS decorator
@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    HiComponent,
    AuthorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AuthorComponent]
})
export class AppModule { }
