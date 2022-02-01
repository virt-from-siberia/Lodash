import _ from 'lodash'

export const DELETE_FROM_ARRAY = () => {
    const arrPull = [1, 2, 3]

    // !!! есть два метода
    // !!! without - иммутабельный метод, возвращяет новый массив
    // !!! pull - метубальный метод, возвращяет модифицированный массив

    // передается сам массив и вторым аргументом то , что хотим из него удалить
    const resultPull = _.pull(arrPull, 1, 2)
    console.log('DELETE_FROM_ARRAY pull result', resultPull)
    console.log('DELETE_FROM_ARRAY old arr', arrPull)


    const arrWithout = [1, 2, 3]

    // without НЕ удаляет обьекты в массиве
    // передается сам массив и вторым аргументом то , что хотим из него удалить
    const resultWithout = _.without(arrWithout, 1, 2)
    console.log('DELETE_FROM_ARRAY without result', resultWithout)
    console.log('DELETE_FROM_ARRAY old arr', arrWithout)


    const objArr = [
        {id: 1},
        {id: 2},
        {id: 3},
    ]
    // методы для удаления ОБЬЕКТОВ remove и reject
    // remove - метубальный метод, возвращяет модифицированный массив
    // reject - иммутабельный метод, возвращяет новый массив

    // удаляем обьект если в нем id = 1
    const resultReject = _.reject(objArr, function (element) {
        return element.id === 1
    })
    console.log('DELETE_FROM_ARRAY reject', resultReject)


    // так же в reject можно передавать массив
    const resultRejectArr = _.reject(objArr, ["id", 1])
    console.log('DELETE_FROM_ARRAY reject resultRejectArr', resultRejectArr)

}