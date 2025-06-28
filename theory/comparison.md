---
layout: default
title: "Порівняльний аналіз растрової та векторної графіки"
description: "Детальне порівняння растрової та векторної графіки за критеріями якості, розміру, редагування та застосування"
permalink: /theory/comparison/
---

<link rel="stylesheet" href="{{ '/styles/custom.css' | relative_url }}">

# Порівняльний аналіз растрової та векторної графіки

<div class="content-wrapper">
  <div class="card">
    <div class="card-header">
      <h2 class="card-title">🎯 Мета розділу</h2>
    </div>
    <p>Провести детальний порівняльний аналіз растрової та векторної графіки за різними критеріями, навчитися обирати оптимальний тип графіки для конкретних задач.</p>
  </div>
</div>

## Основні відмінності

Растрова та векторна графіка представляють два принципово різні способи зберігання зображень. Розуміння їх відмінностей є ключовим для правильного вибору типу графіки.

<div class="image-container">
  <img src="{{ '/lab-2/assets/images/image11.png' | relative_url }}" alt="Порівняльна таблиця растрової та векторної графіки" loading="lazy">
  <div class="image-caption">Візуальне порівняння основних характеристик двох типів графіки</div>
</div>

### Принцип побудови зображення

<div class="grid grid-2">
  <div class="card">
    <div class="card-header">
      <h3 class="card-title">🖼️ Растрова графіка</h3>
    </div>
    <ul>
      <li><strong>Структура:</strong> Сітка пікселів</li>
      <li><strong>Елемент:</strong> Піксель (найменша точка)</li>
      <li><strong>Інформація:</strong> Колір кожного пікселя</li>
      <li><strong>Розмір:</strong> Фіксована кількість пікселів</li>
    </ul>
  </div>
  
  <div class="card">
    <div class="card-header">
      <h3 class="card-title">📐 Векторна графіка</h3>
    </div>
    <ul>
      <li><strong>Структура:</strong> Математичні об'єкти</li>
      <li><strong>Елемент:</strong> Геометричний примітив</li>
      <li><strong>Інформація:</strong> Формули та координати</li>
      <li><strong>Розмір:</strong> Незалежний від роздільної здатності</li>
    </ul>
  </div>
</div>

## Детальний порівняльний аналіз

### 1. Якість зображення при масштабуванні

<div class="image-comparison">
  <div class="image-container">
    <img src="{{ '/lab-2/assets/images/image12.jpeg' | relative_url }}" alt="Порівняння масштабування растрової та векторної графіки" loading="lazy">
    <div class="image-caption">Ефект масштабування: растр vs вектор</div>
  </div>
  <div class="image-container">
    <img src="{{ '/lab-2/assets/images/image13.jpeg' | relative_url }}" alt="Детальне порівняння якості при збільшенні" loading="lazy">
    <div class="image-caption">Деталізація при різних рівнях збільшення</div>
  </div>
</div>

<div class="content-wrapper">
  <div class="grid grid-2">
    <div class="card">
      <div class="card-header">
        <h4 class="card-title">🖼️ Растрове масштабування</h4>
      </div>
      <ul>
        <li><strong>Збільшення:</strong> Пікселізація, втрата чіткості</li>
        <li><strong>Зменшення:</strong> Втрата деталей, можливі артефакти</li>
        <li><strong>Оптимальний розмір:</strong> Оригінальна роздільна здатність</li>
        <li><strong>Інтерполяція:</strong> Спроби згладжування при зміні розміру</li>
      </ul>
    </div>
    
    <div class="card">
      <div class="card-header">
        <h4 class="card-title">📐 Векторне масштабування</h4>
      </div>
      <ul>
        <li><strong>Збільшення:</strong> Ідеальна якість, чіткі контури</li>
        <li><strong>Зменшення:</strong> Збереження всіх пропорцій</li>
        <li><strong>Діапазон:</strong> Від мікроскопічного до гігантського</li>
        <li><strong>Перерахунок:</strong> Математичне відтворення форм</li>
      </ul>
    </div>
  </div>
</div>

### 2. Розмір файлів

<div class="task">
  <div class="task-level intermediate">Порівняння</div>
  <h3>Аналіз розміру файлів</h3>
  
  <div class="content-wrapper">
    <div class="grid grid-2">
      <div class="card">
        <div class="card-header">
          <h4 class="card-title">📊 Растрові файли</h4>
        </div>
        <p><strong>Фактори впливу на розмір:</strong></p>
        <ul>
          <li>Роздільна здатність (кількість пікселів)</li>
          <li>Глибина кольору (біт на піксель)</li>
          <li>Метод стиснення</li>
          <li>Складність зображення</li>
        </ul>
        
        <div style="background: var(--bg-secondary); padding: 1rem; border-radius: 6px; margin-top: 1rem;">
          <strong>Приклад:</strong><br>
          Фото 2000×1500, 24 біт:<br>
          • BMP: ~9 МБ<br>
          • PNG: ~3-5 МБ<br>
          • JPEG: ~500 КБ - 2 МБ
        </div>
      </div>
      
      <div class="card">
        <div class="card-header">
          <h4 class="card-title">📐 Векторні файли</h4>
        </div>
        <p><strong>Фактори впливу на розмір:</strong></p>
        <ul>
          <li>Кількість об'єктів</li>
          <li>Складність кривих</li>
          <li>Кількість кольорів</li>
          <li>Метаданих та стилів</li>
        </ul>
        
        <div style="background: var(--bg-secondary); padding: 1rem; border-radius: 6px; margin-top: 1rem;">
          <strong>Приклад:</strong><br>
          Логотип для великого плакату:<br>
          • SVG: ~10-50 КБ<br>
          • AI: ~100-500 КБ<br>
          • EPS: ~50-200 КБ
        </div>
      </div>
    </div>
  </div>
</div>

### 3. Можливості редагування

<div class="grid grid-2">
  <div class="card">
    <div class="card-header">
      <h3 class="card-title">🖼️ Растрове редагування</h3>
    </div>
    <p><strong>Переваги:</strong></p>
    <ul>
      <li>Точне редагування пікселів</li>
      <li>Складні ефекти та фільтри</li>
      <li>Фотомонтаж та ретуш</li>
      <li>Робота з тонами та кольорами</li>
    </ul>
    
    <p><strong>Недоліки:</strong></p>
    <ul>
      <li>Важко змінювати окремі об'єкти</li>
      <li>Втрата якості при трансформаціях</li>
      <li>Складно змінювати розміри елементів</li>
    </ul>
  </div>
  
  <div class="card">
    <div class="card-header">
      <h3 class="card-title">📐 Векторне редагування</h3>
    </div>
    <p><strong>Переваги:</strong></p>
    <ul>
      <li>Окреме редагування об'єктів</li>
      <li>Легка зміна форм та кольорів</li>
      <li>Безпечне масштабування</li>
      <li>Швидке дублювання елементів</li>
    </ul>
    
    <p><strong>Недоліки:</strong></p>
    <ul>
      <li>Обмежені можливості для фотореалізму</li>
      <li>Складність створення природних текстур</li>
      <li>Менше художніх ефектів</li>
    </ul>
  </div>
</div>

### 4. Сфери застосування

<div class="content-wrapper">
  <div class="grid grid-3">
    <div class="card">
      <div class="card-header">
        <h3 class="card-title">📷 Растрова графіка</h3>
      </div>
      <ul>
        <li>Цифрова фотографія</li>
        <li>Фотомонтаж</li>
        <li>Цифровий живопис</li>
        <li>Ретушування</li>
        <li>Веб-банери з фото</li>
        <li>Ігрові текстури</li>
        <li>Медичні зображення</li>
      </ul>
    </div>
    
    <div class="card">
      <div class="card-header">
        <h3 class="card-title">📐 Векторна графіка</h3>
      </div>
      <ul>
        <li>Логотипи та брендинг</li>
        <li>Іконки інтерфейсу</li>
        <li>Технічні схеми</li>
        <li>Карти та діаграми</li>
        <li>Шрифти</li>
        <li>Друкована продукція</li>
        <li>Вивіски та реклама</li>
      </ul>
    </div>
    
    <div class="card">
      <div class="card-header">
        <h3 class="card-title">🔄 Комбінована</h3>
      </div>
      <ul>
        <li>Макети журналів</li>
        <li>Рекламні матеріали</li>
        <li>Веб-дизайн</li>
        <li>Презентації</li>
        <li>Інфографіка</li>
        <li>Мобільні додатки</li>
        <li>Упаковка товарів</li>
      </ul>
    </div>
  </div>
</div>

## Інтерактивний тест порівняння

<div class="task">
  <div class="task-level advanced">Тест</div>
  <h3>Оберіть правильний тип графіки для кожної ситуації</h3>
  
  <div class="quiz-container" data-test-id="graphics-choice">
    <div class="question" data-question-id="logo-design">
      <div class="question-title">Створення логотипу для компанії, який буде використовуватися на візитках та рекламних щитах</div>
      <div class="answers">
        <div class="answer-option" data-answer="vector">
          <input type="radio" name="logo" value="vector" id="logo-vector">
          <label for="logo-vector">Векторна графіка</label>
        </div>
        <div class="answer-option" data-answer="raster">
          <input type="radio" name="logo" value="raster" id="logo-raster">
          <label for="logo-raster">Растрова графіка</label>
        </div>
      </div>
    </div>
    
    <div class="question" data-question-id="photo-editing">
      <div class="question-title">Ретушування портретної фотографії для професійної фотосесії</div>
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
    
    <div class="question" data-question-id="web-icons">
      <div class="question-title">Створення іконок для мобільного додатку, які мають виглядати чітко на різних екранах</div>
      <div class="answers">
        <div class="answer-option" data-answer="vector">
          <input type="radio" name="icons" value="vector" id="icons-vector">
          <label for="icons-vector">Векторна графіка</label>
        </div>
        <div class="answer-option" data-answer="raster">
          <input type="radio" name="icons" value="raster" id="icons-raster">
          <label for="icons-raster">Растрова графіка</label>
        </div>
      </div>
    </div>
    
    <div class="question" data-question-id="nature-painting">
      <div class="question-title">Створення цифрового живопису з деталізованим природним пейзажем</div>
      <div class="answers">
        <div class="answer-option" data-answer="raster">
          <input type="radio" name="painting" value="raster" id="painting-raster">
          <label for="painting-raster">Растрова графіка</label>
        </div>
        <div class="answer-option" data-answer="vector">
          <input type="radio" name="painting" value="vector" id="painting-vector">
          <label for="painting-vector">Векторна графіка</label>
        </div>
      </div>
    </div>
  </div>
</div>

## Критерії вибору типу графіки

<div class="content-wrapper">
  <div class="card">
    <div class="card-header">
      <h2 class="card-title">🤔 Як обрати правильний тип?</h2>
    </div>
    
    <div class="grid grid-2">
      <div style="background: var(--bg-secondary); padding: 1.5rem; border-radius: 8px;">
        <h3 style="color: var(--primary-color); margin-bottom: 1rem;">❓ Поставте собі питання:</h3>
        <ul>
          <li>Потрібна масштабованість?</li>
          <li>Чи зображення фотореалістичне?</li>
          <li>Скільки деталей та кольорів?</li>
          <li>Як часто треба редагувати?</li>
          <li>Де буде використовуватися?</li>
          <li>Які обмеження розміру файлу?</li>
        </ul>
      </div>
      
      <div style="background: var(--bg-secondary); padding: 1.5rem; border-radius: 8px;">
        <h3 style="color: var(--secondary-color); margin-bottom: 1rem;">💡 Рекомендації:</h3>
        <ul>
          <li><strong>Вектор:</strong> Для графіки, що потребує масштабування</li>
          <li><strong>Растр:</strong> Для фотореалістичних зображень</li>
          <li><strong>Комбінація:</strong> Для складних проектів</li>
          <li><strong>Формат:</strong> Залежить від цільового використання</li>
        </ul>
      </div>
    </div>
  </div>
</div>

## Підсумкова таблиця порівняння

<div class="content-wrapper">
  <div style="overflow-x: auto;">
    <table style="width: 100%; border-collapse: collapse; margin: 2rem 0;">
      <thead>
        <tr style="background: var(--primary-color); color: white;">
          <th style="padding: 1rem; text-align: left; border: 1px solid var(--border-color);">Критерій</th>
          <th style="padding: 1rem; text-align: center; border: 1px solid var(--border-color);">Растрова графіка</th>
          <th style="padding: 1rem; text-align: center; border: 1px solid var(--border-color);">Векторна графіка</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td style="padding: 1rem; border: 1px solid var(--border-color); font-weight: 600;">Масштабованість</td>
          <td style="padding: 1rem; border: 1px solid var(--border-color); text-align: center; color: var(--error-color);">❌ Втрата якості</td>
          <td style="padding: 1rem; border: 1px solid var(--border-color); text-align: center; color: var(--success-color);">✅ Ідеальна якість</td>
        </tr>
        <tr style="background: var(--bg-secondary);">
          <td style="padding: 1rem; border: 1px solid var(--border-color); font-weight: 600;">Фотореалізм</td>
          <td style="padding: 1rem; border: 1px solid var(--border-color); text-align: center; color: var(--success-color);">✅ Відмінно</td>
          <td style="padding: 1rem; border: 1px solid var(--border-color); text-align: center; color: var(--error-color);">❌ Обмежено</td>
        </tr>
        <tr>
          <td style="padding: 1rem; border: 1px solid var(--border-color); font-weight: 600;">Розмір файлу</td>
          <td style="padding: 1rem; border: 1px solid var(--border-color); text-align: center; color: var(--warning-color);">⚠️ Великий</td>
          <td style="padding: 1rem; border: 1px solid var(--border-color); text-align: center; color: var(--success-color);">✅ Компактний</td>
        </tr>
        <tr style="background: var(--bg-secondary);">
          <td style="padding: 1rem; border: 1px solid var(--border-color); font-weight: 600;">Редагування</td>
          <td style="padding: 1rem; border: 1px solid var(--border-color); text-align: center; color: var(--warning-color);">⚠️ Піксельне</td>
          <td style="padding: 1rem; border: 1px solid var(--border-color); text-align: center; color: var(--success-color);">✅ Об'єктне</td>
        </tr>
        <tr>
          <td style="padding: 1rem; border: 1px solid var(--border-color); font-weight: 600;">Складність створення</td>
          <td style="padding: 1rem; border: 1px solid var(--border-color); text-align: center; color: var(--success-color);">✅ Інтуїтивно</td>
          <td style="padding: 1rem; border: 1px solid var(--border-color); text-align: center; color: var(--warning-color);">⚠️ Потрібні навички</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>

## Ключові висновки

<div class="content-wrapper">
  <div class="grid grid-2">
    <div class="card">
      <div class="card-header">
        <h3 class="card-title">🎯 Головне правило</h3>
      </div>
      <p>Вибір типу графіки залежить від <strong>цільового призначення</strong> зображення. Немає "кращого" або "гіршого" типу — є правильний вибір для конкретної задачі.</p>
    </div>
    
    <div class="card">
      <div class="card-header">
        <h3 class="card-title">🔄 Гібридний підхід</h3>
      </div>
      <p>У сучасному дизайні часто використовують <strong>комбінацію</strong> обох типів графіки для досягнення найкращого результату.</p>
    </div>
  </div>
</div>

## Навігація

<div class="content-wrapper">
  <div class="grid grid-3">
    <div class="card">
      <div class="card-header">
        <h3 class="card-title">⬅️ Попередній розділ</h3>
      </div>
      <a href="/theory/vector-graphics/" class="btn btn-outline">
        Векторна графіка
      </a>
    </div>
    
    <div class="card">
      <div class="card-header">
        <h3 class="card-title">➡️ Наступний розділ</h3>
      </div>
      <a href="/theory/applications/" class="btn btn-primary">
        Практичне застосування
      </a>
    </div>
    
    <div class="card">
      <div class="card-header">
        <h3 class="card-title">🎯 Практика</h3>
      </div>
      <a href="../practice/intermediate-tasks" class="btn btn-secondary">
        Завдання середнього рівня
      </a>
    </div>
  </div>
</div>

<script src="{{ '/scripts/interactive.js' | relative_url }}"></script>

<script>
// Правильні відповіді для тесту вибору графіки
window.graphicsChoiceAnswers = {
  'logo-design': 'vector',
  'photo-editing': 'raster',
  'web-icons': 'vector',
  'nature-painting': 'raster'
};

document.addEventListener('DOMContentLoaded', function() {
  const checkButton = document.querySelector('.check-test[data-test-id="graphics-choice"]');
  if (checkButton) {
    checkButton.addEventListener('click', function() {
      const questions = document.querySelectorAll('[data-test-id="graphics-choice"] .question');
      let correct = 0;
      let total = questions.length;
      
      questions.forEach(question => {
        const questionId = question.dataset.questionId;
        const selectedInput = question.querySelector('input:checked');
        const correctAnswer = window.graphicsChoiceAnswers[questionId];
        
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
        
        // Відмічаємо вибрану відповідь
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
      let resultText = 'Потрібно краще вивчити відмінності';
      
      if (percentage >= 80) {
        resultClass = 'success';
        resultText = 'Відмінно! Ви вмієте обирати тип графіки';
      } else if (percentage >= 60) {
        resultClass = 'warning';
        resultText = 'Непогано, але є помилки у виборі';
      }
      
      Utils.showNotification(`${resultText}. Результат: ${correct}/${total}`, resultClass.replace('error', 'warning'));
    });
  }
});
</script>
