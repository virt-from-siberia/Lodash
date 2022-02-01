import _ from 'lodash'

export const EACH = () => {
    // JS
    [1, 2].forEach(function (item) {
        console.log(item)
    })

    // lodash
    _.each([1, 2], function (item) {
        console.log(item)
    })

    // метод each можно вызывать и итерировать им обьекты
    const products = {
        1: {
            name: 'product 1'
        },
        2: {
            name: 'product 2'
        },
        3: {
            name: 'product 3'
        }
    }

    // можно обращятся как item так и к ключу обекта
    _.each(products, function (item, key) {
        console.log(item)
        console.log(key)
        console.log(products[key])
    })

    // пример : прочитать в обьекте только имена и запушить их в массив
    const arr = []
    _.each(products, function (item) {
        arr.push(item.name)
    })

    console.log('arr', arr)

}