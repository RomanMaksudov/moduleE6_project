// Импортируем библиотеки
import React, { useState, useEffect } from 'react';
import axios from 'axios';

// Определяем компонент
function App() {
  // Состояние
  const [messages, setMessages] = useState([]);
  const [chat, setChat] = useState('');
  const [otherUsers, setOtherUsers] = useState([]);

  useEffect(() => {
    // Получаем сообщения
    axios
      .get(`http://localhost:8000/api/v1/messages/`)
      .then((response) => {
        setMessages(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  // Обработка отправки сообщения
  const handleSendMessage = (event) => {
    event.preventDefault();
    const message = {
      text: chat,
      sender: 'Your Name',
      timestamp: new Date().toISOString(),
    };}

    axios.