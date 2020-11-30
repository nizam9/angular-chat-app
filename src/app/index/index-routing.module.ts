import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChatListComponent } from './chats/chat-list/chat-list.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { IndexComponent } from './index.component';


const routes: Routes = [
    {
        path: '',
        component: IndexComponent,
        children: [
            { path: '', component: DashboardComponent },
            { path:'chat',
            loadChildren: () => import('./chats/chat.module').then(m => m.ChatModule),
            data: { name: 'chat module data' }} 
        ]
    }



];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule]
})
export class IndexRoutingModule { }