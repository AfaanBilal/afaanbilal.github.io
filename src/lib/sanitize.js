import DOMPurify from 'dompurify'

DOMPurify.addHook('afterSanitizeAttributes', (node) => {
    if (node.tagName === 'A' && node.getAttribute('target') === '_blank') {
        node.setAttribute('rel', 'noopener noreferrer')
    }
})

export const sanitize = (html) => DOMPurify.sanitize(html, { ADD_ATTR: ['target'] })
