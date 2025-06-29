---
layout: default
title: "Практичні завдання - Середній рівень"
description: "6 завдань для створення комплексних проектів з графікою"
permalink: /practice/intermediate-tasks/
---

# Практичні завдання - Середній рівень

<div class="content-wrapper">
  <div class="card">
    <div class="card-header">
      <h2 class="card-title">🎯 Мета розділу</h2>
    </div>
    <p>Створення комплексних проектів, що поєднують растрову та векторну графіку, оптимізація графічного контенту для різних цілей та розробка елементів фірмового стилю.</p>
    <div style="margin-top: 1rem;">
      <span class="task-level intermediate">Середній рівень</span>
      <span style="margin-left: 1rem; color: var(--text-secondary);">6 завдань • 8-10 годин</span>
    </div>
  </div>
</div>

## Завдання 9. Оптимізація графіки для веб-проекту

<div class="task">
  <div class="task-level intermediate">Завдання</div>
  <h3>Планування графічного контенту</h3>
  
  <div class="card">
    <h4>📚 Ситуація: Веб-сайт шкільної бібліотеки</h4>
    <p>Ви створюєте веб-сайт для шкільної бібліотеки. Проект містить різні типи графічного контенту:</p>
  </div>
  
  <div class="grid grid-2">
    <div class="card">
      <div class="card-header">
        <h5 class="card-title">📖 20 обкладинок книг (фотографії)</h5>
      </div>
      <ul>
        <li><strong>Формат:</strong> JPEG</li>
        <li><strong>Розмір:</strong> 300×450 пікселів</li>
        <li><strong>Якість:</strong> 85% (баланс якості та розміру)</li>
        <li><strong>Розмір файлу:</strong> 25-40 КБ кожна</li>
        <li><strong>Обґрунтування:</strong> JPEG оптимальний для фотографій з багатьма кольорами, помірне стиснення забезпечує швидке завантаження</li>
      </ul>
    </div>
    
    <div class="card">
      <div class="card-header">
        <h5 class="card-title">📚 Логотип бібліотеки</h5>
      </div>
      <ul>
        <li><strong>Формат:</strong> SVG (основний) + PNG (резервний)</li>
        <li><strong>Розмір SVG:</strong> масштабований</li>
        <li><strong>Розмір PNG:</strong> 200×80 пікселів</li>
        <li><strong>Розмір файлу:</strong> SVG ~5-10 КБ, PNG ~15 КБ</li>
        <li><strong>Обґрунтування:</strong> SVG забезпечує ідеальну якість на всіх екранах, PNG як fallback для старих браузерів</li>
      </ul>
    </div>
    
    <div class="card">
      <div class="card-header">
        <h5 class="card-title">🧭 8 іконок для навігації</h5>
      </div>
      <ul>
        <li><strong>Формат:</strong> SVG</li>
        <li><strong>Розмір:</strong> 24×24 пікселі (базовий)</li>
        <li><strong>Стилі:</strong> монохромні, мінімалістичні</li>
        <li><strong>Розмір файлу:</strong> 1-3 КБ кожна</li>
        <li><strong>Обґрунтування:</strong> SVG іконки швидко завантажуються, легко змінюють колір через CSS, адаптуються під різні екрани</li>
      </ul>
    </div>
    
    <div class="card">
      <div class="card-header">
        <h5 class="card-title">🌅 Фонове зображення для головної сторінки</h5>
      </div>
      <ul>
        <li><strong>Формат:</strong> JPEG (оптимізований)</li>
        <li><strong>Розмір:</strong> 1920×1080 пікселів</li>
        <li><strong>Якість:</strong> 70-80%</li>
        <li><strong>Розмір файлу:</strong> 150-300 КБ</li>
        <li><strong>Обґрунтування:</strong> Великі фонові зображення потребують агресивної оптимізації для швидкого завантаження</li>
      </ul>
    </div>
  </div>
  
  <div class="content-wrapper">
    <div class="card">
      <h4>📊 Загальний аналіз проекту</h4>
      <div class="grid grid-2">
        <div>
          <h5>Переваги обраних рішень:</h5>
          <ul>
            <li>Швидке завантаження сайту</li>
            <li>Адаптивність під різні пристрої</li>
            <li>Оптимальне співвідношення якості та розміру</li>
            <li>Сумісність з усіма сучасними браузерами</li>
          </ul>
        </div>
        <div>
          <h5>Загальний обсяг графічного контенту:</h5>
          <ul>
            <li>Обкладинки: ~600-800 КБ (20 × 30-40 КБ)</li>
            <li>Логотип: ~20 КБ</li>
            <li>Іконки: ~16 КБ (8 × 2 КБ)</li>
            <li>Фон: ~250 КБ</li>
            <li><strong>Разом: ~900 КБ</strong></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</div>

## Завдання 10. Аналіз методів стиснення

<div class="task">
  <div class="task-level intermediate">Завдання</div>
  <h3>Порівняння форматів</h3>
  
  <div class="card">
    <h4>🔬 Експеримент з форматами файлів</h4>
    <p>Збережіть одне зображення у різних форматах та проаналізуйте результати:</p>
  </div>
  
  <div class="image-comparison">
    <div class="image-container">
      <img src="/lab-2/assets/images/image6.png" alt="Порівняння різних форматів зображень" loading="lazy">
      <div class="image-caption">Приклад порівняння форматів: оригінал, JPEG 90%, JPEG 50%, PNG</div>
    </div>
    <div class="image-container">
      <img src="/lab-2/assets/images/image7.png" alt="Таблиця порівняння форматів" loading="lazy">
      <div class="image-caption">Таблиця порівняння розмірів та якості різних форматів</div>
    </div>
  </div>
  
  <div class="content-wrapper">
    <h4>📋 Таблиця порівняння (приклад)</h4>
    <table style="width: 100%; border-collapse: collapse; margin: 1rem 0;">
      <thead style="background: var(--bg-secondary);">
        <tr>
          <th style="padding: 0.75rem; border: 1px solid var(--border-color);">Формат</th>
          <th style="padding: 0.75rem; border: 1px solid var(--border-color);">Розмір файлу</th>
          <th style="padding: 0.75rem; border: 1px solid var(--border-color);">Якість (візуально)</th>
          <th style="padding: 0.75rem; border: 1px solid var(--border-color);">Рекомендації</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td style="padding: 0.75rem; border: 1px solid var(--border-color);"><strong>JPEG 90%</strong></td>
          <td style="padding: 0.75rem; border: 1px solid var(--border-color);">285 КБ</td>
          <td style="padding: 0.75rem; border: 1px solid var(--border-color);">Відмінна</td>
          <td style="padding: 0.75rem; border: 1px solid var(--border-color);">Для друку та професійного використання</td>
        </tr>
        <tr>
          <td style="padding: 0.75rem; border: 1px solid var(--border-color);"><strong>JPEG 70%</strong></td>
          <td style="padding: 0.75rem; border: 1px solid var(--border-color);">156 КБ</td>
          <td style="padding: 0.75rem; border: 1px solid var(--border-color);">Добра</td>
          <td style="padding: 0.75rem; border: 1px solid var(--border-color);">Оптимальний для веб-сайтів</td>
        </tr>
        <tr>
          <td style="padding: 0.75rem; border: 1px solid var(--border-color);"><strong>JPEG 50%</strong></td>
          <td style="padding: 0.75rem; border: 1px solid var(--border-color);">98 КБ</td>
          <td style="padding: 0.75rem; border: 1px solid var(--border-color);">Задовільна</td>
          <td style="padding: 0.75rem; border: 1px solid var(--border-color);">Для швидкого завантаження</td>
        </tr>
        <tr>
          <td style="padding: 0.75rem; border: 1px solid var(--border-color);"><strong>PNG</strong></td>
          <td style="padding: 0.75rem; border: 1px solid var(--border-color);">542 КБ</td>
          <td style="padding: 0.75rem; border: 1px solid var(--border-color);">Ідеальна</td>
          <td style="padding: 0.75rem; border: 1px solid var(--border-color);">Коли критична якість та прозорість</td>
        </tr>
        <tr>
          <td style="padding: 0.75rem; border: 1px solid var(--border-color);"><strong>GIF</strong></td>
          <td style="padding: 0.75rem; border: 1px solid var(--border-color);">187 КБ</td>
          <td style="padding: 0.75rem; border: 1px solid var(--border-color);">Обмежена</td>
          <td style="padding: 0.75rem; border: 1px solid var(--border-color);">Тільки для простих зображень та анімації</td>
        </tr>
      </tbody>
    </table>
    
    <div class="card">
      <h4>🎯 Висновки</h4>
      <ul>
        <li><strong>Для фотографій:</strong> JPEG 70-80% - оптимальний баланс</li>
        <li><strong>Для графіки з текстом:</strong> PNG зберігає чіткість</li>
        <li><strong>Для веб-оптимізації:</strong> JPEG 60-70% прийнятний</li>
        <li><strong>Для архівування:</strong> PNG або TIFF без втрат</li>
      </ul>
    </div>
  </div>
</div>

## Завдання 11. Створення інфографіки

<div class="task">
  <div class="task-level intermediate">Завдання</div>
  <h3>Комбінована графіка: "Статистика нашого класу"</h3>
  
  <div class="image-comparison">
    <div class="image-container">
      <img src="/lab-2/assets/images/image14.jpeg" alt="Приклад інфографіки з поєднанням різних типів графіки" loading="lazy">
      <div class="image-caption">Приклад інфографіки, що поєднує растрові та векторні елементи</div>
    </div>
    <div class="image-container">
      <img src="/lab-2/assets/images/image15.png" alt="Структура інфографіки з різними елементами" loading="lazy">
      <div class="image-caption">Структура комбінованої інфографіки</div>
    </div>
  </div>
  
  <div class="card">
    <h4>🎯 Мета: Створити інфографіку поєднуючи векторні та растрові елементи</h4>
    
    <h5>Технічні вимоги:</h5>
    <ul>
      <li>Розмір: A4 (210×297 мм)</li>
      <li>Роздільна здатність: 300 dpi для друку</li>
      <li>Використати діаграми (векторна графіка)</li>
      <li>Додати фотографії учнів (растрова графіка)</li>
      <li>Застосувати єдину кольорову схему</li>
    </ul>
  </div>
  
  <div class="content-wrapper">
    <h4>📊 Етапи створення інфографіки</h4>
    
    <div class="grid grid-2">
      <div class="card">
        <h5>1️⃣ Збір та аналіз даних</h5>
        <ul>
          <li>Кількість учнів у класі</li>
          <li>Розподіл за статтю</li>
          <li>Улюблені предмети</li>
          <li>Хобі та інтереси</li>
          <li>Середній бал</li>
          <li>Плани на майбутнє</li>
        </ul>
      </div>
      
      <div class="card">
        <h5>2️⃣ Створення векторних діаграм</h5>
        <ul>
          <li>Кругові діаграми для відсотків</li>
          <li>Стовпчасті діаграми для порівнянь</li>
          <li>Іконки для категорій</li>
          <li>Декоративні елементи</li>
          <li>Типографіка та заголовки</li>
        </ul>
      </div>
      
      <div class="card">
        <h5>3️⃣ Додавання растрових елементів</h5>
        <ul>
          <li>Колективна фотографія класу</li>
          <li>Портрети учнів (обрізані)</li>
          <li>Фото з шкільних заходів</li>
          <li>Текстури та фони</li>
          <li>Ефекти та фільтри</li>
        </ul>
      </div>
      
      <div class="card">
        <h5>4️⃣ Фінальна композиція</h5>
        <ul>
          <li>Збалансована компоновка</li>
          <li>Єдина кольорова палітра</li>
          <li>Читабельність тексту</li>
          <li>Логічний потік інформації</li>
          <li>Перевірка перед друком</li>
        </ul>
      </div>
    </div>
  </div>
  
  <div class="card">
    <h4>📁 Формати збереження</h4>
    <div class="grid grid-2">
      <div>
        <h5>🖨️ Для друку:</h5>
        <ul>
          <li><strong>PDF</strong> - універсальний формат</li>
          <li>Кольоровий профіль CMYK</li>
          <li>300 dpi роздільна здатність</li>
          <li>Припуски на обрізку 3 мм</li>
        </ul>
      </div>
      <div>
        <h5>🌐 Для веб-перегляду:</h5>
        <ul>
          <li><strong>PNG</strong> - висока якість</li>
          <li>RGB кольоровий простір</li>
          <li>72 dpi роздільна здатність</li>
          <li>Оптимізація розміру файлу</li>
        </ul>
      </div>
    </div>
  </div>
</div>

## Завдання 12. Розробка фірмового стилю

<div class="task">
  <div class="task-level intermediate">Завдання</div>
  <h3>Комплексний брендинг шкільного заходу</h3>
  
  <div class="card">
    <h4>🎪 Мета: Створити базові елементи фірмового стилю для шкільного заходу</h4>
    <p>Наприклад: "День науки", "Спортивний фестиваль", "Творчий конкурс" тощо.</p>
  </div>
  
  <div class="grid grid-2">
    <div class="card">
      <div class="card-header">
        <h5 class="card-title">🎨 Логотип (векторна графіка)</h5>
      </div>
      <ul>
        <li>Створити у векторному редакторі</li>
        <li>Простий, запам'ятовуваний дизайн</li>
        <li>Працює в кольорі та чорно-білому</li>
        <li>Формати: SVG, AI, PDF</li>
        <li>Різні варіації (горизонтальна, вертикальна)</li>
      </ul>
    </div>
    
    <div class="card">
      <div class="card-header">
        <h5 class="card-title">💳 Візитка (комбінована графіка)</h5>
      </div>
      <ul>
        <li>Розмір: 85×55 мм</li>
        <li>Логотип + контактна інформація</li>
        <li>Кольорова схема заходу</li>
        <li>Роздільна здатність: 300 dpi</li>
        <li>Формат для друку: PDF</li>
      </ul>
    </div>
    
    <div class="card">
      <div class="card-header">
        <h5 class="card-title">📋 Плакат A3 (комбінована графіка)</h5>
      </div>
      <ul>
        <li>Розмір: 297×420 мм</li>
        <li>Логотип + програма заходу</li>
        <li>Фотографії попередніх заходів</li>
        <li>Векторні декоративні елементи</li>
        <li>Чітка ієрархія інформації</li>
      </ul>
    </div>
    
    <div class="card">
      <div class="card-header">
        <h5 class="card-title">📱 Іконка для соціальних мереж</h5>
      </div>
      <ul>
        <li>Розмір: 1080×1080 пікселів (квадрат)</li>
        <li>Адаптація логотипу для малого розміру</li>
        <li>Яскраві кольори для привернення уваги</li>
        <li>Формат: PNG з прозорістю</li>
        <li>Версії для різних платформ</li>
      </ul>
    </div>
  </div>
  
  <div class="content-wrapper">
    <div class="card">
      <h4>🎨 Принципи єдності стилю</h4>
      <div class="grid grid-3">
        <div>
          <h5>Кольорова схема</h5>
          <p>2-3 основні кольори + додаткові відтінки</p>
        </div>
        <div>
          <h5>Типографіка</h5>
          <p>1-2 шрифти для заголовків та основного тексту</p>
        </div>
        <div>
          <h5>Графічні елементи</h5>
          <p>Повторювані форми, текстури, стилі оформлення</p>
        </div>
      </div>
    </div>
  </div>
</div>

## Завдання 13. Створення анімованого банера

<div class="task">
  <div class="task-level intermediate">Завдання</div>
  <h3>GIF-анімація для веб-реклами</h3>
  
  <div class="card">
    <h4>🎬 Мета: Створити простий анімований банер у форматі GIF</h4>
    
    <h5>Технічні вимоги:</h5>
    <ul>
      <li>Розмір: 728×90 пікселів (стандартний веб-банер)</li>
      <li>Тривалість: 3-5 секунд</li>
      <li>Кількість кадрів: 8-12</li>
      <li>Розмір файлу: не більше 500 КБ</li>
      <li>Формат: GIF з циклічним повторенням</li>
    </ul>
  </div>
  
  <div class="content-wrapper">
    <h4>🎭 Етапи створення анімації</h4>
    
    <div class="grid grid-2">
      <div class="card">
        <h5>1️⃣ Планування анімації</h5>
        <ul>
          <li>Розробка концепції (що буде рухатися?)</li>
          <li>Сторіборд (послідовність кадрів)</li>
          <li>Тайминг (швидкість зміни кадрів)</li>
          <li>Ключові кадри та проміжні стани</li>
        </ul>
      </div>
      
      <div class="card">
        <h5>2️⃣ Створення статичної основи</h5>
        <ul>
          <li>Фоновий дизайн банера</li>
          <li>Логотип або бренд</li>
          <li>Основний текст</li>
          <li>Кнопка дії (Call-to-Action)</li>
        </ul>
      </div>
      
      <div class="card">
        <h5>3️⃣ Анімаційні ефекти</h5>
        <ul>
          <li>Плавна поява елементів</li>
          <li>Пульсація кнопки</li>
          <li>Зміна кольорів</li>
          <li>Рух тексту або іконок</li>
        </ul>
      </div>
      
      <div class="card">
        <h5>4️⃣ Оптимізація файлу</h5>
        <ul>
          <li>Зменшення кількості кольорів</li>
          <li>Оптимізація часу між кадрами</li>
          <li>Видалення зайвих кадрів</li>
          <li>Стиснення до потрібного розміру</li>
        </ul>
      </div>
    </div>
  </div>
  
  <div class="card">
    <h4>💡 Поради для ефективної анімації</h4>
    <div class="grid grid-2">
      <div>
        <h5>✅ Добре:</h5>
        <ul>
          <li>Плавні переходи</li>
          <li>Зрозумілий заклик до дії</li>
          <li>Не надто швидкі зміни</li>
          <li>Повторювана анімація</li>
        </ul>
      </div>
      <div>
        <h5>❌ Уникати:</h5>
        <ul>
          <li>Занадто швидкого мигання</li>
          <li>Перевантаження ефектами</li>
          <li>Нечитабельного тексту</li>
          <li>Великого розміру файлу</li>
        </ul>
      </div>
    </div>
  </div>
</div>

## Завдання 14. Підготовка графіки для друку

<div class="task">
  <div class="task-level intermediate">Завдання</div>
  <h3>Професійна підготовка макету листівки</h3>
  
  <div class="card">
    <h4>🖨️ Мета: Підготувати макет листівки A5 для шкільного заходу</h4>
    <p>Розмір A5: 148×210 мм</p>
  </div>
  
  <div class="content-wrapper">
    <h4>📐 Покрокова інструкція підготовки</h4>
    
    <div class="grid grid-2">
      <div class="card">
        <h5>1️⃣ Налаштування документа</h5>
        <ul>
          <li><strong>Розмір:</strong> 148×210 мм (A5)</li>
          <li><strong>Роздільна здатність:</strong> 300 dpi</li>
          <li><strong>Кольорова модель:</strong> CMYK</li>
          <li><strong>Припуски на обрізку:</strong> 3 мм з кожного боку</li>
          <li><strong>Робоча область:</strong> 142×204 мм</li>
        </ul>
      </div>
      
      <div class="card">
        <h5>2️⃣ Технічні параметри</h5>
        <ul>
          <li><strong>Роздільна здатність зображень:</strong> 300-600 dpi</li>
          <li><strong>Мінімальний розмір шрифту:</strong> 8 pt</li>
          <li><strong>Товщина ліній:</strong> не менше 0,25 pt</li>
          <li><strong>Відступи від краю:</strong> мінімум 5 мм</li>
        </ul>
      </div>
      
      <div class="card">
        <h5>3️⃣ Кольорові параметри</h5>
        <ul>
          <li><strong>Профіль:</strong> ISO Coated v2 (ECI)</li>
          <li><strong>Максимальне покриття:</strong> 300%</li>
          <li><strong>Чорний текст:</strong> C0 M0 Y0 K100</li>
          <li><strong>Overprint:</strong> тільки для чорного</li>
        </ul>
      </div>
      
      <div class="card">
        <h5>4️⃣ Підготовка до друку</h5>
        <ul>
          <li><strong>Формат збереження:</strong> PDF/X-1a:2001</li>
          <li><strong>Вбудовування шрифтів:</strong> обов'язково</li>
          <li><strong>Стиснення зображень:</strong> без втрат</li>
          <li><strong>Marks and bleeds:</strong> включити</li>
        </ul>
      </div>
    </div>
  </div>
  
  <div class="image-container" style="margin: 2rem 0;">
    <img src="/lab-2/assets/images/image16.png" alt="Схема налаштування припусків для друку" loading="lazy">
    <div class="image-caption">Схема налаштування припусків та безпечної зони для друку</div>
  </div>
  
  <div class="card">
    <h4>⚠️ Важливі моменти для друку</h4>
    <div class="grid grid-2">
      <div>
        <h5>Припуски на обрізку (Bleed)</h5>
        <p>Додаткові 3 мм з кожного боку для компенсації неточності різання.</p>
      </div>
      <div>
        <h5>Безпечна зона</h5>
        <p>Важливі елементи розміщувати не ближче 5 мм від краю обрізання.</p>
      </div>
      <div>
        <h5>CMYK vs RGB</h5>
        <p>CMYK для друку може давати трохи тьмяніші кольори ніж RGB на екрані.</p>
      </div>
      <div>
        <h5>Роздільна здатність</h5>
        <p>300 dpi забезпечує якісний друк без видимої пікселізації.</p>
      </div>
    </div>
  </div>
</div>

## Критерії оцінювання середнього рівня

<div class="content-wrapper">
  <div class="grid grid-4">
    <div class="card">
      <div class="card-header">
        <h4 class="card-title">🔧 Технічна майстерність (30%)</h4>
      </div>
      <ul>
        <li>Правильні налаштування файлів</li>
        <li>Оптимізація під цільове використання</li>
        <li>Дотримання стандартів</li>
      </ul>
    </div>
    
    <div class="card">
      <div class="card-header">
        <h4 class="card-title">🎨 Дизайн та композиція (30%)</h4>
      </div>
      <ul>
        <li>Гармонійність елементів</li>
        <li>Кольорове рішення</li>
        <li>Типографіка</li>
      </ul>
    </div>
    
    <div class="card">
      <div class="card-header">
        <h4 class="card-title">🔄 Комплексність (25%)</h4>
      </div>
      <ul>
        <li>Поєднання типів графіки</li>
        <li>Адаптація під різні формати</li>
        <li>Системний підхід</li>
      </ul>
    </div>
    
    <div class="card">
      <div class="card-header">
        <h4 class="card-title">💡 Креативність (15%)</h4>
      </div>
      <ul>
        <li>Оригінальність рішень</li>
        <li>Нестандартний підхід</li>
        <li>Творче мислення</li>
      </ul>
    </div>
  </div>
</div>

## Навігація

<div class="content-wrapper">
  <div class="grid grid-3">
    <div class="card">
      <a href="/lab-2/practice/beginner-tasks/" class="btn btn-outline" style="width: 100%;">
        ⬅️ Початковий рівень
      </a>
    </div>
    <div class="card">
      <a href="/lab-2/practice/advanced-tasks/" class="btn btn-primary" style="width: 100%;">
        ➡️ Високий рівень
      </a>
    </div>
    <div class="card">
      <a href="/lab-2/tests/basic-test/" class="btn btn-secondary" style="width: 100%;">
        ✅ Тестування знань
      </a>
    </div>
  </div>
</div>
