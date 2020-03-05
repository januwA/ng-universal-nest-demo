import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'nx-demo-nerws',
  templateUrl: './nerws.component.html',
  styleUrls: ['./nerws.component.styl']
})
export class NerwsComponent implements OnInit {
  news$ = this.http.get<string[]>('/api/news');
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
  }

}
