import { Component, OnInit , ViewChild} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AgGridAngular } from 'ag-grid-angular';
import { FilterToolPanelComponent } from '../filterToolPanel/filterToolPanel.component';

@Component({
  selector: 'app-accesslog',
  templateUrl: './accesslog.component.html',
  styleUrls: ['./accesslog.component.css']
})
export class AccesslogComponent implements OnInit {

  //@ViewChild('agGrid') agGrid: AgGridAngular;

 public frameworkComponents;
 title = 'app';

  constructor(private http: HttpClient) { }


  columnDefs = [
      {headerName: 'SiteID', field: 'SiteID', sortable: true, filter: true, checkboxSelection: true },
      {headerName: 'AccessPoint', field: 'AccessPoint', sortable: true, filter: true },
      {headerName: 'DateTimeCreated', field: 'DateTimeCreated', sortable: true, filter: true },
      {headerName: 'TokenAction', field: 'TokenAction', sortable: true, filter: true},
      {headerName: 'MSISDN', field: 'MSISDN', sortable: true, filter: true},
      {headerName: 'SiteName', field: 'SiteName', sortable: true, filter: true },
      {headerName: 'ReceiverID', field: 'ReceiverID', sortable: true, filter: true},
      {headerName: 'TokenNumber', field: 'TokenNumber', sortable: true, filter: true},
      {headerName: 'TokenLoaded', field: 'TokenLoaded', sortable: true, filter: true},
      {headerName: 'TokenGenerator', field: 'TokenGenerator', sortable: true, filter: true}

  ];
rowData = [

  {SiteID :'NA0001 - KAG New App Test',AccessPoint :'Acc	Power Timer Test - RN211673',DateTimeCreated:'2019/10/28 16:20',TokenAction:'Token used:RN2121A3',MSISDN:'Power Timer Test',SiteName:'KAG Power Timer Test',ReceiverID:'155.93.136.136',TokenLoaded:'2019/10/28 16:20',TokenGenerator:'Created by:716'},			
  {SiteID :'NA0001 - KAG New App Test',AccessPoint :'Acc	Power Timer Test - RN211673',DateTimeCreated:'2019/10/28 16:20',TokenAction:'Token used:RN2121A3',MSISDN:'Power Timer Test',SiteName:'KAG Power Timer Test',ReceiverID:'155.93.136.136',TokenLoaded:'2019/10/28 16:20',TokenGenerator:'Created by:678'},			
  {SiteID :'NA0001 - KAG New App Test',AccessPoint :'Acc	Power Timer Test - RN211673',DateTimeCreated:'2019/10/28 16:23',TokenAction:'Token used:RN2121A3',MSISDN:'Power Timer Test',SiteName:'KAG Power Timer Test',ReceiverID:'155.93.136.136',TokenLoaded:'2019/10/28 16:23',TokenGenerator:'Created by:716'},			
  {SiteID :'NA0001 - KAG New App Test',AccessPoint :'Acc	Power Timer Test - RN211673',DateTimeCreated:'2019/10/28 16:24',TokenAction:'Token used:RN2121A3',MSISDN:'Power Timer Test',SiteName:'KAG Power Timer Test',ReceiverID:'155.93.136.136',TokenLoaded:'2019/10/28 16:24',TokenGenerator:'Created by:676'},			
  {SiteID :'NA0001 - KAG New App Test',AccessPoint :'Acc	Power Timer Test - RN211673',DateTimeCreated:'2019/10/28 16:27',TokenAction:'Token used:RN2121A3',MSISDN:'Power Timer Test',SiteName:'KAG Power Timer Test',ReceiverID:'155.93.136.136',TokenLoaded:'2019/10/28 16:27',TokenGenerator:'Created by:778'},			
  {SiteID :'NA0001 - KAG New App Test',AccessPoint :'Acc	Power Timer Test - RN211673',DateTimeCreated:'2019/10/28 16:29',TokenAction:'Token used:RN2121A3',MSISDN:'Power Timer Test',SiteName:'KAG Power Timer Test',ReceiverID:'155.93.136.136',TokenLoaded:'2019/10/28 16:29',TokenGenerator:'Created by:716'},			
  {SiteID :'NA0001 - KAG New App Test',AccessPoint :'Acc	Power Timer Test - RN211673',DateTimeCreated:'2019/10/28 16:35',TokenAction:'Token used:RN2121A3',MSISDN:'Power Timer Test',SiteName:'KAG Power Timer Test',ReceiverID:'155.93.136.136',TokenLoaded:'2019/10/28 16:35',TokenGenerator:'Created by:786'},			
  {SiteID :'NA0001 - KAG New App Test',AccessPoint :'Acc	Power Timer Test - RN211673',DateTimeCreated:'2019/10/28 16:46',TokenAction:'Token used:RN2121A3',MSISDN:'Power Timer Test',SiteName:'KAG Power Timer Test',ReceiverID:'155.93.136.136',TokenLoaded:'2019/10/28 16:46',TokenGenerator:'Created by:786'},			
  {SiteID :'NA0001 - KAG New App Test',AccessPoint :'Acc	Power Timer Test - RN211673',DateTimeCreated:'2019/10/28 16:57',TokenAction:'Token used:RN2121A3',MSISDN:'Power Timer Test',SiteName:'KAG Power Timer Test',ReceiverID:'155.93.136.136',TokenLoaded:'2019/10/28 16:57',TokenGenerator:'Created by:716'},			
  {SiteID :'NA0001 - KAG New App Test',AccessPoint :'Acc	Power Timer Test - RN211673',DateTimeCreated:'2019/10/28 17:05',TokenAction:'Token used:RN2121A3',MSISDN:'Power Timer Test',SiteName:'KAG Power Timer Test',ReceiverID:'155.93.136.136',TokenLoaded:'2019/10/28 17:05',TokenGenerator:'Created by:796'},			
  {SiteID :'NA0001 - KAG New App Test',AccessPoint :'Acc	Power Timer Test - RN211673',DateTimeCreated:'2019/10/28 17:06',TokenAction:'Token used:RN2121A3',MSISDN:'Power Timer Test',SiteName:'KAG Power Timer Test',ReceiverID:'155.93.136.136',TokenLoaded:'2019/10/28 17:06',TokenGenerator:'Created by:719'},			
  {SiteID :'NA0001 - KAG New App Test',AccessPoint :'Acc	Power Timer Test - RN211673',DateTimeCreated:'2019/10/28 17:07',TokenAction:'Token used:RN2121A3',MSISDN:'Power Timer Test',SiteName:'KAG Power Timer Test',ReceiverID:'155.93.136.136',TokenLoaded:'2019/10/28 17:07',TokenGenerator:'Created by:719'},			
  {SiteID :'NA0001 - KAG New App Test',AccessPoint :'Acc	Power Timer Test - RN211673',DateTimeCreated:'2019/10/28 17:16',TokenAction:'Token used:RN2121A3',MSISDN:'Power Timer Test',SiteName:'KAG Power Timer Test',ReceiverID:'155.93.136.136',TokenLoaded:'2019/10/28 17:16',TokenGenerator:'Created by:719'},			
  {SiteID :'NA0001 - KAG New App Test',AccessPoint :'Acc	Power Timer Test - RN211673',DateTimeCreated:'2019/10/28 17:19',TokenAction:'Token used:RN2121A3',MSISDN:'Power Timer Test',SiteName:'KAG Power Timer Test',ReceiverID:'155.93.136.136',TokenLoaded:'2019/10/28 17:19',TokenGenerator:'Created by:556'},			
  {SiteID :'NA0001 - KAG New App Test',AccessPoint :'Acc	Power Timer Test - RN211673',DateTimeCreated:'2019/10/28 17:19',TokenAction:'Token used:RN2121A3',MSISDN:'Power Timer Test',SiteName:'KAG Power Timer Test',ReceiverID:'155.93.136.136',TokenLoaded:'2019/10/28 17:19',TokenGenerator:'Created by:756'},			
  {SiteID :'NA0001 - KAG New App Test',AccessPoint :'Acc	Power Timer Test - RN211673',DateTimeCreated:'2019/10/28 17:20',TokenAction:'Token used:RN2121A3',MSISDN:'Power Timer Test',SiteName:'KAG Power Timer Test',ReceiverID:'155.93.136.136',TokenLoaded:'2019/10/28 17:20',TokenGenerator:'Created by:756'},			
  {SiteID :'NA0001 - KAG New App Test',AccessPoint :'Acc	Power Timer Test - RN211673',DateTimeCreated:'2019/10/28 17:21',TokenAction:'Token used:RN2121A3',MSISDN:'Power Timer Test',SiteName:'KAG Power Timer Test',ReceiverID:'155.93.136.136',TokenLoaded:'2019/10/28 17:21',TokenGenerator:'Created by:756'},			
  {SiteID :'NA0001 - KAG New App Test',AccessPoint :'Acc	Power Timer Test - RN211673',DateTimeCreated:'2019/10/28 17:22',TokenAction:'Token used:RN2121A3',MSISDN:'Power Timer Test',SiteName:'KAG Power Timer Test',ReceiverID:'155.93.136.136',TokenLoaded:'2019/10/28 17:22',TokenGenerator:'Created by:716'},			
  {SiteID :'NA0001 - KAG New App Test',AccessPoint :'Acc	Power Timer Test - RN211673',DateTimeCreated:'2019/10/28 17:28',TokenAction:'Token used:RN2121A3',MSISDN:'Power Timer Test',SiteName:'KAG Power Timer Test',ReceiverID:'155.93.136.136',TokenLoaded:'2019/10/28 17:28',TokenGenerator:'Created by:716'},			
  {SiteID :'NA0001 - KAG New App Test',AccessPoint :'Acc	Power Timer Test - RN211673',DateTimeCreated:'2019/10/28 17:36',TokenAction:'Token used:RN2121A3',MSISDN:'Power Timer Test',SiteName:'KAG Power Timer Test',ReceiverID:'155.93.136.136',TokenLoaded:'2019/10/28 17:36',TokenGenerator:'Created by:716'},			
  {SiteID :'NA0001 - KAG New App Test',AccessPoint :'Acc	Power Timer Test - RN211673',DateTimeCreated:'2019/10/28 17:36',TokenAction:'Token used:RN2121A3',MSISDN:'Power Timer Test',SiteName:'KAG Power Timer Test',ReceiverID:'155.93.136.136',TokenLoaded:'2019/10/28 17:36',TokenGenerator:'Created by:716'},			
  {SiteID :'NA0001 - KAG New App Test',AccessPoint :'Acc	Power Timer Test - RN211673',DateTimeCreated:'2019/10/28 17:37',TokenAction:'Token used:RN2121A3',MSISDN:'Power Timer Test',SiteName:'KAG Power Timer Test',ReceiverID:'155.93.136.136',TokenLoaded:'2019/10/28 17:37',TokenGenerator:'Created by:716'},			
  {SiteID :'NA0001 - KAG New App Test',AccessPoint :'Acc	Power Timer Test - RN211673',DateTimeCreated:'2019/10/28 17:38',TokenAction:'Token used:RN2121A3',MSISDN:'Power Timer Test',SiteName:'KAG Power Timer Test',ReceiverID:'155.93.136.136',TokenLoaded:'2019/10/28 17:38',TokenGenerator:'Created by:716'}			
  
];


  ngOnInit() {
    this.frameworkComponents = { filterToolPanelComponent: FilterToolPanelComponent };
  }


  getSelectedRows() {
    //const selectedNodes = this.agGrid.api.getSelectedNodes();
    //const selectedData = selectedNodes.map( node => node.data );
   // const selectedDataStringPresentation = selectedData.map( node => node.SiteID + ' ' + node.SiteName).join(', ');
   // alert(`Selected nodes: ${selectedDataStringPresentation}`);
}

sideBar = {
  toolPanels: [{
    id: "filters",
    labelDefault: "Filters",
    labelKey: "filters",
    iconKey: "filter",
    toolPanel: "filterToolPanelComponent"
  }]
}
}
