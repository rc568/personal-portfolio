export const lineBreakFormatter = (text: string) => {
    const newText = text.replaceAll('\\n', '<br>')
    return newText
}