import { TemplateRef } from '@angular/core';

export interface TableColumnConfig {
  displayName: string;
  key: string;
  customCellTemplate?: TemplateRef<any>;
  cellClassName?: string;
  flexBasis?: string;
  filterable?: boolean;
  sortable?: boolean;
  useDisplayNameAsPlaceholder?: boolean;
  filterPlaceholder?: string;
}
