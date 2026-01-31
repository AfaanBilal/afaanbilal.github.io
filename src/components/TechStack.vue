<template>
  <section id="tech-stack" class="container mx-auto px-6 py-12">
      <h2 class="text-4xl font-bold text-center my-10">Tech Stack</h2>
      <div class="content tech-stack-container">
          <div class="tech-stack-row">
              <div class="tech-stack-track">
                   <img v-for="(icon, index) in techStack1" :key="index" class="tech-stack-item" :src="icon.src" :alt="icon.alt" :title="icon.title">
                   <!-- Duplicate for smooth loop -->
                   <img v-for="(icon, index) in techStack1" :key="'dup1-' + index" class="tech-stack-item" :src="icon.src" :alt="icon.alt" :title="icon.title">
              </div>
          </div>
           <div class="tech-stack-row">
              <div class="tech-stack-track reverse">
                   <img v-for="(icon, index) in techStack2" :key="index" class="tech-stack-item" :src="icon.src" :alt="icon.alt" :title="icon.title">
                   <!-- Duplicate for smooth loop -->
                   <img v-for="(icon, index) in techStack2" :key="'dup2-' + index" class="tech-stack-item" :src="icon.src" :alt="icon.alt" :title="icon.title">
              </div>
          </div>
      </div>
  </section>
</template>

<script setup>
const techStack1 = [
    { src: 'https://icongr.am/devicon/amazonwebservices-original.svg?size=96&color=currentColor', alt: 'Amazonwebservices', title: 'Amazonwebservices' },
    { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/digitalocean/digitalocean-original.svg', alt: 'Digitalocean', title: 'Digitalocean' },
    { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg', alt: 'Firebase', title: 'Firebase' },
    { src: 'https://icongr.am/devicon/git-original.svg?size=96&color=currentColor', alt: 'Git', title: 'Git' },
    { src: 'https://icongr.am/devicon/github-original.svg?size=96&color=currentColor', alt: 'Github', title: 'Github' },
    { src: 'https://icongr.am/devicon/gitlab-original.svg?size=96&color=currentColor', alt: 'Gitlab', title: 'Gitlab' },
    { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-plain.svg', alt: 'PHP', title: 'PHP' },
    { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/composer/composer-original.svg', alt: 'Composer', title: 'Composer' },
    { src: 'https://icongr.am/devicon/laravel-plain.svg?size=96&color=ff2d20', alt: 'Laravel', title: 'Laravel' },
    { src: 'https://icongr.am/devicon/codeigniter-plain.svg?size=96&color=dd4814', alt: 'Codeigniter', title: 'Codeigniter' },
    { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg', alt: 'Wordpress', title: 'Wordpress' },
    { src: 'https://icongr.am/devicon/mysql-original-wordmark.svg?size=96&color=currentColor', alt: 'Mysql', title: 'Mysql' },
    { src: 'https://icongr.am/devicon/redis-original.svg?size=96&color=currentColor', alt: 'Redis', title: 'Redis' },
    { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg', alt: 'Linux', title: 'Linux' },
    { src: 'https://icongr.am/devicon/ubuntu-plain.svg?size=96&color=e95420', alt: 'Ubuntu', title: 'Ubuntu' },
    { src: 'https://icongr.am/devicon/windows8-original.svg?size=96&color=currentColor', alt: 'Windows8', title: 'Windows8' },
    { src: 'https://icongr.am/devicon/apple-original.svg?size=96&color=currentColor', alt: 'Apple', title: 'Apple' },
    { src: 'https://icongr.am/devicon/android-original.svg?size=96&color=currentColor', alt: 'Android', title: 'Android' },
    { src: 'https://icongr.am/devicon/docker-original.svg?size=96&color=currentColor', alt: 'Docker', title: 'Docker' },
    // Simplified list for brevity, can add more later
    { src: 'https://icongr.am/devicon/html5-original.svg?size=96&color=currentColor', alt: 'Html5', title: 'Html5' },
    { src: 'https://icongr.am/devicon/css3-original.svg?size=96&color=currentColor', alt: 'Css3', title: 'Css3' },
    { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg', alt: 'SASS', title: 'SASS' },
     { src: 'https://icongr.am/devicon/bootstrap-plain.svg?size=96&color=7952b3', alt: 'Bootstrap', title: 'Bootstrap' },
    { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg', alt: 'Tailwind', title: 'Tailwind' },
    { src: 'https://icongr.am/devicon/javascript-original.svg?size=96&color=currentColor', alt: 'Javascript', title: 'Javascript' },
    { src: 'https://icongr.am/devicon/typescript-original.svg?size=96&color=currentColor', alt: 'Typescript', title: 'Typescript' },
]

const techStack2 = [
     { src: 'https://icongr.am/devicon/nodejs-original.svg?size=96&color=currentColor', alt: 'NodeJS', title: 'NodeJS' },
    { src: 'https://icongr.am/devicon/express-original-wordmark.svg?size=96&color=currentColor', alt: 'Express', title: 'Express' },
    { src: 'https://icongr.am/devicon/sequelize-original.svg?size=96&color=currentColor', alt: 'Sequelize', title: 'Sequelize' },
    { src: 'https://www.solidjs.com/assets/logo-123b04bc.svg', alt: 'SolidJS', title: 'SolidJS' },
    { src: 'https://icongr.am/devicon/vuejs-original.svg?size=96&color=currentColor', alt: 'VueJS', title: 'VueJS' },
    { src: 'https://icongr.am/devicon/react-original.svg?size=96&color=currentColor', alt: 'React', title: 'React' },
     { src: 'https://icongr.am/devicon/jquery-original.svg?size=96&color=currentColor', alt: 'Jquery', title: 'Jquery' },
    { src: 'https://icongr.am/devicon/python-original.svg?size=96&color=currentColor', alt: 'Python', title: 'Python' },
    { src: 'https://icongr.am/devicon/c-original.svg?size=96&color=currentColor', alt: 'C', title: 'C' },
    { src: 'https://icongr.am/devicon/cplusplus-original.svg?size=96&color=currentColor', alt: 'Cplusplus', title: 'Cplusplus' },
    { src: 'https://icongr.am/devicon/csharp-original.svg?size=96&color=currentColor', alt: 'Csharp', title: 'Csharp' },
    { src: 'https://icongr.am/devicon/java-original.svg?size=96&color=currentColor', alt: 'Java', title: 'Java' },
    { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dot-net/dot-net-plain-wordmark.svg', alt: 'DotNet', title: 'DotNet' },
    { src: 'https://icongr.am/devicon/apache-original.svg?size=96&color=currentColor', alt: 'Apache', title: 'Apache' },
    { src: 'https://icongr.am/devicon/ssh-original-wordmark.svg?size=96&color=currentColor', alt: 'Ssh', title: 'Ssh' },
     { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg', alt: 'Bash', title: 'Bash' },
    { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg', alt: 'Vscode', title: 'Vscode' },
    { src: 'https://icongr.am/devicon/visualstudio-plain.svg?size=96&color=currentColor', alt: 'Visualstudio', title: 'Visualstudio' },
     { src: 'https://icongr.am/devicon/trello-plain.svg?size=96&color=026aa7', alt: 'Trello', title: 'Trello' },
    { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg', alt: 'Figma', title: 'Figma' },
    { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/slack/slack-original.svg', alt: 'Slack', title: 'Slack' },
    { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-plain.svg', alt: 'NestJS', title: 'NestJS' },
]
</script>

<style scoped>
.tech-stack-container {
  display: flex;
  flex-direction: column;
  overflow: hidden;
  gap: 40px;
}

.tech-stack-row {
  display: flex;
  overflow: hidden;
  width: 100%;
}

.tech-stack-track {
  display: flex;
  animation: marquee 40s linear infinite;
  width: max-content;
}

.tech-stack-track.reverse {
    animation-direction: reverse;
}

.tech-stack-item {
  width: 56px;
  margin: 0 18px;
  flex-shrink: 0;
}

@keyframes marquee {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}

/* Pause on hover */
.tech-stack-track:hover {
    animation-play-state: paused;
}
</style>
