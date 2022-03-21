import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-links',
  templateUrl: './fav-links.component.html',
  styleUrls: ['./fav-links.component.css']
})
export class FavLinksComponent implements OnInit {
  favLinks = ['https://tim.blog/podcast/', 'remnote.io', 'https://www.coursera.org/learn/learning-how-to-learn]'];
  constructor() { }

  ngOnInit(): void {
  }

}
