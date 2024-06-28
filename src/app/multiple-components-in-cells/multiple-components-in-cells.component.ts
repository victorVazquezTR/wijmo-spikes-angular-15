import { OnInit, AfterViewInit, Component, Renderer2, ViewChild, ElementRef } from '@angular/core';
import * as wjcCore from '@grapecity/wijmo';
import * as wjcGrid from '@grapecity/wijmo.grid';
import { Selector } from '@grapecity/wijmo.grid.selector';
import { CellMaker } from '@grapecity/wijmo.grid.cellmaker';
import { CollectionView } from '@grapecity/wijmo';

import { DataService } from './data.service';
import { SafStatusInstance } from '@saffron/core-components';

const { FlexGrid, HeadersVisibility } = wjcGrid;

// This is a build time key. No concerns having it here
wjcCore.setLicenseKey(
  'Thomson Reuters*,169966291453339#B07eYICRiwiI34zZ784MadjVZVlbzcHM8ZTYV96ZZR5ZuFXN5ZFdC56RzEmRwR7VldnaXdmS84UM6h5YM5GSwRzaYljTjdXe4QHULh4U42idrNTT4QzbQNmWJNXRix4USNGWx2CbYpVb8InU4cUWnlDcHxkYDNleJB7RQ9UWxNENSdWcKF6YZlzKrJWVPRjW7NlMZBVRalVcJNlR5wkd0V6UrJFead4V5gVSwNEUxg4NDlFcNtyczwEc8pmZVVlYnVUVtZDZoJWM4V4R0RlVSpnNORXd8FHRvUVNKF7b8N4TnhjdrUjMGJHdFlGcIRTa7NjdyZ6TthGRGx4NntGWkNkarclUul6U7x6bhJHNTt6doZ5ZMV7Y6cnZ4V4QyZ4QYV7cEJVS7RUZyRnZGx6YF3kTO34UGRGMSVla8U5SzhWW9gmbo3iT9MEVLlWbjp6Z9JEUIpnMZN5b7V4cupUczpmI0IyUiwiI7IUQGVDRBdjI0ICSiwyM5gTNzUjN9gTM0IicfJye#4Xfd5nIJBjMSJiOiMkIsIibvl6cuVGd8VEIgQXZlh6U8VGbGBybtpWaXJiOi8kI1xSfiUTSOFlI0IyQiwiIu3Waz9WZ4hXRgAicldXZpZFdy3GclJFIv5mapdlI0IiTisHL3JyS7gDSiojIDJCLi86bpNnblRHeFBCI73mUpRHb55EIv5mapdlI0IiTisHL3JCNGZDRiojIDJCLi86bpNnblRHeFBCIQFETPBCIv5mapdlI0IiTisHL3JyMDBjQiojIDJCLiUmcvNEIv5mapdlI0IiTisHL3JSV8cTQiojIDJCLi86bpNnblRHeFBCI4JXYoNEbhl6YuFmbpZEIv5mapdlI0IiTis7W0ICZyBlIsIyM5EzM8ADIyAjMxIjMwIjI0ICdyNkIsIiKzJXZ4VXZSBibvNXbvhGViojIh94QiwiI9MzMzUDNxkjM6YTO9YTMiojIklkIs4XXbpjInxmZiwiIyYnMyAjMiojIyVmdiwSZzxWYmpjIyNHZisnOiwbbMJ'
);

@Component({
  selector: 'app-multiple-components-in-cells',
  templateUrl: './multiple-components-in-cells.component.html',
  styleUrls: ['./multiple-components-in-cells.component.scss'],
})
export class MultipleComponentsInCellsComponent implements OnInit, AfterViewInit {
  title = 'add-checkbox-first-column-flexgrid';
  view: any;
  items: any = [];
  data: any = [];
  selector: any;
  headers = true;
  templateSimpleLink: any;
  actions: any = [];
  colors: any = [];
  @ViewChild('myRef') myRef: ElementRef<SafStatusInstance> | undefined;

  constructor(private renderer: Renderer2, private dataService: DataService) {
    this.items = [
      {
        consentId: '33e0378',
        provider: 'Client Keys',
        authorizationStatus: 'Received',
        iconStatus: 'check-circle',
        iconColor: 'green',
        validUntil: 'Actions',
      },
      {
        consentId: '58ba9efz',
        provider: 'Bank Simple',
        authorizationStatus: 'Soon to expire',
        iconColor: 'orange',
        iconStatus: 'exclamation-triangle',
        validUntil: 'Actions',
      },
      {
        consentId: '6f437da9',
        provider: 'Client Keys',
        authorizationStatus: 'Expired',
        iconStatus: 'exclamation-circle',
        iconColor: 'red',
        validUntil: 'Actions',
      },
      {
        consentId: '9fu02m7',
        provider: 'Client Bank',
        authorizationStatus: 'Transaction Error',
        iconStatus: 'ban',
        iconColor: 'red',
        validUntil: 'Actions',
      },
    ];

    this.actions = ['Edit', 'Delete', 'Request new consent'];
  }

  private _getData() {
    /**
     * Create some random data
     */
    this.data = new CollectionView(this.items);
    // this.data.pageSize = this.itemsPerPage;

    return this.data;
  }

  ngOnInit() {
    // this.initGrid(this.items);
    console.log(this.items);
    // this.view = new CollectionView(this.data);
    this.items = this._getData();

    this.colors = this.dataService.getColors();
    console.log('colors', this.colors);

    this.templateSimpleLink = CellMaker.makeLink({
      click: (e, ctx) => alert('Clicked Link ** ' + ctx.item.country + ' **'),
    });

    
  }

  ngAfterViewInit(){
    // this.colors = this.getColors();
    // console.log('colors', this.colors);
  }

  initGrid(grid: wjcGrid.FlexGrid) {
    // this.selector = new Selector(grid, {
    //   column: 0
    // });

    this.selector = new Selector(grid, {
      itemChecked: () => {
        this.items = grid.rows.filter((r) => r.isSelected);
      },
    });

    this.view = this.data;
  }

  setHeaders(headersOn: boolean) {
    let theGrid = this.selector.column.grid;
    theGrid.headersVisibility = headersOn
      ? HeadersVisibility.All
      : HeadersVisibility.Column;
    this.selector.column = headersOn
      ? theGrid.rowHeaders.columns[0]
      : theGrid.columns[0];
    this.headers = headersOn;
  }

  getColors() {
    return 'Red,Green,Blue,White,Black,Yellow,Orange'.split(',');
  }
}
