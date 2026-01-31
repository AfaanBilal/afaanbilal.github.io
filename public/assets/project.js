/**
 * Afaan Bilal's Portfolio
 * 
 * https://afaan.dev
 * 
 * (c) Afaan Bilal
 */

String.prototype.toTitleCase = function () { return this.replace(/\w\S*/g, function(txt) { return txt.charAt(0).toUpperCase() + txt.substr(1) }) }

new Vue({
    el: '#app',
    data: { 
        repoFullName: 'AfaanBilal/game-of-life',
        repo: {},
        langs: {},
        readmeHtml: 'loading...',
        licenseHtml: 'loading...',
    },
    computed: {
        repoTitle() { 
            return this.repo.name ? this.repo.name.split('-').join(' ').toTitleCase() : 'Loading...'
        },
        languages() { 
            let l = []
            for (let k in this.langs) { l.push(k) }
            return l
        },
    },
    mounted() {
        this.repoFullName = window.location.hash.replace('#','') || 'AfaanBilal/game-of-life'

        if (!['afaanbilal', 'amx-infinity'].includes(this.repoFullName.split('/')[0].toLowerCase())) { window.location = '/' }
        
        var converter = new showdown.Converter()
        fetch('https://api.github.com/repos/' + this.repoFullName)
            .then(r => {  if (!r.ok) {  window.location = '/' } else { return r.json() } })
            .then(d => { 
                if (['afaanbilal', 'amx-infinity'].includes(d.full_name.split('/')[0].toLowerCase())) {
                    this.repo = d
                } else { 
                    window.location = '/'
                }
            })
            .then(() => { fetch(this.repo.languages_url).then(r => r.json()).then(d => { this.langs = d }) })
            .then(() => {
                fetch('https://raw.githubusercontent.com/' + this.repoFullName + '/' + this.repo.default_branch + '/README.md').then(r => r.text())
                    .then(d => {  this.readmeHtml = converter.makeHtml(d) })
                
                fetch('https://raw.githubusercontent.com/' + this.repoFullName + '/' + this.repo.default_branch + '/LICENSE').then(r => r.text())
                    .then(d => {  this.licenseHtml = converter.makeHtml(d) })
            })
            .catch((error) => { window.location = '/' })
    },
})
