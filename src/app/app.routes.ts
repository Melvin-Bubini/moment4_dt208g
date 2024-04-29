import { Routes } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { CoursesComponent } from './courses/courses.component';

export const routes: Routes = [
    {path: "users", component: UsersComponent},
    { path: "courses", component: CoursesComponent },
    {path: '', redirectTo: '/courses', pathMatch: 'full'},
    {path: '404', component: NotFoundComponent},
    {path: '**', component: NotFoundComponent}
];
