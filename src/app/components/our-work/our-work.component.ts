import { Component, OnInit } from '@angular/core';
import { ContentService } from 'src/app/services/content.service';
import { Section } from '../../models/section.model';

@Component({
  selector: 'app-our-work',
  templateUrl: './our-work.component.html',
  styleUrls: ['./our-work.component.scss']
})
export class OurWorkComponent implements OnInit {
  data: Section;
  constructor(private contentService: ContentService) { }

  ngOnInit(): void {
    this.getOurWorkContent();
  }

  getOurWorkContent(): void {
    this.contentService.getContent().subscribe(
      res => this.data = res.find(x => x.id === 'our_work')
    );
  }
}
