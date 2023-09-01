import { NgModule } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';

const MaterialModules = [MatButtonModule, MatSnackBarModule, MatCardModule, MatDialogModule]
@NgModule({
    imports: [...MaterialModules],
    exports: [...MaterialModules]
})
export class MaterialModule { }