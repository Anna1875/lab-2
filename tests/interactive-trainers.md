---
layout: default
title: "Інтерактивні тренажери"
description: "Практичні вправи для закріплення знань про графіку"
permalink: /tests/interactive-trainers/
---

# Інтерактивні тренажери

<div class="content-wrapper">
  <div class="card">
    <div class="card-header">
      <h2 class="card-title">🎯 Практичні вправи</h2>
    </div>
    <p>Інтерактивні тренажери для закріплення знань про растрову та векторну графіку через практичні вправи.</p>
    <div style="margin-top: 1rem;">
      <span class="task-level intermediate">Всі рівні</span>
      <span style="margin-left: 1rem; color: var(--text-secondary);">4 тренажери • 30 хвилин</span>
    </div>
  </div>
</div>

## Тренажер 1: Встановлення відповідності

<div class="task">
  <div class="task-level beginner">Тренажер</div>
  <h3>Поєднайте поняття з їх описами</h3>
  
  <div class="content-wrapper">
    <p>Клікайте на терміни та їх описи, щоб утворити правильні пари:</p>
    
    <div class="matching-container" id="matching-trainer">
      <div class="grid grid-2">
        <div class="matching-column">
          <h4>Терміни</h4>
          <div class="matching-item" data-term="resolution">Роздільна здатність</div>
          <div class="matching-item" data-term="depth">Глибина кольору</div>
          <div class="matching-item" data-term="vector">Векторне зображення</div>
          <div class="matching-item" data-term="pixel">Піксель</div>
          <div class="matching-item" data-term="bezier">Крива Безьє</div>
        </div>
        
        <div class="matching-column">
          <h4>Описи</h4>
          <div class="matching-item" data-desc="resolution">Кількість пікселів по горизонталі й вертикалі</div>
          <div class="matching-item" data-desc="depth">Кількість кольорів, що може мати 1 піксель</div>
          <div class="matching-item" data-desc="vector">Опис фігур формулами і координатами</div>
          <div class="matching-item" data-desc="pixel">Найменша точка растрового зображення</div>
          <div class="matching-item" data-desc="bezier">Математична крива для плавних контурів</div>
        </div>
      </div>
      
      <div style="text-align: center; margin-top: 2rem;">
        <button class="btn btn-primary" id="check-matching">Перевірити відповідності</button>
        <button class="btn btn-outline" id="reset-matching" style="margin-left: 1rem;">Скинути</button>
      </div>
      
      <div id="matching-result" style="margin-top: 1rem;"></div>
    </div>
  </div>
</div>

## Тренажер 2: Вибір правильного формату

<div class="task">
  <div class="task-level intermediate">Тренажер</div>
  <h3>Оберіть найкращий формат для кожної ситуації</h3>
  
  <div class="content-wrapper">
    <div class="grid grid-2">
      <div class="card">
        <h4>📱 Іконка для мобільного додатку</h4>
        <div class="format-options">
          <label class="answer-option">
            <input type="radio" name="situation1" value="png">
            <span>PNG (з прозорістю)</span>
          </label>
          <label class="answer-option">
            <input type="radio" name="situation1" value="jpeg">
            <span>JPEG (стиснений)</span>
          </label>
          <label class="answer-option">
            <input type="radio" name="situation1" value="svg">
            <span>SVG (векторний)</span>
          </label>
        </div>
      </div>
      
      <div class="card">
        <h4>📸 Фотографія для веб-сайту</h4>
        <div class="format-options">
          <label class="answer-option">
            <input type="radio" name="situation2" value="png">
            <span>PNG (без втрат)</span>
          </label>
          <label class="answer-option">
            <input type="radio" name="situation2" value="jpeg">
            <span>JPEG (оптимізований)</span>
          </label>
          <label class="answer-option">
            <input type="radio" name="situation2" value="gif">
            <span>GIF (256 кольорів)</span>
          </label>
        </div>
      </div>
      
      <div class="card">
        <h4>🏢 Логотип компанії</h4>
        <div class="format-options">
          <label class="answer-option">
            <input type="radio" name="situation3" value="bmp">
            <span>BMP (без стиснення)</span>
          </label>
          <label class="answer-option">
            <input type="radio" name="situation3" value="svg">
            <span>SVG (масштабований)</span>
          </label>
          <label class="answer-option">
            <input type="radio" name="situation3" value="jpeg">
            <span>JPEG (стиснений)</span>
          </label>
        </div>
      </div>
      
      <div class="card">
        <h4>🎬 Анімована реклама</h4>
        <div class="format-options">
          <label class="answer-option">
            <input type="radio" name="situation4" value="png">
            <span>PNG (статичний)</span>
          </label>
          <label class="answer-option">
            <input type="radio" name="situation4" value="gif">
            <span>GIF (анімований)</span>
          </label>
          <label class="answer-option">
            <input type="radio" name="situation4" value="svg">
            <span>SVG (векторний)</span>
          </label>
        </div>
      </div>
    </div>
    
    <div style="text-align: center; margin-top: 2rem;">
      <button class="btn btn-primary" id="check-formats">Перевірити вибір</button>
      <button class="btn btn-outline" id="reset-formats" style="margin-left: 1rem;">Скинути</button>
    </div>
    
    <div id="formats-result" style="margin-top: 1rem;"></div>
  </div>
</div>

## Тренажер 3: Симулятор масштабування

<div class="task">
  <div class="task-level advanced">Тренажер</div>
  <h3>Подивіться, як поводяться різні типи графіки при масштабуванні</h3>
  
  <div class="content-wrapper">
    <div class="grid grid-2">
      <div class="card">
        <h4>🖼️ Растрове зображення</h4>
        <div class="image-simulation" id="raster-sim">
          <div class="sim-image raster-image" id="raster-preview">
            <div class="pixel-grid"></div>
            <span class="image-label">Растр 100×100px</span>
          </div>
          <div class="sim-controls">
            <label>Масштаб: <span id="raster-scale">100%</span></label>
            <input type="range" id="raster-slider" min="50" max="400" value="100">
          </div>
          <div class="quality-indicator" id="raster-quality">Якість: Відмінна</div>
        </div>
      </div>
      
      <div class="card">
        <h4>📐 Векторне зображення</h4>
        <div class="image-simulation" id="vector-sim">
          <div class="sim-image vector-image" id="vector-preview">
            <svg width="100" height="100" viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="40" fill="#2563eb" stroke="#1e40af" stroke-width="2"/>
              <rect x="30" y="30" width="40" height="40" fill="none" stroke="#1e40af" stroke-width="1"/>
            </svg>
            <span class="image-label">Вектор SVG</span>
          </div>
          <div class="sim-controls">
            <label>Масштаб: <span id="vector-scale">100%</span></label>
            <input type="range" id="vector-slider" min="50" max="400" value="100">
          </div>
          <div class="quality-indicator" id="vector-quality">Якість: Відмінна</div>
        </div>
      </div>
    </div>
    
    <div class="card" style="margin-top: 2rem;">
      <h4>📊 Спостереження</h4>
      <div id="scaling-observations">
        <p>Змінюйте масштаб за допомогою повзунків вище, щоб побачити різницю між растровою та векторною графікою.</p>
      </div>
    </div>
  </div>
</div>

## Тренажер 4: Калькулятор розмірів файлів

<div class="task">
  <div class="task-level advanced">Тренажер</div>
  <h3>Інтерактивний калькулятор параметрів зображень</h3>
  
  <div class="content-wrapper">
    <div class="grid grid-2">
      <div class="card">
        <h4>📝 Введіть параметри</h4>
        <div class="calculator-inputs">
          <div style="margin-bottom: 1rem;">
            <label for="width-input">Ширина (пікселі):</label>
            <input type="number" id="width-input" value="800" min="1" max="10000" style="width: 100%; padding: 0.5rem; margin-top: 0.25rem;">
          </div>
          
          <div style="margin-bottom: 1rem;">
            <label for="height-input">Висота (пікселі):</label>
            <input type="number" id="height-input" value="600" min="1" max="10000" style="width: 100%; padding: 0.5rem; margin-top: 0.25rem;">
          </div>
          
          <div style="margin-bottom: 1rem;">
            <label for="depth-select">Глибина кольору:</label>
            <select id="depth-select" style="width: 100%; padding: 0.5rem; margin-top: 0.25rem;">
              <option value="1">1 біт (монохром)</option>
              <option value="8">8 біт (256 кольорів)</option>
              <option value="16">16 біт (65536 кольорів)</option>
              <option value="24" selected>24 біти (16M кольорів)</option>
              <option value="32">32 біти (з прозорістю)</option>
            </select>
          </div>
          
          <button class="btn btn-primary" id="calculate-size" style="width: 100%;">
            Розрахувати
          </button>
        </div>
      </div>
      
      <div class="card">
        <h4>📊 Результати</h4>
        <div id="calculation-results">
          <div class="result-item">
            <strong>Кількість пікселів:</strong>
            <span id="total-pixels">480 000</span>
          </div>
          
          <div class="result-item">
            <strong>Байти на піксель:</strong>
            <span id="bytes-per-pixel">3</span>
          </div>
          
          <div class="result-item">
            <strong>Розмір файлу:</strong>
            <span id="file-size-bytes">1 440 000 байт</span>
          </div>
          
          <div class="result-item">
            <strong>Розмір в МБ:</strong>
            <span id="file-size-mb">1.37 МБ</span>
          </div>
          
          <div class="result-item">
            <strong>Кількість кольорів:</strong>
            <span id="color-count">16 777 216</span>
          </div>
        </div>
        
        <div style="margin-top: 2rem; padding: 1rem; background: var(--bg-secondary); border-radius: 6px;">
          <h5>💡 Порада</h5>
          <p id="optimization-tip">Для веб-використання рекомендуємо JPEG з компресією 70-80%</p>
        </div>
      </div>
    </div>
  </div>
</div>

## Підсумок тренувань

<div class="content-wrapper">
  <div class="card">
    <div class="card-header">
      <h3 class="card-title">🎓 Результати тренувань</h3>
    </div>
    <div id="training-summary">
      <p>Пройдіть усі тренажери, щоб побачити загальний результат!</p>
    </div>
    
    <div style="text-align: center; margin-top: 2rem;">
      <button class="btn btn-secondary" id="reset-all-trainers">
        🔄 Скинути всі тренажери
      </button>
    </div>
  </div>
</div>

## Навігація

<div class="content-wrapper">
  <div class="grid grid-3">
    <div class="card">
      <a href="/lab-2/tests/calculations-test/" class="btn btn-outline" style="width: 100%;">
        ⬅️ Тест розрахунків
      </a>
    </div>
    <div class="card">
      <a href="/lab-2/" class="btn btn-primary" style="width: 100%;">
        🏠 Головна сторінка
      </a>
    </div>
    <div class="card">
      <a href="/lab-2/resources/glossary/" class="btn btn-secondary" style="width: 100%;">
        📚 Глосарій
      </a>
    </div>
  </div>
</div>

<style>
/* Додаткові стилі для тренажерів */
.matching-container .matching-item {
  padding: 1rem;
  margin-bottom: 0.5rem;
  background: var(--bg-primary);
  border: 2px solid var(--border-color);
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.2s;
  text-align: center;
}

.matching-container .matching-item:hover {
  border-color: var(--primary-color);
  transform: translateY(-1px);
}

.matching-container .matching-item.selected {
  border-color: var(--primary-color);
  background: rgba(37, 99, 235, 0.1);
}

.matching-container .matching-item.matched {
  border-color: var(--success-color);
  background: rgba(16, 185, 129, 0.1);
  cursor: default;
}

.matching-container .matching-item.incorrect {
  border-color: var(--error-color);
  background: rgba(239, 68, 68, 0.1);
}

.image-simulation {
  text-align: center;
  padding: 1rem;
}

.sim-image {
  position: relative;
  margin: 0 auto 1rem;
  display: inline-block;
  border: 1px solid var(--border-color);
  transition: transform 0.3s ease;
}

.raster-image {
  width: 100px;
  height: 100px;
  background: linear-gradient(45deg, #f0f0f0 25%, transparent 25%), 
              linear-gradient(-45deg, #f0f0f0 25%, transparent 25%), 
              linear-gradient(45deg, transparent 75%, #f0f0f0 75%), 
              linear-gradient(-45deg, transparent 75%, #f0f0f0 75%);
  background-size: 8px 8px;
  background-position: 0 0, 0 4px, 4px -4px, -4px 0px;
}

.vector-image svg {
  display: block;
}

.image-label {
  position: absolute;
  bottom: -20px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 0.75rem;
  color: var(--text-secondary);
}

.sim-controls {
  margin-bottom: 1rem;
}

.sim-controls input[type="range"] {
  width: 100%;
  margin-top: 0.5rem;
}

.quality-indicator {
  font-weight: 500;
  padding: 0.5rem;
  border-radius: 4px;
  text-align: center;
}

.quality-indicator.excellent {
  background: rgba(16, 185, 129, 0.1);
  color: var(--success-color);
}

.quality-indicator.good {
  background: rgba(245, 158, 11, 0.1);
  color: var(--warning-color);
}

.quality-indicator.poor {
  background: rgba(239, 68, 68, 0.1);
  color: var(--error-color);
}

.calculator-inputs input,
.calculator-inputs select {
  border: 1px solid var(--border-color);
  border-radius: 4px;
}

.result-item {
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 0;
  border-bottom: 1px solid var(--border-color);
}

.result-item:last-child {
  border-bottom: none;
}
</style>

<script>
// Глобальні змінні для тренажерів
let trainersCompleted = {
  matching: false,
  formats: false,
  scaling: false,
  calculator: false
};

// Тренажер 1: Встановлення відповідності
let selectedMatching = [];
let matchingPairs = {};

const correctMatches = {
  'resolution': 'resolution',
  'depth': 'depth', 
  'vector': 'vector',
  'pixel': 'pixel',
  'bezier': 'bezier'
};

// Тренажер 2: Вибір форматів
const correctFormats = {
  'situation1': 'svg',   // Іконка для мобільного додатку
  'situation2': 'jpeg',  // Фотографія для веб-сайту  
  'situation3': 'svg',   // Логотип компанії
  'situation4': 'gif'    // Анімована реклама
};

// Ініціалізація тренажерів
document.addEventListener('DOMContentLoaded', function() {
  initMatchingTrainer();
  initFormatsTrainer();
  initScalingSimulator();
  initSizeCalculator();
  initGlobalControls();
});

// Тренажер відповідностей
function initMatchingTrainer() {
  const matchingItems = document.querySelectorAll('#matching-trainer .matching-item');
  
  matchingItems.forEach(item => {
    item.addEventListener('click', function() {
      if (this.classList.contains('matched')) return;
      
      if (selectedMatching.length === 0) {
        // Перший вибір
        this.classList.add('selected');
        selectedMatching.push(this);
      } else if (selectedMatching.length === 1) {
        const firstItem = selectedMatching[0];
        
        if (this === firstItem) {
          // Клік по тому самому елементу
          this.classList.remove('selected');
          selectedMatching = [];
        } else {
          // Другий вибір - перевіряємо пару
          this.classList.add('selected');
          
          setTimeout(() => {
            checkMatchingPair(firstItem, this);
            selectedMatching = [];
          }, 500);
        }
      }
    });
  });
  
  document.getElementById('check-matching').addEventListener('click', checkAllMatches);
  document.getElementById('reset-matching').addEventListener('click', resetMatching);
}

function checkMatchingPair(item1, item2) {
  const term1 = item1.dataset.term || item1.dataset.desc;
  const term2 = item2.dataset.term || item2.dataset.desc;
  
  // Перевіряємо, чи утворили правильну пару
  if ((item1.dataset.term && item2.dataset.desc && item1.dataset.term === item2.dataset.desc) ||
      (item1.dataset.desc && item2.dataset.term && item1.dataset.desc === item2.dataset.term)) {
    // Правильна пара
    item1.classList.remove('selected');
    item2.classList.remove('selected');
    item1.classList.add('matched');
    item2.classList.add('matched');
    
    matchingPairs[term1] = term2;
  } else {
    // Неправильна пара
    item1.classList.remove('selected');
    item2.classList.remove('selected');
    item1.classList.add('incorrect');
    item2.classList.add('incorrect');
    
    setTimeout(() => {
      item1.classList.remove('incorrect');
      item2.classList.remove('incorrect');
    }, 1000);
  }
}

function checkAllMatches() {
  const matchedItems = document.querySelectorAll('#matching-trainer .matching-item.matched');
  const totalPairs = 5;
  const matchedPairs = matchedItems.length / 2;
  
  const resultDiv = document.getElementById('matching-result');
  
  if (matchedPairs === totalPairs) {
    resultDiv.innerHTML = `
      <div class="test-result success">
        <strong>Відмінно!</strong><br>
        Усі відповідності встановлено правильно (${matchedPairs}/${totalPairs})
      </div>
    `;
    trainersCompleted.matching = true;
  } else {
    resultDiv.innerHTML = `
      <div class="test-result warning">
        <strong>Майже готово!</strong><br>
        Правильних пар: ${matchedPairs} з ${totalPairs}
      </div>
    `;
  }
  
  updateTrainingSummary();
}

function resetMatching() {
  selectedMatching = [];
  matchingPairs = {};
  
  document.querySelectorAll('#matching-trainer .matching-item').forEach(item => {
    item.classList.remove('selected', 'matched', 'incorrect');
  });
  
  document.getElementById('matching-result').innerHTML = '';
  trainersCompleted.matching = false;
  updateTrainingSummary();
}

// Тренажер вибору форматів
function initFormatsTrainer() {
  document.getElementById('check-formats').addEventListener('click', checkFormats);
  document.getElementById('reset-formats').addEventListener('click', resetFormats);
}

function checkFormats() {
  let correct = 0;
  const total = Object.keys(correctFormats).length;
  
  for (let situation in correctFormats) {
    const selectedFormat = document.querySelector(`input[name="${situation}"]:checked`);
    if (selectedFormat && selectedFormat.value === correctFormats[situation]) {
      correct++;
      selectedFormat.closest('.card').style.borderColor = 'var(--success-color)';
    } else if (selectedFormat) {
      selectedFormat.closest('.card').style.borderColor = 'var(--error-color)';
    }
  }
  
  const percentage = (correct / total) * 100;
  const resultDiv = document.getElementById('formats-result');
  
  if (percentage === 100) {
    resultDiv.innerHTML = `
      <div class="test-result success">
        <strong>Ідеально!</strong><br>
        Усі формати обрано правильно (${correct}/${total})
      </div>
    `;
    trainersCompleted.formats = true;
  } else {
    resultDiv.innerHTML = `
      <div class="test-result warning">
        <strong>Частково правильно</strong><br>
        Правильних відповідей: ${correct} з ${total} (${Math.round(percentage)}%)
      </div>
    `;
  }
  
  updateTrainingSummary();
}

function resetFormats() {
  document.querySelectorAll('input[type="radio"]').forEach(input => {
    input.checked = false;
  });
  
  document.querySelectorAll('.card').forEach(card => {
    card.style.borderColor = '';
  });
  
  document.getElementById('formats-result').innerHTML = '';
  trainersCompleted.formats = false;
  updateTrainingSummary();
}

// Симулятор масштабування
function initScalingSimulator() {
  const rasterSlider = document.getElementById('raster-slider');
  const vectorSlider = document.getElementById('vector-slider');
  
  rasterSlider.addEventListener('input', function() {
    updateRasterScale(this.value);
  });
  
  vectorSlider.addEventListener('input', function() {
    updateVectorScale(this.value);
  });
  
  // Початкове оновлення
  updateRasterScale(100);
  updateVectorScale(100);
}

function updateRasterScale(scale) {
  const preview = document.getElementById('raster-preview');
  const scaleSpan = document.getElementById('raster-scale');
  const qualityDiv = document.getElementById('raster-quality');
  
  scaleSpan.textContent = scale + '%';
  preview.style.transform = `scale(${scale / 100})`;
  
  // Оновлюємо якість залежно від масштабу
  let quality, qualityClass;
  if (scale <= 100) {
    quality = 'Відмінна';
    qualityClass = 'excellent';
  } else if (scale <= 200) {
    quality = 'Добра';
    qualityClass = 'good';
  } else {
    quality = 'Погана (пікселізація)';
    qualityClass = 'poor';
  }
  
  qualityDiv.textContent = `Якість: ${quality}`;
  qualityDiv.className = `quality-indicator ${qualityClass}`;
  
  updateScalingObservations(scale, 'raster');
}

function updateVectorScale(scale) {
  const preview = document.getElementById('vector-preview');
  const scaleSpan = document.getElementById('vector-scale');
  const qualityDiv = document.getElementById('vector-quality');
  
  scaleSpan.textContent = scale + '%';
  preview.style.transform = `scale(${scale / 100})`;
  
  // Векторна графіка завжди має відмінну якість
  qualityDiv.textContent = 'Якість: Відмінна';
  qualityDiv.className = 'quality-indicator excellent';
  
  updateScalingObservations(scale, 'vector');
  trainersCompleted.scaling = true;
  updateTrainingSummary();
}

function updateScalingObservations(scale, type) {
  const observationsDiv = document.getElementById('scaling-observations');
  
  let message = '';
  if (scale > 200) {
    message = `
      <p><strong>При масштабі ${scale}%:</strong></p>
      <ul>
        <li><strong>Растрова графіка:</strong> Видно окремі пікселі, зображення стає "квадратним"</li>
        <li><strong>Векторна графіка:</strong> Залишається ідеально чіткою завдяки математичному опису</li>
      </ul>
    `;
  } else if (scale < 100) {
    message = `
      <p><strong>При зменшенні до ${scale}%:</strong></p>
      <ul>
        <li><strong>Растрова графіка:</strong> Дрібні деталі можуть зливатися</li>
        <li><strong>Векторна графіка:</strong> Зберігає чіткість контурів</li>
      </ul>
    `;
  } else {
    message = '<p>Змінюйте масштаб, щоб побачити різницю між типами графіки.</p>';
  }
  
  observationsDiv.innerHTML = message;
}

// Калькулятор розмірів
function initSizeCalculator() {
  document.getElementById('calculate-size').addEventListener('click', calculateImageSize);
  
  // Автоматичний розрахунок при зміні параметрів
  ['width-input', 'height-input', 'depth-select'].forEach(id => {
    document.getElementById(id).addEventListener('change', calculateImageSize);
  });
  
  // Початковий розрахунок
  calculateImageSize();
}

function calculateImageSize() {
  const width = parseInt(document.getElementById('width-input').value) || 0;
  const height = parseInt(document.getElementById('height-input').value) || 0;
  const depth = parseInt(document.getElementById('depth-select').value) || 24;
  
  // Розрахунки
  const totalPixels = width * height;
  const bytesPerPixel = depth / 8;
  const fileSizeBytes = totalPixels * bytesPerPixel;
  const fileSizeMB = fileSizeBytes / (1024 * 1024);
  const colorCount = Math.pow(2, depth);
  
  // Оновлення результатів
  document.getElementById('total-pixels').textContent = totalPixels.toLocaleString();
  document.getElementById('bytes-per-pixel').textContent = bytesPerPixel;
  document.getElementById('file-size-bytes').textContent = fileSizeBytes.toLocaleString() + ' байт';
  document.getElementById('file-size-mb').textContent = fileSizeMB.toFixed(2) + ' МБ';
  document.getElementById('color-count').textContent = colorCount.toLocaleString();
  
  // Порада з оптимізації
  let tip = '';
  if (fileSizeMB > 10) {
    tip = 'Великий файл! Розгляньте стиснення JPEG або зменшення роздільної здатності.';
  } else if (fileSizeMB > 1) {
    tip = 'Для веб-використання рекомендуємо JPEG з компресією 70-80%.';
  } else {
    tip = 'Оптимальний розмір для більшості застосувань.';
  }
  
  document.getElementById('optimization-tip').textContent = tip;
  
  trainersCompleted.calculator = true;
  updateTrainingSummary();
}

// Глобальні контролі
function initGlobalControls() {
  document.getElementById('reset-all-trainers').addEventListener('click', function() {
    resetMatching();
    resetFormats();
    document.getElementById('raster-slider').value = 100;
    document.getElementById('vector-slider').value = 100;
    updateRasterScale(100);
    updateVectorScale(100);
    
    // Скидаємо калькулятор до початкових значень
    document.getElementById('width-input').value = 800;
    document.getElementById('height-input').value = 600;
    document.getElementById('depth-select').value = 24;
    calculateImageSize();
    
    trainersCompleted = {
      matching: false,
      formats: false,
      scaling: false,
      calculator: false
    };
    
    updateTrainingSummary();
  });
}

// Оновлення підсумку тренувань
function updateTrainingSummary() {
  const completed = Object.values(trainersCompleted).filter(Boolean).length;
  const total = Object.keys(trainersCompleted).length;
  const percentage = (completed / total) * 100;
  
  const summaryDiv = document.getElementById('training-summary');
  
  let resultClass = 'warning';
  let resultText = 'Продовжуйте тренування!';
  
  if (percentage === 100) {
    resultClass = 'success';
    resultText = 'Усі тренажери пройдено!';
  } else if (percentage >= 75) {
    resultClass = 'success';
    resultText = 'Відмінний прогрес!';
  } else if (percentage >= 50) {
    resultClass = 'warning';
    resultText = 'Хороший початок!';
  }
  
  summaryDiv.innerHTML = `
    <div class="test-result ${resultClass}">
      <h4>${resultText}</h4>
      <p><strong>Пройдено тренажерів:</strong> ${completed} з ${total} (${Math.round(percentage)}%)</p>
      <div class="progress-container" style="margin-top: 1rem;">
        <div class="progress-bar" style="width: ${percentage}%;"></div>
      </div>
    </div>
  `;
}
</script>
