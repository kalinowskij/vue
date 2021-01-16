// Реализовать красивую страничку с выводом информации о товаре
// (например, страничка о выводе информации о ноутбуке в интернет магазине компьютерной техники)

Vue.createApp({
    data(){
        return {
            id: 1,
            name: "DELL Latitude 3301",
            shortDescription: "Ноутбук DELL Latitude 3301, 13.3\", Intel Core i5 8265U 1.6ГГц, 8ГБ, 256ГБ SSD, Intel UHD Graphics 620, Windows 10 Professional, 3301-5093, серебристый",
            description: "В современном ноутбуке DELL Latitude 3301 имеется небольшой экрана на 13.3 дюйма. Дисплей имеет разрешение 1920х1080, есть светодиодная подсветка. Малый вес в 1.2 кг, тонкий корпус, который в закрытом виде составляет 16.5 мм, делают девайс максимально мобильным. Процесс Intel Core i5 8265U имеет 4 ядра, оперативная память LPDDR3 занимает 8192 Мб, что позволяет компьютеру без проблем справляться с любыми задачами, без торможений и зависаний.\n" +
                "\n" +
                "Операционная система Windows 10 Professional с разрядностью 64-bit имеет удобный интерфейс и множество программ. Ноутбук DELL Latitude 3301 имеет множество разъемов для подключения периферийных устройств. Аккумулятор Li-Ion на 4 ячейки имеет энергоемкость 45 Wh, что позволяет пользоваться ноутбуком на одном заряде несколько часов.",
            price: 69990,
            image: "https://cs5-1.4pda.to/10150261.png",
            productImage: "https://items.s1.citilink.ru/1184591_v01_b.jpg"
        }
    }
}).mount('#app');
