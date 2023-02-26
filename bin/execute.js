#!/usr/bin/env node
import minimist from 'minimist'
import { initConfig } from '../src/initializeConfig.js'
import { checkArgs } from '../src/utils.js'
import { run } from '../src/run.js'

const absolutePath = process.cwd()

const argv = minimist(process.argv.slice(2))

const { i, init, e, extension = '.js', in: inPath, out: outPath, o, d } = argv

const options = {
    outPath: outPath || o,
    inPath: inPath || d,
    extension: e || extension,
    absolutePath,
}

initialize()

function initialize() {
    if (i || init) {
        initConfig().then(process.exit)
        return
    }

    if (checkArgs(options)) {
        run(options)
    }
}
