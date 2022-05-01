

export function addCar(car) {
    return {
        type: 'ADD_CAR',
        payload: car
    }
}

export function removeCar(index) {
    return {
        type: 'REMOVE_CAR',
        payload: index
    }
}