import {NgModule} from "@angular/core";
import { CommonModule } from '@angular/common';
import {MatInputModule,MatToolbarModule,MatButtonModule,MatTableModule} from '@angular/material';

@NgModule({
imports: [CommonModule, MatToolbarModule, MatButtonModule,MatTableModule,MatInputModule],
exports: [CommonModule, MatToolbarModule, MatButtonModule,MatTableModule,MatInputModule]
})
export class CustomMaterialModule { }
