import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import {HeaderComponent} from './menus/header/header.component';
import {SideNavComponent} from './menus/side-nav/side-nav.component';

@NgModule({
  declarations: [HeaderComponent,SideNavComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[HeaderComponent,SideNavComponent]
})
export class ModuleModule { }
