<template>
    <section id="hyperdb"
        class="py-24 md:py-32 bg-gradient-to-br from-purple-900 to-indigo-900 text-white relative overflow-hidden scroll-mt-12">
        <!-- Background Patterns -->
        <div
            class="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]">
        </div>

        <div class="container mx-auto px-6 relative z-10">
            <div class="flex flex-col lg:flex-row items-start gap-12">
                <div class="lg:w-1/2">
                    <div class="mb-6 pl-4 border-l-4 border-purple-500">
                        <div class="text-purple-400 font-bold uppercase tracking-wider text-sm mb-1">Featured Project
                        </div>
                        <p class="text-purple-200 italic text-lg">A performance-focused in-memory datastore built for
                            simplicity and speed.</p>
                    </div>
                    <h2 class="text-5xl font-black mb-6 tracking-tight">HyperDB</h2>
                    <p class="text-xl text-purple-100 mb-8 leading-relaxed">
                        An in-memory <span class="text-yellow-400 font-bold">hyper-fast</span> key-value store with an
                        HTTP API. Designed for speed, simplicity, and ease of use.
                    </p>

                    <div class="flex gap-4 mb-10 flex-wrap">
                        <span
                            class="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-lg backdrop-blur-sm border border-white/20">
                            <span class="w-3 h-3 rounded-full bg-orange-500"></span> Rust
                        </span>
                        <span
                            class="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-lg backdrop-blur-sm border border-white/20">
                            <span class="w-3 h-3 rounded-full bg-green-500"></span> Actix-Web
                        </span>
                        <span
                            class="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-lg backdrop-blur-sm border border-white/20">
                            <span class="w-3 h-3 rounded-full bg-blue-500"></span> JWT
                        </span>
                    </div>

                    <div class="flex gap-4">
                        <a href="https://github.com/AfaanBilal/hyperdb" target="_blank" rel="noopener"
                            class="px-6 py-3 md:px-8 md:py-4 bg-white text-purple-900 font-bold rounded-xl hover:bg-gray-100 transition-transform hover:-translate-y-1 shadow-lg">
                            View on GitHub
                        </a>
                        <a href="https://afaan.dev/hyperdb-docs" target="_blank" rel="noopener"
                            class="px-6 py-3 md:px-8 md:py-4 bg-purple-800/50 text-white border border-purple-500/50 font-bold rounded-xl hover:bg-purple-800 transition-transform hover:-translate-y-1">
                            Documentation
                        </a>
                    </div>
                </div>

                <div class="lg:w-1/2 w-full">
                    <div
                        class="bg-gray-900 rounded-xl shadow-2xl border border-gray-700 overflow-hidden font-mono text-sm leading-relaxed">
                        <div class="flex justify-between items-center bg-gray-800 px-4 py-3 border-b border-gray-700">
                            <span class="text-gray-400">Terminal</span>
                            <div class="flex gap-2">
                                <div class="w-3 h-3 rounded-full bg-red-500"></div>
                                <div class="w-3 h-3 rounded-full bg-yellow-500"></div>
                                <div class="w-3 h-3 rounded-full bg-green-500"></div>
                            </div>
                        </div>
                        <div class="p-6 space-y-4">
                            <!-- Benchmarks -->
                            <div class="grid grid-cols-2 gap-4 mb-6">
                                <div class="bg-gray-800 p-4 rounded-lg border border-gray-700">
                                    <div class="text-gray-400 text-xs mb-1">Read Operations</div>
                                    <div class="text-xl md:text-2xl font-bold text-green-400">50,675 <span
                                            class="text-sm text-gray-400">RPS</span></div>
                                </div>
                                <div class="bg-gray-800 p-4 rounded-lg border border-gray-700">
                                    <div class="text-gray-400 text-xs mb-1">Write Operations</div>
                                    <div class="text-xl md:text-2xl font-bold text-yellow-400">49,797 <span
                                            class="text-sm text-gray-400">RPS</span></div>
                                </div>
                            </div>

                            <!-- Performance Footnote -->
                            <div class="text-xs text-gray-500 pl-1 mb-6">
                                Measured locally with no persistence.
                            </div>

                            <!-- Commands -->
                            <div>
                                <div class="text-gray-400 mb-2"># Run Server</div>
                                <div class="text-purple-300">docker run <span class="text-white">--rm -it -p
                                        8765:8765</span> afaanbilal/hyperdb</div>
                            </div>
                            <div>
                                <div class="flex flex-wrap gap-2 mb-4 border-b border-gray-700 pb-2">
                                    <button v-for="(client, key) in clients" :key="key" @click="switchTab(key)"
                                        class="px-3 py-1 rounded text-xs font-bold transition-all duration-300 cursor-pointer"
                                        :class="activeTab === key ? 'bg-purple-600 text-white shadow-lg scale-105' : 'text-gray-500 hover:text-gray-300'">
                                        {{ client.label }}
                                    </button>
                                </div>
                                <div class="transition-all duration-300 min-h-[50px]">
                                    <div class="text-gray-400 mb-2 text-xs"># Install {{ clients[activeTab].label }}
                                    </div>
                                    <div
                                        class="text-purple-300 font-mono text-sm mb-4 bg-black/30 p-3 rounded border border-gray-700/50">
                                        {{ clients[activeTab].install }}
                                    </div>

                                    <div class="text-gray-400 mb-2 text-xs"># Usage Example</div>
                                    <div class="bg-gray-950 p-4 rounded-lg border border-gray-800 text-gray-300 font-mono text-sm leading-relaxed overflow-x-auto"
                                        style="view-transition-name: code-container;" v-html="clients[activeTab].code">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref } from 'vue'

const activeTab = ref('js')

const switchTab = (key) => {
    if (!document.startViewTransition) {
        activeTab.value = key;
        return;
    }
    document.startViewTransition(() => {
        activeTab.value = key;
    });
};

const clients = {
    js: {
        label: 'JS',
        install: 'npm i hyperdb-js',
        code: `<span class="text-purple-400">import</span> { HyperDB } <span class="text-purple-400">from</span> <span class="text-green-400">"hyperdb-js"</span>;<br><br><span class="text-gray-500">// Connect to localhost:8765</span><br><span class="text-purple-400">const</span> hyper = <span class="text-purple-400">new</span> <span class="text-yellow-400">HyperDB</span>(<span class="text-green-400">"http://localhost:8765"</span>);<br><br><span class="text-gray-500">// Store data</span><br><span class="text-purple-400">await</span> hyper.<span class="text-blue-400">set</span>(<span class="text-green-400">"user"</span>, <span class="text-green-400">"afaan"</span>);<br><br><span class="text-gray-500">// Retrieve data</span><br><span class="text-purple-400">const</span> val = <span class="text-purple-400">await</span> hyper.<span class="text-blue-400">get</span>(<span class="text-green-400">"user"</span>);`
    },
    python: {
        label: 'Python',
        install: 'pip install hyperdb-py',
        code: `<span class="text-purple-400">from</span> hyperdb_py.HyperDB <span class="text-purple-400">import</span> HyperDB<br><br><span class="text-gray-500"># Connect to localhost:8765</span><br>hyper = <span class="text-yellow-400">HyperDB</span>(<span class="text-green-400">"http://localhost:8765"</span>)<br><br><span class="text-gray-500"># Store data</span><br>hyper.<span class="text-blue-400">set</span>(<span class="text-green-400">"user"</span>, <span class="text-green-400">"afaan"</span>)<br><br><span class="text-gray-500"># Retrieve data</span><br>val = hyper.<span class="text-blue-400">get</span>(<span class="text-green-400">"user"</span>)`
    },
    go: {
        label: 'Go',
        install: 'go get github.com/AfaanBilal/hyperdb-go',
        code: `<span class="text-purple-400">import</span> <span class="text-green-400">"github.com/AfaanBilal/hyperdb-go"</span><br><br><span class="text-gray-500">// Connect to localhost:8765</span><br>hyper := hyperdb.<span class="text-blue-400">Create</span>(<span class="text-green-400">"http://localhost:8765"</span>, <span class="text-green-400">""</span>, <span class="text-green-400">""</span>)<br><br><span class="text-gray-500">// Store data</span><br>hyper.<span class="text-blue-400">Set</span>(<span class="text-green-400">"user"</span>, <span class="text-green-400">"afaan"</span>)<br><br><span class="text-gray-500">// Retrieve data</span><br>val := hyper.<span class="text-blue-400">Get</span>(<span class="text-green-400">"user"</span>)`
    },
    php: {
        label: 'PHP',
        install: 'composer require afaanbilal/hyperdb-php',
        code: `<span class="text-purple-400">use</span> AfaanBilal\\HyperDB;<br><br><span class="text-gray-500">// Connect to localhost:8765</span><br>$hyper = <span class="text-purple-400">new</span> <span class="text-yellow-400">HyperDB</span>(<span class="text-green-400">'http://localhost:8765'</span>);<br><br><span class="text-gray-500">// Store data</span><br>$hyper-><span class="text-blue-400">set</span>(<span class="text-green-400">'user'</span>, <span class="text-green-400">'afaan'</span>);<br><br><span class="text-gray-500">// Retrieve data</span><br>$val = $hyper-><span class="text-blue-400">get</span>(<span class="text-green-400">'user'</span>);`
    },
    rust: {
        label: 'Rust',
        install: 'cargo add hyperdb-rs',
        code: `<span class="text-purple-400">use</span> hyperdb_rs::HyperClient;<br><br><span class="text-gray-500">// Connect</span><br><span class="text-purple-400">let</span> <span class="text-purple-400">mut</span> hyper = HyperClient::<span class="text-blue-400">new</span>(<span class="text-green-400">"http://localhost:8765"</span>.<span class="text-blue-400">into</span>());<br><br><span class="text-gray-500">// Store</span><br>hyper.<span class="text-blue-400">set</span>(<span class="text-green-400">"key"</span>, <span class="text-green-400">"val"</span>).<span class="text-blue-400">expect</span>(<span class="text-green-400">"err"</span>);<br><br><span class="text-gray-500">// Retrieve</span><br><span class="text-purple-400">let</span> val = hyper.<span class="text-blue-400">get</span>(<span class="text-green-400">"key"</span>).<span class="text-blue-400">expect</span>(<span class="text-green-400">"err"</span>);`
    },
    cli: {
        label: 'CLI',
        install: 'docker run --rm -it afaanbilal/hyperdb-cli',
        code: `<span class="text-gray-500"># Start Interactive Shell</span><br>$ <span class="text-yellow-400">hyperdb-cli</span><br><br><span class="text-gray-500"># Store data</span><br>> <span class="text-blue-400">SET</span> user afaan<br><span class="text-green-400">"afaan"</span><br><br><span class="text-gray-500"># Retrieve data</span><br>> <span class="text-blue-400">GET</span> user<br><span class="text-green-400">"afaan"</span>`
    }
}
</script>
