import { renderMarkdown } from './markdown.js'

const fetchText = async (url) => {
    try {
        const res = await fetch(url)
        return res.ok ? await res.text() : null
    } catch { return null }
}

// Everything a project page shows, from a GitHub repo object. Shared by the build-time
// snapshot script and the client's live fallback so both render identically.
export const fetchProjectData = async (repo, { sanitize, headers = {} }) => {
    const { full_name: full, default_branch: branch } = repo
    const raw = `https://raw.githubusercontent.com/${full}/${branch}/`
    const [languages, readme, license] = await Promise.all([
        fetch(repo.languages_url, { headers })
            .then((res) => (res.ok ? res.json() : Promise.reject()))
            .then(Object.keys)
            // Rate-limited: fall back to the primary language.
            .catch(() => (repo.language ? [repo.language] : [])),
        fetchText(raw + 'README.md'),
        fetchText(raw + 'LICENSE'),
    ])
    return {
        repo: {
            name: repo.name,
            full_name: full,
            description: repo.description,
            homepage: repo.homepage,
            html_url: repo.html_url,
        },
        languages,
        readmeHtml: sanitize(renderMarkdown(readme ?? '_No README found._', full, branch)),
        licenseHtml: license ? sanitize(renderMarkdown(license, full, branch)) : '',
    }
}
