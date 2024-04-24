import { Routes } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { NotFoundComponent } from './not-found/not-found.component';

export const routes: Routes = [
    {path: "users", component: UsersComponent},
    {path: '', redirectTo: '/users', pathMatch: 'full'},
    {path: '404', component: NotFoundComponent},
    {path: '**', component: NotFoundComponent}
];
