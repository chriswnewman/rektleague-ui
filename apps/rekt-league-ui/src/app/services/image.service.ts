import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  public readonly imageUrlBase = 'http://rektleague.com'
  constructor() { }
}
