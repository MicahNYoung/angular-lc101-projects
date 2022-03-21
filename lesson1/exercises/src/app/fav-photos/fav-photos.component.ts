import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'The best animal in existence:';
  image1 = 'https://i.natgeofe.com/n/7d80b867-3977-4f36-8d33-b64ad03431d9/01-tardigrades-sciencesource_ss2437867.jpg';
  image2 = 'https://pbs.twimg.com/media/Ez6HekEX0AABTYc.jpg';
  image3 = 'https://ichef.bbci.co.uk/news/976/cpsprodpb/3139/production/_97110621_c0069585-water_bear_mouth-spl.jpg';

  constructor() { }

  ngOnInit() {
  }

}