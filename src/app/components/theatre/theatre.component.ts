
import { Component, OnInit } from '@angular/core';
import { ContentService } from 'src/app/services/content.service';

@Component({
  selector: 'app-theatre',
  templateUrl: './theatre.component.html',
  styleUrls: ['./theatre.component.css']
})
export class TheatreComponent { theatreList: any[] = [];

  constructor(private contentService: ContentService){}


  getTheatre(): void{
    this.contentService.getTheatre().subscribe({
      next: (data:any[]) => {
        console.log(data);
        this.theatreList = data;
      },
      error: (e) =>{
        console.log(e);
      }
    })
  }


}
