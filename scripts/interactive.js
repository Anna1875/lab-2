// Растрова та векторна графіка - Інтерактивні функції

class GraphicsLearning {
    constructor() {
        this.currentTest = null;
        this.userAnswers = {};
        this.testResults = {};
        this.init();
    }

    init() {
        this.setupEventListeners();
        this.initializeProgressTracking();
        this.setupMatchingTests();
        this.createAnimations();
    }

    // Налаштування слухачів подій
    setupEventListeners() {
        document.addEventListener('DOMContentLoaded', () => {
            this.initializePage();
        });

        // Обробка кліків по відповідях
        document.addEventListener('click', (e) => {
            if (e.target.classList.contains('answer-option')) {
                this.handleAnswerClick(e.target);
            }
            
            if (e.target.classList.contains('check-test')) {
                this.checkTest(e.target.dataset.testId);
            }

            if (e.target.classList.contains('reset-test')) {
                this.resetTest(e.target.dataset.testId);
            }

            if (e.target.classList.contains('matching-item')) {
                this.handleMatchingClick(e.target);
            }
        });
    }

    // Ініціалізація сторінки
    initializePage() {
        this.addFadeInAnimations();
        this.setupQuizzes();
        this.setupProgressBars();
        this.createImageComparisons();
    }

    // Анімації появи елементів
    addFadeInAnimations() {
        const elements = document.querySelectorAll('.content-wrapper, .card, .task');
        elements.forEach((el, index) => {
            setTimeout(() => {
                el.classList.add('fade-in');
            }, index * 100);
        });
    }

    // Налаштування вікторин
    setupQuizzes() {
        const quizzes = document.querySelectorAll('.quiz-container');
        quizzes.forEach((quiz, index) => {
            const testId = `test-${index + 1}`;
            quiz.dataset.testId = testId;
            this.createQuizInterface(quiz, testId);
        });
    }

    // Створення інтерфейсу вікторини
    createQuizInterface(quiz, testId) {
        const questions = quiz.querySelectorAll('.question');
        
        // Додаємо номери питань
        questions.forEach((question, index) => {
            const questionNumber = document.createElement('span');
            questionNumber.className = 'question-number';
            questionNumber.textContent = `Питання ${index + 1}: `;
            questionNumber.style.color = 'var(--primary-color)';
            questionNumber.style.fontWeight = 'bold';
            
            const title = question.querySelector('.question-title');
            title.insertBefore(questionNumber, title.firstChild);
        });

        // Додаємо кнопки керування
        const controls = document.createElement('div');
        controls.className = 'quiz-controls';
        controls.style.marginTop = '2rem';
        controls.style.textAlign = 'center';
        
        controls.innerHTML = `
            <button class="btn btn-primary check-test" data-test-id="${testId}">
                Перевірити відповіді
            </button>
            <button class="btn btn-outline reset-test" data-test-id="${testId}" style="margin-left: 1rem;">
                Скинути
            </button>
            <div class="test-progress" style="margin-top: 1rem;">
                <div class="progress-container">
                    <div class="progress-bar" id="progress-${testId}"></div>
                </div>
                <span class="progress-text">Прогрес: <span id="progress-text-${testId}">0%</span></span>
            </div>
        `;
        
        quiz.appendChild(controls);
    }

    // Обробка кліку по відповіді
    handleAnswerClick(option) {
        const question = option.closest('.question');
        const questionId = question.dataset.questionId || this.generateQuestionId(question);
        question.dataset.questionId = questionId;

        // Очищаємо попередні вибори
        const options = question.querySelectorAll('.answer-option');
        options.forEach(opt => opt.classList.remove('selected'));

        // Відмічаємо вибрану відповідь
        option.classList.add('selected');
        
        // Зберігаємо відповідь
        const testId = option.closest('.quiz-container').dataset.testId;
        if (!this.userAnswers[testId]) {
            this.userAnswers[testId] = {};
        }
        this.userAnswers[testId][questionId] = option.dataset.answer || option.textContent.trim();

        // Оновлюємо прогрес
        this.updateProgress(testId);
    }

    // Генерація ID питання
    generateQuestionId(question) {
        const title = question.querySelector('.question-title').textContent;
        return title.substring(0, 20).replace(/\s+/g, '-').toLowerCase();
    }

    // Оновлення прогресу
    updateProgress(testId) {
        const quiz = document.querySelector(`[data-test-id="${testId}"]`);
        const questions = quiz.querySelectorAll('.question');
        const answered = Object.keys(this.userAnswers[testId] || {}).length;
        const progress = (answered / questions.length) * 100;

        const progressBar = document.getElementById(`progress-${testId}`);
        const progressText = document.getElementById(`progress-text-${testId}`);
        
        if (progressBar && progressText) {
            progressBar.style.width = `${progress}%`;
            progressText.textContent = `${Math.round(progress)}%`;
        }
    }

    // Перевірка тесту
    checkTest(testId) {
        const quiz = document.querySelector(`[data-test-id="${testId}"]`);
        const questions = quiz.querySelectorAll('.question');
        
        let correct = 0;
        let total = questions.length;

        // Правильні відповіді (приклад - треба адаптувати під конкретні тести)
        const correctAnswers = this.getCorrectAnswers(testId);

        questions.forEach((question, index) => {
            const questionId = question.dataset.questionId;
            const userAnswer = this.userAnswers[testId]?.[questionId];
            const correctAnswer = correctAnswers[index];

            const options = question.querySelectorAll('.answer-option');
            options.forEach(option => {
                option.classList.remove('correct', 'incorrect');
                
                if (option.dataset.answer === correctAnswer || option.textContent.trim() === correctAnswer) {
                    option.classList.add('correct');
                }
                
                if (option.classList.contains('selected') && 
                    (option.dataset.answer !== correctAnswer && option.textContent.trim() !== correctAnswer)) {
                    option.classList.add('incorrect');
                }
            });

            if (userAnswer === correctAnswer) {
                correct++;
            }
        });

        this.showTestResult(testId, correct, total);
        this.saveTestResult(testId, correct, total);
    }

    // Отримання правильних відповідей
    getCorrectAnswers(testId) {
        const answers = {
            'test-1': ['Растрова графіка', 'З\'являється пікселізація', 'Масштабування без втрати якості', 'Векторну графіку', 'Adobe Illustrator'],
            'test-2': ['PNG', 'JPEG', 'Векторної графіки', 'GIF', 'З втратами'],
            'test-3': ['480 000', '3 байти', '300 dpi', '256']
        };
        return answers[testId] || [];
    }

    // Показ результату тесту
    showTestResult(testId, correct, total) {
        const quiz = document.querySelector(`[data-test-id="${testId}"]`);
        const percentage = (correct / total) * 100;
        
        let resultClass = 'error';
        let resultText = 'Потрібно більше практики';
        
        if (percentage >= 80) {
            resultClass = 'success';
            resultText = 'Відмінно!';
        } else if (percentage >= 60) {
            resultClass = 'warning';
            resultText = 'Добре, але можна краще';
        }

        const existingResult = quiz.querySelector('.test-result');
        if (existingResult) {
            existingResult.remove();
        }

        const resultDiv = document.createElement('div');
        resultDiv.className = `test-result ${resultClass}`;
        resultDiv.innerHTML = `
            <strong>${resultText}</strong><br>
            Правильних відповідей: ${correct} з ${total} (${Math.round(percentage)}%)
        `;

        quiz.appendChild(resultDiv);
        resultDiv.classList.add('fade-in');
    }

    // Скидання тесту
    resetTest(testId) {
        const quiz = document.querySelector(`[data-test-id="${testId}"]`);
        
        // Очищаємо вибрані відповіді
        const options = quiz.querySelectorAll('.answer-option');
        options.forEach(option => {
            option.classList.remove('selected', 'correct', 'incorrect');
        });

        // Очищаємо збережені відповіді
        this.userAnswers[testId] = {};

        // Скидаємо прогрес
        const progressBar = document.getElementById(`progress-${testId}`);
        const progressText = document.getElementById(`progress-text-${testId}`);
        
        if (progressBar && progressText) {
            progressBar.style.width = '0%';
            progressText.textContent = '0%';
        }

        // Видаляємо результат
        const result = quiz.querySelector('.test-result');
        if (result) {
            result.remove();
        }
    }

    // Налаштування тестів на відповідність
    setupMatchingTests() {
        const matchingContainers = document.querySelectorAll('.matching-container');
        matchingContainers.forEach((container, index) => {
            container.dataset.matchingId = `matching-${index + 1}`;
            this.initializeMatching(container);
        });
    }

    // Ініціалізація тесту на відповідність
    initializeMatching(container) {
        this.selectedMatchingItems = [];
        this.matchingPairs = {};
        
        const controls = document.createElement('div');
        controls.className = 'matching-controls';
        controls.style.textAlign = 'center';
        controls.style.marginTop = '1rem';
        controls.innerHTML = `
            <button class="btn btn-primary check-matching">Перевірити відповідності</button>
            <button class="btn btn-outline reset-matching" style="margin-left: 1rem;">Скинути</button>
        `;
        
        container.appendChild(controls);

        // Обробники для кнопок
        controls.querySelector('.check-matching').addEventListener('click', () => {
            this.checkMatching(container);
        });
        
        controls.querySelector('.reset-matching').addEventListener('click', () => {
            this.resetMatching(container);
        });
    }

    // Обробка кліку по елементу відповідності
    handleMatchingClick(item) {
        if (item.classList.contains('matched')) return;

        if (this.selectedMatchingItems.length === 0) {
            // Перший вибір
            item.classList.add('selected');
            this.selectedMatchingItems.push(item);
        } else if (this.selectedMatchingItems.length === 1) {
            // Другий вибір
            const firstItem = this.selectedMatchingItems[0];
            
            if (item === firstItem) {
                // Клік по тому самому елементу - скасовуємо вибір
                item.classList.remove('selected');
                this.selectedMatchingItems = [];
            } else {
                // Створюємо пару
                item.classList.add('selected');
                
                setTimeout(() => {
                    firstItem.classList.remove('selected');
                    item.classList.remove('selected');
                    firstItem.classList.add('matched');
                    item.classList.add('matched');
                    
                    // Зберігаємо пару
                    const matchingId = item.closest('.matching-container').dataset.matchingId;
                    if (!this.matchingPairs[matchingId]) {
                        this.matchingPairs[matchingId] = [];
                    }
                    this.matchingPairs[matchingId].push([firstItem.textContent.trim(), item.textContent.trim()]);
                    
                    this.selectedMatchingItems = [];
                }, 500);
            }
        }
    }

    // Створення анімацій
    createAnimations() {
        // Анімація для кнопок
        const buttons = document.querySelectorAll('.btn');
        buttons.forEach(btn => {
            btn.addEventListener('mouseenter', () => {
                btn.style.transform = 'translateY(-2px)';
            });
            
            btn.addEventListener('mouseleave', () => {
                btn.style.transform = 'translateY(0)';
            });
        });

        // Анімація для карток
        const cards = document.querySelectorAll('.card');
        cards.forEach(card => {
            card.addEventListener('mouseenter', () => {
                card.style.transform = 'translateY(-4px)';
                card.style.boxShadow = 'var(--shadow-lg)';
            });
            
            card.addEventListener('mouseleave', () => {
                card.style.transform = 'translateY(0)';
                card.style.boxShadow = 'var(--shadow)';
            });
        });
    }

    // Налаштування прогрес-барів
    setupProgressBars() {
        const progressBars = document.querySelectorAll('.progress-bar');
        progressBars.forEach(bar => {
            const targetWidth = bar.dataset.progress || '0';
            
            setTimeout(() => {
                bar.style.width = `${targetWidth}%`;
            }, 500);
        });
    }

    // Створення порівняння зображень
    createImageComparisons() {
        const comparisons = document.querySelectorAll('.image-comparison');
        comparisons.forEach(comparison => {
            const images = comparison.querySelectorAll('img');
            images.forEach(img => {
                img.addEventListener('click', () => {
                    this.showImageModal(img);
                });
            });
        });
    }

    // Показ модального вікна з зображенням
    showImageModal(img) {
        const modal = document.createElement('div');
        modal.className = 'image-modal';
        modal.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100vw;
            height: 100vh;
            background: rgba(0, 0, 0, 0.8);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 1000;
            cursor: pointer;
        `;

        const modalImg = document.createElement('img');
        modalImg.src = img.src;
        modalImg.alt = img.alt;
        modalImg.style.cssText = `
            max-width: 90vw;
            max-height: 90vh;
            border-radius: 8px;
            box-shadow: var(--shadow-lg);
        `;

        modal.appendChild(modalImg);
        document.body.appendChild(modal);

        modal.addEventListener('click', () => {
            document.body.removeChild(modal);
        });

        modal.classList.add('fade-in');
    }

    // Збереження результатів тестів
    saveTestResult(testId, correct, total) {
        this.testResults[testId] = {
            correct,
            total,
            percentage: (correct / total) * 100,
            timestamp: new Date().toISOString()
        };

        // Зберігаємо в localStorage (якщо доступно)
        try {
            localStorage.setItem('graphicsTestResults', JSON.stringify(this.testResults));
        } catch (e) {
            console.log('localStorage недоступний');
        }
    }

    // Ініціалізація відстеження прогресу
    initializeProgressTracking() {
        try {
            const savedResults = localStorage.getItem('graphicsTestResults');
            if (savedResults) {
                this.testResults = JSON.parse(savedResults);
            }
        } catch (e) {
            console.log('Не вдалося завантажити збережені результати');
        }
    }

    // Отримання загальної статистики
    getOverallProgress() {
        const totalTests = Object.keys(this.testResults).length;
        const totalScore = Object.values(this.testResults).reduce((sum, result) => sum + result.percentage, 0);
        
        return {
            testsCompleted: totalTests,
            averageScore: totalTests > 0 ? totalScore / totalTests : 0,
            results: this.testResults
        };
    }
}

// Ініціалізація при завантаженні сторінки
const graphicsLearning = new GraphicsLearning();

// Додаткові утиліти
const Utils = {
    // Плавне прокручування до елемента
    scrollToElement(selector) {
        const element = document.querySelector(selector);
        if (element) {
            element.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    },

    // Створення спливаючої підказки
    createTooltip(text, element) {
        const tooltip = document.createElement('div');
        tooltip.className = 'tooltip';
        tooltip.textContent = text;
        tooltip.style.cssText = `
            position: absolute;
            background: var(--bg-dark);
            color: white;
            padding: 0.5rem;
            border-radius: 4px;
            font-size: 0.875rem;
            z-index: 1000;
            opacity: 0;
            transition: opacity 0.2s;
            pointer-events: none;
        `;

        document.body.appendChild(tooltip);

        element.addEventListener('mouseenter', (e) => {
            const rect = e.target.getBoundingClientRect();
            tooltip.style.left = `${rect.left + rect.width / 2}px`;
            tooltip.style.top = `${rect.top - 40}px`;
            tooltip.style.opacity = '1';
        });

        element.addEventListener('mouseleave', () => {
            tooltip.style.opacity = '0';
        });

        setTimeout(() => {
            if (tooltip.parentNode) {
                document.body.removeChild(tooltip);
            }
        }, 5000);
    },

    // Копіювання тексту в буфер обміну
    copyToClipboard(text) {
        if (navigator.clipboard) {
            navigator.clipboard.writeText(text).then(() => {
                this.showNotification('Текст скопійовано!', 'success');
            });
        } else {
            // Fallback для старіших браузерів
            const textArea = document.createElement('textarea');
            textArea.value = text;
            document.body.appendChild(textArea);
            textArea.select();
            document.execCommand('copy');
            document.body.removeChild(textArea);
            this.showNotification('Текст скопійовано!', 'success');
        }
    },

    // Показ повідомлення
    showNotification(message, type = 'info') {
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.textContent = message;
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            padding: 1rem 1.5rem;
            border-radius: 8px;
            color: white;
            font-weight: 500;
            z-index: 1000;
            transform: translateX(100%);
            transition: transform 0.3s ease;
        `;

        // Кольори залежно від типу
        const colors = {
            success: 'var(--success-color)',
            error: 'var(--error-color)',
            warning: 'var(--warning-color)',
            info: 'var(--primary-color)'
        };
        notification.style.background = colors[type] || colors.info;

        document.body.appendChild(notification);

        // Анімація появи
        setTimeout(() => {
            notification.style.transform = 'translateX(0)';
        }, 100);

        // Автоматичне приховування
        setTimeout(() => {
            notification.style.transform = 'translateX(100%)';
            setTimeout(() => {
                if (notification.parentNode) {
                    document.body.removeChild(notification);
                }
            }, 300);
        }, 3000);
    }
};

// Експорт для використання в інших частинах додатку
window.GraphicsLearning = GraphicsLearning;
window.Utils = Utils;