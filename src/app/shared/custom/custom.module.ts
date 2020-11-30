import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatePipe } from '../directives/date.pipe';

@NgModule({

    imports: [
        CommonModule
    ],
    declarations: [
        DatePipe
    ],
    exports: [
        DatePipe
    ]
})

export class CustomModule { }
