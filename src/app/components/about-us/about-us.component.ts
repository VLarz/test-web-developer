import { Component, OnInit } from '@angular/core';

import { Content } from '../../models/content.model';
import { ContentService } from '../../services/content.service';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit {
  data: Content;

  constructor(private contentService: ContentService) { }

  ngOnInit(): void {
    this.getAboutUs();
  }

  getAboutUs(): void {
    this.contentService.getContent().subscribe(
      res => this.data = res.find(x => x.id === 'about_us')
    );
  }


}
