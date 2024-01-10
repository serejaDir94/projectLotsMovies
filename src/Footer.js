import './Footer.css';
import React, { useState } from 'react';
import axios from 'axios';

function Footer() {

  const [name, setName] = useState('');
  const [nameMovie, setNamemovie] = useState('');
  const [yearMovie, setYearmovie] = useState('');
  const [comment, setComment] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post('https://api.telegram.org/bot6927199740:AAG9KVqWe3TA5nnZCAI4eOH59MGBr2ZeT7g/sendMessage', {
        chat_id: '-4008285961',
        text: `Name: ${name}\n\nnameMovie: ${nameMovie}\n\nyearMovie: ${yearMovie}\n\ncomment: ${comment}`,
      });

      // Очистить поля формы после отправки
      setName('');
      setNamemovie('');
      setYearmovie('');
      setComment('');
    } catch (error) {
      console.error(error);
    }
  };


  return (
    <footer>
      <div className='SomeText'><p>Все видео взяты из открытых источников. Если обнаружите материал, который нарушает авторское право - пишите на почту, сразу удалим!
        Контакты для жалоб: abuse@lotsmovies.lu</p></div>
      <div className='ForForm'>

        <form onSubmit={handleSubmit}>
        <fieldset><legend>Если не нашли фильм:</legend>
          <label>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Введите ваше имя"/>
          </label><br />
          <label>
            <input type="text" value={nameMovie} onChange={(e) => setNamemovie(e.target.value)} placeholder="Введите название фильма"/>
          </label><br />
          <label>
            <input type="text" value={yearMovie} onChange={(e) => setYearmovie(e.target.value)} placeholder="Введите год выхода"/>
          </label><br />
          <label>
            <input type="text" value={comment} onChange={(e) => setComment(e.target.value)} placeholder="Введите ваш комментарий"/>
          </label><br />          

          <button type="submit">Отправить</button>
        </fieldset>
        </form>

      </div>
      <div className='SocialNetwork'>
        <div className='SocialNetworkContainer'>
          <div className='IcoSocialNetwork Vk'></div>
        </div>
        <div className='SocialNetworkContainer'>
          <div className='IcoSocialNetwork YouTube'></div>
        </div>
        <div className='SocialNetworkContainer'>
          <div className='IcoSocialNetwork Telegram'></div>
        </div>
        <div className='SocialNetworkContainer'>
          <div className='IcoSocialNetwork Discord'></div>
        </div>
        <div className='SocialNetworkContainer'>
          <div className='IcoSocialNetwork Gmail'></div>
        </div>
      </div>
      <div className='ClearLine'></div>
      <div className='Rights'>© Оформление сайта. «LotsMovies», 2023</div>
    </footer>
  );
}

export default Footer;