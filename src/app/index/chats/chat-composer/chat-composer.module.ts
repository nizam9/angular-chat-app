import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { CustomModule } from 'src/app/shared/custom/custom.module';
import { ChatTitleComponent } from '../chat-title/chat-title.component';



@NgModule({
  providers: [
    HttpClient,
  ],
  imports: [
    CommonModule,
    CustomModule,
  ],
  declarations: [
    ChatTitleComponent
  ],
  exports: [
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ChatModule {
  constructor() {
  }
}
