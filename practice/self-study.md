---
layout: default
title: "Завдання для самостійної роботи"
description: "19 різноманітних завдань для поглибленого вивчення та самостійної практики"
permalink: /practice/self-study/
---

# Завдання для самостійної роботи

<div class="content-wrapper">
  <div class="card">
    <div class="card-header">
      <h2 class="card-title">🎯 Мета розділу</h2>
    </div>
    <p>Поглиблене вивчення растрової та векторної графіки через самостійну практичну роботу, експерименти та творчі проекти різного рівня складності.</p>
    <div style="margin-top: 1rem;">
      <span class="task-level beginner">Всі рівні</span>
      <span style="margin-left: 1rem; color: var(--text-secondary);">19 завдань • 15-20 годин</span>
    </div>
  </div>
</div>

## 1. Поняття комп'ютерної графіки (класифікація типів)

<div class="task">
  <div class="task-level beginner">Завдання 1</div>
  <h3>"Психоделічна палітра"</h3>
  
  <div class="card">
    <h4>🔍 Мета: Навчитися визначати типи графіки на практиці</h4>
    <p>Візьміть набір зображень (фото, малюнки, скріншоти тощо) та проведіть їх класифікацію.</p>
    
    <h5>Завдання для виконання:</h5>
    <ol>
      <li>Зберіть 15-20 різноманітних зображень з різних джерел</li>
      <li>Визначте їхній тип (растровий, векторний, 3D, гібридний)</li>
      <li>Обґрунтуйте свій вибір, зазначивши ключові ознаки</li>
      <li>Створіть таблицю з результатами аналізу</li>
      <li>Зробіть висновки про найпоширеніші типи в різних сферах</li>
    </ol>
    
    <div style="background: var(--bg-secondary); padding: 1rem; border-radius: 6px; margin-top: 1rem;">
      <strong>Поради:</strong> Включіть логотипи, фотографії, ікони додатків, рекламні банери, схеми, карти тощо
    </div>
  </div>
</div>

<div class="task">
  <div class="task-level beginner">Завдання 2</div>
  <h3>"Маски класифікації"</h3>
  
  <div class="card">
    <h4>📊 Мета: Створити наочну інфографіку про типи графіки</h4>
    
    <div class="grid grid-2">
      <div>
        <h5>Елементи інфографіки:</h5>
        <ul>
          <li>Растрова графіка + приклади</li>
          <li>Векторна графіка + приклади</li>
          <li>Фрактальна графіка + приклади</li>
          <li>3D графіка + приклади</li>
          <li>Гібридна графіка + приклади</li>
        </ul>
      </div>
      <div>
        <h5>Технічні вимоги:</h5>
        <ul>
          <li>Розмір: A3 або цифровий формат</li>
          <li>Умовні знаки та піктограми</li>
          <li>Короткі визначення</li>
          <li>Кольорове кодування типів</li>
          <li>Зручна для сприйняття структура</li>
        </ul>
      </div>
    </div>
  </div>
</div>

<div class="task">
  <div class="task-level intermediate">Завдання 3</div>
  <h3>"Вчитель на один день!"</h3>
  
  <div class="card">
    <h4>🎓 Мета: Підготувати навчальний матеріал для інших</h4>
    <p>Створіть міні-лекцію (відео або презентацію) на тему «Комп'ютерна графіка»</p>
    
    <h5>Структура лекції:</h5>
    <ol>
      <li><strong>Вступ (2-3 хв):</strong> Що таке комп'ютерна графіка?</li>
      <li><strong>Основна частина (8-10 хв):</strong> Типи графіки з прикладами</li>
      <li><strong>Практична частина (3-5 хв):</strong> Як розрізняти типи</li>
      <li><strong>Висновки (1-2 хв):</strong> Застосування в житті</li>
    </ol>
    
    <div style="background: var(--accent-color); color: white; padding: 1rem; border-radius: 6px; margin-top: 1rem;">
      <strong>Бонус:</strong> Запишіть відео-лекцію та отримайте додаткові бали!
    </div>
  </div>
</div>

## 2. Растрова графіка

<div class="task">
  <div class="task-level intermediate">Завдання 4</div>
  <h3>"Полювання на артефакти"</h3>
  
  <div class="card">
    <h4>🔬 Мета: Дослідити ефекти масштабування растрових зображень</h4>
    
    <div class="image-container" style="margin: 1rem 0;">
      <img src="/lab-2/assets/images/image5.png" alt="Приклад пікселізації при збільшенні" loading="lazy">
      <div class="image-caption">Ефект пікселізації при збільшенні растрового зображення</div>
    </div>
    
    <h5>Експериментальна частина:</h5>
    <ol>
      <li>Візьміть зображення розміром 100×100 пікселів</li>
      <li>Збільште його до 400×400 пікселів у GIMP/Photoshop</li>
      <li>Спробуйте різні алгоритми масштабування:
        <ul>
          <li>Nearest Neighbor (найближчий сусід)</li>
          <li>Bilinear (білінійне)</li>
          <li>Bicubic (бікубічне)</li>
        </ul>
      </li>
      <li>Включіть/відключіть антиаліасинг</li>
      <li>Зробіть порівняльні скріншоти</li>
      <li>Поясніть, коли з'являються "jaggies" (зубчасті краї)</li>
    </ol>
  </div>
</div>

<div class="task">
  <div class="task-level intermediate">Завдання 5</div>
  <h3>"Магічне стиснення"</h3>
  
  <div class="card">
    <h4>📁 Мета: Порівняти різні методи стиснення</h4>
    
    <div class="image-container" style="margin: 1rem 0;">
      <img src="/lab-2/assets/images/image7.png" alt="Порівняння форматів стиснення" loading="lazy">
      <div class="image-caption">Приклад порівняння різних форматів та рівнів стиснення</div>
    </div>
    
    <div class="grid grid-2">
      <div>
        <h5>Експеримент:</h5>
        <ol>
          <li>Візьміть одну й ту саму фотографію</li>
          <li>Збережіть у форматах:
            <ul>
              <li>JPEG (якість 95%, 75%, 50%)</li>
              <li>PNG (24-bit)</li>
              <li>GIF (256 кольорів)</li>
            </ul>
          </li>
          <li>Порівняйте розміри файлів</li>
          <li>Оцініть якість візуально</li>
          <li>Знайдіть артефакти стиснення</li>
        </ol>
      </div>
      <div>
        <h5>Аналіз результатів:</h5>
        <ul>
          <li>Створіть таблицю порівняння</li>
          <li>Вкажіть розмір кожного файлу</li>
          <li>Оцініть якість за 5-бальною шкалою</li>
          <li>Знайдіть optimal quality/size ratio</li>
          <li>Зробіть рекомендації для різних цілей</li>
        </ul>
      </div>
    </div>
  </div>
</div>

<div class="task">
  <div class="task-level advanced">Завдання 6</div>
  <h3>"Кольоровий телескоп"</h3>
  
  <div class="card">
    <h4>🌈 Мета: Дослідити глибину кольору та її вплив на файли</h4>
    
    <h5>Математичні розрахунки:</h5>
    <div style="background: var(--bg-secondary); padding: 1.5rem; border-radius: 8px; margin: 1rem 0;">
      <h6>Формули для роботи:</h6>
      <ul>
        <li><strong>Кількість кольорів:</strong> 2^(біти на піксель)</li>
        <li><strong>Розмір файлу:</strong> ширина × висота × (біти/8) байт</li>
        <li><strong>RGB 24-bit:</strong> 8 біт на канал × 3 канали = 24 біти</li>
        <li><strong>RGBA 32-bit:</strong> 8 біт × 4 канали (з прозорістю)</li>
      </ul>
    </div>
    
    <h5>Практичні завдання:</h5>
    <ol>
      <li>Обчисліть глибину кольору для зображення 800×600:
        <ul>
          <li>1-bit (монохром)</li>
          <li>8-bit (grayscale)</li>
          <li>24-bit (RGB)</li>
          <li>32-bit (RGBA)</li>
        </ul>
      </li>
      <li>Перетворіть кольорове фото в чорно-біле</li>
      <li>Порівняйте розміри файлів</li>
      <li>Створіть палітрове зображення (256 кольорів)</li>
    </ol>
  </div>
</div>

## 3. Векторна графіка

<div class="task">
  <div class="task-level beginner">Завдання 7</div>
  <h3>"Логотип з одного примітива"</h3>
  
  <div class="card">
    <h4>✏️ Мета: Створити логотип, використовуючи мінімум векторних елементів</h4>
    
    <div class="image-container" style="margin: 1rem 0;">
      <img src="/lab-2/assets/images/image8.png" alt="Приклад роботи з кривими Безьє" loading="lazy">
      <div class="image-caption">Робота з кривими Безьє та векторними примітивами</div>
    </div>
    
    <h5>Умови завдання:</h5>
    <ul>
      <li>Використовуйте лише одну криву Безьє або комбінацію кількох</li>
      <li>Створіть у Inkscape або Illustrator</li>
      <li>Логотип має бути максимально простим, але впізнаваним</li>
      <li>Підходящі теми: геометричні фігури, літери, символи</li>
    </ul>
    
    <h5>Технічні вимоги:</h5>
    <ul>
      <li>Формат збереження: SVG</li>
      <li>Кольорів: не більше 3</li>
      <li>Масштабованість: від 16×16 до 512×512 пікселів</li>
    </ul>
  </div>
</div>

<div class="task">
  <div class="task-level intermediate">Завдання 8</div>
  <h3>"Растрове → векторне"</h3>
  
  <div class="card">
    <h4>🔄 Мета: Освоїти процес трасування (vectorization)</h4>
    
    <div class="grid grid-2">
      <div>
        <h5>Етапи роботи:</h5>
        <ol>
          <li>Виберіть просте растрове зображення:
            <ul>
              <li>Силует об'єкта</li>
              <li>Простий логотип</li>
              <li>Іконка</li>
            </ul>
          </li>
          <li>Відкрийте в Inkscape</li>
          <li>Використайте функцію Trace Bitmap</li>
          <li>Налаштуйте параметри трасування</li>
          <li>Відредагуйте результат вручну</li>
        </ol>
      </div>
      <div>
        <h5>Порівняння результатів:</h5>
        <ul>
          <li>Розмір вихідного файлу</li>
          <li>Розмір SVG файлу</li>
          <li>Якість при масштабуванні</li>
          <li>Кількість вузлів (nodes)</li>
          <li>Складність редагування</li>
        </ul>
      </div>
    </div>
    
    <div style="background: var(--warning-color); color: white; padding: 1rem; border-radius: 6px; margin-top: 1rem;">
      <strong>Важливо:</strong> Трасування працює найкраще з простими зображеннями з чіткими контурами
    </div>
  </div>
</div>

<div class="task">
  <div class="task-level intermediate">Завдання 9</div>
  <h3>"Кривий колаж"</h3>
  
  <div class="card">
    <h4>🎨 Мета: Створити художню композицію з векторних елементів</h4>
    
    <h5>Творче завдання:</h5>
    <p>Створіть композицію з фігур (еліпс, зірка тощо), що утворює абстракцію або пейзаж</p>
    
    <div class="grid grid-3">
      <div>
        <h6>Базові елементи:</h6>
        <ul>
          <li>Кола та еліпси</li>
          <li>Багатокутники</li>
          <li>Зірки</li>
          <li>Криві лінії</li>
        </ul>
      </div>
      <div>
        <h6>Техніки роботи:</h6>
        <ul>
          <li>Модифікація вузлів</li>
          <li>Градієнти</li>
          <li>Прозорість</li>
          <li>Шари (layers)</li>
        </ul>
      </div>
      <div>
        <h6>Експерименти:</h6>
        <ul>
          <li>Змішування кольорів</li>
          <li>Дублювання об'єктів</li>
          <li>Деформації</li>
          <li>Симетрія</li>
        </ul>
      </div>
    </div>
  </div>
</div>

## 4. Порівняльний аналіз растрової та векторної графіки

<div class="task">
  <div class="task-level intermediate">Завдання 10</div>
  <h3>"Мінімальна vs максимальна"</h3>
  
  <div class="card">
    <h4>📊 Мета: Порівняти поведінку різних типів графіки при масштабуванні</h4>
    
    <div class="image-container" style="margin: 1rem 0;">
      <img src="/lab-2/assets/images/image11.png" alt="Порівняння растрової та векторної графіки" loading="lazy">
      <div class="image-caption">Поведінка растрової та векторної графіки при різних масштабах</div>
    </div>
    
    <h5>Експериментальна процедура:</h5>
    <ol>
      <li>Створіть одну і ту саму іконку в двох форматах:
        <ul>
          <li>Растровий PNG 200×200 пікселів</li>
          <li>Векторний SVG еквівалентного розміру</li>
        </ul>
      </li>
      <li>Протестуйте масштабування:
        <ul>
          <li>50% (зменшення)</li>
          <li>200% (збільшення)</li>
          <li>500% (сильне збільшення)</li>
        </ul>
      </li>
      <li>Зафіксуйте результати:
        <ul>
          <li>Час відкриття файлу</li>
          <li>Розмір файлу на диску</li>
          <li>Якість відображення</li>
          <li>Наявність артефактів</li>
        </ul>
      </li>
    </ol>
  </div>
</div>

<div class="task">
  <div class="task-level beginner">Завдання 11</div>
  <h3>"Вибір інструменту"</h3>
  
  <div class="card">
    <h4>🛠️ Мета: Навчитися обирати правильний тип графіки для задач</h4>
    
    <div class="grid grid-2">
      <div class="card">
        <h5>Сценарії для аналізу:</h5>
        <ul>
          <li>Створення логотипа компанії</li>
          <li>Банер для соціальної мережі</li>
          <li>Інфографіка з статистикою</li>
          <li>Фотографія для звіту</li>
          <li>Іконки для мобільного додатку</li>
          <li>Карта міста для туристів</li>
        </ul>
      </div>
      <div class="card">
        <h5>Критерії для аналізу:</h5>
        <ul>
          <li>Складність зображення</li>
          <li>Потреба в масштабуванні</li>
          <li>Кількість кольорів</li>
          <li>Розмір файлу</li>
          <li>Можливості редагування</li>
          <li>Сумісність з платформами</li>
        </ul>
      </div>
    </div>
    
    <div style="background: var(--bg-secondary); padding: 1.5rem; border-radius: 8px; margin-top: 1rem;">
      <h5>Формат результату:</h5>
      <p>Створіть таблицю з обґрунтуванням вибору для кожного сценарію, вказавши переваги та недоліки.</p>
    </div>
  </div>
</div>

<div class="task">
  <div class="task-level advanced">Завдання 12</div>
  <h3>"Підхід дизайнерів"</h3>
  
  <div class="card">
    <h4>🏢 Мета: Дослідити реальні приклади використання графіки у брендингу</h4>
    
    <h5>Дослідницька робота:</h5>
    <ol>
      <li>Знайдіть логотипи 10 всесвітньовідомих компаній:
        <ul>
          <li>Apple, Google, Microsoft</li>
          <li>Nike, Adidas, Puma</li>
          <li>McDonald's, Coca-Cola</li>
          <li>Twitter, Instagram</li>
        </ul>
      </li>
      <li>Проаналізуйте кожен логотип:
        <ul>
          <li>Тип графіки (растровий/векторний)</li>
          <li>Складність дизайну</li>
          <li>Кількість кольорів</li>
          <li>Чи можна спростити?</li>
        </ul>
      </li>
      <li>Дослідіть еволюцію: як змінювалися логотипи з часом?</li>
    </ol>
    
    <div style="background: var(--primary-color); color: white; padding: 1rem; border-radius: 6px; margin-top: 1rem;">
      <strong>Результат:</strong> Напишіть короткий текст: "Чому обрали вектор/растр?" для кожного логотипу
    </div>
  </div>
</div>

## 5. Прикладне застосування

<div class="task">
  <div class="task-level advanced">Завдання 13</div>
  <h3>"Мінібрендинг"</h3>
  
  <div class="card">
    <h4>🎪 Мета: Створити комплексний мініпроєкт з фірмовим стилем</h4>
    
    <div class="image-container" style="margin: 1rem 0;">
      <img src="/lab-2/assets/images/image14.jpeg" alt="Приклад брендингу з поєднанням типів графіки" loading="lazy">
      <div class="image-caption">Комплексний брендинг: постер з поєднанням растрових та векторних елементів</div>
    </div>
    
    <h5>Компоненти проекту:</h5>
    <div class="grid grid-2">
      <div>
        <h6>Векторні елементи:</h6>
        <ul>
          <li>Логотип події</li>
          <li>Типографіка (заголовки)</li>
          <li>Декоративні елементи</li>
          <li>Іконки та символи</li>
        </ul>
      </div>
      <div>
        <h6>Растрові елементи:</h6>
        <ul>
          <li>Фонові фотографії</li>
          <li>Портрети учасників</li>
          <li>Текстури</li>
          <li>Ефекти обробки</li>
        </ul>
      </div>
    </div>
    
    <h5>Технічні вимоги:</h5>
    <ul>
      <li><strong>Формати збереження:</strong> 
        <ul>
          <li>Для друку: PDF 300 dpi</li>
          <li>Для веб: PNG/JPEG 72 dpi</li>
        </ul>
      </li>
      <li><strong>Кольорова схема:</strong> не більше 4 основних кольорів</li>
      <li><strong>Розміри:</strong> A3 для друку, 1200×800 для веб</li>
    </ul>
  </div>
</div>

<div class="task">
  <div class="task-level intermediate">Завдання 14</div>
  <h3>"Анімаційний банер"</h3>
  
  <div class="card">
    <h4>🎬 Мета: Створити GIF-банер з кількома слайдами</h4>
    
    <h5>Концепція анімації:</h5>
    <p>Логотип (вектор) + фон фотографія (растр) + плавна поява елементів</p>
    
    <div class="grid grid-3">
      <div>
        <h6>Кадр 1 (1 сек):</h6>
        <ul>
          <li>Фоновий градієнт</li>
          <li>Поява логотипу</li>
        </ul>
      </div>
      <div>
        <h6>Кадр 2-3 (2 сек):</h6>
        <ul>
          <li>Додавання тексту</li>
          <li>Анімація фону</li>
        </ul>
      </div>
      <div>
        <h6>Кадр 4-5 (1 сек):</h6>
        <ul>
          <li>Call-to-action кнопка</li>
          <li>Фінальна композиція</li>
        </ul>
      </div>
    </div>
    
    <h5>Інструменти:</h5>
    <ul>
      <li>Photoshop (Timeline panel)</li>
      <li>GIMP (Filters → Animation)</li>
      <li>Онлайн: Canva, Figma</li>
    </ul>
  </div>
</div>

<div class="task">
  <div class="task-level advanced">Завдання 15</div>
  <h3>"Адаптивне зображення"</h3>
  
  <div class="card">
    <h4>📱 Мета: Створити responsive зображення з HTML/CSS</h4>
    
    <h5>Технічне завдання:</h5>
    <p>Створіть три версії одного зображення для мобільного, планшета і десктопа</p>
    
    <div style="background: var(--bg-secondary); padding: 1.5rem; border-radius: 8px;">
      <h6>HTML код з srcset:</h6>
      <pre style="background: var(--bg-dark); color: white; padding: 1rem; border-radius: 4px; overflow-x: auto;"><code>&lt;picture&gt;
  &lt;source media="(min-width: 1200px)" srcset="desktop.jpg"&gt;
  &lt;source media="(min-width: 768px)" srcset="tablet.jpg"&gt;
  &lt;img src="mobile.jpg" alt="Адаптивне зображення"&gt;
&lt;/picture&gt;</code></pre>
    </div>
    
    <h5>Параметри версій:</h5>
    <ul>
      <li><strong>Mobile:</strong> 480×320, JPEG 70%, до 50 КБ</li>
      <li><strong>Tablet:</strong> 768×512, JPEG 80%, до 100 КБ</li>
      <li><strong>Desktop:</strong> 1200×800, JPEG 90%, до 200 КБ</li>
    </ul>
  </div>
</div>

## 6. Інтернет-приклади завдань

<div class="task">
  <div class="task-level advanced">Завдання 16</div>
  <h3>"Vector Drawing Puzzles"</h3>
  
  <div class="card">
    <h4>🧩 Мета: Завдання-пазли з векторним малюванням</h4>
    <p>За готовим набором команд намалювати картинку (лінії, криві)</p>
    
    <div class="image-container" style="margin: 1rem 0;">
      <img src="/lab-2/assets/images/image9.png" alt="Приклад векторних примітивів та їх поєднання" loading="lazy">
      <div class="image-caption">Побудова складних форм з простих векторних елементів</div>
    </div>
    
    <h5>Приклад алгоритму малювання будинку:</h5>
    <ol>
      <li>Прямокутник (основа): x=100, y=200, width=200, height=150</li>
      <li>Трикутник (дах): points="100,200 200,100 300,200"</li>
      <li>Прямокутник (двері): x=175, y=275, width=50, height=75</li>
      <li>Коло (вікно): cx=150, cy=240, r=20</li>
      <li>Коло (вікно): cx=250, cy=240, r=20</li>
    </ol>
    
    <h5>Варіанти реалізації:</h5>
    <ul>
      <li>SVG код</li>
      <li>Python Turtle Graphics</li>
      <li>JavaScript Canvas</li>
      <li>Векторний редактор</li>
    </ul>
  </div>
</div>

<div class="task">
  <div class="task-level intermediate">Завдання 17</div>
  <h3>"Vexel-art challenge"</h3>
  
  <div class="card">
    <h4>🎨 Мета: Створити зображення в "vexel"-стилі</h4>
    <p>Імітація вектору через растрові шари з чіткими межами</p>
    
    <h5>Техніка Vexel Art:</h5>
    <div class="grid grid-2">
      <div>
        <h6>Принципи:</h6>
        <ul>
          <li>Растрове зображення</li>
          <li>Векторний вигляд</li>
          <li>Чіткі контури</li>
          <li>Обмежена палітра</li>
          <li>Градієнти та тіні</li>
        </ul>
      </div>
      <div>
        <h6>Техніки:</h6>
        <ul>
          <li>Pen Tool для контурів</li>
          <li>Багато окремих шарів</li>
          <li>Gradient overlays</li>
          <li>Drop shadows</li>
          <li>Smooth color transitions</li>
        </ul>
      </div>
    </div>
    
    <div style="background: var(--accent-color); color: white; padding: 1rem; border-radius: 6px; margin-top: 1rem;">
      <strong>Ідея:</strong> Створіть портрет друга або автопортрет у стилі vexel art
    </div>
  </div>
</div>

<div class="task">
  <div class="task-level advanced">Завдання 18</div>
  <h3>"Shader Art"</h3>
  
  <div class="card">
    <h4>💫 Мета: Використати код для генерації графічних патернів</h4>
    <p>Створення фрактальних або анімаційних патернів за допомогою кодування</p>
    
    <h5>Платформи для експериментів:</h5>
    <ul>
      <li><strong>Shadertoy.com</strong> - онлайн GLSL редактор</li>
      <li><strong>Processing.org</strong> - programming для митців</li>
      <li><strong>P5.js</strong> - JavaScript графічна бібліотека</li>
    </ul>
    
    <div style="background: var(--bg-secondary); padding: 1.5rem; border-radius: 8px;">
      <h6>Простий приклад для P5.js:</h6>
      <pre style="background: var(--bg-dark); color: white; padding: 1rem; border-radius: 4px; overflow-x: auto;"><code>function setup() {
  createCanvas(400, 400);
}

function draw() {
  for (let x = 0; x < width; x += 10) {
    for (let y = 0; y < height; y += 10) {
      let c = sin(x * 0.01 + frameCount * 0.05) * 255;
      fill(c, 100, 200);
      rect(x, y, 10, 10);
    }
  }
}</code></pre>
    </div>
  </div>
</div>

<div class="task">
  <div class="task-level advanced">Завдання 19</div>
  <h3>"Mathematics Challenge"</h3>
  
  <div class="card">
    <h4>🔢 Мета: Розв'язати задачу з computer graphics через програмування</h4>
    <p>Алгоритми для обробки зображень (наприклад, marching squares або класифікація пікселів)</p>
    
    <div class="image-container" style="margin: 1rem 0;">
      <img src="/lab-2/assets/images/image10.png" alt="Математичні алгоритми в графіці" loading="lazy">
      <div class="image-caption">Приклад алгоритмічної візуалізації та обробки графічних даних</div>
    </div>
    
    <h5>Варіанти завдань:</h5>
    <div class="grid grid-2">
      <div>
        <h6>Алгоритм Marching Squares:</h6>
        <ul>
          <li>Конвертація растру в вектор</li>
          <li>Побудова контурів</li>
          <li>Векторизація форм</li>
        </ul>
      </div>
      <div>
        <h6>Класифікація пікселів:</h6>
        <ul>
          <li>Виділення об'єктів за кольором</li>
          <li>Сегментація зображення</li>
          <li>Автоматичне трасування</li>
        </ul>
      </div>
    </div>
    
    <div style="background: var(--success-color); color: white; padding: 1rem; border-radius: 6px; margin-top: 1rem;">
      <strong>Бонус:</strong> Реалізуйте алгоритм на Python з використанням OpenCV або PIL
    </div>
  </div>
</div>

## Система оцінювання самостійної роботи

<div class="content-wrapper">
  <div class="grid grid-4">
    <div class="card">
      <div class="card-header">
        <h4 class="card-title">📝 Планування та виконання (25%)</h4>
      </div>
      <ul>
        <li>Дотримання технічних вимог</li>
        <li>Повнота виконання завдань</li>
        <li>Систематичність роботи</li>
        <li>Документування процесу</li>
      </ul>
    </div>
    
    <div class="card">
      <div class="card-header">
        <h4 class="card-title">🔬 Експериментальна робота (30%)</h4>
      </div>
      <ul>
        <li>Якість експериментів</li>
        <li>Аналіз результатів</li>
        <li>Порівняльні дослідження</li>
        <li>Науковий підхід</li>
      </ul>
    </div>
    
    <div class="card">
      <div class="card-header">
        <h4 class="card-title">💡 Креативність (25%)</h4>
      </div>
      <ul>
        <li>Оригінальність ідей</li>
        <li>Творчий підхід</li>
        <li>Нестандартні рішення</li>
        <li>Художня цінність</li>
      </ul>
    </div>
    
    <div class="card">
      <div class="card-header">
        <h4 class="card-title">📊 Аналіз та висновки (20%)</h4>
      </div>
      <ul>
        <li>Глибина аналізу</li>
        <li>Обґрунтованість висновків</li>
        <li>Практична цінність</li>
        <li>Презентація результатів</li>
      </ul>
    </div>
  </div>
</div>

## Рекомендації щодо виконання

<div class="content-wrapper">
  <div class="card">
    <h4>⏱️ Планування часу</h4>
    <div class="grid grid-3">
      <div>
        <h5>Швидкі завдання (1-2 години)</h5>
        <p>Завдання 1, 2, 7, 11 - базові вправи для закріплення теорії</p>
      </div>
      <div>
        <h5>Середні завдання (3-4 години)</h5>
        <p>Завдання 4, 5, 8, 9, 10, 14, 17 - практичні експерименти</p>
      </div>
      <div>
        <h5>Складні проекти (5+ годин)</h5>
        <p>Завдання 3, 6, 12, 13, 15, 16, 18, 19 - комплексні дослідження</p>
      </div>
    </div>
  </div>
</div>

<div class="content-wrapper">
  <div class="grid grid-2">
    <div class="card">
      <h4>📚 Корисні ресурси</h4>
      <ul>
        <li><a href="https://www.gimp.org/tutorials/" target="_blank">GIMP Tutorials</a></li>
        <li><a href="https://inkscape.org/learn/" target="_blank">Inkscape Learn</a></li>
        <li><a href="https://developer.mozilla.org/en-US/docs/Web/SVG" target="_blank">MDN SVG Guide</a></li>
        <li><a href="https://www.canva.com/design-school/" target="_blank">Canva Design School</a></li>
      </ul>
    </div>
    
    <div class="card">
      <h4>🛠️ Інструменти</h4>
      <ul>
        <li><strong>Растрова графіка:</strong> GIMP, Paint.NET, Photoshop</li>
        <li><strong>Векторна графіка:</strong> Inkscape, Illustrator, Figma</li>
        <li><strong>Програмування:</strong> Python, JavaScript, Processing</li>
        <li><strong>Онлайн:</strong> Canva, Figma, Shadertoy</li>
      </ul>
    </div>
  </div>
</div>

## Навігація

<div class="content-wrapper">
  <div class="grid grid-3">
    <div class="card">
      <a href="/lab-2/practice/advanced-tasks/" class="btn btn-outline" style="width: 100%;">
        ⬅️ Високий рівень
      </a>
    </div>
    <div class="card">
      <a href="/lab-2/" class="btn btn-primary" style="width: 100%;">
        🏠 Головна сторінка
      </a>
    </div>
    <div class="card">
      <a href="/lab-2/tests/basic-test/" class="btn btn-secondary" style="width: 100%;">
        ✅ Перевірити знання
      </a>
    </div>
  </div>
</div>
