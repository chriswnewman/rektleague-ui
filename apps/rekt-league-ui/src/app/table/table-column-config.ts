import { ElementRef } from '@angular/core';

export interface TableColumnConfig {
  displayName: string;
  key: string;
  customCellTemplate?: ElementRef;
  flexBasis?: string;
  filterable?: boolean;
  sortable?: boolean;
  useDisplayNameAsPlaceholder?: boolean;
  filterPlaceholder?: string;
}
