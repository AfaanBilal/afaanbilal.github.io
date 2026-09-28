import createDOMPurify from 'dompurify'

// Works with the browser window or a jsdom window (build-time prerendering).
export const createSanitizer = (win) => {
    const purify = createDOMPurify(win)
    purify.addHook('afterSanitizeAttributes', (node) => {
        if (node.tagName === 'A' && node.getAttribute('target') === '_blank') {
            node.setAttribute('rel', 'noopener noreferrer')
        }
    })
    return (html) => purify.sanitize(html, { ADD_ATTR: ['target'] })
}

// Browser-only; created lazily so importing this module during SSR is safe.
let browserSanitize = null
export const sanitize = (html) => (browserSanitize ??= createSanitizer(window))(html)
