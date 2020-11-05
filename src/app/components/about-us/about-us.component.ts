import { Component, OnInit } from '@angular/core';

import { Section } from '../../models/section.model';
import { Image } from '../../models/image.model';
import { ContentService } from '../../services/content.service';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit {
  data: Section;
  images: Image;
  constructor(private contentService: ContentService) { }

  ngOnInit(): void {
    this.getAboutUsContent();
    this.getImages();
  }

  getAboutUsContent(): void {
    this.contentService.getContent().subscribe(
      res => this.data = res.find(x => x.id === 'about_us')
    );
  }

  getImages(): void {
    this.contentService.getImages().subscribe(res => this.images = res);
  }
}
