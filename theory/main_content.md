---
layout: default
title: "Поняття комп'ютерної графіки. Класифікація графічних зображень"
description: "Основи комп'ютерної графіки, типи графічних зображень, класифікація растрової та векторної графіки"
---

<link rel="stylesheet" href="../styles/custom.css">

# Поняття комп'ютерної графіки. Класифікація графічних зображень

<div class="content-wrapper">
  <div class="card">
    <div class="card-header">
      <h2 class="card-title">🎯 Мета розділу</h2>
    </div>
    <p>Сформувати базове розуміння поняття комп'ютерної графіки, вивчити основні типи графічних зображень та навчитися розрізняти растрову та векторну графіку за характерними ознаками.</p>
  </div>
</div>

## Що таке комп'ютерна графіка?

**Комп'ютерна графіка** — це область інформатики, яка займається створенням, обробкою та показом зображень за допомогою комп'ютера. Простіше кажучи, це все, що стосується роботи з картинками на комп'ютері.

**Графічне зображення** — це візуальне представлення даних або об'єктів, яке зберігається в цифровій формі на комп'ютері.

<div class="content-wrapper">
  <div class="card">
    <div class="card-header">
      <h3 class="card-title">💡 Як це працює?</h3>
    </div>
    <p>У комп'ютерній графіці використовуються математичні формули для опису того, як виглядає зображення, та алгоритми (покрокові інструкції) для його створення та зміни. Уявіть, що комп'ютер "розуміє" картинку через числа та формули, а не так, як ми її бачимо.</p>
  </div>
</div>

## Класифікація графічних зображень

Графічні зображення класифікуються за способом представлення інформації. Найголовніші типи — це **растрова** та **векторна** графіка, які кардинально відрізняються принципами побудови зображення.

### Основні типи комп'ютерної графіки:

<div class="grid grid-2">
  <div class="card">
    <div class="card-header">
      <h4 class="card-title">🔸 Растрова графіка</h4>
    </div>
    <p>Працює як мозаїка — зображення складається з дрібненьких квадратиків-пікселів</p>
  </div>
  
  <div class="card">
    <div class="card-header">
      <h4 class="card-title">📐 Векторна графіка</h4>
    </div>
    <p>Використовує геометричні фігури, які описуються математично</p>
  </div>
  
  <div class="card">
    <div class="card-header">
      <h4 class="card-title">🌿 Фрактальна графіка</h4>
    </div>
    <p>Базується на складних математичних формулах для створення природних форм</p>
  </div>
  
  <div class="card">
    <div class="card-header">
      <h4 class="card-title">📦 Тривимірна графіка</h4>
    </div>
    <p>Дозволяє будувати об'ємні моделі з глибиною та перспективою</p>
  </div>
  
  <div class="card">
    <div class="card-header">
      <h4 class="card-title">🔗 Гібридна графіка</h4>
    </div>
    <p>Поєднує різні типи для досягнення найкращого результату</p>
  </div>
</div>

## Растрова графіка

<div class="image-comparison">
  <div class="image-container">
    <img src="../resources/images/image1.png" alt="Приклад растрової графіки - піксельна структура" loading="lazy">
    <div class="image-caption">Растрова графіка: зображення з пікселів</div>
  </div>
  <div class="image-container">
    <img src="../resources/images/image2.png" alt="Приклад растрової графіки - цифрова фотографія" loading="lazy">
    <div class="image-caption">Цифрова фотографія - типовий приклад растрової графіки</div>
  </div>
</div>

Растрова графіка працює як мозаїка — зображення складається з дрібненьких квадратиків-пікселів, кожен з яких має свій колір. Коли ми дивимося на цифрову фотографію або скриншот, ми бачимо растрове зображення.

### Характеристики растрової графіки:
- **Піксельна структура** — зображення складається з окремих точок
- **Фіксований розмір** — кількість пікселів визначена при створенні
- **Втрата якості при збільшенні** — при масштабуванні може стати розмитим
- **Реалістичність** — ідеально підходить для фотографій

## Векторна графіка

<div class="image-comparison">
  <div class="image-container">
    <img src="../resources/images/image3.png" alt="Приклад векторної графіки - геометричні фігури" loading="lazy">
    <div class="image-caption">Векторна графіка: геометричні примітиви</div>
  </div>
  <div class="image-container">
    <img src="../resources/images/image4.png" alt="Приклад векторної графіки - логотип" loading="lazy">
    <div class="image-caption">Векторний логотип зберігає якість при будь-якому розмірі</div>
  </div>
</div>

Векторна графіка працює зовсім по-іншому — вона використовує геометричні фігури (лінії, круги, багатокутники), які описуються математично. Кожна фігура існує окремо і може бути змінена незалежно від інших.

### Характеристики векторної графіки:
- **Математичний опис** — фігури задаються формулами та координатами
- **Масштабованість** — можна збільшувати без втрати якості
- **Компактність** — файли зазвичай займають менше місця
- **Об'єктна структура** — кожен елемент редагується окремо

## Як розрізняти типи графіки?

<div class="content-wrapper">
  <div class="grid grid-2">
    <div class="card">
      <div class="card-header">
        <h3 class="card-title">🔍 Ознаки растрової графіки</h3>
      </div>
      <ul>
        <li>Фотографічна реалістичність</li>
        <li>Складні переходи кольорів</li>
        <li>Природні текстури</li>
        <li>При збільшенні видно окремі пікселі</li>
        <li>Формати: JPEG, PNG, GIF, BMP</li>
      </ul>
    </div>
    
    <div class="card">
      <div class="card-header">
        <h3 class="card-title">📐 Ознаки векторної графіки</h3>
      </div>
      <ul>
        <li>Чіткі контури та лінії</li>
        <li>Прості геометричні форми</li>
        <li>Обмежена кількість кольорів</li>
        <li>Ідеальна якість при будь-якому розмірі</li>
        <li>Формати: SVG, AI, EPS, CDR</li>
      </ul>
    </div>
  </div>
</div>

## Практичні приклади

<div class="task">
  <div class="task-level beginner">Завдання</div>
  <h3>Визначте тип графіки</h3>
  <p>Проаналізуйте наступні об'єкти та визначте, який тип графіки найкраще підходить:</p>
  
  <div class="quiz-container" data-test-id="classification-test">
    <div class="question" data-question-id="photo">
      <div class="question-title">Селфі на смартфоні</div>
      <div class="answers">
        <div class="answer-option" data-answer="raster">
          <input type="radio" name="photo" value="raster" id="photo-raster">
          <label for="photo-raster">Растрова графіка</label>
        </div>
        <div class="answer-option" data-answer="vector">
          <input type="radio" name="photo" value="vector" id="photo-vector">
          <label for="photo-vector">Векторна графіка</label>
        </div>
      </div>
    </div>
    
    <div class="question" data-question-id="logo">
      <div class="question-title">Емблема футбольного клубу</div>
      <div class="answers">
        <div class="answer-option" data-answer="raster">
          <input type="radio" name="logo" value="raster" id="logo-raster">
          <label for="logo-raster">Растрова графіка</label>
        </div>
        <div class="answer-option" data-answer="vector">
          <input type="radio" name="logo" value="vector" id="logo-vector">
          <label for="logo-vector">Векторна графіка</label>
        </div>
      </div>
    </div>
    
    <div class="question" data-question-id="map">
      <div class="question-title">Карта метрополітену</div>
      <div class="answers">
        <div class="answer-option" data-answer="raster">
          <input type="radio" name="map" value="raster" id="map-raster">
          <label for="map-raster">Растрова графіка</label>
        </div>
        <div class="answer-option" data-answer="vector">
          <input type="radio" name="map" value="vector" id="map-vector">
          <label for="map-vector">Векторна графіка</label>
        </div>
      </div>
    </div>
  </div>
</div>

## Ключові поняття розділу

<div class="grid grid-3">
  <div class="glossary-term">
    <div class="glossary-term-title">Комп'ютерна графіка</div>
    <p>Область інформатики для створення та обробки зображень</p>
  </div>
  
  <div class="glossary-term">
    <div class="glossary-term-title">Піксель</div>
    <p>Найменша точка растрового зображення з власним кольором</p>
  </div>
  
  <div class="glossary-term">
    <div class="glossary-term-title">Об'єкт</div>
    <p>Окремий елемент векторного зображення</p>
  </div>
  
  <div class="glossary-term">
    <div class="glossary-term-title">Примітив</div>
    <p>Базова геометрична фігура у векторній графіці</p>
  </div>
  
  <div class="glossary-term">
    <div class="glossary-term-title">Масштабованість</div>
    <p>Здатність зберігати якість при зміні розмірів</p>
  </div>
  
  <div class="glossary-term">
    <div class="glossary-term-title">Алгоритм</div>
    <p>Покрокова інструкція для обробки графічної інформації</p>
  </div>
</div>

## Навігація по розділах

<div class="content-wrapper">
  <div class="grid grid-2">
    <div class="card">
      <div class="card-header">
        <h3 class="card-title">📖 Наступні розділи</h3>
      </div>
      <ul style="list-style: none; padding: 0;">
        <li style="margin-bottom: 0.5rem;">
          <a href="raster-graphics" class="btn btn-outline" style="width: 100%; text-align: left;">
            🖼️ Растрова графіка →
          </a>
        </li>
        <li style="margin-bottom: 0.5rem;">
          <a href="vector-graphics" class="btn btn-outline" style="width: 100%; text-align: left;">
            📐 Векторна графіка →
          </a>
        </li>
        <li style="margin-bottom: 0.5rem;">
          <a href="comparison" class="btn btn-outline" style="width: 100%; text-align: left;">
            ⚖️ Порівняльний аналіз →
          </a>
        </li>
      </ul>
    </div>
    
    <div class="card">
      <div class="card-header">
        <h3 class="card-title">🎯 Практика</h3>
      </div>
      <p>Перейдіть до практичних завдань для закріплення матеріалу:</p>
      <a href="../practice/beginner-tasks" class="btn btn-primary">
        Практичні завдання
      </a>
    </div>
  </div>
</div>

<script src="../scripts/interactive.js"></script>

<script>
// Правильні відповіді для тесту класифікації
window.classificationAnswers = {
  'photo': 'raster',
  'logo': 'vector', 
  'map': 'vector'
};

// Перевизначаємо функцію перевірки для цього тесту
document.addEventListener('DOMContentLoaded', function() {
  const checkButton = document.querySelector('.check-test[data-test-id="classification-test"]');
  if (checkButton) {
    checkButton.addEventListener('click', function() {
      const questions = document.querySelectorAll('#classification-test .question');
      let correct = 0;
      let total = questions.length;
      
      questions.forEach(question => {
        const questionId = question.dataset.questionId;
        const selectedInput = question.querySelector('input:checked');
        const correctAnswer = window.classificationAnswers[questionId];
        
        // Очищаємо попередні стилі
        question.querySelectorAll('.answer-option').forEach(option => {
          option.classList.remove('correct', 'incorrect');
        });
        
        // Відмічаємо правильну відповідь
        question.querySelectorAll('.answer-option').forEach(option => {
          if (option.dataset.answer === correctAnswer) {
            option.classList.add('correct');
          }
        });
        
        // Відмічаємо вибрану відповідь, якщо вона неправильна
        if (selectedInput) {
          const selectedOption = selectedInput.closest('.answer-option');
          if (selectedInput.value === correctAnswer) {
            correct++;
          } else {
            selectedOption.classList.add('incorrect');
          }
        }
      });
      
      // Показуємо результат
      const percentage = (correct / total) * 100;
      let resultClass = 'error';
      let resultText = 'Потрібно більше вивчити матеріал';
      
      if (percentage >= 80) {
        resultClass = 'success';
        resultText = 'Відмінно! Ви добре засвоїли матеріал';
      } else if (percentage >= 60) {
        resultClass = 'warning';
        resultText = 'Непогано, але є над чим працювати';
      }
      
      Utils.showNotification(`${resultText}. Результат: ${correct}/${total}`, resultClass.replace('error', 'warning'));
    });
  }
});
</script>
