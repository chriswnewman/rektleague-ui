import { Series } from './series';

export interface Week {
  date: string,
  id: number,
  name: string,
  series: Series[]
}
