import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { IntroComponent } from './components/intro/intro.component';
import { ContentComponent } from './components/content/content.component';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';
import { ClientsComponent } from './components/clients/clients.component';
import { HeaderComponent } from './components/header/header.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { CinemaComponent } from './components/cinema/cinema.component';
import { MusicComponent } from './components/music/music.component';
import { TheatreComponent } from './components/theatre/theatre.component';

const routes: Routes = [
  { path:'', component: HeaderComponent},
  { path:'About', component: IntroComponent},
  { path:'Services', component: ContentComponent},
  { path:'Testimonials', component: TestimonialsComponent},
  { path:'Clients', component: ClientsComponent},
  { path:'cinema', component: CinemaComponent},
  { path:'music', component: MusicComponent},
  { path:'theatre', component: TheatreComponent},
  { path: '**', component: NotFoundComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
