export const costFilterValueValidator = (value) => {
    //Логика следущая. Если мы не проходим одно из условий,
    // то функция возвращает false, иначе же true

    //Особое условие, своего рода
    if (value === "") {
        return true
    }

    //Только цифры
    if (!/[0-9]$/.test(value)) {
        return false
    }

    //Ноль не может быть началом строки
    if (!/[^0]/.test(value)) {
        return false
    }


    return true
}

export const typeDefinition = () => {

}

