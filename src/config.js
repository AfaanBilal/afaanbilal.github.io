export const ALLOWED_OWNERS = ['afaanbilal', 'amx-infinity']

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
