export const SVGFilesFilter = () => {
    const regex = new RegExp('.svg$', 'gm')
    return ({ filename, path }) => {
        const isMatched = filename.match(regex)
        if (!isMatched) return false
        return { filename, path }
    }
}
