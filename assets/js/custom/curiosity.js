class Curiosity {
    constructor(button, curiousElement, curiousInput) {
        this.button = button;
        this.curiousElement = curiousElement;
        this.curiousInput = curiousInput;
    }

    deleteCurious() {
        /**
         * Удаление интереса
         */
        let curiousEl = this.curiousElement;
        $(document).on('click', curiousEl, function (event) {
            this.remove();
        });
    }

    errorTextOutput(value) {
        /**
         * Вывод текста ошибки
         */
        alert(value);
    }

    createCurious(curiousText) {
        /**
         * Создание интереса
         */
        let newCurious = document.createElement('div');
        let container = document.getElementById("interestsContainer");

        newCurious.className = 'profileArticle-interests__element';
        newCurious.innerHTML = curiousText;

        container.insertBefore(newCurious, container.children[0]);
    }

    checkInputValue(input) {
        /**
         * Проверка поля:
         * 1. Кол-во символов
         * 2. Наличие любых символов кроме буквенных
         * Если всё "ок" то создаём интерес
         */
        let inputTextValue = $(input).val();
        let errorText;
        if (inputTextValue.length == 0 || inputTextValue.length > 16) {
            errorText = 'Должно быть от 1 до 16 символов!';
            this.errorTextOutput(errorText);
        } else if (!inputTextValue.match(/[^a-zA-Zа-яА-Я]/g)) {
            this.createCurious(inputTextValue);
        } else {
            errorText = 'Подозрительные символы!!';
            this.errorTextOutput(errorText);
        }

    }

    addCurious() {
        /**
         * Создание интереса по клику на кнопку "Добавить интерес"
         * Запускается функция проверки поля
         */
        let self = this;
        let curiousBtn = $(this.button);

        curiousBtn.on('click', function () {
            self.checkInputValue(curiousInput);
        });
    }

    init() {
        /**
         * Инициализация методов
         */
        this.deleteCurious();
        this.addCurious();
    }

}

let something = new Curiosity(
    '#addCurious',
    '.profileArticle-interests__element',
    '#curiousInput'
);

something.init();