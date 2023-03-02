export function checkArgs(args, excepts) {
    if (!excepts) {
        return !Object.values(args).filter((arg) => !arg).length
    }
    const filteredObject = Object.keys(args).reduce((acc, arg) => {
        if (!excepts.find((except) => except === arg)) {
            return { ...acc, [arg]: args[arg] }
        }
        return acc
    }, {})

    return !Object.values(filteredObject).filter((arg) => !arg).length
}
