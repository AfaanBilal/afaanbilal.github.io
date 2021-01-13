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
        allRepos: [], 
        skillTypes: [
            'npm', 'framework', 'platform', 'language', 'service', 'hardware', 'skill', 'software'
        ],
        skills: [
            { name: 'C', type: 'language' },
            { name: 'C++', type: 'language' },
            { name: 'C#', type: 'language' },
            { name: 'Python', type: 'language' },
            { name: 'SQL', type: 'language' },
            { name: 'HTML', type: 'language' },
            { name: 'CSS', type: 'language' },
            { name: 'PHP', type: 'language' },
            { name: 'XML', type: 'language' },
            { name: 'Rust', type: 'language' },
            { name: 'SCSS', type: 'language' },
            { name: 'Java', type: 'language' },
            { name: 'JSON', type: 'language' },
            { name: 'Go', type: 'language' },
            { name: 'JavaScript', type: 'language' },

            { name: 'Laravel', type: 'framework' },
            { name: 'VueJS', type: 'framework' },
            { name: 'CodeIgniter', type: 'framework' },

            { name: 'Docker Hub', type: 'service' },
            { name: 'AWS', type: 'service' },
            { name: 'AWS EC2', type: 'service' },
            { name: 'AWS SES', type: 'service' },
            { name: 'AWS RDS', type: 'service' },
            { name: 'DigitalOcean', type: 'service' },
            { name: 'DigitalOcean Droplets', type: 'service' },
            { name: 'DigitalOcean Spaces', type: 'service' },
            { name: 'SendGrid', type: 'service' },
            { name: 'Twilio', type: 'service' },
            { name: 'GitHub', type: 'service' },
            { name: 'GitLab', type: 'service' },
            { name: 'Firebase', type: 'service' },
            { name: 'Draw.io', type: 'service' },

            { name: 'Android', type: 'platform' },
            { name: 'Ubuntu', type: 'platform' },
            { name: 'Web', type: 'platform' },
            { name: 'Amazon Linux', type: 'platform' },
            { name: 'MacOS', type: 'platform' },
            { name: 'Windows', type: 'platform' },
            { name: 'Arduino', type: 'platform' },

            { name: 'VSCode', type: 'software' },
            { name: 'Apache', type: 'software' },
            { name: 'MySQL', type: 'software' },
            { name: 'MariaDB', type: 'software' },
            { name: 'SQLite', type: 'software' },
            { name: 'Docker', type: 'software' },
            { name: 'Docker Swarm', type: 'software' },
            { name: 'Git', type: 'software' },
            { name: 'Microsoft Office', type: 'software' },
            { name: 'SketchUp', type: 'software' },
            { name: 'Slack', type: 'software' },
            { name: 'phpMyAdmin', type: 'software' },
            { name: 'Termius', type: 'software' },
            { name: 'XAMPP', type: 'software' },
            { name: 'FileZilla', type: 'software' },
            { name: 'Wordpress', type: 'software' },
            { name: 'Everything', type: 'software' },
            { name: 'Android Studio', type: 'software' },
            { name: 'Microsoft Visual Studio', type: 'software' },
            { name: 'Sequel Ace', type: 'software' },

            { name: 'Apple MacBook 16"', type: 'hardware' },
            { name: 'Intel i9', type: 'hardware' },
            { name: 'Logitech MX Master 3', type: 'hardware' },
            { name: 'Logitech MX Keys', type: 'hardware' },
            { name: 'Logitech c922 Pro', type: 'hardware' },
            { name: 'Ryzen 5950X', type: 'hardware' },
            { name: 'Nvidia RTX 3080', type: 'hardware' },
            { name: 'Logitech G502 Hero', type: 'hardware' },
            { name: 'HyperX Cloud Alpha S', type: 'hardware' },
            { name: 'HyperX Alloy FPS Mechanical', type: 'hardware' },
            { name: 'BenQ Zowie XL2546 240Hz', type: 'hardware' },
            { name: 'HP 27es', type: 'hardware' },
            { name: 'XP Pen Deco Pro Medium', type: 'hardware' },
            { name: 'Acer Predator Helios 300', type: 'hardware' },
            { name: 'Intel i7', type: 'hardware' },
            { name: 'Nvidia GTX 1060', type: 'hardware' },
            { name: 'OnePlus Nord', type: 'hardware' },
            { name: 'Mi Soundbar', type: 'hardware' },
            { name: 'TP Link Powered USB Hub', type: 'hardware' },

            { name: 'Programming', type: 'skill' },
            { name: 'FullStack', type: 'skill' },
            { name: 'WebDev', type: 'skill' },
            { name: 'FTP', type: 'skill' },
            { name: 'SSH', type: 'skill' },
            { name: 'Computer Vision', type: 'skill' },
            { name: 'Object Detection', type: 'skill' },
            { name: 'Object Recognition', type: 'skill' },
            { name: 'Maching Learning', type: 'skill' },
            { name: 'REST', type: 'skill' },
            { name: 'API', type: 'skill' },
            { name: 'Bootstrap', type: 'skill' },
            { name: 'Tailwind', type: 'skill' },
            { name: 'OAuth', type: 'skill' },
            { name: 'jQuery', type: 'skill' },

            { name: '@afaanbilal/random-string', type: 'npm', link: 'https://www.npmjs.com/package/@afaanbilal/random-string' },
        ],

        name: '', 
        email: '', 
        message: '',
        sent: false,
        sending: false,
    },
    computed: {
        repos() { 
            let excludeNames = ["AfaanBilal", "afaanbilal.github.io", "musings", "amx-infinity.github.io", "SoftSolutions"]
            return this.allRepos.filter(o => !excludeNames.includes(o.name)).sort((b, a) => a.stargazers_count - b.stargazers_count)
        },
    },
    methods: {
        getBackground(t) {
            switch (t) {
                case 'skill': return 'linear-gradient(90deg, #8034cc 0%,#991a79 100%)'
                case 'hardware': return 'linear-gradient(90deg, #3471cc 0%,#25a48b 100%)'
                case 'software': return 'linear-gradient(to right, #5f2c82, #49a09d)'
                case 'language': return 'linear-gradient(to right, #ff00cc, #333399)'
                case 'framework': return 'linear-gradient(90deg, #40e0e6 0%,#e4256e 100%)'
                case 'service': return 'linear-gradient(to right, #e55d87, #9f73c4)'
                case 'platform': return 'linear-gradient(to right, #f2709c, #ff9472)'
                case 'npm': return 'linear-gradient(139deg, #fb8817, #ff4b01, #c12127, #e02aff)'
            }
        },
        getPlural(t) {
            if (t == 'npm') return 'NPM Packages'
            return (t == 'hardware' ? t : t + 's').toTitleCase()
        },
        sendMessage() { 
            this.sending = true
            fetch('https://script.google.com/macros/s/AKfycby3_0eYQLINNn3KgorICGzH4yru0FLvqdZ8BYfeQMRVddG0m51GV_mB/exec', {
                method: 'post',
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                body: 'name=' + encodeURIComponent(this.name) + '&email=' + encodeURIComponent(this.email) + '&message=' + encodeURIComponent(this.message)
            }).then(r => r.text()).then((d) => { 
                if (d == 'success') {
                    this.name = ''
                    this.email = ''
                    this.message = ''
                    this.sending = false
                    this.sent = true
                }
            })
        },
    },
    mounted() {
        fetch('https://api.github.com/users/AfaanBilal/repos').then(r => r.json()).then((d) => { this.allRepos = d }).then(() => { 
            fetch('https://api.github.com/orgs/AMX-Infinity/repos').then(r => r.json()).then((d) => { this.allRepos.push(...d) })
        })
    },
})
