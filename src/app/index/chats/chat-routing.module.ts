import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChatComposerComponent } from './chat-composer/chat-composer.component';
import { ChatListComponent } from './chat-list/chat-list.component';



const routes: Routes = [
    {
        path: '',
        component: ChatListComponent,
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ChatRoutingModule {
    constructor() {
    }
}
