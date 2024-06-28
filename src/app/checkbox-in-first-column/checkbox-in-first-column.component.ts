import { Component, ViewChild, OnInit, Renderer2 } from '@angular/core';
import * as wjcCore from '@grapecity/wijmo';
import * as wjcGrid from '@grapecity/wijmo.grid';
import { Selector } from '@grapecity/wijmo.grid.selector';
import { CollectionView } from '@grapecity/wijmo';

const { FlexGrid, HeadersVisibility } = wjcGrid;

// This is a build time key. No concerns having it here
wjcCore.setLicenseKey(
  'Thomson Reuters*,169966291453339#B07eYICRiwiI34zZ784MadjVZVlbzcHM8ZTYV96ZZR5ZuFXN5ZFdC56RzEmRwR7VldnaXdmS84UM6h5YM5GSwRzaYljTjdXe4QHULh4U42idrNTT4QzbQNmWJNXRix4USNGWx2CbYpVb8InU4cUWnlDcHxkYDNleJB7RQ9UWxNENSdWcKF6YZlzKrJWVPRjW7NlMZBVRalVcJNlR5wkd0V6UrJFead4V5gVSwNEUxg4NDlFcNtyczwEc8pmZVVlYnVUVtZDZoJWM4V4R0RlVSpnNORXd8FHRvUVNKF7b8N4TnhjdrUjMGJHdFlGcIRTa7NjdyZ6TthGRGx4NntGWkNkarclUul6U7x6bhJHNTt6doZ5ZMV7Y6cnZ4V4QyZ4QYV7cEJVS7RUZyRnZGx6YF3kTO34UGRGMSVla8U5SzhWW9gmbo3iT9MEVLlWbjp6Z9JEUIpnMZN5b7V4cupUczpmI0IyUiwiI7IUQGVDRBdjI0ICSiwyM5gTNzUjN9gTM0IicfJye#4Xfd5nIJBjMSJiOiMkIsIibvl6cuVGd8VEIgQXZlh6U8VGbGBybtpWaXJiOi8kI1xSfiUTSOFlI0IyQiwiIu3Waz9WZ4hXRgAicldXZpZFdy3GclJFIv5mapdlI0IiTisHL3JyS7gDSiojIDJCLi86bpNnblRHeFBCI73mUpRHb55EIv5mapdlI0IiTisHL3JCNGZDRiojIDJCLi86bpNnblRHeFBCIQFETPBCIv5mapdlI0IiTisHL3JyMDBjQiojIDJCLiUmcvNEIv5mapdlI0IiTisHL3JSV8cTQiojIDJCLi86bpNnblRHeFBCI4JXYoNEbhl6YuFmbpZEIv5mapdlI0IiTis7W0ICZyBlIsIyM5EzM8ADIyAjMxIjMwIjI0ICdyNkIsIiKzJXZ4VXZSBibvNXbvhGViojIh94QiwiI9MzMzUDNxkjM6YTO9YTMiojIklkIs4XXbpjInxmZiwiIyYnMyAjMiojIyVmdiwSZzxWYmpjIyNHZisnOiwbbMJ'
);

@Component({
  selector: 'app-checkbox-in-first-column',
  templateUrl: './checkbox-in-first-column.component.html',
  styleUrls: ['./checkbox-in-first-column.component.scss'],
})
export class CheckboxInFirstColumnComponent implements OnInit {
  title = 'add-checkbox-first-column-flexgrid';
  view: any;
  items: any = [];
  data: any = [];
  selector: any;
  headers = true;

  constructor(private renderer: Renderer2) {
    this.items = [
      {
        authorizer: 'Steven Singer',
        email: 'steven.singer@gmail.com',
        authorizationStatus: 'Authorized',
        validUntil: '04/21/2024',
      },
      {
        authorizer: 'Anna Southern',
        email: 'anna.southem@thomsonreuters.com',
        authorizationStatus: 'Pending - Undelivered',
        validUntil: '06/21/2024',
      },
      {
        authorizer: 'Lidiia Trotsiuk',
        email: 'lidiia.trotsiuk@thomsonreuters.com',
        authorizationStatus: 'Pending - Delivered',
        validUntil: '05/03/2024',
      },
      {
        authorizer: 'Andrea Frazier',
        email: 'andrea.frazier@thomsonreuters.com',
        authorizationStatus: 'Expired',
        validUntil: '04/14/2024',
      },
    ];
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
  }

  initGrid(grid: wjcGrid.FlexGrid) {
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
}
