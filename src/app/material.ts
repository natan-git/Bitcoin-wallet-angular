import { NgModule } from '@angular/core';
import { MatButtonModule, MatCheckboxModule } from '@angular/material';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
    imports: [MatButtonModule, MatCheckboxModule, MatCardModule, MatToolbarModule],
    exports: [MatButtonModule, MatCheckboxModule, MatCardModule, MatToolbarModule]
})

export class MaterialModule { }