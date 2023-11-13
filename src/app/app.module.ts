import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { homeIntroduction } from './home/home-Introduction/home-introduction';
import { ResumeComponent } from './resume/resume.component';
import { HomeContentComponent } from './home/home-content/home-content.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AboutComponent } from './home/about/about.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ContactUsComponent } from './home/contact-us/contact-us.component';
import { LanguagesComponent } from './home/languages/languages.component';
import { BackEndComponent } from './home/back-end/back-end.component';
import { ScrollHideDirective } from './scroll-hide.directive';
import { ShowOnScrollDirective } from './show-on-scroll.directive';
import { ShowOnScroll1Directive } from './show-on-scroll1.directive';
import { ScrollAnimationComponent } from './home/scroll-animation/scroll-animation.component';
import { ShowOnScroll2Directive } from './show-on-scroll2.directive';
import { ProjectsComponent } from './home/projects/projects.component';
import { ReactiveFormsModule } from '@angular/forms';





@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    homeIntroduction,
    routingComponents,
    ResumeComponent,
    HomeContentComponent,
    AboutComponent,
    ContactUsComponent,
    LanguagesComponent,
    BackEndComponent,
    ScrollHideDirective,
    ShowOnScrollDirective,
    ShowOnScroll1Directive,
    ScrollAnimationComponent,
    ShowOnScroll2Directive,
    ProjectsComponent,
    
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
