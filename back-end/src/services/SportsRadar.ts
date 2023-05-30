import axios from 'axios'

/**
 * Service to connect with football data source
 * Documentation for the api used?
 * https://www.api-football.com/documentation-v3
 * To have access to the needed keys contact the admin
 */

class SportsRadar {
  private languageCode = 'en'
  private dataFormat = 'json'

  private async get(subUrl: string) {
    const apiKey = `?api_key=${process.env.SPORTSRADAR_SOCCER_KEY}`
    const url = process.env.SPORTSRADAR_HOST + subUrl + apiKey
    const {data} = await axios.get(url)    
    return data
  }

  public async seasonsByCompetition(competitionId: number) {
    const subUrl = `/${this.languageCode}/competitions/sr:competition:${competitionId}/seasons.${this.dataFormat}`
    const data = await this.get(subUrl)
    return data.seasons
  }

  public async seasonSchedule(seasonId: number) {
    const subUrl = `/${this.languageCode}/seasons/sr:season:${seasonId}/schedules.${this.dataFormat}`
    const data = await this.get(subUrl)
    
    return data.schedules
  }
}
export default new SportsRadar()
