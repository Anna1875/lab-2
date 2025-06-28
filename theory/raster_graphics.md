---
layout: default
title: "Растрова графіка: структура, властивості, формати"
description: "Детальне вивчення растрової графіки: пікселі, роздільна здатність, глибина кольору, формати файлів"
permalink: /theory/raster-graphics/
---

<link rel="stylesheet" href="{{ '/styles/custom.css' | relative_url }}">

# Растрова графіка: структура, властивості, формати

<div class="content-wrapper">
  <div class="card">
    <div class="card-header">
      <h2 class="card-title">🎯 Мета розділу</h2>
    </div>
    <p>Вивчити принципи побудови растрових зображень, основні характеристики (роздільна здатність, глибина кольору), методи стиснення та популярні формати файлів.</p>
  </div>
</div>

## Структура растрової графіки

Растрова графіка працює з прямокутною сіткою пікселів — найдрібніших точок, кожна з яких має свій колір. Уявіть аркуш в клітинку, де кожна клітинка зафарбована певним кольором. Коли ми дивимося на всю картинку з відстані, ці кольорові клітинки створюють цілісне зображення.

<div class="image-container">
  <img src="{{ '/resources/images/image5.png' | relative_url }}" alt="Піксельна структура растрового зображення" loading="lazy">
  <div class="image-caption">Піксельна структура: кожен квадратик — це піксель з власним кольором</div>
</div>

### Що таке піксель?

<div class="content-wrapper">
  <div class="card">
    <div class="card-header">
      <h3 class="card-title">💡 Піксель (Pixel)</h3>
    </div>
    <p><strong>Picture Element</strong> — найменший елемент растрового зображення. Це точка, яка має:</p>
    <ul>
      <li>Фіксоване положення в сітці</li>
      <li>Конкретне кольорове значення</li>
      <li>Певну яскравість</li>
    </ul>
  </div>
</div>

## Основні властивості растрової графіки

### 1. Роздільна здатність (Resolution)

**Роздільна здатність** показує, скільки пікселів містить зображення по горизонталі та вертикалі. 

<div class="grid grid-2">
  <div class="card">
    <div class="card-header">
      <h4 class="card-title">📏 Одиниці вимірювання</h4>
    </div>
    <ul>
      <li><strong>Пікселі:</strong> 1920×1080 (ширина × висота)</li>
      <li><strong>DPI/PPI:</strong> точок на дюйм</li>
      <li><strong>Мегапікселі:</strong> загальна кількість пікселів</li>
    </ul>
  </div>
  
  <div class="card">
    <div class="card-header">
      <h4 class="card-title">🎯 Приклади роздільної здатності</h4>
    </div>
    <ul>
      <li><strong>HD:</strong> 1280×720 (0.9 Мп)</li>
      <li><strong>Full HD:</strong> 1920×1080 (2.1 Мп)</li>
      <li><strong>4K:</strong> 3840×2160 (8.3 Мп)</li>
    </ul>
  </div>
</div>

### 2. Глибина кольору (Color Depth)

Глибина кольору визначає, скільки різних кольорів може мати один піксель. Це залежить від кількості бітів, які використовуються для збереження інформації про колір.

<div class="image-container">
  <img src="{{ '/resources/images/image6.png' | relative_url }}" alt="Глибина кольору та стиснення зображень" loading="lazy">
  <div class="image-caption">Вплив глибини кольору на якість зображення</div>
</div>

<div class="content-wrapper">
  <div class="grid grid-3">
    <div class="card">
      <div class="card-header">
        <h4 class="card-title">1 біт</h4>
      </div>
      <p><strong>2 кольори</strong><br>Чорний і білий</p>
    </div>
    
    <div class="card">
      <div class="card-header">
        <h4 class="card-title">8 біт</h4>
      </div>
      <p><strong>256 кольорів</strong><br>Або 256 відтінків сірого</p>
    </div>
    
    <div class="card">
      <div class="card-header">
        <h4 class="card-title">24 біти (True Color)</h4>
      </div>
      <p><strong>16 777 216 кольорів</strong><br>8 біт на канал (RGB)</p>
    </div>
  </div>
</div>

### 3. Розмір файлу

Розмір растрового файлу залежить від кількох факторів:

<div class="task">
  <div class="task-level beginner">Розрахунок</div>
  <h3>Формула розміру файлу (без стиснення)</h3>
  
  **Розмір = Ширина × Висота × Глибина кольору (в байтах)**
  
  <div class="content-wrapper">
    <div class="card">
      <div class="card-header">
        <h4 class="card-title">🧮 Приклад розрахунку</h4>
      </div>
      <p>Зображення 800×600 пікселів з глибиною 24 біти:</p>
      <ul>
        <li>Кількість пікселів: 800 × 600 = 480 000</li>
        <li>24 біти = 3 байти на піксель</li>
        <li>Розмір: 480 000 × 3 = 1 440 000 байт ≈ 1.4 МБ</li>
      </ul>
    </div>
  </div>
</div>

## Методи стиснення

Компресія дозволяє зменшити розмір файлу. Існує два основні типи:

<div class="grid grid-2">
  <div class="card">
    <div class="card-header">
      <h3 class="card-title">✅ Стиснення без втрат (Lossless)</h3>
    </div>
    <ul>
      <li>Повністю зберігає оригінальні дані</li>
      <li>Можна відновити точний оригінал</li>
      <li>Менший ступінь стиснення</li>
      <li><strong>Формати:</strong> PNG, TIFF, GIF</li>
    </ul>
  </div>
  
  <div class="card">
    <div class="card-header">
      <h3 class="card-title">⚠️ Стиснення з втратами (Lossy)</h3>
    </div>
    <ul>
      <li>Видаляє частину інформації</li>
      <li>Значно зменшує розмір файлу</li>
      <li>Втрата якості (часто непомітна)</li>
      <li><strong>Формати:</strong> JPEG, WebP</li>
    </ul>
  </div>
</div>

## Популярні формати растрової графіки

<div class="image-container">
  <img src="{{ '/resources/images/image7.png' | relative_url }}" alt="Основні формати растрової графіки" loading="lazy">
  <div class="image-caption">Порівняння популярних форматів файлів</div>
</div>

<div class="content-wrapper">
  <div class="grid grid-2">
    <div class="card">
      <div class="card-header">
        <h3 class="card-title">📁 BMP (Bitmap)</h3>
      </div>
      <ul>
        <li><strong>Тип:</strong> Без стиснення</li>
        <li><strong>Якість:</strong> Максимальна</li>
        <li><strong>Розмір:</strong> Дуже великий</li>
        <li><strong>Використання:</strong> Рідко, для зберігання оригіналів</li>
      </ul>
    </div>
    
    <div class="card">
      <div class="card-header">
        <h3 class="card-title">🖼️ JPEG (Joint Photographic Experts Group)</h3>
      </div>
      <ul>
        <li><strong>Тип:</strong> З втратами</li>
        <li><strong>Якість:</strong> Налаштовується (1-100%)</li>
        <li><strong>Розмір:</strong> Компактний</li>
        <li><strong>Використання:</strong> Фотографії, веб</li>
      </ul>
    </div>
    
    <div class="card">
      <div class="card-header">
        <h3 class="card-title">🎨 PNG (Portable Network Graphics)</h3>
      </div>
      <ul>
        <li><strong>Тип:</strong> Без втрат</li>
        <li><strong>Прозорість:</strong> Підтримує</li>
        <li><strong>Розмір:</strong> Середній</li>
        <li><strong>Використання:</strong> Графіка з прозорістю, веб</li>
      </ul>
    </div>
    
    <div class="card">
      <div class="card-header">
        <h3 class="card-title">🎬 GIF (Graphics Interchange Format)</h3>
      </div>
      <ul>
        <li><strong>Кольори:</strong> До 256</li>
        <li><strong>Анімація:</strong> Підтримує</li>
        <li><strong>Розмір:</strong> Малий</li>
        <li><strong>Використання:</strong> Прості анімації, піктограми</li>
      </ul>
    </div>
    
    <div class="card">
      <div class="card-header">
        <h3 class="card-title">🏢 TIFF (Tagged Image File Format)</h3>
      </div>
      <ul>
        <li><strong>Тип:</strong> Без втрат</li>
        <li><strong>Якість:</strong> Професійна</li>
        <li><strong>Розмір:</strong> Великий</li>
        <li><strong>Використання:</strong> Друк, архівування</li>
      </ul>
    </div>
  </div>
</div>

## Переваги та недоліки растрової графіки

<div class="grid grid-2">
  <div class="card">
    <div class="card-header">
      <h3 class="card-title">✅ Переваги</h3>
    </div>
    <ul>
      <li>Фотореалістичність зображень</li>
      <li>Складні переходи кольорів та тіней</li>
      <li>Природна передача текстур</li>
      <li>Широка підтримка форматів</li>
      <li>Простота редагування окремих областей</li>
    </ul>
  </div>
  
  <div class="card">
    <div class="card-header">
      <h3 class="card-title">❌ Недоліки</h3>
    </div>
    <ul>
      <li>Втрата якості при масштабуванні</li>
      <li>Великий розмір файлів</li>
      <li>Залежність від роздільної здатності</li>
      <li>Складність редагування окремих об'єктів</li>
      <li>"Пікселізація" при збільшенні</li>
    </ul>
  </div>
</div>

## Практичне завдання

<div class="task">
  <div class="task-level intermediate">Практика</div>
  <h3>Аналіз параметрів растрового зображення</h3>
  
  <div class="quiz-container" data-test-id="raster-calculations">
    <div class="question" data-question-id="pixels-calculation">
      <div class="question-title">Скільки пікселів у зображенні розміром 1024×768?</div>
      <div class="answers">
        <div class="answer-option" data-answer="786432">
          <input type="radio" name="pixels" value="786432" id="pixels-correct">
          <label for="pixels-correct">786 432 пікселів</label>
        </div>
        <div class="answer-option" data-answer="1792">
          <input type="radio" name="pixels" value="1792" id="pixels-wrong1">
          <label for="pixels-wrong1">1 792 пікселів</label>
        </div>
        <div class="answer-option" data-answer="524288">
          <input type="radio" name="pixels" value="524288" id="pixels-wrong2">
          <label for="pixels-wrong2">524 288 пікселів</label>
        </div>
      </div>
    </div>
    
    <div class="question" data-question-id="bytes-per-pixel">
      <div class="question-title">Скільки байтів займає один піксель з глибиною кольору 24 біти?</div>
      <div class="answers">
        <div class="answer-option" data-answer="3">
          <input type="radio" name="bytes" value="3" id="bytes-correct">
          <label for="bytes-correct">3 байти</label>
        </div>
        <div class="answer-option" data-answer="24">
          <input type="radio" name="bytes" value="24" id="bytes-wrong1">
          <label for="bytes-wrong1">24 байти</label>
        </div>
        <div class="answer-option" data-answer="1">
          <input type="radio" name="bytes" value="1" id="bytes-wrong2">
          <label for="bytes-wrong2">1 байт</label>
        </div>
      </div>
    </div>
    
    <div class="question" data-question-id="format-choice">
      <div class="question-title">Який формат найкраще підходить для збереження фотографії з метою публікації в інтернеті?</div>
      <div class="answers">
        <div class="answer-option" data-answer="JPEG">
          <input type="radio" name="format" value="JPEG" id="format-correct">
          <label for="format-correct">JPEG</label>
        </div>
        <div class="answer-option" data-answer="BMP">
          <input type="radio" name="format" value="BMP" id="format-wrong1">
          <label for="format-wrong1">BMP</label>
        </div>
        <div class="answer-option" data-answer="TIFF">
          <input type="radio" name="format" value="TIFF" id="format-wrong2">
          <label for="format-wrong2">TIFF</label>
        </div>
      </div>
    </div>
  </div>
</div>

## Коли використовувати растрову графіку?

<div class="content-wrapper">
  <div class="grid grid-2">
    <div class="card">
      <div class="card-header">
        <h3 class="card-title">🎯 Ідеально підходить для:</h3>
      </div>
      <ul>
        <li><strong>Фотографії</strong> — природні зображення</li>
        <li><strong>Цифровий живопис</strong> — художні роботи</li>
        <li><strong>Складні візуальні ефекти</strong> — градієнти, тіні</li>
        <li><strong>Сканування документів</strong> — оцифровка</li>
        <li><strong>Медичні зображення</strong> — рентген, МРТ</li>
      </ul>
    </div>
    
    <div class="card">
      <div class="card-header">
        <h3 class="card-title">⚠️ Не рекомендується для:</h3>
      </div>
      <ul>
        <li><strong>Логотипів</strong> — потрібна масштабованість</li>
        <li><strong>Технічних схем</strong> — чіткі лінії</li>
        <li><strong>Шрифтів</strong> — різні розміри</li>
        <li><strong>Простих геометричних фігур</strong> — надмірність</li>
        <li><strong>Іконок інтерфейсу</strong> — адаптивність</li>
      </ul>
    </div>
  </div>
</div>

## Ключові поняття розділу

<div class="grid grid-3">
  <div class="glossary-term">
    <div class="glossary-term-title">Піксель</div>
    <p>Найменша точка растрового зображення з власним кольором</p>
  </div>
  
  <div class="glossary-term">
    <div class="glossary-term-title">Роздільна здатність</div>
    <p>Кількість пікселів по горизонталі й вертикалі</p>
  </div>
  
  <div class="glossary-term">
    <div class="glossary-term-title">Глибина кольору</div>
    <p>Кількість бітів для зберігання кольору одного пікселя</p>
  </div>
  
  <div class="glossary-term">
    <div class="glossary-term-title">DPI/PPI</div>
    <p>Кількість точок/пікселів на дюйм</p>
  </div>
  
  <div class="glossary-term">
    <div class="glossary-term-title">Компресія</div>
    <p>Стиснення файлу для зменшення розміру</p>
  </div>
  
  <div class="glossary-term">
    <div class="glossary-term-title">Пікселізація</div>
    <p>Ефект "квадратиків" при збільшенні растрового зображення</p>
  </div>
</div>

## Навігація

<div class="content-wrapper">
  <div class="grid grid-3">
    <div class="card">
      <div class="card-header">
        <h3 class="card-title">⬅️ Попередній розділ</h3>
      </div>
      <a href="/theory/main-content/" class="btn btn-outline">
        Основи комп'ютерної графіки
      </a>
    </div>
    
    <div class="card">
      <div class="card-header">
        <h3 class="card-title">➡️ Наступний розділ</h3>
      </div>
      <a href="/theory/vector-graphics/" class="btn btn-primary">
        Векторна графіка
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

<script src="{{ '/scripts/interactive.js' | relative_url }}"></script>

<script>
// Правильні відповіді для тесту розрахунків
window.rasterCalculationsAnswers = {
  'pixels-calculation': '786432',
  'bytes-per-pixel': '3',
  'format-choice': 'JPEG'
};

document.addEventListener('DOMContentLoaded', function() {
  const checkButton = document.querySelector('.check-test[data-test-id="raster-calculations"]');
  if (checkButton) {
    checkButton.addEventListener('click', function() {
      const questions = document.querySelectorAll('[data-test-id="raster-calculations"] .question');
      let correct = 0;
      let total = questions.length;
      
      questions.forEach(question => {
        const questionId = question.dataset.questionId;
        const selectedInput = question.querySelector('input:checked');
        const correctAnswer = window.rasterCalculationsAnswers[questionId];
        
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
      let resultText = 'Потрібно повторити матеріал';
      
      if (percentage >= 80) {
        resultClass = 'success';
        resultText = 'Відмінно! Ви розумієте растрову графіку';
      } else if (percentage >= 60) {
        resultClass = 'warning';
        resultText = 'Непогано, але варто закріпити знання';
      }
      
      Utils.showNotification(`${resultText}. Результат: ${correct}/${total}`, resultClass.replace('error', 'warning'));
    });
  }
});
</script>
