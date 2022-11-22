import axios from 'axios';

const headers = {
    'content-type': 'application/json',
    Accept: 'application/json',
    mode: 'no-cors',
  };

export default function getUsersApi({ usersLength }) {
    return axios.get(`https://randomuser.me/api/?results=${usersLength}&format=json`, {
        headers
    })
}