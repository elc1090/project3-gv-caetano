import { Request, Response } from 'express'

class TournamentController {
  ListTournaments(res: Response) {
    const result  = {
      data: "data"
    }
    res.send(result)
  } 
}

export default new TournamentController()