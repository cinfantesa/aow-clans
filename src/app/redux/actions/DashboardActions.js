import axios from 'axios';
import Member from '../Member';

export const LOAD_MEMBERS = 'LOAD_MEMBERS';

export const loadMembers = () => async (dispatch) => {
  const url = 'https://sheets.googleapis.com/v4/spreadsheets/1tRrRg8OiC7layrlhrXEK-_i8LZpbFVl01JObQitdnK8/values/53!A:E?key=AIzaSyBL7zf92RTZK_3vAKlUxqwO1kOiL6zDaSw';
  const response = await axios.get(url);
  const members = response.data.values.slice(1).map(it => new Member({
    rank: it[0],
    id: it[1],
    name: it[2],
    trophies: it[3],
    clan: it[4],
  }));

  dispatch({
    type: LOAD_MEMBERS,
    payload: members,
  });
}
