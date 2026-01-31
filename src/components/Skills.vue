<template>
  <section id="skills" class="container mx-auto px-6 p-5">
      <div v-for="(t, i) in skillTypes" :key="t" class="mb-10 pt-10 md:mx-36" :class="{'border-t': i}">
          <h3 class="text-2xl font-bold text-center text-gray-800 mb-5">{{ getPlural(t) }}</h3>
          <div class="md:mx-20 flex flex-wrap justify-center">
              <a v-for="s in skills.filter(s => s.type == t)" :key="s.name" :href="s.link || '#'" :target="s.link ? '_blank' : ''" :rel="s.link ? 'noopener' : ''">
                  <span :style="'background: ' + getBackground(s.type)" class="text-white px-2 py-1 rounded m-2 inline-block shadow hover:shadow-lg">{{ s.name }}</span>
              </a>
          </div>
      </div>
  </section>
</template>

<script setup>
const skillTypes = ['npm', 'framework', 'composer', 'platform', 'language', 'database', 'service', 'skill', 'software']

const skills = [
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
]

function getBackground(t) {
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
}

function getPlural(t) {
    if (t == 'npm') return 'NPM Packages'
    if (t == 'composer') return 'Composer Packages'
    if (t == 'mouse') return 'Mice'
    if (t == 'cpu') return 'CPUs'
    if (t == 'gpu') return 'GPUs'
    // Helper toTitleCase not available here, implement or import
    const titleCase = (str) => str.charAt(0).toUpperCase() + str.slice(1)
    return ['hardware', 'software'].includes(t) ? titleCase(t) : titleCase(t) + 's'
}
</script>
