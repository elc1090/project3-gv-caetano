import { Request, Response } from 'express'
import SportsRadar from '../services/SportsRadar'

class SeasonsController {
  public async ListSeasons(req: Request, res: Response) {
    const competitionId = parseInt(req.params.id)
    const data = await SportsRadar.seasonsByCompetition(competitionId)
    res.json(data)
  } 
}

export default new SeasonsController()