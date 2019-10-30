import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-places-read',
  templateUrl: './places-read.component.html',
  styleUrls: ['./places-read.component.scss']
})

export class PlacesReadComponent implements OnInit {

  public data: Observable<any>
  readonly ROOT_URL = 'http://localhost:3000'

  constructor(private http: HttpClient) {}
  ngOnInit():void {
    this.data = this.http.get(this.ROOT_URL + '/api/v1/places')
    console.log(this.data)
  }

  removeItem(item: any) {
    if(confirm("Are you sure you want to delete " + item.place + " (" + item.country + ")?")) {
      const req = this.http.delete(this.ROOT_URL + '/api/v1/places/' + item.id.toString())
      req.subscribe()
    }
  }

}
