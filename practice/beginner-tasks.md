---
layout: default
title: "Практичні завдання - Початковий рівень"
description: "8 завдань для засвоєння основ класифікації графіки та роботи з форматами файлів"
permalink: /practice/beginner-tasks/
---

# Практичні завдання - Початковий рівень

<div class="content-wrapper">
  <div class="card">
    <div class="card-header">
      <h2 class="card-title">🎯 Мета розділу</h2>
    </div>
    <p>Засвоєння основ класифікації графіки, роботи з форматами файлів та базових понять растрової і векторної графіки.</p>
    <div style="margin-top: 1rem;">
      <span class="task-level beginner">Початковий рівень</span>
      <span style="margin-left: 1rem; color: var(--text-secondary);">8 завдань • 4-6 годин</span>
    </div>
  </div>
</div>

## Завдання 1. Класифікація графічних зображень

<div class="task">
  <div class="task-level beginner">Завдання</div>
  <h3>Визначення типу графіки</h3>
  
  <p>Проаналізуйте наступні об'єкти та визначте, який тип графіки (растрова чи векторна) найкраще підходить для кожного. Обґрунтуйте свою відповідь:</p>
  
  <div class="grid grid-2">
    <div class="card">
      <h4>📱 Селфі на смартфоні</h4>
      <div class="quiz-container">
        <div class="answers">
          <div class="answer-option" data-answer="raster">
            <input type="radio" name="selfie" id="selfie-raster">
            <label for="selfie-raster">Растрова графіка</label>
          </div>
          <div class="answer-option" data-answer="vector">
            <input type="radio" name="selfie" id="selfie-vector">
            <label for="selfie-vector">Векторна графіка</label>
          </div>
        </div>
      </div>
    </div>
    
    <div class="card">
      <h4>⚽ Емблема футбольного клубу</h4>
      <div class="quiz-container">
        <div class="answers">
          <div class="answer-option" data-answer="raster">
            <input type="radio" name="emblem" id="emblem-raster">
            <label for="emblem-raster">Растрова графіка</label>
          </div>
          <div class="answer-option" data-answer="vector">
            <input type="radio" name="emblem" id="emblem-vector">
            <label for="emblem-vector">Векторна графіка</label>
          </div>
        </div>
      </div>
    </div>
    
    <div class="card">
      <h4>🗺️ Карта метрополітену</h4>
      <div class="quiz-container">
        <div class="answers">
          <div class="answer-option" data-answer="raster">
            <input type="radio" name="map" id="map-raster">
            <label for="map-raster">Растрова графіка</label>
          </div>
          <div class="answer-option" data-answer="vector">
            <input type="radio" name="map" id="map-vector">
            <label for="map-vector">Векторна графіка</label>
          </div>
        </div>
      </div>
    </div>
    
    <div class="card">
      <h4>📱 Піктограма для мобільного додатка</h4>
      <div class="quiz-container">
        <div class="answers">
          <div class="answer-option" data-answer="raster">
            <input type="radio" name="icon" id="icon-raster">
            <label for="icon-raster">Растрова графіка</label>
          </div>
          <div class="answer-option" data-answer="vector">
            <input type="radio" name="icon" id="icon-vector">
            <label for="icon-vector">Векторна графіка</label>
          </div>
        </div>
      </div>
    </div>
  </div>
  
  <div style="text-align: center; margin-top: 2rem;">
    <button class="btn btn-primary" onclick="checkTask1()">Перевірити відповіді</button>
  </div>
  
  <div id="task1-result" style="margin-top: 1rem;"></div>
</div>

## Завдання 2. Аналіз форматів файлів

<div class="task">
  <div class="task-level beginner">Завдання</div>
  <h3>Характеристики форматів</h3>
  
  <p>Опишіть основні характеристики чотирьох форматів графічних файлів:</p>
  
  <div class="grid grid-2">
    <div class="card">
      <div class="card-header">
        <h4 class="card-title">📁 JPEG</h4>
      </div>
      <ul>
        <li><strong>Тип графіки:</strong> <span style="color: var(--primary-color);">Растрова</span></li>
        <li><strong>Прозорість:</strong> <span style="color: var(--error-color);">Не підтримує</span></li>
        <li><strong>Стиснення:</strong> <span style="color: var(--warning-color);">З втратами</span></li>
        <li><strong>Застосування:</strong> Фотографії, веб-зображення</li>
        <li><strong>Перевага:</strong> Малий розмір файлу</li>
        <li><strong>Недолік:</strong> Втрата якості при стисненні</li>
      </ul>
    </div>
    
    <div class="card">
      <div class="card-header">
        <h4 class="card-title">📁 PNG</h4>
      </div>
      <ul>
        <li><strong>Тип графіки:</strong> <span style="color: var(--primary-color);">Растрова</span></li>
        <li><strong>Прозорість:</strong> <span style="color: var(--success-color);">Підтримує</span></li>
        <li><strong>Стиснення:</strong> <span style="color: var(--success-color);">Без втрат</span></li>
        <li><strong>Застосування:</strong> Графіка з прозорістю, логотипи</li>
        <li><strong>Перевага:</strong> Висока якість, прозорість</li>
        <li><strong>Недолік:</strong> Більший розмір файлу</li>
      </ul>
    </div>
    
    <div class="card">
      <div class="card-header">
        <h4 class="card-title">📁 SVG</h4>
      </div>
      <ul>
        <li><strong>Тип графіки:</strong> <span style="color: var(--secondary-color);">Векторна</span></li>
        <li><strong>Прозорість:</strong> <span style="color: var(--success-color);">Підтримує</span></li>
        <li><strong>Стиснення:</strong> <span style="color: var(--success-color);">Масштабований</span></li>
        <li><strong>Застосування:</strong> Іконки, логотипи, веб-графіка</li>
        <li><strong>Перевага:</strong> Нескінченна масштабованість</li>
        <li><strong>Недолік:</strong> Не підходить для складних зображень</li>
      </ul>
    </div>
    
    <div class="card">
      <div class="card-header">
        <h4 class="card-title">📁 GIF</h4>
      </div>
      <ul>
        <li><strong>Тип графіки:</strong> <span style="color: var(--primary-color);">Растрова</span></li>
        <li><strong>Прозорість:</strong> <span style="color: var(--warning-color);">Обмежено</span></li>
        <li><strong>Стиснення:</strong> <span style="color: var(--success-color);">Без втрат</span></li>
        <li><strong>Застосування:</strong> Анімація, прості зображення</li>
        <li><strong>Перевага:</strong> Підтримка анімації</li>
        <li><strong>Недолік:</strong> Максимум 256 кольорів</li>
      </ul>
    </div>
  </div>
</div>

## Завдання 3. Розрахунки параметрів растрової графіки

<div class="task">
  <div class="task-level beginner">Завдання</div>
  <h3>Математичні обчислення</h3>
  
  <p>Виконайте розрахунки для растрового зображення розміром <strong>800×600 пікселів</strong> з глибиною кольору <strong>24 біти</strong>:</p>
  
  <div class="content-wrapper">
    <div class="grid grid-2">
      <div class="card">
        <h4>📊 Розрахунки</h4>
        <div class="quiz-container">
          <div class="question">
            <p><strong>1. Загальна кількість пікселів:</strong></p>
            <div class="answers">
              <div class="answer-option" data-answer="480000">
                <input type="radio" name="pixels" id="pixels-1">
                <label for="pixels-1">480 000 пікселів</label>
              </div>
              <div class="answer-option" data-answer="1400">
                <input type="radio" name="pixels" id="pixels-2">
                <label for="pixels-2">1 400 пікселів</label>
              </div>
              <div class="answer-option" data-answer="1440000">
                <input type="radio" name="pixels" id="pixels-3">
                <label for="pixels-3">1 440 000 пікселів</label>
              </div>
            </div>
          </div>
          
          <div class="question">
            <p><strong>2. Розмір файлу без стиснення (в мегабайтах):</strong></p>
            <div class="answers">
              <div class="answer-option" data-answer="1.37">
                <input type="radio" name="filesize" id="size-1">
                <label for="size-1">≈ 1,37 МБ</label>
              </div>
              <div class="answer-option" data-answer="0.46">
                <input type="radio" name="filesize" id="size-2">
                <label for="size-2">≈ 0,46 МБ</label>
              </div>
              <div class="answer-option" data-answer="4.11">
                <input type="radio" name="filesize" id="size-3">
                <label for="size-3">≈ 4,11 МБ</label>
              </div>
            </div>
          </div>
        </div>
        
        <button class="btn btn-primary" onclick="checkTask3()" style="margin-top: 1rem;">Перевірити розрахунки</button>
        <div id="task3-result" style="margin-top: 1rem;"></div>
      </div>
      
      <div class="card">
        <h4>💡 Формули для розрахунків</h4>
        <div style="background: var(--bg-secondary); padding: 1rem; border-radius: 6px; margin-bottom: 1rem;">
          <p><strong>Кількість пікселів:</strong><br>
          Ширина × Висота = 800 × 600 = 480 000</p>
        </div>
        
        <div style="background: var(--bg-secondary); padding: 1rem; border-radius: 6px; margin-bottom: 1rem;">
          <p><strong>Розмір у байтах:</strong><br>
          Пікселі × (Біти на піксель ÷ 8)<br>
          480 000 × (24 ÷ 8) = 480 000 × 3 = 1 440 000 байт</p>
        </div>
        
        <div style="background: var(--bg-secondary); padding: 1rem; border-radius: 6px;">
          <p><strong>Розмір у МБ:</strong><br>
          1 440 000 ÷ 1 048 576 ≈ 1,37 МБ</p>
        </div>
      </div>
    </div>
  </div>
</div>

## Завдання 4. Планування роздільної здатності

<div class="task">
  <div class="task-level beginner">Завдання</div>
  <h3>Технічні вимоги до зображень</h3>
  
  <p>Розробіть технічні вимоги до зображень для різних цілей використання:</p>
  
  <div class="grid grid-2">
    <div class="card">
      <div class="card-header">
        <h4 class="card-title">👤 Аватар для соціальної мережі</h4>
      </div>
      <ul>
        <li><strong>Розмір:</strong> 400×400 пікселів</li>
        <li><strong>Формат:</strong> PNG або JPEG</li>
        <li><strong>DPI:</strong> 72 dpi (екранна роздільна здатність)</li>
        <li><strong>Розмір файлу:</strong> до 1 МБ</li>
        <li><strong>Особливості:</strong> Квадратний формат, оптимізація для швидкого завантаження</li>
      </ul>
    </div>
    
    <div class="card">
      <div class="card-header">
        <h4 class="card-title">🖨️ Фотографія для друку A4</h4>
      </div>
      <ul>
        <li><strong>Розмір:</strong> 2480×3508 пікселів (A4 при 300 dpi)</li>
        <li><strong>Формат:</strong> TIFF або PNG (без втрат)</li>
        <li><strong>DPI:</strong> 300 dpi (якість друку)</li>
        <li><strong>Розмір файлу:</strong> 20-50 МБ</li>
        <li><strong>Особливості:</strong> Висока якість, кольоровий профіль для друку</li>
      </ul>
    </div>
    
    <div class="card">
      <div class="card-header">
        <h4 class="card-title">🌐 Зображення для веб-сайту школи</h4>
      </div>
      <ul>
        <li><strong>Розмір:</strong> 1200×800 пікселів</li>
        <li><strong>Формат:</strong> JPEG (оптимізований)</li>
        <li><strong>DPI:</strong> 72 dpi</li>
        <li><strong>Розмір файлу:</strong> 150-300 КБ</li>
        <li><strong>Особливості:</strong> Баланс якості та швидкості завантаження</li>
      </ul>
    </div>
    
    <div class="card">
      <div class="card-header">
        <h4 class="card-title">📱 Іконка для мобільного додатка</h4>
      </div>
      <ul>
        <li><strong>Розмір:</strong> 512×512 пікселів (базовий), множинні розміри</li>
        <li><strong>Формат:</strong> PNG з прозорістю або SVG</li>
        <li><strong>DPI:</strong> Різні щільності (mdpi, hdpi, xhdpi, xxhdpi)</li>
        <li><strong>Розмір файлу:</strong> до 100 КБ</li>
        <li><strong>Особливості:</strong> Адаптивність під різні екрани</li>
      </ul>
    </div>
  </div>
</div>

## Завдання 5. Аналіз впливу масштабування

<div class="task">
  <div class="task-level beginner">Завдання</div>
  <h3>Ефекти масштабування</h3>
  
  <div class="image-comparison">
    <div class="image-container">
      <img src="/lab-2/assets/images/image5.png" alt="Растрове зображення при збільшенні" loading="lazy">
      <div class="image-caption">Растрове зображення при збільшенні - видна пікселізація</div>
    </div>
    <div class="image-container">
      <img src="/lab-2/assets/images/image11.png" alt="Векторне зображення при різних розмірах" loading="lazy">
      <div class="image-caption">Векторне зображення зберігає якість при будь-якому масштабі</div>
    </div>
  </div>
  
  <div class="content-wrapper">
    <h4>Аналіз ситуацій:</h4>
    
    <div class="card">
      <h5>📈 Растрове зображення 200×200 пікселів збільшують до 800×800 пікселів</h5>
      <p><strong>Що відбувається:</strong> З'являється ефект "пікселізації" - окремі пікселі стають видимими, зображення стає "квадратним" і втрачає чіткість.</p>
      <p><strong>Причина:</strong> При збільшенні комп'ютер "розтягує" існуючі пікселі або додає нові через інтерполяцію.</p>
      <p><strong>Спосіб покращення:</strong> Використати початкове зображення вищої роздільної здатності або алгоритми штучного інтелекту для покращення якості.</p>
    </div>
    
    <div class="card">
      <h5>📐 Векторний логотип масштабують від розміру візитки до розміру плакату</h5>
      <p><strong>Що відбувається:</strong> Логотип залишається ідеально чітким при будь-якому розмірі - лінії залишаються рівними, кольори однорідними.</p>
      <p><strong>Причина:</strong> Комп'ютер перераховує математичні формули для нового розміру, а не розтягує пікселі.</p>
      <p><strong>Переваги:</strong> Один файл підходить для всіх розмірів - від візитки до рекламного щита.</p>
    </div>
    
    <div class="card">
      <h5>📱 Фотографію зменшують для використання як піктограма</h5>
      <p><strong>Що відбувається:</strong> Деталі зображення можуть злитися або зникнути, текст стає нечитабельним.</p>
      <p><strong>Причина:</strong> При зменшенні дрібні деталі втрачаються через обмеження кількості пікселів.</p>
      <p><strong>Спосіб покращення:</strong> Створити спеціальну спрощену версію для малих розмірів або використати векторну альтернативу.</p>
    </div>
  </div>
</div>

## Завдання 6-8. Практичні роботи

<div class="content-wrapper">
  <div class="card">
    <div class="card-header">
      <h3 class="card-title">💻 Практичні роботи з графічними редакторами</h3>
    </div>
    <p>Наступні три завдання потребують роботи з графічними редакторами. Виберіть доступні вам програми:</p>
    
    <div class="grid grid-3">
      <div class="card">
        <h4>🖼️ Растрові редактори</h4>
        <ul>
          <li><strong>GIMP</strong> (безкоштовний)</li>
          <li><strong>Paint.NET</strong> (безкоштовний)</li>
          <li><strong>Canva</strong> (онлайн)</li>
          <li>Adobe Photoshop</li>
        </ul>
      </div>
      
      <div class="card">
        <h4>📐 Векторні редактори</h4>
        <ul>
          <li><strong>Inkscape</strong> (безкоштовний)</li>
          <li><strong>Figma</strong> (онлайн)</li>
          <li>Adobe Illustrator</li>
          <li>CorelDRAW</li>
        </ul>
      </div>
      
      <div class="card">
        <h4>🔗 Корисні посилання</h4>
        <ul>
          <li><a href="https://www.gimp.org/" target="_blank">Завантажити GIMP</a></li>
          <li><a href="https://inkscape.org/" target="_blank">Завантажити Inkscape</a></li>
          <li><a href="https://www.canva.com/" target="_blank">Canva онлайн</a></li>
          <li><a href="https://www.figma.com/" target="_blank">Figma онлайн</a></li>
        </ul>
      </div>
    </div>
  </div>
</div>

<div class="task">
  <div class="task-level beginner">Завдання 6</div>
  <h3>Створення колажу в растровому редакторі</h3>
  
  <div class="card">
    <h4>🎯 Мета: Створити колаж "Моя школа"</h4>
    
    <h5>Технічні вимоги:</h5>
    <ul>
      <li>Розмір полотна: 1024×768 пікселів</li>
      <li>Роздільна здатність: 72 dpi</li>
      <li>Використати мінімум 5 фотографій</li>
      <li>Застосувати мінімум 3 ефекти (тінь, розмиття, прозорість)</li>
    </ul>
    
    <h5>Порядок виконання:</h5>
    <ol>
      <li>Створіть новий документ із зазначеними параметрами</li>
      <li>Додайте фотографії школи, класу, друзів</li>
      <li>Обрізайте зображення та налаштуйте їх розміри</li>
      <li>Застосуйте ефекти для покращення композиції</li>
      <li>Додайте текстовий заголовок</li>
      <li>Збережіть у форматі PNG та JPEG, порівняйте розміри файлів</li>
    </ol>
  </div>
</div>

<div class="task">
  <div class="task-level beginner">Завдання 7</div>
  <h3>Створення логотипу у векторному редакторі</h3>
  
  <div class="card">
    <h4>🎯 Мета: Розробити простий логотип класу</h4>
    
    <h5>Технічні вимоги:</h5>
    <ul>
      <li>Використати основні геометричні фігури</li>
      <li>Застосувати мінімум 3 кольори</li>
      <li>Розмір: 200×200 мм</li>
      <li>Логотип повинен добре виглядати у чорно-білому варіанті</li>
    </ul>
    
    <h5>Порядок виконання:</h5>
    <ol>
      <li>Створіть композицію з кіл, квадратів, трикутників</li>
      <li>Додайте текст з назвою класу</li>
      <li>Налаштуйте кольорову схему</li>
      <li>Створіть монохромну версію</li>
      <li>Експортуйте у форматах SVG та PNG (різні розміри)</li>
      <li>Порівняйте, як зображення виглядає при різних розмірах</li>
    </ol>
  </div>
</div>

<div class="task">
  <div class="task-level beginner">Завдання 8</div>
  <h3>Обробка фотографії для різних цілей</h3>
  
  <div class="card">
    <h4>🎯 Мета: Підготувати одну фотографію для різних способів використання</h4>
    
    <h5>Завдання для виконання:</h5>
    <div class="grid grid-2">
      <div class="card">
        <h6>🌐 Для веб-сайту</h6>
        <ul>
          <li>Розмір: 800×600 пікселів</li>
          <li>Формат: JPEG (якість 80%)</li>
          <li>Оптимізація для швидкого завантаження</li>
        </ul>
      </div>
      
      <div class="card">
        <h6>🖨️ Для друку</h6>
        <ul>
          <li>Залишити оригінальний розмір</li>
          <li>Формат: TIFF або PNG</li>
          <li>300 dpi для якісного друку</li>
        </ul>
      </div>
      
      <div class="card">
        <h6>📱 Для соціальних мереж</h6>
        <ul>
          <li>Обрізати до квадрату 500×500</li>
          <li>Формат: JPEG</li>
          <li>Додати фільтри за бажанням</li>
        </ul>
      </div>
      
      <div class="card">
        <h6>💻 Для презентації</h6>
        <ul>
          <li>Розмір: 1920×1080 пікселів</li>
          <li>Додати підпис або заголовок</li>
          <li>Формат: PNG для якості</li>
        </ul>
      </div>
    </div>
    
    <p><strong>Підсумок:</strong> Порівняйте розміри отриманих файлів та поясніть різницю у звіті.</p>
  </div>
</div>

## Критерії оцінювання

<div class="content-wrapper">
  <div class="grid grid-3">
    <div class="card">
      <div class="card-header">
        <h4 class="card-title">⚙️ Технічна якість (40%)</h4>
      </div>
      <ul>
        <li>Дотримання технічних вимог</li>
        <li>Правильний вибір форматів файлів</li>
        <li>Оптимізація розмірів файлів</li>
        <li>Якість виконання технічних операцій</li>
      </ul>
    </div>
    
    <div class="card">
      <div class="card-header">
        <h4 class="card-title">🎨 Креативність та дизайн (35%)</h4>
      </div>
      <ul>
        <li>Оригінальність рішення</li>
        <li>Композиційна побудова</li>
        <li>Кольорове рішення</li>
        <li>Загальне враження</li>
      </ul>
    </div>
    
    <div class="card">
      <div class="card-header">
        <h4 class="card-title">⚡ Функціональність (25%)</h4>
      </div>
      <ul>
        <li>Відповідність поставленій меті</li>
        <li>Зручність використання</li>
        <li>Адаптивність до різних умов</li>
        <li>Завершеність проекту</li>
      </ul>
    </div>
  </div>
</div>

## Навігація

<div class="content-wrapper">
  <div class="grid grid-3">
    <div class="card">
      <a href="/lab-2/theory/main-content/" class="btn btn-outline" style="width: 100%;">
        ⬅️ Повернутися до теорії
      </a>
    </div>
    <div class="card">
      <a href="/lab-2/practice/intermediate-tasks/" class="btn btn-primary" style="width: 100%;">
        ➡️ Середній рівень
      </a>
    </div>
    <div class="card">
      <a href="/lab-2/tests/basic-test/" class="btn btn-secondary" style="width: 100%;">
        ✅ Пройти тест
      </a>
    </div>
  </div>
</div>

<script>
// Функції для перевірки завдань
function checkTask1() {
  const answers = {
    'selfie': 'raster',
    'emblem': 'vector',
    'map': 'vector',
    'icon': 'vector'
  };
  
  let correct = 0;
  let total = Object.keys(answers).length;
  
  for (let [question, correctAnswer] of Object.entries(answers)) {
    const selected = document.querySelector(`input[name="${question}"]:checked`);
    if (selected && selected.value === correctAnswer) {
      correct++;
      selected.closest('.card').style.borderColor = 'var(--success-color)';
    } else if (selected) {
      selected.closest('.card').style.borderColor = 'var(--error-color)';
    }
  }
  
  const result = document.getElementById('task1-result');
  const percentage = (correct / total) * 100;
  
  let resultClass = 'error';
  let resultText = 'Потрібно краще вивчити матеріал';
  
  if (percentage >= 80) {
    resultClass = 'success';
    resultText = 'Відмінно!';
  } else if (percentage >= 60) {
    resultClass = 'warning';
    resultText = 'Непогано, але можна краще';
  }
  
  result.innerHTML = `
    <div class="test-result ${resultClass}">
      <strong>${resultText}</strong><br>
      Правильних відповідей: ${correct} з ${total} (${Math.round(percentage)}%)
    </div>
  `;
}

function checkTask3() {
  const answers = {
    'pixels': '480000',
    'filesize': '1.37'
  };
  
  let correct = 0;
  let total = Object.keys(answers).length;
  
  for (let [question, correctAnswer] of Object.entries(answers)) {
    const selected = document.querySelector(`input[name="${question}"]:checked`);
    if (selected && selected.value === correctAnswer) {
      correct++;
    }
  }
  
  const result = document.getElementById('task3-result');
  const percentage = (correct / total) * 100;
  
  let resultClass = 'error';
  let resultText = 'Перевірте розрахунки';
  
  if (percentage === 100) {
    resultClass = 'success';
    resultText = 'Всі розрахунки правильні!';
  } else if (percentage >= 50) {
    resultClass = 'warning';
    resultText = 'Частково правильно';
  }
  
  result.innerHTML = `
    <div class="test-result ${resultClass}">
      <strong>${resultText}</strong><br>
      Правильних відповідей: ${correct} з ${total}
    </div>
  `;
}
</script>
