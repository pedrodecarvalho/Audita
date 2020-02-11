import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { EventEmitter } from 'events';
import { GridApi, ColumnApi } from "ag-grid-community";
import { promise } from 'protractor';

@Injectable({
  providedIn: 'root'
})

// Grid Data 1 instance of this class per Grid ID that is in use
class GridData {
  GridID: string;
  gridSettings: any;
  rowData: any;
  colDefs: any;
  filters: any;
  gridInstance: GridApi;
  gridColAPI: ColumnApi;
  summaryRowData: any;
  layouts: any;

  // Grid Emitters communication and events across components in the Grid View Environment
  ColDefsChange: EventEmitter = new EventEmitter();
  public setColsDefs(acolDefs: any) {
    this.colDefs = acolDefs;
    this.ColDefsChange.emit("ColsDefsChange");
  }

  DataChange: EventEmitter = new EventEmitter();
  public TriggerRefresh() {
    this.DataChange.emit("DataChange");
  }

  // Filter Events
  FilterChange: EventEmitter = new EventEmitter();

  public setFilters(afilters: any) {
    this.filters = afilters;
    this.FilterChange.emit("FilterChange");
  }

  FilterApply: EventEmitter = new EventEmitter();

  public ApplyFilters(afilters: any) {
    this.FilterApply.emit("FilterApply");
  }

  FilterReset: EventEmitter = new EventEmitter();

  public ResetFilters() {
    this.FilterReset.emit("FilterReset");
  }

  GridAPIChange: EventEmitter = new EventEmitter();
  public setGridAPI(Grid: GridApi) {
    this.gridInstance = Grid;
    this.GridAPIChange.emit("GridAPI")
  }


  GridColAPIChange: EventEmitter = new EventEmitter();
  public setGridColAPI(ColAPI: ColumnApi) {
    this.gridColAPI = ColAPI;
    this.GridColAPIChange.emit("ColAPI")
  }

  GridDblClickEvent: EventEmitter = new EventEmitter();
  public OnGridDblClick($event) {
    this.GridDblClickEvent.emit("GridEvent", $event);
  }

}

export class ViewImpFilesService {

  // Currently creating Grid
  public CreatingGridID: string;

  // Dictionary of GridData 
  public GridCollection: Map<string, GridData> = new Map<string, GridData>();

  // Getters for various GridData fields by GridID
  public SetGridInstance(GridID: string, Grid: GridApi) {
    this.GetGridData(GridID).setGridAPI(Grid);
  }

  public GetGridInstance(GridID: string): GridApi {
    return this.GetGridData(GridID).gridInstance;
  }

  public SetGridColAPI(GridID: string, ColAPI: ColumnApi) {
    this.GetGridData(GridID).setGridColAPI(ColAPI);
  }

  public GetGridColAPI(GridID: string): ColumnApi {
    return this.GetGridData(GridID).gridColAPI;
  }

  // Get or create GridData by ID
  public GetGridData(GridID: string): GridData {
    if (this.GridCollection.has(GridID)) {
      return this.GridCollection.get(GridID);
    }
    else {
      var data = new GridData();
      data.GridID = GridID;
      this.GridCollection.set(GridID, data);
      return data;
    }
  }

  public RemoveGridData(GridID: string) {
    if (this.GridCollection.has(GridID)) {
      this.GridCollection.delete(GridID);
    }
  }

  public OnGridDblClick(GridID: string, $event) {
    this.GetGridData(GridID).OnGridDblClick($event);
  }

  public GridDblClickEvent(GridID: string): EventEmitter {
    if (this.GetGridData(GridID))
      return this.GetGridData(GridID).GridDblClickEvent;
    else
      return null;
  }

  public GridColdDefsChange(GridID: string): EventEmitter {
    if (this.GetGridData(GridID))
      return this.GetGridData(GridID).ColDefsChange;
    else
      return null;
  }

  public GridAPIChange(GridID: string): EventEmitter {
    if (this.GetGridData(GridID))
      return this.GetGridData(GridID).GridAPIChange;
    else
      return null;
  }

  public GridColAPIChange(GridID: string): EventEmitter {
    if (this.GetGridData(GridID))
      return this.GetGridData(GridID).GridColAPIChange;
    else
      return null;
  }

  public FilterChange(GridID: string): EventEmitter {
    if (this.GetGridData(GridID))
      return this.GetGridData(GridID).FilterChange;
    else
      return null;
  }

  public FilterApply(GridID: string): EventEmitter {
    if (this.GetGridData(GridID))
      return this.GetGridData(GridID).FilterApply;
    else
      return null;
  }

  public Refresh(GridID: string): EventEmitter {
    if (this.GetGridData(GridID))
      return this.GetGridData(GridID).DataChange;
    else
      return null;
  }

  public TriggerRefresh(GridID: string) {
    if (this.GetGridData(GridID))
      this.GetGridData(GridID).TriggerRefresh();
  }

  public FilterReset(GridID: string): EventEmitter {
    if (this.GetGridData(GridID))
      return this.GetGridData(GridID).FilterReset;
    else
      return null;
  }

  public summaryRowData(GridID: string): any {
    if (this.GetGridData(GridID))
      return this.GetGridData(GridID).summaryRowData;
    else
      return null;
  }

  // Get Properties by ID
  public layouts(GridID: string): any {
    if (this.GetGridData(GridID))
      return this.GetGridData(GridID).layouts;
    else
      return null;
  }

  public rowData(GridID: string): any {
    if (this.GetGridData(GridID))
      return this.GetGridData(GridID).rowData;
    else
      return null;
  }

  public colDefs(GridID: string): any {
    if (this.GetGridData(GridID))
      return this.GetGridData(GridID).colDefs;
    else
      return null;
  }

  public filters(GridID: string): any {
    if (this.GetGridData(GridID))
      return this.GetGridData(GridID).filters;
    else
      return null;
  }

  public settings(GridID: string): any {
    if (this.GetGridData(GridID))
      return this.GetGridData(GridID).gridSettings;
    else
      return null;
  }


  constructor(private http: HttpClient) {

  }

  async getLookupDisplayValue(lookupField: string, DisplayField: string, lookupGrid: string, LookupCode: string): Promise<any> {
    try {
      let result = await this.http.get('/GetData/GetLookupDisplayValue/?lookupField=' + lookupField + '&DisplayField=' + DisplayField + '&lookupGrid=' +
        lookupGrid + '&LookupCode=' + LookupCode).toPromise();
      if (result) {
        return result[0];
      }
    }
    catch (e) {
      console.log('Caught Error in getLookupDisplayValue', e)
    }
  }


  async getLookupData(LookupID: string, LookupValue: string): Promise<any> {
    try {
      let result = await this.http.get('/GetData/GetLookupData/?LookupID=' + LookupID + '&LookupValue=' + LookupValue).toPromise();
      return result[0];
    }
    catch (e) {
      console.log('Caught Error in getLookupData', e)
    }
  }

  async getDefs(GridID: string) {
    var data: GridData;
    data = this.GetGridData(GridID);
    let res = await this.http.get('/GetData/GetCols/?GridID=' + GridID).toPromise();
    data.setColsDefs(res);
  }


  async getRowData(data: GridData) {
    if (data.filters) {
      let res1 = await this.http.get('/GetData/GetRows/?GridID=' + data.GridID + '&filter=' + JSON.stringify(data.filters)).toPromise();
      data.rowData = res1;

      if (data.rowData) {
        for (let row: number = 0; row < data.rowData.length; row++) {

          for (var prop in data.rowData[row]) {
            data.rowData[row][prop] = this.reviver(data.rowData[row][prop]);
          }
        }
      }

      let res2 = await this.http.get('/GetData/GetSummaryRow/?GridID=' + data.GridID + '&filter=' + JSON.stringify(data.filters)).toPromise();
      data.summaryRowData = res2;

    }
    else {
      let res1 = await this.http.get('/GetData/GetRows/?GridID=' + data.GridID).toPromise();
      data.rowData = res1;

      if (data.rowData) {
        for (let row: number = 0; row < data.rowData.length; row++) {

          for (var prop in data.rowData[row]) {
            data.rowData[row][prop] = this.reviver(data.rowData[row][prop]);
          }
        }
      }

      let res2 = await this.http.get('/GetData/GetSummaryRow/?GridID=' + data.GridID).toPromise();
      data.summaryRowData = res2;

    }
  }

  // Populate GridData instance for the GridID
  async getData(GridID: string, Update: boolean) {

    var data: GridData;
    data = this.GetGridData(GridID);

    if (!Update) {
      let res = await this.http.get('/GetData/GetCols/?GridID=' + GridID).toPromise();
      data.setColsDefs(res);

      await this.getRowData(data);

      let res2 = await this.http.get('/GetData/GetFilters/?GridID=' + GridID).toPromise();
      if (res2)
        data.setFilters(res2[0]);

      let res3 = await this.http.get('/GetData/GetSettings/?GridID=' + GridID).toPromise();
      if (res3)
        data.gridSettings = res3[0];

      let res4 = await this.http.get('/GetData/GetLayouts/?GridID=' + GridID).toPromise();

      if (res4)
        data.layouts = res4;
    }
    else {
      await this.getRowData(data);
    }
    return true;
  }

  async saveGridLayout(GridID: string, layoutName: string, layout: string): Promise<number> {
    let res = await this.http.get<number>('/GetData/SaveGridLayout/?GridID=' + GridID + '&layoutName=' + layoutName + '&layout=' + layout).toPromise<number>();
    return res;
  }

  async getGridLayout(GridID: string, SourceID: number) {
    let res = await this.http.get('/GetData/GetGridLayout/?SourceID=' + SourceID.toString()).toPromise();
    return res;
  }

  reviver(value) {
    const dateFormat = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}/;

    if (typeof value === "string" && dateFormat.test(value)) {
      return new Date(value);
    }

    return value;
  }


  async getEditorSettings(EditorID: number): Promise<any> {
    let res = await this.http.get('/GetData/GetEditorSettings/?EditorID=' + EditorID.toString()).toPromise();
    return res;
  }

  async getEditorDefinitions(EditorID: number): Promise<any> {
    let res = await this.http.get('/GetData/GetEditorDefinitions/?EditorID=' + EditorID.toString()).toPromise();
    return res;
  }

  async getEditorData(EditorID: number, keyValue: string): Promise<any> {
    let res = await this.http.get('/GetData/GetEditorData/?EditorID=' + EditorID.toString() + '&keyValue=' + keyValue).toPromise();


    if (res) {
      for (var prop in res[0]) {
        res[0][prop] = this.reviver(res[0][prop]);
      }
    }

    return res;
  }


}

