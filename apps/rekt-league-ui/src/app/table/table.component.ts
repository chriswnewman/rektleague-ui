import {
  AfterViewInit,
  Component,
  OnInit,
  ViewChild,
  Input,
  OnChanges
} from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { TableColumnConfig } from './table-column-config';

@Component({
  selector: 'rekt-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements AfterViewInit, OnInit, OnChanges {
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

  ngOnChanges(changes: import('@angular/core').SimpleChanges): void {
    console.log(changes);
    if (changes.data && !changes.data.firstChange) {
      this.dataSource.data = changes.data.currentValue;
    }
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    if (this.paginate) {
      this.dataSource.paginator = this.paginator;
    }
  }
}
