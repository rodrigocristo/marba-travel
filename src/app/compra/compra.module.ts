import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompraComponent } from './compra.component';
import { MatStepperModule, MatToolbarModule, MatIconModule, MatMenuModule, MatButtonModule, MatTabsModule, MatCardModule, MatBadgeModule, MatChipsModule, MatFormFieldModule, MatDatepickerModule, MatNativeDateModule, MatInputModule, MatListModule, MatDividerModule, MatProgressBarModule } from '@angular/material';
import { CompraRouting } from './compra.routing';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [CompraComponent],
  imports: [
    CommonModule,
    MatStepperModule,
    CompraRouting,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule,
    MatTabsModule,
    MatCardModule,
    MatBadgeModule,
    MatChipsModule,
    FlexLayoutModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    MatInputModule,
    MatListModule,
    MatDividerModule,
    MatProgressBarModule,
    
  ]
})
export class CompraModule { }
