import { Request, Response } from 'express'

class TournamentController {
  ListTournaments(req: Request, res: Response) {
    const result  = {
      data: "data"
    }
    res.json(result)
  } 
}

export default new TournamentController()