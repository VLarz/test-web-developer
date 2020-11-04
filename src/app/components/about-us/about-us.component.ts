import { Component, OnInit } from '@angular/core';

import { Content } from '../../models/content.model';
import { Image } from '../../models/image.model';
import { ContentService } from '../../services/content.service';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit {
  data: Content;
  images: Image;
  constructor(private contentService: ContentService) { }

  ngOnInit(): void {
    this.getAboutUs();
    this.getImages();
    console.log(this.images);
    console.log(this.data);
  }

  getAboutUs(): void {
    this.contentService.getContent().subscribe(
      res => this.data = res.find(x => x.id === 'about_us')
    );
  }

  getImages(): void {
    this.contentService.getImages().subscribe(res => this.images = res);
  }
}
