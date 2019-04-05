import trae from 'trae';
import configService from './config';

const vueMusiqueService = trae.create({
  baseUrl: configService.apiUrl,
});

export default vueMusiqueService;
