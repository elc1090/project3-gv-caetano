import { Request, Response } from 'express';
import SportsRadar from '../services/SportsRadar';
import { DateTime } from 'luxon'
import { PrismaClient } from 'prisma/prisma-client'
const prisma = new PrismaClient()
class MatchesController {
  public async index(req: Request, res: Response) {

    const today = DateTime.now().startOf('day')
    const last10Days = DateTime.now().startOf('day').plus({ days: -10})

    const matches = await SportsRadar.seasonSchedule(101053)
    const lastMatches = matches.filter((match: any) => {
      const date = DateTime.fromISO(match.sport_event.start_time)
      return date < today && date >= last10Days
    })
    for (const match of lastMatches) {
      const home_team = (match.sport_event.competitors.find((c: any) => c.qualifier === 'home')).abbreviation as string
      const away_team = (match.sport_event.competitors.find((c: any) => c.qualifier === 'away')).abbreviation as string
      const date = DateTime.fromISO(match.sport_event.start_time).toJSDate()
      const idString = match.sport_event.id
      
      const id = parseInt(match.sport_event.id.split(':')[2])
      await prisma.match.create({
        data: {
          id,
          home_team,
          away_team,
          date,
        }
      })
    }
    return res.json(lastMatches)
  }
}

export default new MatchesController()