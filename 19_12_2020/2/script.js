// 2. Реализовать редактируемые текстовой тег. Например: дан тег
// <p> c текстом «Измени моё содержимое». По нажатию на него
// открывается всплывающее окошко с элементов input по средству
// которого можно изменить содержимое тега <p>. Ещё пример как
// можно реализовать можно увидеть на этом сайте:
//     https://ruseller.com/lessons/les446/example/code.html#
//         Здесь представлен пример организации редактирования
// текста в <li> элементах.


    let app = Vue.createApp({
    data(){
        return {
            isEdit: false,
            content: "Измени моё содержимое",
        }
    },
    methods: {},
    mounted(){}
})
app.mount('#app');
