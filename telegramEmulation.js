// Эмуляция среды Telegram Mini App
if (typeof Telegram === 'undefined') {
    window.Telegram = {
        WebApp: {
            initData: '',
            initDataUnsafe: {},
            version: '6.0',
            isExpanded: false,
            themeParams: {
                bg_color: '#ffffff',
                text_color: '#000000',
                hint_color: '#999999',
                link_color: '#006AB6',
                button_color: '#006AB6',
                button_text_color: '#ffffff'
            },
            expand: function () {
                this.isExpanded = true;
                console.log('WebApp is expanded');
            },
            close: function () {
                console.log('WebApp is closed');
            }
        }
    };
}
