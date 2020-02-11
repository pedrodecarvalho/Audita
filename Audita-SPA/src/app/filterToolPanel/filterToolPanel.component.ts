import { OnInit, Component, Renderer2, ElementRef } from '@angular/core';
import { IToolPanel, IToolPanelParams } from "ag-grid-community";

@Component({
  selector: 'app-filterToolPanel',
  templateUrl: './filterToolPanel.component.html',
  styleUrls: ['./filterToolPanel.component.css']
})
export class FilterToolPanelComponent implements IToolPanel {

  refresh() { }
  private params: IToolPanelParams;
  constructor() { }

  ngOnInit() {
  }
  agInit(params: IToolPanelParams): void {
    this.params = params;
  }

}
