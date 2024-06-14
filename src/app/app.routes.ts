import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [
    { path: '', component: HomeComponent, pathMatch: 'full' },
    { path: 'home', component: HomeComponent, title: 'Home' },
    { path: '**', redirectTo: 'home', pathMatch: 'full' }
];