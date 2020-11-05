import { Component, OnInit } from '@angular/core';
import { ContentService } from 'src/app/services/content.service';
import { Section } from '../../models/section.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  data: Section;

  constructor(private contentService: ContentService) { }

  ngOnInit(): void {
    this.getHomeContent();
  }

  getHomeContent(): void {
    this.contentService.getContent().subscribe(
      res => this.data = res.find(x => x.id === 'home')
    );
  }
}
