import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FlexLayoutModule} from '@angular/flex-layout';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule, MatIconModule, MatMenuModule, MatButtonModule, MatTabsModule, MatCardModule, MatBadgeModule, MatChipsModule } from '@angular/material';
import { CompraModule } from './compra/compra.module';
import { HomeModule } from './home/home.module';
import { Router } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule,
    MatTabsModule,
    FlexLayoutModule,
    MatCardModule,
    MatBadgeModule,
    MatChipsModule,
    CompraModule,
    HomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
