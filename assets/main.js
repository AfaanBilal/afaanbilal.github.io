/**
 * Afaan Bilal's Portfolio
 *
 * https://afaan.dev
 *
 * (c) Afaan Bilal
 */

String.prototype.toTitleCase = function () { return this.replace(/\w\S*/g, function (txt) { return txt.charAt(0).toUpperCase() + txt.substr(1) }) }

new Vue({
    el: '#app',
    data: {
        allRepos: [],
        skillTypes: [
            'npm', 'framework', 'composer', 'platform', 'language', 'database', 'service', 'skill', 'software'
        ],
        skills: [
            { name: 'JavaScript', type: 'language' },
            { name: 'PHP', type: 'language' },
            { name: 'Rust', type: 'language' },
            { name: 'Python', type: 'language' },
            { name: 'C', type: 'language' },
            { name: 'C++', type: 'language' },
            { name: 'C#', type: 'language' },
            { name: 'SQL', type: 'language' },
            { name: 'HTML', type: 'language' },
            { name: 'CSS', type: 'language' },
            { name: 'XML', type: 'language' },
            { name: 'SCSS', type: 'language' },
            { name: 'Java', type: 'language' },
            { name: 'JSON', type: 'language' },
            { name: 'Go', type: 'language' },

            { name: 'Aurora', type: 'database' },
            { name: 'MySQL', type: 'database' },
            { name: 'MariaDB', type: 'database' },
            { name: 'Redis', type: 'database' },
            { name: 'HyperDB', type: 'database' },
            { name: 'SQLite', type: 'database' },
            { name: 'Firebase RealtimeDB', type: 'database' },

            { name: 'Laravel', type: 'framework' },
            { name: 'NodeJS', type: 'framework' },
            { name: 'ExpressJS', type: 'framework' },
            { name: 'NestJS', type: 'framework' },
            { name: 'AdonisJS', type: 'framework' },
            { name: 'Rocket', type: 'framework' },
            { name: 'Actix-Web', type: 'framework' },
            { name: 'ReactJS', type: 'framework' },
            { name: 'React Native', type: 'framework' },
            { name: 'VueJS', type: 'framework' },
            { name: 'SolidJS', type: 'framework' },
            { name: 'PulseJS', type: 'framework' },
            { name: 'CodeIgniter', type: 'framework' },

            { name: 'GitHub', type: 'service' },
            { name: 'GitLab', type: 'service' },
            { name: 'Docker Hub', type: 'service' },
            { name: 'AWS', type: 'service' },
            { name: 'AWS EC2', type: 'service' },
            { name: 'AWS RDS', type: 'service' },
            { name: 'AWS ELB', type: 'service' },
            { name: 'AWS ECR', type: 'service' },
            { name: 'AWS ECS', type: 'service' },
            { name: 'AWS S3', type: 'service' },
            { name: 'AWS ACM', type: 'service' },
            { name: 'AWS CloudWatch', type: 'service' },
            { name: 'AWS SES', type: 'service' },
            { name: 'AWS GuardDuty', type: 'service' },
            { name: 'DigitalOcean', type: 'service' },
            { name: 'DigitalOcean Droplets', type: 'service' },
            { name: 'DigitalOcean Spaces', type: 'service' },
            { name: 'SendGrid', type: 'service' },
            { name: 'Sentry', type: 'service' },
            { name: 'Twilio', type: 'service' },
            { name: 'Draw.io', type: 'service' },

            { name: 'Web', type: 'platform' },
            { name: 'Android', type: 'platform' },
            { name: 'Ubuntu', type: 'platform' },
            { name: 'Amazon Linux', type: 'platform' },
            { name: 'iOS', type: 'platform' },
            { name: 'MacOS', type: 'platform' },
            { name: 'Windows', type: 'platform' },
            { name: 'Arduino', type: 'platform' },

            { name: 'VSCode', type: 'software' },
            { name: 'Obsidian', type: 'software' },
            { name: 'Git', type: 'software' },
            { name: 'Slack', type: 'software' },
            { name: 'Beekeeper', type: 'software' },
            { name: 'iTerm2', type: 'software' },
            { name: 'Windows Terminal', type: 'software' },
            { name: 'Apache', type: 'software' },
            { name: 'Docker', type: 'software' },
            { name: 'Docker Swarm', type: 'software' },
            { name: 'Microsoft Office', type: 'software' },
            { name: 'SketchUp', type: 'software' },
            { name: 'phpMyAdmin', type: 'software' },
            { name: 'Termius', type: 'software' },
            { name: 'XAMPP', type: 'software' },
            { name: 'FileZilla', type: 'software' },
            { name: 'Wordpress', type: 'software' },
            { name: 'Everything', type: 'software' },
            { name: 'Sequel Ace', type: 'software' },
            { name: 'Android Studio', type: 'software' },
            { name: 'Microsoft Visual Studio', type: 'software' },

            { name: 'Programming', type: 'skill' },
            { name: 'FullStack', type: 'skill' },
            { name: 'WebDev', type: 'skill' },
            { name: 'FTP', type: 'skill' },
            { name: 'SSH', type: 'skill' },
            { name: 'Computer Vision', type: 'skill' },
            { name: 'Object Detection', type: 'skill' },
            { name: 'Object Recognition', type: 'skill' },
            { name: 'Machine Learning', type: 'skill' },
            { name: 'REST', type: 'skill' },
            { name: 'API', type: 'skill' },
            { name: 'Bootstrap', type: 'skill' },
            { name: 'Tailwind', type: 'skill' },
            { name: 'OAuth', type: 'skill' },
            { name: 'jQuery', type: 'skill' },
            { name: 'Traefik', type: 'skill' },

            { name: 'pulse', type: 'npm', link: 'https://www.npmjs.com/package/@afaanbilal/pulse' },
            { name: '@afaanbilal/random-string', type: 'npm', link: 'https://www.npmjs.com/package/@afaanbilal/random-string' },
            { name: 'react-native-multitap', type: 'npm', link: 'https://www.npmjs.com/package/react-native-multitap' },
            { name: 'react-native-pagination-dots', type: 'npm', link: 'https://www.npmjs.com/package/react-native-pagination-dots' },
            { name: 'hyperdb-js', type: 'npm', link: 'https://www.npmjs.com/package/hyperdb-js' },

            { name: 'afaanbilal/php-random-string', type: 'composer', link: 'https://packagist.org/packages/afaanbilal/php-random-string' },
            { name: 'afaanbilal/hyperdb-php', type: 'composer', link: 'https://packagist.org/packages/afaanbilal/hyperdb-php' },
            { name: 'afaanbilal/laravel-has-uuid', type: 'composer', link: 'https://packagist.org/packages/afaanbilal/laravel-has-uuid' },
        ],

        hardwareTypes: ['hardware', 'headset', 'hub', 'laptop', 'cpu', 'gpu', 'monitor', 'keyboard', 'mouse', 'webcam', 'phone', 'speaker'],
        hardware: [
            { name: 'HyperX Cloud Alpha S', type: 'headset' },
            { name: 'Sony WH-1000XM3', type: 'headset' },
            { name: 'XP Pen Deco Pro Medium', type: 'hardware' },
            { name: 'TP Link Powered USB Hub', type: 'hub' },

            { name: 'Apple MacBook 16"', type: 'laptop' },
            { name: 'Acer Predator Helios 300', type: 'laptop' },

            { name: 'Logitech c922 Pro', type: 'webcam' },

            { name: 'OnePlus Nord', type: 'phone' },
            { name: 'iPhone 12', type: 'phone' },

            { name: 'Mi Soundbar', type: 'speaker' },

            { name: 'Ryzen 9 5950X', type: 'cpu' },
            { name: 'Intel i9 10th Gen', type: 'cpu' },
            { name: 'Intel i7 7th Gen', type: 'cpu' },

            { name: 'Nvidia RTX 3080', type: 'gpu' },
            { name: 'AMD Radeon Pro 5500M', type: 'gpu' },
            { name: 'Nvidia GTX 1060', type: 'gpu' },

            { name: 'BenQ Zowie XL2546 240Hz', type: 'monitor' },
            { name: 'HP 27es', type: 'monitor' },

            { name: 'Corsair K70 MK.2 Mechanical', type: 'keyboard' },
            { name: 'HyperX Alloy FPS Mechanical', type: 'keyboard' },
            { name: 'Logitech MX Keys', type: 'keyboard' },

            { name: 'Logitech MX Master 3', type: 'mouse' },
            { name: 'Logitech G502 Hero', type: 'mouse' },
            { name: 'Logitech G402 FPS', type: 'mouse' },
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
                case 'software': return 'linear-gradient(to right, #5f2c82, #49a09d)'
                case 'language': return 'linear-gradient(to right, #ff00cc, #333399)'
                case 'framework': return 'linear-gradient(90deg, #40e0e6 0%,#e4256e 100%)'
                case 'service': return 'linear-gradient(to right, #e55d87, #9f73c4)'
                case 'platform': return 'linear-gradient(to right, #f2709c, #ff9472)'
                case 'npm': return 'linear-gradient(139deg, #fb8817, #ff4b01, #c12127, #e02aff)'
                case 'database': return 'linear-gradient(139deg, #c12127, #e02aff, #fb8817, #ff4b01)'
                case 'composer': return 'linear-gradient(139deg, #fb8817, #ff4b01, #c12127, #e02aff)'
            }
        },
        getPlural(t) {
            if (t == 'npm') return 'NPM Packages'
            if (t == 'composer') return 'Composer Packages'
            if (t == 'mouse') return 'Mice'
            if (t == 'cpu') return 'CPUs'
            if (t == 'gpu') return 'GPUs'
            return (['hardware', 'software'].includes(t) ? t : t + 's').toTitleCase()
        },
        sendMessage() {
            this.sending = true
            fetch('https://script.google.com/macros/s/AKfycbwtTjzs_oPZOpGj7CoG6oxxL1QQhEnRvT_SmVPPxvto91_RV5hfsZXwEih3lRJ2rkim/exec', {
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
        getStackItemName(t) {
            let string = t.name.split('-')[0]
            return string.charAt(0).toUpperCase() + string.slice(1)
        },
    },
    mounted() {
        fetch('https://api.github.com/users/AfaanBilal/repos?per_page=100').then(r => r.json()).then((d) => { this.allRepos = d }).then(() => {
            fetch('https://api.github.com/orgs/AMX-Infinity/repos?per_page=100').then(r => r.json()).then((d) => { this.allRepos.push(...d) })
        })
    },
})

function startAnim(elementID, elementWidth) {
    function restart() {
        $('#' + elementID + '.tech-stack').first().css({ 'margin-left': '0px' });
        start();
    }

    function start() {
        var techStack = $('#' + elementID + '.tech-stack').first(),
            duration = (elementWidth * 20);

        techStack.animate({ 'margin-left': '-' + elementWidth + 'px' }, duration, 'linear', restart);
    }

    $('#' + elementID + '.tech-stack img').hover(() => { $('#' + elementID + '.tech-stack').first().stop(); }, () => { start(); });

    start();
}

function setupAnim(id) {
    var stripWidth = $('#' + id + ' .tech-stack-item').length * 92;
    // $('#' + id + ' .tech-stack-list').parent().append($('#' + id + ' .tech-stack-list').clone());
    startAnim(id, stripWidth);
}

setupAnim('tech-stack-1')
// $('#tech-stack-1').parent().append($('#tech-stack-1').clone().attr('id', 'tech-stack-2').css('margin-left', '-2300px'));
setupAnim('tech-stack-2')
