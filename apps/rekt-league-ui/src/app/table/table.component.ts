import {
  AfterViewInit,
  Component,
  OnInit,
  ViewChild,
  Input
} from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { TableColumnConfig } from './table-column-config';

@Component({
  selector: 'rekt-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort: MatSort;
  // @ViewChild(MatTable, { static: false }) table: MatTable<TableItem>;

  @Input() data: any[];
  @Input() columnConfigs: TableColumnConfig[];
  @Input() paginate = false;
  dataSource: MatTableDataSource<any>;
  displayedColumns: string[];

  ngOnInit() {
    this.displayedColumns = this.columnConfigs.map(config => config.key);
    this.dataSource = new MatTableDataSource(this.data);
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    if (this.paginate) {
      this.dataSource.paginator = this.paginator;
    }
  }
}
