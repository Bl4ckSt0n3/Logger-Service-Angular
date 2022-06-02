import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FlexLayoutModule } from "@angular/flex-layout";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoggerComponent } from './pages/logger/logger.component';
import { LoggerService } from './services/logger.service';
import { ProcessService } from './services/process.service';

@NgModule({
  declarations: [
    AppComponent,
    LoggerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule,
    NgbModule,
    FormsModule
  ],
  providers: [{ provide: LoggerService, useClass: ProcessService}],
  bootstrap: [AppComponent]
})
export class AppModule { }
