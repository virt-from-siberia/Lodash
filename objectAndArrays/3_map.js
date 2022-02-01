import _ from 'lodash'

export const MAP = () => {
    // js map
    const newArr = [1, 2, 3].map(function (item) {
        return item
    })
    console.log('newArr', newArr)


    // lodash
    const lodashArr = _.map([1, 2, 3], function (item) {
        return item
    })
    console.log('lodashArr', lodashArr)


    const users = [
        {
            id: 1,
            name: 'User 1'
        },
        {
            id: 2,
            name: 'User 2'
        },
        {
            id: 3,
            name: 'User 3'
        }
    ]

    // простой lodash map
    const ids = _.map(users, function (item) {
        console.log('item', item)
        return item.id
    })
    console.log('ids', ids)

    // вместо функции итератора можно передать строку с именем тех полей которые мы хотим выташить
    // выбираем только id из users
    const lodashMapIds = _.map(users, 'id')
    console.log('lodashMapIds', lodashMapIds)

    // выбираем только name из users
    const lodashMapNames = _.map(users, 'name')
    console.log('lodashMapNames', lodashMapNames)

    // можно  проходится lodash map по обьектку
    const usersObj = {
        1: {
            name: 'User 1'
        },
        2: {
            name: 'User 2'
        },
        3: {
            name: 'User 3'
        }
    }

    const usersObjLodash = _.map(usersObj, function (user, id) {
        console.log('user', user, id)
        // конвертируем строку id в number
        return Number(id)
    })
    console.log('usersObjLodash', usersObjLodash)

}

