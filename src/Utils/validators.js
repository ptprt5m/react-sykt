
export const required = value => {
    if (value) return undefined
    return 'Field is requider!'
}

export const maxLengthCreator = (maxLength) => (value) => {
    if (value.length > maxLength) return `Field max ${maxLength} symbols!`
    return undefined
}

export const minLengthCreator = (minLength) => (value) => {
    if (value.length < minLength) return `Field min ${minLength} symbols!`
    return undefined
}
