export interface TableColumnConfig {
  displayName: string;
  key: string;
  flexBasis?: string;
  filterable?:boolean;
  sortable?: boolean;
  useDisplayNameAsPlaceholder?: boolean;
  filterPlaceholder?: string;
}
