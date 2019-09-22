import { TeamSeriesRefDTO } from './team-series-ref-dto';

export interface Series {
  id: number,
  team_1: TeamSeriesRefDTO,
  team_2: TeamSeriesRefDTO
}
