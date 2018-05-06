class TabsControll {
    constructor(container) {
        this.headElement = $(container).find('.customTabs-head__element');
        this.bodyElement = $(container).find('.customTabs-body__tab');
    }

    tabClick() {
        /**
         * Клик по табам
         * меняем контент опираясь 
         * на индекс текущего активного элемента
         */
        let hEl = this.headElement;
        let bEl = this.bodyElement;
        hEl.on('click', function () {
            let thisIndex = $(this).index();
            hEl.removeClass('customTabs-head__element_active');
            $(this).addClass('customTabs-head__element_active');

            bEl.removeClass('customTabs-body__tab_active');
            bEl.eq(thisIndex).addClass('customTabs-body__tab_active');
        });
    }

    init() {
        /**
         * Инициализация методов
         */
        this.tabClick();
        let setRowContainerHeight = new TabsRowContainerHeight('#rowContainer');
        setRowContainerHeight.init();
    }

};

class TabsRowContainerHeight {
    constructor(rowContainer) {
        this.rowContainer = rowContainer;
        this.rowElement = $(rowContainer).find('.customTabs-body__row');
        this.totalHeight = 0;
    }

    init() {
        /**
         * 1. Вычисляем высоту 3-х рядов с карточками друзей
         * 2. Инициализируем кастомный скроллбар
         * 3. Ставим максимальную высоту главной обёртке кастомного скроллбара
         */
        let container = this.rowContainer;
        let tHeight = this.totalHeight;
        let rElement = this.rowElement;
        rElement.each(function (index) {
            if (index <= 2) {
                tHeight += $(this).innerHeight();
            }
        });

        let totalHeightCalc = tHeight - 30;

        $(container).scrollbar();
        $('.m__scroll-overflow').css('maxHeight', totalHeightCalc + 'px');

    }

};

let tabsControllerInit = new TabsControll('#tabsContainer');
tabsControllerInit.init();