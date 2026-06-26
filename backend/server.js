const express = require('express');
const mongoose = require('mongoose');
const dns = require('dns');
const cors = require('cors');

dns.setServers(['8.8.8.8', '8.8.4.4']);

const app = express();
const PORT = process.env.PORT || 8000;
const MONGO_URI = process.env.MONGO_URI || 'mongodb+srv://niharikaneelu15_db_user:y63jOZ9IuEuNwnfa@cluster0.m8fsau9.mongodb.net/';

app.use(cors());
app.use(express.json());


app.get('/health', (_req, res) => {
  res.json({ ok: true, service: 'campus_cupid-api' });
});

app.get('/auth/me', (_req, res) => {
  res.json({ message: 'Add JWT auth middleware here.' });
});

app.post('/auth/register', (_req, res) => {
  res.status(201).json({ message: 'Register endpoint placeholder.' });
});

app.post('/auth/login', (_req, res) => {
  res.json({ message: 'Login endpoint placeholder.' });
});

app.post('/auth/logout', (_req, res) => {
  res.json({ message: 'Logged out successfully.' });
});

app.get('/profile', (_req, res) => {
  res.json({ message: 'Profile endpoint placeholder.' });
});

app.put('/profile', (_req, res) => {
  res.json({ message: 'Profile update endpoint placeholder.' });
});

app.get('/profiles/discover', (_req, res) => {
  res.json({ profiles: [] });
});

app.post('/swipes', (_req, res) => {
  res.json({ message: 'Swipe recorded.' });
});

app.get('/matches', (_req, res) => {
  res.json({ matches: [] });
});

app.get('/chats', (_req, res) => {
  res.json({ threads: [] });
});

app.get('/chats/:matchId/messages', (_req, res) => {
  res.json({ messages: [] });
});

app.post('/chats/:matchId/messages', (_req, res) => {
  res.json({ message: 'Message sent.' });
});

app.use((_req, res) => {
  res.status(404).json({ message: 'Route not found.' });
});

mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log('MongoDB connected');
    app.listen(PORT, () => {
      console.log(`Server Listening in PORT : ${PORT}`);
    });
  })
  .catch((error) => {
    console.log('MongoDB connection error', error);
    app.listen(PORT, () => {
      console.log(`Server Listening in PORT : ${PORT}`);
    });
  });
