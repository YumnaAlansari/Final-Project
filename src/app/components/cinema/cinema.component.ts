import { Component, OnInit } from '@angular/core';
import { ContentService } from 'src/app/services/content.service';

@Component({
  selector: 'app-cinema',
  templateUrl: './cinema.component.html',
  styleUrls: ['./cinema.component.css']
})
export class CinemaComponent {

  cinemaList: any[] = [];
  id: number = 25;

  constructor(private contentService: ContentService){}

  getCinema(): void{
    this.contentService.getCinema().subscribe({
      next: (data:any[]) => {
        console.log(data);
        this.cinemaList = data;
      },
      error: (e) =>{
        console.log(e);
      }
    })
  }

  postCinema(): void {
    const body = {
    id: 70,
    name: "The Paremt",
    duration: 120.50,
    director: "Steven Spielberg ",
    numberOfActors: 9,
    releaseYear: 2022,
    category: "Drama"
  };

  this.contentService.postCinema(body).subscribe({
    next: (data) =>{
      alert("Cinema posted successfuly");
      this.getCinema();
    },
    error: (e) => {
      console.log(e);
    }
  })

}
putCinema(): void {
  const body = {
  id: this.id,
  name: "The Paremt",
  duration: 130.50,
  director: "Sidney Lumet ",
  numberOfActors: 9,
  releaseYear: 2022,
  category: "Crime"
};

this.contentService.putCinema(this.id, body).subscribe({
  next: (data) =>{
    alert("Cinema modifed successfuly");
    this.getCinema();
  },
  error: (e) => {
    console.log(e);
  }
})

}



delateCinema(): void{
  this.contentService.deleteCinema(this.id).subscribe({
    next: (data) =>{
      alert("Cinema deleted successfuly");
      this.getCinema();
    },
    error: (e) =>{
      console.log(e);
    }
  })
}

}
