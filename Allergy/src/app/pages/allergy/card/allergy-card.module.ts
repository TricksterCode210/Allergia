import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllergyCardComponent } from './allergy-card.component';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';



@NgModule({
  declarations: [AllergyCardComponent],
  imports: [
    CommonModule, MatCardModule, MatIconModule, MatButtonModule
  ],
  exports: [AllergyCardComponent]
})
export class AllergyCardModule { }
