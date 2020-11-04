import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';

import { environment } from '../../environments/environment';
import { Content } from '../models/content.model';
import { Image } from '../models/image.model';

import * as images from '../../assets/data/app.js';

@Injectable({
  providedIn: 'root'
})
export class ContentService {

  constructor(private http: HttpClient) { }

  getContent(): Observable<Content[]> {
    return this.http.get<Content[]>(`${environment.jsonPath}/content.json`);
  }

  getImages(): Observable<Image> {
    return of(images);
  }
}
