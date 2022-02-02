import _ from 'lodash'

export const EVERY_SOME = () => {

    const users = [
        {
            id: 1,
            name: 'John',
            isActive: true
        }, {
            id: 2,
            name: 'Mick',
            isActive: false
        }, {
            id: 3,
            name: 'Bon',
            isActive: true
        }, {
            id: 4,
            name: 'Bill',
            isActive: false
        }
    ]

    // some lodash возвращяет boolean если хотя бы один элемент в массиве выполняет условия

    const isSomeActiveSome = _.some(users, function (user) {
        return user.isActive === true
    })
    console.log('EVERY_SOME  isSomeActiveSome', isSomeActiveSome)

    // every lodash возвращяет boolean если хотя все элементы в массиве выполняют условия
    const isEveryActiveEvery = _.every(users, function (user) {
        return user.isActive === true
    })
    console.log('EVERY_SOME  isSomeActiveEvery', isEveryActiveEvery)

    // можно передавать вместо функции обьект с условиями
    const isEveryActiveObj = _.some(users, {isActive: true, id: 3})
    console.log('EVERY_SOME  isSomeActiveEvery', isEveryActiveObj)
}