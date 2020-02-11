import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-buttonPanel',
  templateUrl: './buttonPanel.component.html',
  styleUrls: ['./buttonPanel.component.css']
})
export class ButtonPanelComponent implements OnInit {

  constructor() { }
  @Output() editingSite = new EventEmitter();

  ngOnInit() {
  }

  editSite() {
      this.editingSite.emit('Edit');

  }

  newSite() {
    this.editingSite.emit('New');

}

}
