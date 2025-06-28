---
layout: default
title: "Растрова графіка"
description: "Структура, властивості та формати растрових зображень"
---

<link rel="stylesheet" href="../styles/custom.css">
<script src="../scripts/interactive.js" defer></script>

# Растрова графіка: структура, властивості, формати

<div class="content-wrapper">

## 🎯 Мета розділу

Засвоїти принципи формування растрових зображень на основі піксельної сітки, розуміти характеристики роздільної здатності, глибини кольору та методів стиснення, а також навчитися працювати з основними форматами растрової графіки.

</div>

<div class="content-wrapper">

## 🔲 Принцип побудови растрового зображення

Растрова графіка працює з прямокутною сіткою пікселів — найдрібніших точок, кожна з яких має свій колір. Уявіть аркуш в клітинку, де кожна клітинка зафарбована певним кольором. Коли ми дивимося на всю картинку з відстані, ці кольорові клітинки створюють цілісне зображення.

<div class="image-container">
<img src="../resources/images/image5.png" alt="Піксельна структура растрового зображення">
<div class="image-caption">Растрове зображення: сітка пікселів з різними кольорами</div>
</div>

### Як працює піксельна структура:

1. **Сітка координат** — кожен піксель має точне положення (x, y)
2. **Кольорове значення** — кожен піксель зберігає інформацію про свій колір
3. **Фіксований розмір** — кількість пікселів визначає роздільну здатність
4. **Цілісне зображення** — мільйони пікселів разом створюють картинку

</div>

<div class="content-wrapper">

## 📏 Роздільна здатність

**Роздільна здатність** показує, скільки пікселів містить зображення по горизонталі та вертикалі. 

### Способи вимірювання:

<div class="grid grid-2">

<div class="card">
<h4>📐 Абсолютна роздільна здатність</h4>
<p><strong>Приклад:</strong> 1920×1080 пікселів</p>
<ul>
<li>1920 пікселів по ширині</li>
<li>1080 пікселів по висоті</li>
<li>Загалом: 2 073 600 пікселів</li>
</ul>
</div>

<div class="card">
<h4>🎯 Щільність пікселів</h4>
<p><strong>Вимірюється:</strong> dpi (dots per inch) або ppi (pixels per inch)</p>
<ul>
<li>72 dpi — для веб-зображень</li>
<li>150 dpi — для звичайного друку</li>
<li>300 dpi — для високоякісного друку</li>
</ul>
</div>

</div>

### Правило: Чим більше пікселів, тим чіткіше зображення, але тим більше місця воно займає на диску.

</div>

<div class="content-wrapper">

## 🌈 Глибина кольору

**Глибина кольору** визначає, скільки різних кольорів може мати один піксель. Це залежить від кількості бітів, які використовуються для збереження інформації про колір.

<div class="image-container">
<img src="../resources/images/image6.png" alt="Демонстрація різної глибини кольору">
<div class="image-caption">Вплив глибини кольору на якість зображення</div>
</div>

### Основні типи глибини кольору:

<div class="grid grid-3">

<div class="card">
<h4>1 біт</h4>
<p><strong>2 кольори</strong></p>
<ul>
<li>Чорний і білий</li>
<li>Монохромні зображення</li>
<li>Мінімальний розмір файлу</li>
</ul>
</div>

<div class="card">
<h4>8 біт</h4>
<p><strong>256 кольорів</strong></p>
<ul>
<li>Відтінки сірого</li>
<li>Індексовані кольори</li>
<li>GIF формат</li>
</ul>
</div>

<div class="card">
<h4>24 біти</h4>
<p><strong>16,7 млн кольорів</strong></p>
<ul>
<li>RGB (8+8+8 біт)</li>
<li>Повнокольорові зображення</li>
<li>Фотореалістична якість</li>
</ul>
</div>

</div>

### Розрахунок кількості кольорів:
**Формула:** 2<sup>n</sup>, де n — кількість біт

- 1 біт: 2¹ = 2 кольори
- 8 біт: 2⁸ = 256 кольорів  
- 24 біти: 2²⁴ = 16 777 216 кольорів

</div>

<div class="content-wrapper">

## 💾 Методи стиснення

Стиснення дозволяє зменшити розмір файлу растрового зображення. Існує два основні типи:

<div class="grid grid-2">

<div class="card">
<h4>🔒 Стиснення без втрат (Lossless)</h4>
<p>Дозволяє повністю відновити оригінальне зображення</p>
<ul>
<li><strong>Переваги:</strong> зберігає всі деталі</li>
<li><strong>Недоліки:</strong> менший ступінь стиснення</li>
<li><strong>Формати:</strong> PNG, TIFF, GIF</li>
<li><strong>Застосування:</strong> технічні схеми, логотипи</li>
</ul>
</div>

<div class="card">
<h4>📉 Стиснення з втратами (Lossy)</h4>
<p>Видаляє деталі, які людське око майже не помічає</p>
<ul>
<li><strong>Переваги:</strong> значно менший розмір файлу</li>
<li><strong>Недоліки:</strong> втрата якості</li>
<li><strong>Формати:</strong> JPEG</li>
<li><strong>Застосування:</strong> фотографії, веб-зображення</li>
</ul>
</div>

</div>

</div>

<div class="content-wrapper">

## 📁 Основні формати растрових зображень

<div class="image-container">
<img src="../resources/images/image7.png" alt="Порівняння форматів растрових файлів">
<div class="image-caption">Основні формати растрової графіки та їх особливості</div>
</div>

### Детальний огляд форматів:

<div class="grid grid-2">

<div class="card">
<h4>🖼️ BMP (Bitmap)</h4>
<ul>
<li><strong>Стиснення:</strong> без стиснення</li>
<li><strong>Якість:</strong> максимальна</li>
<li><strong>Розмір файлу:</strong> дуже великий</li>
<li><strong>Застосування:</strong> системні зображення Windows</li>
<li><strong>Прозорість:</strong> не підтримується</li>
</ul>
</div>

<div class="card">
<h4>📷 JPEG (Joint Photographic Experts Group)</h4>
<ul>
<li><strong>Стиснення:</strong> з втратами</li>
<li><strong>Якість:</strong> налаштовується (1-100%)</li>
<li><strong>Розмір файлу:</strong> малий</li>
<li><strong>Застосування:</strong> фотографії, веб-зображення</li>
<li><strong>Прозорість:</strong> не підтримується</li>
</ul>
</div>

<div class="card">
<h4>🌟 PNG (Portable Network Graphics)</h4>
<ul>
<li><strong>Стиснення:</strong> без втрат</li>
<li><strong>Якість:</strong> висока</li>
<li><strong>Розмір файлу:</strong> середній</li>
<li><strong>Застосування:</strong> веб-графіка, логотипи</li>
<li><strong>Прозорість:</strong> підтримується</li>
</ul>
</div>

<div class="card">
<h4>🎬 GIF (Graphics Interchange Format)</h4>
<ul>
<li><strong>Стиснення:</strong> без втрат</li>
<li><strong>Кольори:</strong> максимум 256</li>
<li><strong>Розмір файлу:</strong> малий для простих зображень</li>
<li><strong>Застосування:</strong> анімація, прості зображення</li>
<li><strong>Прозорість:</strong> підтримується (1 біт)</li>
</ul>
</div>

<div class="card">
<h4>🔧 TIFF (Tagged Image File Format)</h4>
<ul>
<li><strong>Стиснення:</strong> з втратами та без</li>
<li><strong>Якість:</strong> професійна</li>
<li><strong>Розмір файлу:</strong> великий</li>
<li><strong>Застосування:</strong> друк, архівування</li>
<li><strong>Прозорість:</strong> підтримується</li>
</ul>
</div>

<div class="card">
<h4>🌐 WebP (Web Picture)</h4>
<ul>
<li><strong>Стиснення:</strong> з втратами та без</li>
<li><strong>Якість:</strong> висока при малому розмірі</li>
<li><strong>Розмір файлу:</strong> на 25-35% менший за JPEG</li>
<li><strong>Застосування:</strong> сучасні веб-сайти</li>
<li><strong>Прозорість:</strong> підтримується</li>
</ul>
</div>

</div>

</div>

<div class="content-wrapper">

## 🧮 Практичні розрахунки

### Розрахунок розміру файлу растрового зображення:

<div class="task task-level intermediate">

**Завдання:** Обчислити розмір файлу без стиснення для зображення 800×600 пікселів з глибиною кольору 24 біти.

**Розв'язання:**
1. **Загальна кількість пікселів:** 800 × 600 = 480 000 пікселів
2. **Біт на піксель:** 24 біти
3. **Загальний розмір у бітах:** 480 000 × 24 = 11 520 000 біт
4. **Розмір у байтах:** 11 520 000 ÷ 8 = 1 440 000 байт
5. **Розмір у мегабайтах:** 1 440 000 ÷ 1 048 576 ≈ **1,37 МБ**

</div>

### Чому практичний розмір може відрізнятися:
- **Метадані** — додаткова інформація про зображення
- **Стиснення** — JPEG може зменшити розмір у 10-20 разів
- **Колірний профіль** — додаткові дані про кольори
- **Заголовки файлу** — службова інформація формату

</div>

<div class="content-wrapper">

## 🔍 Масштабування растрових зображень

Одне з основних обмежень растрової графіки — втрата якості при зміні розміру.

### Що відбувається при збільшенні:

<div class="grid grid-2">

<div class="card">
<h4>📈 Збільшення (Upscaling)</h4>
<ul>
<li>З'являється **пікселізація**</li>
<li>Зображення стає "квадратним"</li>
<li>Втрачається деталізація</li>
<li>Може з'явитися розмивання</li>
</ul>
</div>

<div class="card">
<h4>📉 Зменшення (Downscaling)</h4>
<ul>
<li>Втрачаються дрібні деталі</li>
<li>Може з'явитися муар</li>
<li>Загалом якість краща, ніж при збільшенні</li>
<li>Зменшується розмір файлу</li>
</ul>
</div>

</div>

### Методи покращення масштабування:
- **Бікубічна інтерполяція** — згладжує переходи між пікселями
- **Антиаліасинг** — зменшує ступінчастість ліній
- **ШІ-алгоритми** — сучасні методи збільшення зображень

</div>

<div class="content-wrapper">

## 💻 Практична робота з растровими зображеннями

### Рекомендовані програми:

<div class="grid grid-4">

<div class="card">
<h4>🆓 GIMP</h4>
<p>Безкоштовний аналог Photoshop</p>
<ul>
<li>Повний функціонал</li>
<li>Підтримка всіх форматів</li>
<li>Розширення та плагіни</li>
</ul>
</div>

<div class="card">
<h4>🎨 Paint.NET</h4>
<p>Простий редактор для Windows</p>
<ul>
<li>Інтуїтивний інтерфейс</li>
<li>Шари та ефекти</li>
<li>Плагіни спільноти</li>
</ul>
</div>

<div class="card">
<h4>🌟 Adobe Photoshop</h4>
<p>Професійний стандарт</p>
<ul>
<li>Максимум можливостей</li>
<li>ШІ-інструменти</li>
<li>Інтеграція з Creative Cloud</li>
</ul>
</div>

<div class="card">
<h4>🌐 Canva</h4>
<p>Онлайн-редактор</p>
<ul>
<li>Готові шаблони</li>
<li>Простота використання</li>
<li>Співробітництво</li>
</ul>
</div>

</div>

### Базові операції:
1. **Зміна розміру** — з урахуванням втрати якості
2. **Обрізання** — вибір потрібної частини зображення
3. **Корекція кольорів** — яскравість, контрастність, насиченість
4. **Ретуш** — видалення дефектів та небажаних елементів
5. **Застосування фільтрів** — художні ефекти та корекція

</div>

<div class="content-wrapper">

## 🎯 Ключові поняття розділу

<div class="grid grid-2">

<div class="glossary-term">
<div class="glossary-term-title">Піксель</div>
Найменша частинка зображення в растровій графіці; має свій колір і положення на сітці.
</div>

<div class="glossary-term">
<div class="glossary-term-title">Роздільна здатність</div>
Кількість пікселів по горизонталі й вертикалі на зображенні або щільність пікселів на одиниці довжини.
</div>

<div class="glossary-term">
<div class="glossary-term-title">Глибина кольору</div>
Кількість біт, що використовуються для кодування кольору одного пікселя, визначає кількість можливих кольорів.
</div>

<div class="glossary-term">
<div class="glossary-term-title">Стиснення без втрат</div>
Метод зменшення розміру файлу, що дозволяє повністю відновити оригінальне зображення.
</div>

<div class="glossary-term">
<div class="glossary-term-title">Стиснення з втратами</div>
Метод стиснення, що видаляє частину інформації для значного зменшення розміру файлу.
</div>

<div class="glossary-term">
<div class="glossary-term-title">Пікселізація</div>
Ефект появи видимих квадратних пікселів при збільшенні растрового зображення понад його оригінальний розмір.
</div>

</div>

</div>

<div class="content-wrapper">

## 📝 Контрольні питання

<div class="quiz-container">

<div class="question" data-question-id="raster-structure">
<div class="question-title">З чого складається растрове зображення?</div>
<div class="answers">
<div class="answer-option" data-answer="пікселів">Сітки пікселів</div>
<div class="answer-option" data-answer="неправильно">Геометричних фігур</div>
<div class="answer-option" data-answer="неправильно">Математичних формул</div>
<div class="answer-option" data-answer="неправильно">Текстових описів</div>
</div>
</div>

<div class="question" data-question-id="dpi-meaning">
<div class="question-title">Що означає 300 dpi?</div>
<div class="answers">
<div class="answer-option" data-answer="неправильно">300 пікселів загалом</div>
<div class="answer-option" data-answer="правильно">300 точок на дюйм</div>
<div class="answer-option" data-answer="неправильно">300 кольорів</div>
<div class="answer-option" data-answer="неправильно">300 мегабайт</div>
</div>
</div>

<div class="question" data-question-id="color-depth">
<div class="question-title">Скільки кольорів може мати 8-бітне зображення?</div>
<div class="answers">
<div class="answer-option" data-answer="неправильно">8</div>
<div class="answer-option" data-answer="неправильно">64</div>
<div class="answer-option" data-answer="правильно">256</div>
<div class="answer-option" data-answer="неправильно">16 777 216</div>
</div>
</div>

<div class="question" data-question-id="jpeg-compression">
<div class="question-title">Який тип стиснення використовує JPEG?</div>
<div class="answers">
<div class="answer-option" data-answer="неправильно">Без втрат</div>
<div class="answer-option" data-answer="правильно">З втратами</div>
<div class="answer-option" data-answer="неправильно">Без стиснення</div>
<div class="answer-option" data-answer="неправильно">Гібридне стиснення</div>
</div>
</div>

</div>

</div>

<div class="content-wrapper">

## 📚 Що далі?

<div class="grid grid-3">

<div class="card">
<h4>Попередній розділ:</h4>
<h3>📖 Основи графіки</h3>
<a href="main-content.md" class="btn btn-outline">Повернутися до основ</a>
</div>

<div class="card">
<h4>Наступний розділ:</h4>
<h3>📐 Векторна графіка</h3>
<a href="vector-graphics.md" class="btn btn-primary">Вивчати векторну графіку</a>
</div>

<div class="card">
<h4>Практика:</h4>
<h3>💻 Завдання</h3>
<a href="../practice/beginner-tasks.md" class="btn btn-secondary">Практичні завдання</a>
</div>

</div>

</div>

<nav class="nav">
<div class="container">
<ul class="nav-links">
<li><a href="../index.md">🏠 Головна</a></li>
<li><a href="main-content.md">📖 Основи</a></li>
<li><a href="vector-graphics.md">📐 Векторна</a></li>
<li><a href="comparison.md">⚖️ Порівняння</a></li>
<li><a href="applications.md">🎯 Застосування</a></li>
</ul>
</div>
</nav>