import showdown from 'showdown'

const converter = new showdown.Converter({
    tables: true,
    strikethrough: true,
    tasklists: true,
    simpleLineBreaks: true,
    ghCodeBlocks: true,
    openLinksInNewWindow: true,
})

// Markdown from a repo -> HTML (unsanitized). Relative images point at the raw file,
// relative links at the file view on GitHub.
export const renderMarkdown = (md, fullName, branch) => {
    const raw = `https://raw.githubusercontent.com/${fullName}/${branch}/`
    return converter.makeHtml(md)
        .replace(/src="(?![a-z][a-z0-9+.-]*:|\/\/)\/?([^"]+)"/gi, `src="${raw}$1"`)
        .replace(/href="(?![a-z][a-z0-9+.-]*:|\/\/|#)\/?([^"]+)"/gi, `href="https://github.com/${fullName}/blob/${branch}/$1"`)
}
