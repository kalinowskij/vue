// Реализовать «Меню навигации». Меню представляет собой набор вкладок,
// например: главная, проекты, услуги, контакты. По нажатию на вкладку менять
// основной контент страницы в соответствие с выбранной вкладкой.

let app = Vue.createApp({
    data(){
        return {
            activeContent: null,
            contents: [
                {title: "Главная", content: "Контент на стринце Главная"},
                {title: "Проекты", content: "Контент на стринце Проекты"},
                {title: "Услуги", content: "Контент на стринце Услуги"},
                {title: "Контакты", content: "Контент на стринце Контакты"},
            ]
        }
    },
    methods: {
        select(index){
            this.activeContent = this.contents[index];
        }
    },
    mounted(){
        this.activeContent = this.contents[0];
    }
})
app.mount('#app');
