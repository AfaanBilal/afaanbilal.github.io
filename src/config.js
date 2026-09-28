const ALLOWED_OWNERS = ['afaanbilal', 'amx-infinity']

// GitHub endpoints listing every repo shown on the site.
export const REPO_SOURCES = [
    'https://api.github.com/users/AfaanBilal/repos',
    'https://api.github.com/orgs/AMX-Infinity/repos',
]

export const EXCLUDED_REPOS = [
    'afaanbilal',
    'afaanbilal.github.io',
    'musings',
    'amx-infinity.github.io',
    'softsolutions',
]

export const isAllowedOwner = (fullName) => {
    if (!fullName) return false
    const owner = fullName.split('/')[0]?.toLowerCase()
    return ALLOWED_OWNERS.includes(owner)
}

export const isExcludedRepo = (name) => {
    if (!name) return false
    return EXCLUDED_REPOS.includes(name.toLowerCase())
}

// Follows GitHub's Link header so owners with more than 100 repos are fully listed.
export const fetchAllRepos = async (source, headers = {}) => {
    const repos = []
    let url = `${source}?per_page=100`
    while (url) {
        const res = await fetch(url, { headers })
        if (!res.ok) throw new Error(`GitHub API ${res.status}`)
        const page = await res.json()
        if (!Array.isArray(page)) throw new Error(page?.message || 'Unexpected response')
        repos.push(...page)
        url = res.headers.get('link')?.match(/<([^>]+)>;\s*rel="next"/)?.[1]
    }
    return repos
}
