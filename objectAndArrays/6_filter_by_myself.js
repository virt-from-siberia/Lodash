import _ from 'lodash'

export const FILTER_MY_SELF = () => {
    const products = [
        {
            id: 1,
            name: 'milk',
            price: '1$'
        }, {
            id: 2,
            name: 'bread',
            price: '2$'
        }, {
            id: 3,
            name: 'meat',
            price: '3$'
        },
    ]

    const searchProducts = (products, seachedValue) => {
        return _.filter(products, function (item) {
            return item.name.includes(seachedValue)
        })
    }

    const result = searchProducts(products, 'm')
    console.log('result', result)

}