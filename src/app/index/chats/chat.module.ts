import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatRoutingModule } from './chat-routing.module';
import { HttpClient } from '@angular/common/http';
import { CustomModule } from 'src/app/shared/custom/custom.module';
import { ChatComposerComponent } from './chat-composer/chat-composer.component';
import { ChatTitleComponent } from './chat-title/chat-title.component';



@NgModule({
  providers: [
    HttpClient,
  ],
  imports: [
    CommonModule,
    ChatRoutingModule,
    CustomModule,
  ],
  declarations: [
    ChatComposerComponent,
    ChatTitleComponent
    
  ],
  exports: [
    ChatTitleComponent,
    ChatComposerComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ChatModule {
  constructor() {
  }
}
