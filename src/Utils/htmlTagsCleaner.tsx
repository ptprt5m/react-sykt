
export function cutTags(str: string) {
    let regex = /<\/?[^>]+>|&nbsp;/g,
        result = str.replace(regex, "")

    return result
}
