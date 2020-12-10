import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSelectModule} from '@angular/material/select';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';

const MODULES = [MatToolbarModule, MatSelectModule, MatCardModule, MatButtonModule, MatIconModule];

@NgModule({
  exports: MODULES,
  imports: [
    CommonModule,
    ...MODULES
  ]
})
export class MaterialModule {
}
