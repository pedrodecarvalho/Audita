import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-editSite',
  templateUrl: './editSite.component.html',
  styleUrls: ['./editSite.component.css']
})

export class EditSiteComponent implements OnInit {

  
  @Output() viewingSite = new EventEmitter();


  model: any = {};
  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  register() {
    this.authService.register(this.model).subscribe(() => {
      console.log("Site registration successful");

    }, error => {
      console.log(error);
    });
  }


  cancel() {

    this.viewingSite.emit('View');
   
  }


}
