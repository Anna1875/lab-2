---
layout: default
title: "Векторна графіка: принципи побудови, властивості, формати"
description: "Вивчення векторної графіки: геометричні примітиви, криві Безьє, масштабованість, формати SVG, AI, EPS"
---

<link rel="stylesheet" href="../styles/custom.css">

# Векторна графіка: принципи побудови, властивості, формати

<div class="content-wrapper">
  <div class="card">
    <div class="card-header">
      <h2 class="card-title">🎯 Мета розділу</h2>
    </div>
    <p>Зрозуміти принципи побудови векторних зображень, вивчити основні графічні примітиви, криві Безьє, переваги масштабованості та основні формати векторної графіки.</p>
  </div>
</div>

## Принципи побудови векторної графіки

Векторна графіка працює зовсім по-іншому, ніж растрова. Замість пікселів вона використовує **геометричні фігури** — точки, лінії, криві та багатокутники. Кожна фігура описується математично: координатами, розміром, кольором, товщиною ліній.

<div class="image-container">
  <img src="../resources/images/image8.png" alt="Криві Безьє та їх побудова" loading="lazy">
  <div class="image-caption">Криві Безьє: основа для створення плавних контурів у векторній графіці</div>
</div>

### Математичний підхід

<div class="content-wrapper">
  <div class="card">
    <div class="card-header">
      <h3 class="card-title">🔢 Як зберігається векторне зображення?</h3>
    </div>
    <p>Замість збереження кольору кожного пікселя, векторна графіка зберігає <strong>інструкції</strong> для відтворення зображення:</p>
    <ul>
      <li><strong>Коло:</strong> центр (x, y), радіус, колір заливки, товщина обводки</li>
      <li><strong>Лінія:</strong> початкова точка (x1, y1), кінцева точка (x2, y2), колір, товщина</li>
      <li><strong>Прямокутник:</strong> координати кута, ширина, висота, кольори</li>
    </ul>
  </div>
</div>

## Основні графічні примітиви

**Примітив** — це базова фігура у векторній графіці, яка не може бути розкладена на простіші елементи.

<div class="grid grid-3">
  <div class="card">
    <div class="card-header">
      <h3 class="card-title">📍 Точка (Point)</h3>
    </div>
    <ul>
      <li>Координати (x, y)</li>
      <li>Колір</li>
      <li>Розмір (радіус)</li>
    </ul>
  </div>
  
  <div class="card">
    <div class="card-header">
      <h3 class="card-title">📏 Лінія (Line)</h3>
    </div>
    <ul>
      <li>Початкова і кінцева точки</li>
      <li>Товщина (stroke width)</li>
      <li>Колір обводки</li>
      <li>Стиль лінії (суцільна, пунктирна)</li>
    </ul>
  </div>
  
  <div class="card">
    <div class="card-header">
      <h3 class="card-title">🔄 Крива (Curve)</h3>
    </div>
    <ul>
      <li>Контрольні точки</li>
      <li>Напрямні векторів</li>
      <li>Тип кривої (Безьє, сплайн)</li>
    </ul>
  </div>
  
  <div class="card">
    <div class="card-header">
      <h3 class="card-title">⬜ Прямокутник</h3>
    </div>
    <ul>
      <li>Координати кута</li>
      <li>Ширина і висота</li>
      <li>Заокруглення кутів</li>
      <li>Заливка і обводка</li>
    </ul>
  </div>
  
  <div class="card">
    <div class="card-header">
      <h3 class="card-title">⭕ Коло/Еліпс</h3>
    </div>
    <ul>
      <li>Центр (cx, cy)</li>
      <li>Радіус або півосі</li>
      <li>Поворот (для еліпса)</li>
    </ul>
  </div>
  
  <div class="card">
    <div class="card-header">
      <h3 class="card-title">🔺 Багатокутник</h3>
    </div>
    <ul>
      <li>Масив координат вершин</li>
      <li>Замкнутий/відкритий контур</li>
      <li>Правила заливки</li>
    </ul>
  </div>
</div>

## Криві Безьє

Основний інструмент для створення гладких вигнутих ліній — це **крива Безьє**. Вона дозволяє створювати плавні контури та точно контролювати форму через переміщення спеціальних точок-вузлів.

<div class="image-container">
  <img src="../resources/images/image9.png" alt="Приклади векторних об'єктів" loading="lazy">
  <div class="image-caption">Векторні об'єкти: від простих фігур до складних композицій</div>
</div>

### Типи кривих Безьє

<div class="grid grid-2">
  <div class="card">
    <div class="card-header">
      <h3 class="card-title">📈 Квадратична крива Безьє</h3>
    </div>
    <ul>
      <li>2 кінцеві точки</li>
      <li>1 контрольна точка</li>
      <li>Простіша у використанні</li>
      <li>Менше можливостей для складних форм</li>
    </ul>
  </div>
  
  <div class="card">
    <div class="card-header">
      <h3 class="card-title">📊 Кубічна крива Безьє</h3>
    </div>
    <ul>
      <li>2 кінцеві точки</li>
      <li>2 контрольні точки</li>
      <li>Більша гнучкість</li>
      <li>Стандарт у професійних програмах</li>
    </ul>
  </div>
</div>

### Вузли (Nodes)

<div class="content-wrapper">
  <div class="card">
    <div class="card-header">
      <h3 class="card-title">🔗 Що таке вузол?</h3>
    </div>
    <p><strong>Вузол</strong> — це точка на контурі векторного зображення, через яку проходять лінії або криві. Вузли можна:</p>
    <ul>
      <li>Переміщувати для зміни форми</li>
      <li>Додавати або видаляти</li>
      <li>Змінювати тип (гострий, гладкий, симетричний)</li>
      <li>Налаштовувати напрямні для кривих</li>
    </ul>
  </div>
</div>

## Основні властивості векторної графіки

### 1. Масштабованість

<div class="image-container">
  <img src="../resources/images/image10.png" alt="Демонстрація масштабованості векторної графіки" loading="lazy">
  <div class="image-caption">Векторна графіка зберігає якість при будь-якому масштабуванні</div>
</div>

**Масштабованість** — головна перевага векторної графіки. При зміні розмірів усі контури залишаються чіткими, без розмивання і "пікселізації". Це відбувається тому, що комп'ютер кожного разу перераховує математичні формули для нового розміру.

<div class="task">
  <div class="task-level beginner">Приклад</div>
  <h3>Масштабування логотипу</h3>
  
  <div class="content-wrapper">
    <div class="grid grid-2">
      <div class="card">
        <div class="card-header">
          <h4 class="card-title">📱 Візитка (5×5 см)</h4>
        </div>
        <p>Логотип SVG: 200×200 пікселів<br>
        Якість: ідеальна</p>
      </div>
      
      <div class="card">
        <div class="card-header">
          <h4 class="card-title">🏢 Рекламний щит (5×5 м)</h4>
        </div>
        <p>Той самий логотип: 20000×20000 пікселів<br>
        Якість: ідеальна (масштабування у 100 разів!)</p>
      </div>
    </div>
  </div>
</div>

### 2. Об'єктна структура

**Об'єктна структура** означає, що зображення складається з окремих елементів, кожен з яких має власні параметри. Ці елементи можна:

- Об'єднувати та групувати
- Змінювати незалежно один від одного
- Копіювати та дублювати
- Застосовувати різні стилі

### 3. Компактність

Векторні файли зберігають інформацію у вигляді формул і координат, тому навіть складні ілюстрації часто займають менше місця, ніж растрові аналоги.

## Популярні формати векторної графіки

<div class="content-wrapper">
  <div class="grid grid-2">
    <div class="card">
      <div class="card-header">
        <h3 class="card-title">🌐 SVG (Scalable Vector Graphics)</h3>
      </div>
      <ul>
        <li><strong>Тип:</strong> Відкритий стандарт</li>
        <li><strong>Основа:</strong> XML</li>
        <li><strong>Підтримка:</strong> Всі сучасні браузери</li>
        <li><strong>Переваги:</strong> Можна редагувати в текстовому редакторі</li>
        <li><strong>Використання:</strong> Веб-іконки, логотипи, інтерфейси</li>
      </ul>
    </div>
    
    <div class="card">
      <div class="card-header">
        <h3 class="card-title">🎨 AI (Adobe Illustrator)</h3>
      </div>
      <ul>
        <li><strong>Тип:</strong> Власний формат Adobe</li>
        <li><strong>Можливості:</strong> Повна функціональність</li>
        <li><strong>Сумісність:</strong> Adobe Creative Suite</li>
        <li><strong>Переваги:</strong> Професійні інструменти</li>
        <li><strong>Використання:</strong> Дизайн, ілюстрації</li>
      </ul>
    </div>
    
    <div class="card">
      <div class="card-header">
        <h3 class="card-title">📄 EPS (Encapsulated PostScript)</h3>
      </div>
      <ul>
        <li><strong>Тип:</strong> Стандарт для друку</li>
        <li><strong>Сумісність:</strong> Широка підтримка</li>
        <li><strong>Якість:</strong> Висока</li>
        <li><strong>Переваги:</strong> Незалежність від програм</li>
        <li><strong>Використання:</strong> Поліграфія, професійний друк</li>
      </ul>
    </div>
    
    <div class="card">
      <div class="card-header">
        <h3 class="card-title">🛠️ CDR (CorelDRAW)</h3>
      </div>
      <ul>
        <li><strong>Тип:</strong> Власний формат Corel</li>
        <li><strong>Особливості:</strong> Розширені можливості</li>
        <li><strong>Популярність:</strong> Дизайн-студії</li>
        <li><strong>Переваги:</strong> Інтеграція з CorelDRAW</li>
        <li><strong>Використання:</strong> Графічний дизайн, реклама</li>
      </ul>
    </div>
  </div>
</div>

## Переваги та недоліки векторної графіки

<div class="grid grid-2">
  <div class="card">
    <div class="card-header">
      <h3 class="card-title">✅ Переваги</h3>
    </div>
    <ul>
      <li><strong>Масштабованість</strong> — якість не залежить від розміру</li>
      <li><strong>Компактність</strong> — малий розмір файлів</li>
      <li><strong>Редагованість</strong> — легко змінювати окремі елементи</li>
      <li><strong>Чіткість</strong> — ідеальні лінії та контури</li>
      <li><strong>Гнучкість</strong> — швидке внесення змін</li>
    </ul>
  </div>
  
  <div class="card">
    <div class="card-header">
      <h3 class="card-title">❌ Недоліки</h3>
    </div>
    <ul>
      <li><strong>Обмеженість</strong> — не підходить для фотореалістичних зображень</li>
      <li><strong>Складність</strong> — важче створювати природні текстури</li>
      <li><strong>Сумісність</strong> — деякі програми не підтримують всі формати</li>
      <li><strong>Навчання</strong> — потрібні специфічні навички</li>
      <li><strong>Обмежені ефекти</strong> — складніше створювати тіні та градієнти</li>
    </ul>
  </div>
</div>

## Практичне завдання

<div class="task">
  <div class="task-level intermediate">Тест знань</div>
  <h3>Перевірте розуміння векторної графіки</h3>
  
  <div class="quiz-container" data-test-id="vector-knowledge">
    <div class="question" data-question-id="bezier-points">
      <div class="question-title">Скільки контрольних точок має кубічна крива Безьє?</div>
      <div class="answers">
        <div class="answer-option" data-answer="2">
          <input type="radio" name="bezier" value="2" id="bezier-correct">
          <label for="bezier-correct">2 контрольні точки</label>
        </div>
        <div class="answer-option" data-answer="1">
          <input type="radio" name="bezier" value="1" id="bezier-wrong1">
          <label for="bezier-wrong1">1 контрольна точка</label>
        </div>
        <div class="answer-option" data-answer="4">
          <input type="radio" name="bezier" value="4" id="bezier-wrong2">
          <label for="bezier-wrong2">4 контрольні точки</label>
        </div>
      </div>
    </div>
    
    <div class="question" data-question-id="vector-advantage">
      <div class="question-title">Яка найголовніша перевага векторної графіки?</div>
      <div class="answers">
        <div class="answer-option" data-answer="scalability">
          <input type="radio" name="advantage" value="scalability" id="advantage-correct">
          <label for="advantage-correct">Масштабованість без втрати якості</label>
        </div>
        <div class="answer-option" data-answer="realism">
          <input type="radio" name="advantage" value="realism" id="advantage-wrong1">
          <label for="advantage-wrong1">Фотореалістичність</label>
        </div>
        <div class="answer-option" data-answer="simplicity">
          <input type="radio" name="advantage" value="simplicity" id="advantage-wrong2">
          <label for="advantage-wrong2">Простота створення</label>
        </div>
      </div>
    </div>
    
    <div class="question" data-question-id="web-format">
      <div class="question-title">Який формат векторної графіки найкраще підходить для веб-сайтів?</div>
      <div class="answers">
        <div class="answer-option" data-answer="SVG">
          <input type="radio" name="webformat" value="SVG" id="web-correct">
          <label for="web-correct">SVG</label>
        </div>
        <div class="answer-option" data-answer="AI">
          <input type="radio" name="webformat" value="AI" id="web-wrong1">
          <label for="web-wrong1">AI</label>
        </div>
        <div class="answer-option" data-answer="CDR">
          <input type="radio" name="webformat" value="CDR" id="web-wrong2">
          <label for="web-wrong2">CDR</label>
        </div>
      </div>
    </div>
  </div>
</div>

## Коли використовувати векторну графіку?

<div class="content-wrapper">
  <div class="grid grid-2">
    <div class="card">
      <div class="card-header">
        <h3 class="card-title">🎯 Ідеально підходить для:</h3>
      </div>
      <ul>
        <li><strong>Логотипів</strong> — потрібна масштабованість</li>
        <li><strong>Іконок</strong> — чіткі контури, різні розміри</li>
        <li><strong>Технічних схем</strong> — точні лінії і фігури</li>
        <li><strong>Шрифтів</strong> — масштабованість тексту</li>
        <li><strong>Карт і діаграм</strong> — геометричні об'єкти</li>
        <li><strong>Елементів інтерфейсу</strong> — адаптивність</li>
      </ul>
    </div>
    
    <div class="card">
      <div class="card-header">
        <h3 class="card-title">⚠️ Не рекомендується для:</h3>
      </div>
      <ul>
        <li><strong>Фотографій</strong> — потрібна растрова структура</li>
        <li><strong>Складних художніх робіт</strong> — природні текстури</li>
        <li><strong>Детальних ілюстрацій</strong> — багато дрібних елементів</li>
        <li><strong>Скріншотів</strong> — растрова природа</li>
        <li><strong>Медичних зображень</strong> — точна піксельна інформація</li>
      </ul>
    </div>
  </div>
</div>

## Ключові поняття розділу

<div class="grid grid-3">
  <div class="glossary-term">
    <div class="glossary-term-title">Примітив</div>
    <p>Базова геометрична фігура у векторній графіці</p>
  </div>
  
  <div class="glossary-term">
    <div class="glossary-term-title">Крива Безьє</div>
    <p>Математична крива для створення плавних контурів</p>
  </div>
  
  <div class="glossary-term">
    <div class="glossary-term-title">Вузол</div>
    <p>Точка на контурі для редагування форми</p>
  </div>
  
  <div class="glossary-term">
    <div class="glossary-term-title">Контур</div>
    <p>Лінія або крива, що визначає форму об'єкта</p>
  </div>
  
  <div class="glossary-term">
    <div class="glossary-term-title">Масштабованість</div>
    <p>Здатність зберігати якість при зміні розмірів</p>
  </div>
  
  <div class="glossary-term">
    <div class="glossary-term-title">Об'єктна структура</div>
    <p>Організація зображення як набору окремих елементів</p>
  </div>
</div>

## Навігація

<div class="content-wrapper">
  <div class="grid grid-3">
    <div class="card">
      <div class="card-header">
        <h3 class="card-title">⬅️ Попередній розділ</h3>
      </div>
      <a href="raster-graphics" class="btn btn-outline">
        Растрова графіка
      </a>
    </div>
    
    <div class="card">
      <div class="card-header">
        <h3 class="card-title">➡️ Наступний розділ</h3>
      </div>
      <a href="comparison" class="btn btn-primary">
        Порівняльний аналіз
      </a>
    </div>
    
    <div class="card">
      <div class="card-header">
        <h3 class="card-title">🎯 Практика</h3>
      </div>
      <a href="../practice/beginner-tasks" class="btn btn-secondary">
        Практичні завдання
      </a>
    </div>
  </div>
</div>

<script src="../scripts/interactive.js"></script>

<script>
// Правильні відповіді для тесту векторної графіки
window.vectorKnowledgeAnswers = {
  'bezier-points': '2',
  'vector-advantage': 'scalability',
  'web-format': 'SVG'
};

document.addEventListener('DOMContentLoaded', function() {
  const checkButton = document.querySelector('.check-test[data-test-id="vector-knowledge"]');
  if (checkButton) {
    checkButton.addEventListener('click', function() {
      const questions = document.querySelectorAll('[data-test-id="vector-knowledge"] .question');
      let correct = 0;
      let total = questions.length;
      
      questions.forEach(question => {
        const questionId = question.dataset.questionId;
        const selectedInput = question.querySelector('input:checked');
        const correctAnswer = window.vectorKnowledgeAnswers[questionId];
        
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
      let resultText = 'Повторіть матеріал про векторну графіку';
      
      if (percentage >= 80) {
        resultClass = 'success';
        resultText = 'Чудово! Ви розумієте векторну графіку';
      } else if (percentage >= 60) {
        resultClass = 'warning';
        resultText = 'Непогано, але є прогалини';
      }
      
      Utils.showNotification(`${resultText}. Результат: ${correct}/${total}`, resultClass.replace('error', 'warning'));
    });
  }
});
</script>
