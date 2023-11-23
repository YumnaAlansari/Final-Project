import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IntroComponent } from './components/intro/intro.component';
import { ContentComponent } from './components/content/content.component';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';
import { ClientsComponent } from './components/clients/clients.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { SocialComponent } from './components/social/social.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { CinemaComponent } from './components/cinema/cinema.component';
import { TheatreComponent } from './components/theatre/theatre.component';
import { MusicComponent } from './components/music/music.component';

@NgModule({
  declarations: [
    AppComponent,
    IntroComponent,
    ContentComponent,
    TestimonialsComponent,
    ClientsComponent,
    FooterComponent,
    HeaderComponent,
    SocialComponent,
    NavigationComponent,
    NotFoundComponent,
    CinemaComponent,
    TheatreComponent,
    MusicComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
