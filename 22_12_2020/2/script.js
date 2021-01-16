// Реализовать Vue компонент «текстовая карусель»
// для анекдотов или крылатых выражений. Данный
// компонент может получать в качестве свойств массив
// строк (каждая строка отдельный слайд для карусели) и
// задержку в секундах между сменой слайдов. Смену
// текстовых слайдов реализовать с какой-нибудь
// анимацией.



let app = Vue.createApp({
    data(){
        return {
            display: 'table',
            items: [
                {
                    id: 0,
                    title: "Все сложное менее совершенно, чем простое.",
                },
                {
                    id: 1,
                    title: "Чем лучше ты сам, тем более ты доброжелателен ко всему окружающему и к людям.",
                },
                {
                    id: 2,
                    title: "Творить какое-либо бытие — значит творить форму.",
                },
                {
                    id: 3,
                    title: "Пусть боги ко мне приходят, а не я к ним.",
                },
                {
                    id: 4,
                    title: "Время есть продукт созерцания, неразрывно связанный с душой, как вечность неразрывно связана с умопостигаемым миром...",
                },
                {
                    id: 5,
                    title: "Будучи нигде, душа существует в том, что нигде, и таким образом она везде.",
                },
                {
                    id: 6,
                    title: "Ошибки, в возникающем ли или в действующем, суть уклонение созерцающего от предмета созерцания.",
                },
                {
                    id: 7,
                    title: "Красный звучит, сияет как огонь, а в огне заключена «простая красота.",
                },
                {
                    id: 8,
                    title: "Диалектика есть способность давать в логосе определение каждой вещи.",
                },
                {
                    id: 9,
                    title: "Время заключается в каждой человеческой душе, и притом время с одинаковыми свойствами.",
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