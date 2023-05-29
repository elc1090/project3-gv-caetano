import { Request, Response } from 'express';
import SportsRadar from '../services/SportsRadar';
import { DateTime } from 'luxon'

class MatchesController {
  public async index(req: Request, res: Response) {
    const today = DateTime.now().startOf('day')
    const next10Days = DateTime.now().startOf('day').plus({ days: 10})

    const matches = await SportsRadar.seasonSchedule(101057)
    const nextMatches = matches.filter((match: any) => {
      const date = DateTime.fromISO(match.sport_event.start_time)
      return date >= today && date <= next10Days
    })
    return res.json(nextMatches)
  }
}

export default new MatchesController()