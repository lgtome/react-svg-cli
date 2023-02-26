export function checkArgs(args) {
    return !Object.values(args).filter((arg) => !arg).length
}
