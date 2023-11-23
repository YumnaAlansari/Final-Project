import { Component } from '@angular/core';
import { ContentService } from 'src/app/services/content.service';

@Component({
  selector: 'app-music',
  templateUrl: './music.component.html',
  styleUrls: ['./music.component.css']
})
export class MusicComponent {

  // const project ={category, director};
  musicList: any[] = [];

  constructor(private contentService: ContentService){}

  getMusic(): void{
    this.contentService.getMusic().subscribe({
      next: (data:any[]) => {
        console.log(data);
        this.musicList = data;
      },
      error: (e) =>{
        console.log(e);
      }
    })
  }
}
