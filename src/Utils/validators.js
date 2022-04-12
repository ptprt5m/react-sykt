
export const required = value => {
    if (value) return undefined
    return 'Поле является обязательным!'
}

export const maxLengthCreator = (maxLength) => (value) => {
    if (value.length > maxLength) return `Поле может быть максимально ${maxLength} символов!`
    return undefined
}

export const minLengthCreator = (minLength) => (value) => {
    if (value.length < minLength) return `Поле может быть минимально ${minLength} символа!`
    return undefined
}
