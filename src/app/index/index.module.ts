import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './index.component';
import { IndexRoutingModule } from './index-routing.module';
import { RouterModule } from '@angular/router';
import { ModuleModule } from '../shared/components/module.module';
import { ChatListComponent } from './chats/chat-list/chat-list.component';
import { ChatModule } from './chats/chat.module';
@NgModule({
  declarations: [
    IndexComponent,
    ChatListComponent,

  ],
  imports: [
    CommonModule,
    IndexRoutingModule,
    RouterModule,
    ModuleModule,
    ChatModule
  ]
})
export class IndexModule { }
