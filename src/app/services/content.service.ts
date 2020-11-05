import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';

import { environment } from '../../environments/environment';
import { Section } from '../models/section.model';
import { Image } from '../models/image.model';

import * as images from '../../assets/data/app.js';

@Injectable({
  providedIn: 'root'
})
export class ContentService {

  constructor(private http: HttpClient) { }

  getContent(): Observable<Section[]> {
    return this.http.get<Section[]>(`${environment.jsonPath}/content.json`);
  }

  getImages(): Observable<Image> {
    return of(images);
  }
}
