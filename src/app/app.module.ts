// **** TS module **** //

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloComponent } from '../hello/hello.component';
import { HiComponent } from './hi/hi.component';
import { FormsModule } from '@angular/forms';
import { AuthorComponent } from './author/author.component';
import { ClassComponent } from './class/class.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { AuthorDetailComponent } from './author-detail/author-detail.component';
import { AuthorListComponent } from './author-list/author-list.component';

// TS decorator
@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    HiComponent,
    AuthorComponent,
    ClassComponent,
    ProgressBarComponent,
    AuthorListComponent,
    AuthorDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AuthorListComponent]
})
export class AppModule { }
