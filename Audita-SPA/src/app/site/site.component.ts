import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-site',
  templateUrl: './site.component.html',
  styleUrls: ['./site.component.css']
})
export class SiteComponent implements OnInit {
  sites: any;
  sitemode: string;

  columnDefs = [
    {headerName: 'Make', field: 'make' },
    {headerName: 'Model', field: 'model' },
    {headerName: 'Price', field: 'price'}
];

rowData = [
    { make: 'Toyota', model: 'Celica', price: 35000 },
    { make: 'Ford', model: 'Mondeo', price: 32000 },
    { make: 'Porsche', model: 'Boxter', price: 72000 }
];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getValues();
    this.sitemode = 'View';
  }

  getValues() {
    this.http.get('http://localhost:5000/api/sites').subscribe(response => {
      this.sites = response;
    }, error => { console.log(error); }

    );
  }

  editSite(editingSite: string) {
    this.sitemode = editingSite;
  }

  viewSite(editingSite: string) {
    this.sitemode = editingSite;
  }


}
