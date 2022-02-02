// import _ from 'lodash'

export const SORTING = () => {

    const users = [
        {
            id: 1,
            name: 'John',
            isActive: true,
            likes: 50
        }, {
            id: 2,
            name: 'Mick',
            isActive: false,
            likes: 23
        }, {
            id: 3,
            name: 'Bon',
            isActive: true,
            likes: 69
        }, {
            id: 4,
            name: 'Bill',
            isActive: false,
            likes: 29
        }
    ]

    // JS
    const result = users.sort(function (user1, user2) {
        return user1.likes > user2.likes ? -1 : 1
    })
    console.log('SORTING  result', result)

    // lodash
    const resultLodashDesc = _.orderBy(users, ['likes'], ['desc'])
    const resultLodashAsc = _.orderBy(users, ['likes'], ['asc'])
    console.log('SORTING  resultLodashDesc', resultLodashDesc)
    console.log('SORTING  resultLodashAsc', resultLodashAsc)

    // можно сортировать по нескольким условиям
    const resultLodashFew = _.orderBy(users, ['likes, name'], ['asc', "desc"])
    console.log('SORTING  resultLodashFew', resultLodashFew)
}