// На вёрстке задан перечень услуг в виде списка. Внутри
// Vue приложения - это массив объектов со свойствами
// (название услуги, стоимость услуги).
// У пользователя есть возможность выбрать интересующие услуги,
//     а ниже списка сразу же будет
// отображаться итоговая стоимость выбранных услуг пользователем.

let app = Vue.createApp({
    data(){
        return {
            services: [
                {
                    id: 0,
                    title: "Good Service",
                    cost: 20,
                    select: false,
                },
                {
                    id: 1,
                    title: "Better Service",
                    cost: 50,
                    select: false,
                },
                {
                    id: 2,
                    title: "The best Service",
                    cost: 70,
                    select: false,
                },
            ]
        }
    },
    computed: {
        getCost(){
            let result = 0;
            this.services.forEach((item) => {
                if(item.select){
                    result += item.cost;
                }
            });
            return result;
        }
    }
})
app.mount('#app');
