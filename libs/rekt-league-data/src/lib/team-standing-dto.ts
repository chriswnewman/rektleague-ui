import { TeamRefDTO } from "./team-ref-dto";

export interface TeamStandingDTO {
  wins: number,
  losses: number,
  rank: number,
  team: TeamRefDTO
}
