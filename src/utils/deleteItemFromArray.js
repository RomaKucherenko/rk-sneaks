export const deleteItemFromArray = (array, item) => {
    let index = array.indexOf(item)
    array.splice(index, 1)
    return array
}