import axios from 'axios';

const API_URL = 'http://10.0.2.2:3001/api/todos'; // ganti sesuai kebutuhan

export const fetchTodos = async () => {
  const res = await axios.get(`${API_URL}/user`);
  return res.data;
};

export const createTodo = async (todo: string) => {
  const res = await axios.post(API_URL, { todo });
  return res.data;
};

export const updateTodo = async (id: string, todo: string) => {
  const res = await axios.put(`${API_URL}/${id}`, { todo });
  return res.data;
};

export const deleteTodo = async (id: string) => {
  const res = await axios.delete(`${API_URL}/${id}`);
  return res.data;
};
