import prompts from 'prompts'

export const initConfig = async () => {
    const response = await prompts({
        type: 'number',
        name: 'value',
        message: "it's gonna get serious",
        validate: () => true,
    })
}
