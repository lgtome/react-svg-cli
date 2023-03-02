import { resolve } from 'path'
import { SVGFilesFilter } from './filters.js'
import {
    checkAndCreateOutDirectory,
    removeSVGExtension,
    transformToPascalCase,
    constructFilesPaths,
} from './helpers.js'
import { createStream } from './stream.js'

export async function run(options, mode = 'multiple') {
    const { outPath, inPath, extension, absolutePath } = options

    await checkAndCreateOutDirectory(outPath)

    const inDirPath = resolve(absolutePath, inPath)
    const allFiles = await constructFilesPaths(inDirPath, mode)

    const flatFiles = allFiles.flat(Infinity)

    const svgFiles = flatFiles.filter(SVGFilesFilter())

    await Promise.all(
        svgFiles.map(
            async ({ filename, path }) =>
                await createStream({
                    outPath,
                    inPath: path,
                    extension,
                    filename: transformToPascalCase(
                        removeSVGExtension(filename)
                    ),
                })
        )
    )
}
