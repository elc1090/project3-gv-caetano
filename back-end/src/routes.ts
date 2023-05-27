import express from 'express'
const router = express.Router()
import TournamentController from './controllers/TournamentController'

router.get('/tournaments', TournamentController.ListTournaments)

router.get('/load-tournament-data/:id', (req, res) => {
  req.params.id
  res.send('load data from the tournament with id = ' + req.params.id)
})

router.get('/get-tournament-loaded/:id', (req, res) => {
  res.send('return data from the tournament with id = ' + req.params.id)
})

export default router
