import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://precily-backend-app.herokuapp.com/api',
  headers: { 'Content-Type': 'application/json' },
});

export const addImage = (containerId, imageUrl) =>
  instance.post('/v1/addImage', { containerId, imageUrl });

export const updateImage = (containerId, imageUrl) =>
  instance.put('/v1/updateImage', { containerId, imageUrl });

export const getTotalCount = () => instance.get('/v1/getTotalCount');
