// В качестве данных дан массив объектов, описывающих статьи
// (свойства: название статьи, url местоположения статьи в
// интернете, путь к файлу картинке из статьи).
// На интерфейсе реализовать два режима отображения списка статей.
//     Нажав одну из кнопок
// в верхней панели, будет переключаться режим показа между сеткой,
//     содержащей кликабельные изображения статей, и списком
// с меньшими изображениями и текстом.



let app = Vue.createApp({
    data(){
        return {
            display: 'table',
            articles: [
                {
                    id: 0,
                    title: "FormVueLate 2.x",
                    description: "FormVueLate is a zero dependency library that allows you to generate schema-driven forms with extreme ease.",
                    url: "https://formvuelate.js.org/#getting-started",
                    img: "https://formvuelate.js.org/_assets/formvuelate-logo.0ce10a64.jpg",
                },
                {
                    id: 1,
                    title: "Vue NodeGui",
                    description: "Build performant, native and cross-platform desktop applications with Vue",
                    url: "https://vue.nodegui.org/",
                    img: "https://formvuelate.js.org/_assets/formvuelate-logo.0ce10a64.jpg",
                },
                {
                    id: 2,
                    title: "Villus – GraphQL client for Vue.js",
                    description: "Villus is a minimal GraphQL client for Vue.js, exposing components to build highly customizable GraphQL projects. You can use this in small projects or large complex applications",
                    url: "https://logaretm.github.io/villus/guide/overview/",
                    img: "https://formvuelate.js.org/_assets/formvuelate-logo.0ce10a64.jpg",
                },
            ]
        }
    },
    methods: {
        select(value){
            this.display = value;
        },
    }
})
app.mount('#app');
