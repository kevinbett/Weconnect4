import axios from 'axios';


export const instance = axios.create({
  baseURL: 'https://weconnect4-heroku.herokuapp.com//api/v1',
  timeout: 20000,
  headers: {
    "Accept": 'application/json',
    "ContentType": 'application/json',
    "Authorization": `Bearer ${localStorage.getItem('authToken')}`,


  }
});

const api = {
    business : {
        delete : (id) => instance.delete(`businesses/${id}`),
        // .then(window.location.replace('/viewbusiness')),

        edit : (id, item) => instance.put(`businesses/${id}`, item)
        .then(res => res.data),
        review : (id, review) => instance.post(`businesses/${id}/reviews`, review)
        .then(res => res.data)
        
    },
    logged_in : logged_in()
    
}

function logged_in() {
  if (localStorage.getItem('authToken')) {
    return true
  } else {
    return false
  }
}

export default api;