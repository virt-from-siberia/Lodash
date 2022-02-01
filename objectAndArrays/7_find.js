import _ from 'lodash'

export const FIND = () => {
    const users = [
        {
            id: 1,
            name: 'Mike',
            price: '1$'
        }, {
            id: 2,
            name: 'Bill',
            price: '2$'
        }, {
            id: 3,
            name: 'Elena',
            price: '3$'
        },
    ]

    // метод find возвращяет первый элемент по условию / только дин
    // если ничего не найдено то вернется undefined
    const result = _.find(users, function (user) {
        return user.name === 'Bill'
    })
    console.log('result', result)


}