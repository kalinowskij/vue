// Усовершенствовать «Меню навигации». Меню представляет
// собой набор вкладок, например: главная, проекты, услуги, контакты.
//     По нажатию на вкладку менять основной контент страницы в соответствие с выбранной вкладкой.
//     Данную механику реализовать через динамические компоненты.

let app = Vue.createApp({
    data(){
        return {
            activeContent: null,
            currentComponent: "comp_a",
            components: [
                {title: "Главная", component: "comp_a"},
                {title: "Проекты", component: "comp_b"},
                {title: "Услуги", component: "comp_c"},
                {title: "Контакты", component: "comp_d"},
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
    },
    components: {
        "comp_a": {template: "<p>Контент на стринце Главная</p>"},
        "comp_b": {template: "<p>Контент на стринце Проекты</p>"},
        "comp_c": {template: "<p>Контент на стринце Услуги</p>"},
        "comp_d": {template: "<p>Контент на стринце Контакты</p>"},
    }
})
app.mount('#app');
