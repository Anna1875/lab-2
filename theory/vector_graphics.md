---
layout: default
title: "Векторна графіка"
description: "Принципи побудови, властивості та формати векторних зображень"
---

<link rel="stylesheet" href="../styles/custom.css">
<script src="../scripts/interactive.js" defer></script>

# Векторна графіка: принципи побудови, властивості, формати

<div class="content-wrapper">

## 🎯 Мета розділу

Зрозуміти принципи створення векторних зображень на основі математичного опису геометричних об'єктів, засвоїти поняття масштабованості та об'єктної структури, а також навчитися працювати з основними форматами векторної графіки.

</div>

<div class="content-wrapper">

## 📐 Принципи побудови векторної графіки

Векторна графіка працює зовсім по-іншому, ніж растрова. Замість пікселів вона використовує **геометричні фігури** — точки, лінії, криві та багатокутники. Кожна фігура описується математично: координатами, розміром, кольором, товщиною ліній.

### Основа векторної графіки — математичний опис:

<div class="grid grid-2">

<div class="card">
<h4>📍 Точка</h4>
<p>Задається координатами (x, y)</p>
<code>Point(100, 50)</code>
</div>

<div class="card">
<h4>📏 Лінія</h4>
<p>Задається початковою та кінцевою точками</p>
<code>Line(0,0 → 100,100)</code>
</div>

<div class="card">
<h4>⭕ Коло</h4>
<p>Задається центром та радіусом</p>
<code>Circle(center: 50,50; radius: 25)</code>
</div>

<div class="card">
<h4>▭ Прямокутник</h4>
<p>Задається координатами, шириною та висотою</p>
<code>Rect(x: 10, y: 10, w: 80, h: 60)</code>
</div>

</div>

<div class="image-container">
<img src="../resources/images/image8.png" alt="Демонстрація кривих Безьє та векторних контурів">
<div class="image-caption">Криві Безьє — основа для створення складних векторних форм</div>
</div>

</div>

<div class="content-wrapper">

## 🎨 Графічні примітиви

**Примітив** — базова фігура у векторній графіці, яка не може бути розкладена на простіші елементи.

### Основні типи примітивів:

<div class="grid grid-3">

<div class="task task-level beginner">
<h4>🔸 Геометричні примітиви</h4>
<ul>
<li>Точка (Point)</li>
<li>Лінія (Line)</li>
<li>Прямокутник (Rectangle)</li>
<li>Коло/Еліпс (Circle/Ellipse)</li>
<li>Багатокутник (Polygon)</li>
</ul>
</div>

<div class="task task-level intermediate">
<h4>📐 Криволінійні примітиви</h4>
<ul>
<li>Крива Безьє</li>
<li>Сплайн</li>
<li>Дуга (Arc)</li>
<li>Складні контури</li>
</ul>
</div>

<div class="task task-level advanced">
<h4>🎭 Текстові примітиви</h4>
<ul>
<li>Текстовий блок</li>
<li>Контур тексту</li>
<li>Декоративні шрифти</li>
<li>Логотипи</li>
</ul>
</div>

</div>

</div>

<div class="content-wrapper">

## ↗️ Криві Безьє

**Крива Безьє** — спеціальна крива у векторній графіці, яка допомагає створювати плавні вигнуті лінії. Вона названа на честь французького інженера П'єра Безьє.

### Як працюють криві Безьє:

<div class="grid grid-2">

<div class="card">
<h4>🎯 Опорні точки</h4>
<ul>
<li><strong>Початкова точка</strong> — де починається крива</li>
<li><strong>Кінцева точка</strong> — де закінчується крива</li>
<li><strong>Контрольні точки</strong> — визначають напрямок та кривизну</li>
</ul>
</div>

<div class="card">
<h4>🎛️ Керуючі ручки</h4>
<ul>
<li>Визначають <strong>напрямок</strong> кривої в точці</li>
<li>Довжина ручки впливає на <strong>силу викривлення</strong></li>
<li>Можна налаштовувати <strong>незалежно</strong> для кожної точки</li>
</ul>
</div>

</div>

<div class="image-container">
<img src="../resources/images/image9.png" alt="Векторні об'єкти та їх структура">
<div class="image-caption">Векторні об'єкти: від простих фігур до складних композицій</div>
</div>

### Типи кривих Безьє:
- **Лінійна** (1-го порядку) — пряма лінія
- **Квадратична** (2-го порядку) — одна контрольна точка
- **Кубічна** (3-го порядку) — два контрольних пункти (найпоширеніша)

</div>

<div class="content-wrapper">

## 🔗 Вузли та контури

**Вузол** — точка на контурі векторного зображення, через яку проходять лінії або криві. **Контур** — це лінія, яка задає форму елемента.

### Типи вузлів:

<div class="grid grid-3">

<div class="card">
<h4>📍 Кутовий вузол</h4>
<ul>
<li>Різкий перехід між сегментами</li>
<li>Керуючі ручки незалежні</li>
<li>Для створення кутів</li>
</ul>
</div>

<div class="card">
<h4>🌊 Гладкий вузол</h4>
<ul>
<li>Плавний перехід</li>
<li>Ручки на одній прямій</li>
<li>Для м'яких кривих</li>
</ul>
</div>

<div class="card">
<h4>⚖️ Симетричний вузол</h4>
<ul>
<li>Ручки однакової довжини</li>
<li>Ідеальна симетрія</li>
<li>Для правильних форм</li>
</ul>
</div>

</div>

### Операції з контурами:
- **Об'єднання** — з'єднання кількох контурів в один
- **Віднімання** — вирізання одного контуру з іншого
- **Перетин** — залишити тільки область перекриття
- **Виключення** — прибрати область перекриття

</div>

<div class="content-wrapper">

## ⭐ Основні властивості векторної графіки

<div class="image-container">
<img src="../resources/images/image10.png" alt="Демонстрація масштабованості векторної графіки">
<div class="image-caption">Масштабованість — головна перевага векторної графіки</div>
</div>

### 1. 🔄 Масштабованість

**Головна перевага** векторних об'єктів — здатність змінювати розміри без втрати якості.

<div class="grid grid-2">

<div class="card">
<h4>✅ Переваги масштабування</h4>
<ul>
<li>Ідеальна якість при будь-якому розмірі</li>
<li>Чіткі контури завжди</li>
<li>Можна використовувати від іконки до банера</li>
<li>Немає пікселізації</li>
</ul>
</div>

<div class="card">
<h4>🎯 Практичне застосування</h4>
<ul>
<li>Логотипи для різних носіїв</li>
<li>Іконки для різних екранів</li>
<li>Друк від візитки до білборда</li>
<li>Адаптивний веб-дизайн</li>
</ul>
</div>

</div>

### 2. 📦 Компактність

Векторні файли зазвичай займають менше місця, ніж растрові аналоги:

- **Зберігання формул** замість пікселів
- **Менше даних** для простих форм
- **Ефективне кодування** повторюваних елементів

### 3. 🎨 Об'єктна структура

Кожен елемент існує як окремий об'єкт:

- **Незалежне редагування** кожного елемента
- **Зміна властивостей** без впливу на інші об'єкти
- **Шари та групування** для організації
- **Легке копіювання** та дублювання

</div>

<div class="content-wrapper">

## 📁 Формати векторної графіки

### Основні формати та їх призначення:

<div class="grid grid-2">

<div class="card">
<h4>🌐 SVG (Scalable Vector Graphics)</h4>
<ul>
<li><strong>Тип:</strong> Відкритий стандарт W3C</li>
<li><strong>Формат:</strong> XML-текст</li>
<li><strong>Підтримка:</strong> Всі сучасні браузери</li>
<li><strong>Застосування:</strong> Веб-розробка, іконки</li>
<li><strong>Переваги:</strong> Інтерактивність, анімація, SEO</li>
</ul>
</div>

<div class="card">
<h4>🎨 AI (Adobe Illustrator)</h4>
<ul>
<li><strong>Тип:</strong> Власний формат Adobe</li>
<li><strong>Призначення:</strong> Професійний дизайн</li>
<li><strong>Функції:</strong> Повна підтримка ефектів</li>
<li><strong>Застосування:</strong> Ілюстрації, логотипи</li>
<li><strong>Переваги:</strong> Максимум можливостей</li>
</ul>
</div>

<div class="card">
<h4>📄 EPS (Encapsulated PostScript)</h4>
<ul>
<li><strong>Тип:</strong> Поліграфічний стандарт</li>
<li><strong>Призначення:</strong> Професійний друк</li>
<li><strong>Сумісність:</strong> Широка підтримка програм</li>
<li><strong>Застосування:</strong> Видавництво, поліграфія</li>
<li><strong>Переваги:</strong> Надійність, якість друку</li>
</ul>
</div>

<div class="card">
<h4>🔧 CDR (CorelDRAW)</h4>
<ul>
<li><strong>Тип:</strong> Власний формат Corel</li>
<li><strong>Призначення:</strong> Графічний дизайн</li>
<li><strong>Особливості:</strong> Багато спеціальних ефектів</li>
<li><strong>Застосування:</strong> Реклама, оформлення</li>
<li><strong>Переваги:</strong> Розширені можливості</li>
</ul>
</div>

<div class="card">
<h4>📱 PDF (Portable Document Format)</h4>
<ul>
<li><strong>Тип:</strong> Універсальний формат</li>
<li><strong>Можливості:</strong> Векторна + растрова графіка</li>
<li><strong>Застосування:</strong> Документи, презентації</li>
<li><strong>Переваги:</strong> Кросплатформеність</li>
</ul>
</div>

<div class="card">
<h4>🖼️ WMF/EMF (Windows Metafile)</h4>
<ul>
<li><strong>Тип:</strong> Системний формат Windows</li>
<li><strong>Застосування:</strong> Офісні додатки</li>
<li><strong>Особливості:</strong> Вбудований у систему</li>
<li><strong>Обмеження:</strong> Тільки Windows</li>
</ul>
</div>

</div>

</div>

<div class="content-wrapper">

## 🔍 Порівняння форматів

<table style="width: 100%; border-collapse: collapse; margin: 2rem 0;">
<thead>
<tr style="background: var(--bg-secondary);">
<th style="padding: 1rem; border: 1px solid var(--border-color);">Формат</th>
<th style="padding: 1rem; border: 1px solid var(--border-color);">Веб</th>
<th style="padding: 1rem; border: 1px solid var(--border-color);">Друк</th>
<th style="padding: 1rem; border: 1px solid var(--border-color);">Редагування</th>
<th style="padding: 1rem; border: 1px solid var(--border-color);">Розмір</th>
</tr>
</thead>
<tbody>
<tr>
<td style="padding: 1rem; border: 1px solid var(--border-color);"><strong>SVG</strong></td>
<td style="padding: 1rem; border: 1px solid var(--border-color); text-align: center;">✅ Відмінно</td>
<td style="padding: 1rem; border: 1px solid var(--border-color); text-align: center;">⚠️ Обмежено</td>
<td style="padding: 1rem; border: 1px solid var(--border-color); text-align: center;">✅ Код/Редактори</td>
<td style="padding: 1rem; border: 1px solid var(--border-color); text-align: center;">✅ Малий</td>
</tr>
<tr style="background: var(--bg-secondary);">
<td style="padding: 1rem; border: 1px solid var(--border-color);"><strong>AI</strong></td>
<td style="padding: 1rem; border: 1px solid var(--border-color); text-align: center;">❌ Ні</td>
<td style="padding: 1rem; border: 1px solid var(--border-color); text-align: center;">✅ Відмінно</td>
<td style="padding: 1rem; border: 1px solid var(--border-color); text-align: center;">✅ Illustrator</td>
<td style="padding: 1rem; border: 1px solid var(--border-color); text-align: center;">⚠️ Середній</td>
</tr>
<tr>
<td style="padding: 1rem; border: 1px solid var(--border-color);"><strong>EPS</strong></td>
<td style="padding: 1rem; border: 1px solid var(--border-color); text-align: center;">❌ Ні</td>
<td style="padding: 1rem; border: 1px solid var(--border-color); text-align: center;">✅ Ідеально</td>
<td style="padding: 1rem; border: 1px solid var(--border-color); text-align: center;">⚠️ Обмежено</td>
<td style="padding: 1rem; border: 1px solid var(--border-color); text-align: center;">⚠️ Великий</td>
</tr>
<tr style="background: var(--bg-secondary);">
<td style="padding: 1rem; border: 1px solid var(--border-color);"><strong>PDF</strong></td>
<td style="padding: 1rem; border: 1px solid var(--border-color); text-align: center;">⚠️ Обмежено</td>
<td style="padding: 1rem; border: 1px solid var(--border-color); text-align: center;">✅ Відмінно</td>
<td style="padding: 1rem; border: 1px solid var(--border-color); text-align: center;">⚠️ Складно</td>
<td style="padding: 1rem; border: 1px solid var(--border-color); text-align: center;">⚠️ Різний</td>
</tr>
</tbody>
</table>

</div>

<div class="content-wrapper">

## 💻 Програми для роботи з векторною графікою

### Безкоштовні рішення:

<div class="grid grid-2">

<div class="card">
<h4>🆓 Inkscape</h4>
<ul>
<li><strong>Платформа:</strong> Windows, Mac, Linux</li>
<li><strong>Формати:</strong> SVG, PDF, EPS, AI</li>
<li><strong>Переваги:</strong> Повний функціонал, активна спільнота</li>
<li><strong>Ідеально для:</strong> Навчання, веб-дизайн</li>
</ul>
</div>

<div class="card">
<h4>🌐 Figma</h4>
<ul>
<li><strong>Тип:</strong> Онлайн-редактор</li>
<li><strong>Спеціалізація:</strong> UI/UX дизайн</li>
<li><strong>Переваги:</strong> Співробітництво, сучасний інтерфейс</li>
<li><strong>Ідеально для:</strong> Дизайн інтерфейсів</li>
</ul>
</div>

</div>

### Професійні рішення:

<div class="grid grid-2">

<div class="card">
<h4>🎨 Adobe Illustrator</h4>
<ul>
<li><strong>Статус:</strong> Галузевий стандарт</li>
<li><strong>Можливості:</strong> Максимальний функціонал</li>
<li><strong>Переваги:</strong> Інтеграція з Creative Cloud, ШІ-інструменти</li>
<li><strong>Ідеально для:</strong> Професійний дизайн, ілюстрації</li>
</ul>
</div>

<div class="card">
<h4>🔧 CorelDRAW</h4>
<ul>
<li><strong>Особливості:</strong> Багато спеціальних ефектів</li>
<li><strong>Сильні сторони:</strong> Рекламний дизайн, поліграфія</li>
<li><strong>Переваги:</strong> Інтуїтивний інтерфейс</li>
<li><strong>Ідеально для:</strong> Реклама, оформлення</li>
</ul>
</div>

</div>

</div>

<div class="content-wrapper">

## 🎯 Практичні прийоми роботи

### Створення простих об'єктів:

<div class="task task-level beginner">

**Завдання 1: Створення логотипу з геометричних фігур**

1. **Відкрийте векторний редактор** (Inkscape, Illustrator)
2. **Створіть базові фігури:** коло, квадрат, трикутник
3. **Змініть кольори:** використайте заливку та обводку
4. **Скомбінуйте фігури:** розташуйте їх у композицію
5. **Додайте текст:** назву або слоган
6. **Експортуйте у SVG** для веб-використання

</div>

### Робота з кривими Безьє:

<div class="task task-level intermediate">

**Завдання 2: Створення плавного контуру**

1. **Виберіть інструмент "Перо"** або "Крива Безьє"
2. **Поставте початкову точку** кліком миші
3. **Створіть криву:** клік з утримуванням та протягуванням
4. **Налаштуйте контрольні точки** для потрібної форми
5. **Замкніть контур** повертанням до початкової точки
6. **Застосуйте заливку та обводку**

</div>

### Робота з текстом:

<div class="task task-level advanced">

**Завдання 3: Перетворення тексту на контури**

1. **Створіть текстовий об'єкт** з потрібним шрифтом
2. **Налаштуйте розмір та стиль**
3. **Перетворіть на контури** (Text → Path)
4. **Редагуйте окремі літери** як векторні об'єкти
5. **Застосуйте ефекти:** градієнти, тіні, деформації
6. **Збережіть у потрібному форматі**

</div>

</div>

<div class="content-wrapper">

## 🎯 Ключові поняття розділу

<div class="grid grid-2">

<div class="glossary-term">
<div class="glossary-term-title">Векторна графіка</div>
Тип графіки, де зображення будується за допомогою математичних формул, що описують лінії, криві й фігури.
</div>

<div class="glossary-term">
<div class="glossary-term-title">Примітив</div>
Базова фігура у векторній графіці: точка, лінія, крива, прямокутник, коло тощо.
</div>

<div class="glossary-term">
<div class="glossary-term-title">Крива Безьє</div>
Спеціальна крива у векторній графіці, яка допомагає створювати плавні вигнуті лінії за допомогою контрольних точок.
</div>

<div class="glossary-term">
<div class="glossary-term-title">Вузол</div>
Точка на контурі векторного зображення, через яку проходять лінії або криві.
</div>

<div class="glossary-term">
<div class="glossary-term-title">Контур</div>
Лінія, яка задає форму векторного елемента та може бути відкритою або замкненою.
</div>

<div class="glossary-term">
<div class="glossary-term-title">Масштабованість</div>
Здатність векторних зображень змінювати розміри без втрати якості завдяки математичному опису.
</div>

<div class="glossary-term">
<div class="glossary-term-title">Об'єктна структура</div>
Принцип організації векторних зображень, де кожен елемент існує як окремий об'єкт з власними властивостями.
</div>

<div class="glossary-term">
<div class="glossary-term-title">SVG</div>
Відкритий формат векторної графіки, що базується на XML та підтримується веб-браузерами.
</div>

</div>

</div>

<div class="content-wrapper">

## 📝 Контрольні питання

<div class="quiz-container">

<div class="question" data-question-id="vector-principle">
<div class="question-title">На чому базується векторна графіка?</div>
<div class="answers">
<div class="answer-option" data-answer="неправильно">На пікселях</div>
<div class="answer-option" data-answer="правильно">На математичних формулах</div>
<div class="answer-option" data-answer="неправильно">На текстових описах</div>
<div class="answer-option" data-answer="неправильно">На бітових масках</div>
</div>
</div>

<div class="question" data-question-id="bezier-curve">
<div class="question-title">Що визначає форму кривої Безьє?</div>
<div class="answers">
<div class="answer-option" data-answer="неправильно">Кількість пікселів</div>
<div class="answer-option" data-answer="правильно">Контрольні точки та ручки</div>
<div class="answer-option" data-answer="неправильно">Розмір файлу</div>
<div class="answer-option" data-answer="неправильно">Глибина кольору</div>
</div>
</div>

<div class="question" data-question-id="vector-advantage">
<div class="question-title">Яка головна перевага векторної графіки?</div>
<div class="answers">
<div class="answer-option" data-answer="неправильно">Фотореалістичність</div>
<div class="answer-option" data-answer="правильно">Масштабування без втрати якості</div>
<div class="answer-option" data-answer="неправильно">Великий розмір файлу</div>
<div class="answer-option" data-answer="неправильно">Складність редагування</div>
</div>
</div>

<div class="question" data-question-id="svg-format">
<div class="question-title">Який формат найкраще підходить для веб-іконок?</div>
<div class="answers">
<div class="answer-option" data-answer="неправильно">JPEG</div>
<div class="answer-option" data-answer="неправильно">BMP</div>
<div class="answer-option" data-answer="правильно">SVG</div>
<div class="answer-option" data-answer="неправильно">GIF</div>
</div>
</div>

</div>

</div>

<div class="content-wrapper">

## 📚 Що далі?

<div class="grid grid-3">

<div class="card">
<h4>Попередній розділ:</h4>
<h3>🔲 Растрова графіка</h3>
<a href="raster-graphics.md" class="btn btn-outline">Повернутися до растрової</a>
</div>

<div class="card">
<h4>Наступний розділ:</h4>
<h3>⚖️ Порівняння типів</h3>
<a href="comparison.md" class="btn btn-primary">Порівняти растр і вектор</a>
</div>

<div class="card">
<h4>Практика:</h4>
<h3>💻 Векторні завдання</h3>
<a href="../practice/intermediate-tasks.md" class="btn btn-secondary">Практичні завдання</a>
</div>

</div>

</div>

<nav class="nav">
<div class="container">
<ul class="nav-links">
<li><a href="../index.md">🏠 Головна</a></li>
<li><a href="main-content.md">📖 Основи</a></li>
<li><a href="raster-graphics.md">🔲 Растрова</a></li>
<li><a href="comparison.md">⚖️ Порівняння</a></li>
<li><a href="applications.md">🎯 Застосування</a></li>
</ul>
</div>
</nav>