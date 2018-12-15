import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { HeaderComponent } from './header/header.component';
import { AboutComponent } from './about/about.component';
import { ProjectsComponent } from './projects/projects.component';
import { ProfessionalComponent } from './professional/professional.component';
import { FooterComponent } from './footer/footer.component';
import { ContactComponent } from './contact/contact.component';
import { BateraComponent } from './projects/batera/batera.component';
import { ROUTES } from './app.routing';
import { HomeComponent } from './home/home.component';
import { MoreProjectsComponent } from './more-projects/more-projects.component';
import { RouterLinkStubDirective } from './shared/testing';

@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent,
        HeaderComponent,
        AboutComponent,
        ProjectsComponent,
        ProfessionalComponent,
        FooterComponent,
        ContactComponent,
        BateraComponent,
        HomeComponent,
        MoreProjectsComponent,
        RouterLinkStubDirective
    ],
    imports: [
        BrowserAnimationsModule,
        NgbModule.forRoot(),
        FormsModule,
        RouterModule.forRoot(ROUTES)
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
