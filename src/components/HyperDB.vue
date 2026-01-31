<template>
  <div id="hyperdb" class="px-4 py-8 md:py-12 flex flex-col gap-4 justify-center items-center text-white" style="background: linear-gradient(270deg, #8034cc 0%,#991a79 100%)">
      <a href="https://github.com/AfaanBilal/hyperdb" target="_blank" rel="noopener"><h2 class="text-4xl font-bold hover:text-pink-500">HyperDB</h2></a>
      <div>
          An in-memory hyper-fast key-value store with an HTTP API <br>
      </div>
      <div class="flex gap-2">
          <span style="background: linear-gradient(139deg, #fb8817, #ff4b01, #c12127, #e02aff);" class="text-white px-2 py-1 rounded inline-block shadow hover:shadow-lg">Rust</span>
          <span style="background: linear-gradient(139deg, #fb8817, #ff4b01, #c12127, #e02aff);" class="text-white px-2 py-1 rounded inline-block shadow hover:shadow-lg">Actix-Web</span>
          <span style="background: linear-gradient(139deg, #fb8817, #ff4b01, #c12127, #e02aff);" class="text-white px-2 py-1 rounded inline-block shadow hover:shadow-lg">JWT</span>
      </div>
      <div class="flex flex-col">
          <div class="flex justify-between text-lg bg-gray-900 p-2 px-4 rounded-t mt-4">
              <div>HyperDB</div>
              <div class="flex gap-2 text-sm">
                  <span style="background: linear-gradient(139deg, #c12127, #e02aff, #fb8817, #ff4b01);" class="text-white px-2 py-1 rounded inline-block shadow hover:shadow-lg flex gap-1">
                      <img src="https://icongr.am/clarity/lightning.svg?size=14&color=ffffff" />
                      Read: 50,675 RPS
                  </span>
                  <span style="background: linear-gradient(139deg, #c12127, #e02aff, #fb8817, #ff4b01);" class="text-white px-2 py-1 rounded inline-block shadow hover:shadow-lg flex gap-1">
                      <img src="https://icongr.am/clarity/lightning.svg?size=14&color=ffffff" />
                      Write: 49,797 RPS
                  </span>
              </div>
          </div>
          <div class="flex">
              <div class="bg-pink-500 p-2 px-4 w-28 border-b border-pink-600">Server</div>
              <div class="font-mono bg-gray-800 p-2 px-4 flex-1 border-b border-gray-700">
                  docker run --rm -it -p 8765:8765 afaanbilal/hyperdb
              </div>
          </div>
          <div class="flex">
              <div class="bg-pink-500 p-2 px-4 w-28 rounded-bl">CLI</div>
              <div class="font-mono bg-gray-800 p-2 px-4 flex-1 rounded-br">
                  docker run --rm -it afaanbilal/hyperdb-cli -a http://host.docker.internal:8765
              </div>
          </div>

          <div class="flex justify-between items-center text-lg bg-gray-900 p-2 px-4 rounded-t mt-4">
              Client Libraries
              <a href="https://afaan.dev/hyperdb-docs" target="_blank" rel="noopener" class="text-gray-400 text-sm hover:text-blue-500">afaan.dev/hyperdb-docs</a>
          </div>
          <div v-for="lib in clientLibs" :key="lib.lang" class="flex">
              <div class="bg-pink-500 p-2 px-4 w-28 border-b border-pink-600">{{ lib.lang }}</div>
              <div class="font-mono bg-gray-800 p-2 px-4 flex-1 border-b border-gray-700">
                  {{ lib.cmd }}
              </div>
          </div>
           <div class="flex">
              <div class="bg-pink-500 p-2 px-4 w-28 rounded-bl">Go</div>
              <div class="font-mono bg-gray-800 p-2 px-4 flex-1 rounded-br break-words">
                  go get -u github.com/AfaanBilal/hyperdb-go
              </div>
          </div>
      </div>
  </div>
</template>

<script setup>
const clientLibs = [
    { lang: 'Javascript', cmd: 'npm i hyperdb-js' },
    { lang: 'Rust', cmd: 'cargo add hyperdb-rs' },
    { lang: 'PHP', cmd: 'composer require afaanbilal/hyperdb-php' },
    { lang: 'Python', cmd: 'pip install hyperdb-py' }
]
</script>
