export function parse(svg) {
    const regex = new RegExp('(<svg .+>).(</svg>)', 'gs')

    const match = svg.match(regex)

    if (!match) return { data: null, isMatched: false }

    return { data: match[0], isMatched: true }
}

export function createComponent(str, filename = 'LetMeNameSVG') {
    if (!str) return false
    return `const ${filename} = () =>{
        return ${str}
    }`
}
