import axios from 'axios';
import Member from '../Member';
import Season from '../Season';

export const LOAD_SEASONS = 'LOAD_SEASONS';

export const loadSeasons = () => async (dispatch) => {
  let seasons = [];
  let seasonNumber = 53;
  let seasonExists = true;

  while (seasonExists) {
    try{
      const url = `https://sheets.googleapis.com/v4/spreadsheets/1tRrRg8OiC7layrlhrXEK-_i8LZpbFVl01JObQitdnK8/values/${seasonNumber}!A:E?key=AIzaSyBL7zf92RTZK_3vAKlUxqwO1kOiL6zDaSw`;
      const response = await axios.get(url);
      const members = response.data.values.slice(1).map(it => new Member({
        rank: it[0],
        id: it[1],
        name: it[2],
        trophies: it[3],
        clan: it[4],
      }));
      seasons = [...seasons, new Season({seasonNumber, members})];
      seasonNumber++;
    } catch (err) {
      seasonExists = false;
    }
  }

  dispatch({
    type: LOAD_SEASONS,
    payload: seasons,
  });
}
