import express from 'express'
const router = express.Router()
import TournamentController from './controllers/TournamentController'
import SeasonsController from './controllers/SeasonsController'
import MatchesController from './controllers/MatchesController'

router.get('/tournaments', TournamentController.ListTournaments)

router.get('/seasons/:id', SeasonsController.ListSeasons)

router.get('/matches/:seasonId', MatchesController.index)

router.get('/get-tournament-loaded/:id', (req, res) => {
  res.send('return data from the tournament with id = ' + req.params.id)
})

export default router
