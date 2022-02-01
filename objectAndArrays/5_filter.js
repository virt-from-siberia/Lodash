import _ from 'lodash'

export const FILTER = () => {

    // lodash
    const result = _.filter([1, 2, 3, 4, 5], function (item) {
        return item < 3
    })
    console.log('result', result)

    const users = [
        {
            id: 1,
            name: 'John',
            isActive: true
        },
        {
            id: 2,
            name: 'Mike',
            isActive: false
        }, {
            id: 3,
            name: 'Alex',
            isActive: false
        }
    ]

    // фильтр всегда возврашяет массив
    const resultUsers = _.filter(users, function (user) {
        return user.name === 'John'
    })
    console.log('resultUsers', resultUsers)

    // можно фильтровать по значиению без функции
    const resultUsersIsActive = _.filter(users, 'isActive')
    console.log('resultUsersIsActive', resultUsersIsActive)

    // можно передавать массив значений по которым будет производится фильтра, например isActive = false
    const resultUsersIsActiveFalse = _.filter(users, ['isActive', false])
    console.log('resultUsersIsActiveFalse', resultUsersIsActiveFalse)

    // выбрать имя John
    const resultUsersJohn = _.filter(users, ['name', 'John'])
    console.log('resultUsersJohn', resultUsersJohn)

    const productsObj = {
        1: {
            name: 'milk',
            price: 100
        }, 2: {
            name: 'meat',
            price: 300
        },
    }

    const resultProducts = _.filter(productsObj, function (item) {
        return item.price < 150
    })
    console.log('resultProducts', resultProducts)
}