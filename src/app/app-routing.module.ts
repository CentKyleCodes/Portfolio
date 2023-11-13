import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { WorksComponent } from './works/works.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ResumeComponent } from './resume/resume.component';



const routes: Routes = [
   {path: 'Works', component: WorksComponent},
   {path: 'Home', component: HomeComponent},
   {path: 'Resume', component: ResumeComponent},
]

@NgModule({
    imports: [RouterModule.forRoot(routes, {useHash: true})],
    exports: [RouterModule]
})
export class AppRoutingModule{}

    export const routingComponents = [WorksComponent]
