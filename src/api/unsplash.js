import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID bead85423c67fe55eb831a9e626888f756e003087348b5c933d46319f14f51c8'
  }
});
