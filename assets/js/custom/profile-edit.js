class ProfileEdit {
    constructor(selector, selectorText) {
        this.selectorText = selectorText;
    }

    checkLocalData(input) {
        /**
         * Проверка на наличие данных в LocalStorage
         */
        $(input).each(function () {

            var thisDataAttr = $(this).attr('data-local');
            var localData = localStorage.getItem(thisDataAttr);

            if(localData){
                $(this).val(localData);
                $(this).parent().find('.profileArticle__field-text_text').text(localData);
            }
            else {
                return false;
            }
            

        });
    }

    mainEdit(selector, selectorText) {
        /**
         * Основной метод редактирования карточки пользователя
         */
        let selectorInput = $(selectorText).parent().find('.profileArticle__field-text_input');
        let selectorR = selector;

        function toggleItems(selector) {
            let toggleItems = $(selector).parent().find('.profileArticle__field-text');
            toggleItems.toggle();
        }

        $(selectorText).on('click', function (event) {

            toggleItems(this);
            $(this).parent().find('.profileArticle__field-text_input').focus();

        });

        $(selectorInput).on('focusout', function () {      
            toggleItems(this);

            let thisInputValue = $(this).val();
            let thisDataAttr = $(this).attr('data-local');

            localStorage.setItem(thisDataAttr, thisInputValue)

            $(this).parent().find('.profileArticle__field-text_text').text(thisInputValue);

        });
    }


    init() {
        this.checkLocalData('.profileArticle__field-text_input');
        this.mainEdit(this.selector, this.selectorText);
    }
}

let initProfileEdit = new ProfileEdit('.profileArticle__field_editable', '.profileArticle__field-text_text');
initProfileEdit.init();