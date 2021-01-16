// Реализовать редактируемую галерею изображений.
//     Каждое изображение в галереи имеет название, картинку
// и кнопку, позволяющую удалить соответствующее изображение из галереи.
//     У самой галереи есть возможность добавить новое изображение, путём
// добавления названия изображения и пути к файлу картинки.
//     Данную задачу решить путём создания взаимосвязанных
// компонентов (например: «галерея» родительский компонент,
//     а карточка одного изображения – это дочерний элемент).


let app = Vue.createApp({
    data() {
        return {
            images: [],
            newImageLink: "https://picsum.photos/id/30/200/200",
        }
    },
    mounted() {
        for (var i = 1; i < 5; i++) {
            this.images.push({
                id: i,
                src: "https://picsum.photos/id/" + i + "/200/200",
            });
        }

    },
    methods: {
        removeImage(value) {
            this.images = this.images.filter(item => item.id !== value.id)
        },
        addImage(){
            this.images.push({
                id: Date.now(),
                src: this.newImageLink,
            });
        }

    }
});
app.component('image-component',
    {
        data() {
            return {
                images: []
            }
        },
        props: ['image'],
        template: `
        <div class="uk-inline">
                <img :src="image.src" alt="">
                <div class="uk-overlay uk-overlay-primary uk-position-bottom">
                    <p><span class="uk-icon-button" uk-icon="trash" @click="removeImage(image)"></span></p>
                </div>
            </div>
        `,
        methods: {
            removeImage(image){
                this.$emit('remove', image)
            }
        }
    });


app.mount('#app');
