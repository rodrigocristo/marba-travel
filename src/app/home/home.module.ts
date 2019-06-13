import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { MatToolbarModule, MatIconModule, MatMenuModule, MatButtonModule, MatTabsModule, MatCardModule, MatBadgeModule, MatChipsModule } from '@angular/material';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [HomeComponent],
  exports: [HomeComponent ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule,
    MatTabsModule,
    MatCardModule,
    MatBadgeModule,
    MatChipsModule,
    RouterModule,
    FlexLayoutModule
  ]
})
export class HomeModule { }
