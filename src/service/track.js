import vueMusiqueService from './vue-musique'

const trackService = {}

trackService.search = (q) => {
  const type = 'track'
  return vueMusiqueService.get('/search', {
    params: { q, type }
  }).then( res => {
    return res.data;
  })
}

export default trackService;