import { TeamStandingDTO } from './team-standing-dto';
import { Week } from './week';
import { TeamRefDTO } from './team-ref-dto';
import { ChampionPickRate } from './champ-pick-rate';

export interface SeasonOverview {
  standings: TeamStandingDTO[];
  schedule: Week[];
  season: number,
  winner?: TeamRefDTO,
  banner: string,
  top_picks: ChampionPickRate[]
}
