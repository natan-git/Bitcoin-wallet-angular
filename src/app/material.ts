import { NgModule } from '@angular/core';
import { MatButtonModule, MatCheckboxModule } from '@angular/material';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
@NgModule({
    imports: [MatButtonModule, MatCheckboxModule, MatCardModule, MatToolbarModule, MatInputModule],
    exports: [MatButtonModule, MatCheckboxModule, MatCardModule, MatToolbarModule, MatInputModule]
})

export class MaterialModule { }