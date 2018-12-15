
import { Routes } from '@angular/router';
import { BateraComponent } from './projects/batera/batera.component';
import { HomeComponent } from './home/home.component';
import { MoreProjectsComponent } from './more-projects/more-projects.component';

export const ROUTES: Routes = [
    { path: '', component: HomeComponent },
    { path: 'batera', component: BateraComponent },
    { path: 'projects', component: MoreProjectsComponent }
]