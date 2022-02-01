import _ from 'lodash'

export const MAP_MY_SELF = () => {
    const data = [
        {
            id: 1,
            status: 'active',
            first_name: 'John'
        }, {
            id: 2,
            status: 'inactive',
            first_name: 'Mike'
        }, {
            id: 3,
            status: 'active',
            first_name: 'Lena'
        }, {
            id: 4,
            status: 'inactive',
            first_name: 'Alex'
        },
    ]

    const normalizeUsers = (users) => {
        return _.map(users, function (user) {
            return {
                id: user.id,
                firstName: user.first_name,
                isActive: user.status === 'active'
            }
        })
    }

    const result = normalizeUsers(data)
    console.log('result', result)

}