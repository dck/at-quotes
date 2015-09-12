import Finn from './lib/finn';
import Jake from './lib/jake';

const getRandomQoute = (arr) => {
  let randomSeason = arr[Math.floor(Math.random() * arr.length)];
  let randomQuote = randomSeason[Math.floor(Math.random() * randomSeason.length)];
  return randomQuote;
}

export default {
  getFinnQuote: () => getRandomQoute(Finn),
  getJakeQuote: () => getRandomQoute(Jake),
  getQuote: () => getRandomQoute([...Jake, ...Finn])
};