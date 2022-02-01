import _ from 'lodash'

export const DELETE_FROM_ARRAY_MY_SELF = () => {
    const users = [
        {
            id: 1,
            name: 'John',
            isActive: true,
            likes: 110
        }, {
            id: 2,
            name: 'Mika',
            isActive: false,
            likes: 30
        }, {
            id: 3,
            name: 'Lena',
            isActive: true,
            likes: 25
        }, {
            id: 3,
            name: 'Kimi',
            isActive: true,
            likes: 225
        },
    ]

    const getPopularUsers = (users) => {
        return _.reject(users, function (user) {
            return !user.isActive || user.likes < 100
        })
    }

    const result = getPopularUsers(users)
    console.log('DELETE_FROM_ARRAY_MY_SELF result reject', result)
}