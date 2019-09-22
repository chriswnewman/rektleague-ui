import { TeamRefDTO } from './team-ref-dto';

export interface TeamSeriesRefDTO extends TeamRefDTO {
  season_wins: number;
  wins: number;
  season_losses: number;
}
