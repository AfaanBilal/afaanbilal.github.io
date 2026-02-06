<template>
    <section id="koshur"
        class="py-24 md:py-32 bg-gradient-to-br from-orange-900 to-red-900 text-white relative overflow-hidden scroll-mt-12">
        <!-- Background Patterns -->
        <div class="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]">
        </div>

        <div class="container mx-auto px-6 relative z-10">
            <div class="flex flex-col lg:flex-row items-start gap-12">
                <div class="lg:w-1/2">
                    <div class="mb-6 pl-4 border-l-4 border-orange-500">
                        <div class="text-orange-400 font-bold uppercase tracking-wider text-sm mb-1">Featured Project
                        </div>
                        <p class="text-orange-200 italic text-lg">Preserving culture through code — the first language
                            that thinks in <span class="text-white font-bold not-italic">کٲشُر</span> (Koshur).</p>
                    </div>
                    <h2 class="text-5xl font-black mb-6 tracking-tight">Koshur</h2>
                    <p class="text-xl text-orange-100 mb-8 leading-relaxed">
                        An interpreted programming language with syntax inspired by <span
                            class="text-yellow-400 font-bold">Koshur (Kashmiri)</span>.
                        Includes a web-based playground to write and run Koshur code directly in the browser.
                    </p>

                    <div class="flex gap-4 mb-10 flex-wrap">
                        <span
                            class="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-lg backdrop-blur-sm border border-white/20">
                            <span class="w-3 h-3 rounded-full bg-yellow-500"></span> JavaScript
                        </span>
                        <span
                            class="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-lg backdrop-blur-sm border border-white/20">
                            <span class="w-3 h-3 rounded-full bg-blue-500"></span> AST
                        </span>
                    </div>

                    <ul class="space-y-2 mb-10 text-gray-300">
                        <li class="flex items-center gap-3">
                            <span
                                class="flex items-center justify-center w-6 h-6 rounded-full bg-orange-500/20 text-orange-400">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24"
                                    stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                                </svg>
                            </span>
                            <span><span class="font-bold text-white">Cultural</span> Syntax (Kashmiri)</span>
                        </li>
                        <li class="flex items-center gap-3">
                            <span
                                class="flex items-center justify-center w-6 h-6 rounded-full bg-blue-500/20 text-blue-400">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24"
                                    stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                            </span>
                            <span><span class="font-bold text-white">Interpreted</span> Language</span>
                        </li>
                        <li class="flex items-center gap-3">
                            <span
                                class="flex items-center justify-center w-6 h-6 rounded-full bg-green-500/20 text-green-400">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24"
                                    stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </span>
                            <span><span class="font-bold text-white">Web-based</span> Playground</span>
                        </li>
                        <li class="flex items-center gap-3">
                            <span
                                class="flex items-center justify-center w-6 h-6 rounded-full bg-yellow-500/20 text-yellow-400">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24"
                                    stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                            </span>
                            <span><span class="font-bold text-white">JavaScript</span> Backend</span>
                        </li>
                    </ul>

                    <div class="flex gap-4">
                        <a href="https://github.com/AfaanBilal/koshur-lang" target="_blank" rel="noopener"
                            class="px-6 py-3 md:px-8 md:py-4 bg-white text-orange-900 font-bold rounded-xl hover:bg-gray-100 transition-transform hover:-translate-y-1 shadow-lg">
                            View on GitHub
                        </a>
                        <a href="https://koshur.afaan.dev" target="_blank" rel="noopener"
                            class="px-6 py-3 md:px-8 md:py-4 bg-orange-800/50 text-white border border-orange-500/50 font-bold rounded-xl hover:bg-orange-800 transition-transform hover:-translate-y-1">
                            Try Online
                        </a>
                    </div>
                </div>

                <div class="lg:w-1/2 w-full">
                    <div
                        class="bg-gray-900 rounded-xl shadow-2xl border border-gray-700 overflow-hidden font-mono text-sm leading-relaxed">
                        <div class="flex justify-between items-center bg-gray-800 px-4 py-3 border-b border-gray-700">
                            <span class="text-gray-400">Editor</span>
                            <div class="flex gap-2">
                                <div class="w-3 h-3 rounded-full bg-red-500"></div>
                                <div class="w-3 h-3 rounded-full bg-yellow-500"></div>
                                <div class="w-3 h-3 rounded-full bg-green-500"></div>
                            </div>
                        </div>
                        <div class="p-6 space-y-4">
                            <!-- Code snippet -->
                            <div>
                                <div class="flex flex-col sm:flex-row justify-between sm:items-end gap-4 mb-2">
                                    <div class="text-gray-400"># Example Code</div>
                                    <div class="flex flex-wrap gap-2">
                                        <button v-for="(example, key) in examples" :key="key" @click="switchTab(key)"
                                            class="px-3 py-1 rounded text-xs font-bold transition-colors border cursor-pointer"
                                            :class="activeTab === key ? 'bg-orange-600/20 text-orange-300 border-orange-500/50' : 'bg-gray-800 text-gray-400 border-gray-700 hover:border-gray-600 hover:text-gray-300'">
                                            {{ example.label }}
                                        </button>
                                    </div>
                                </div>
                                <div class="bg-black/50 p-4 rounded-lg border border-gray-800 text-gray-300 font-mono text-sm overflow-x-auto min-h-[120px]"
                                    style="view-transition-name: koshur-code;" v-html="examples[activeTab].code">
                                </div>
                            </div>

                            <!-- Run Command -->
                            <div class="mt-4">
                                <div class="text-gray-400 mb-2"># Run from Source</div>
                                <div
                                    class="bg-black p-4 rounded-lg border border-gray-800 text-gray-300 font-mono text-sm leading-relaxed">
                                    <div class="text-gray-300">
                                        node <span class="text-green-400">koshur.js</span>
                                        {{ examples[activeTab].filename }}
                                    </div>
                                </div>
                            </div>

                            <!-- Output -->
                            <div>
                                <div class="text-gray-400 mb-2"># Output</div>
                                <div class="bg-black p-4 rounded-lg border border-gray-800 text-white font-mono text-sm min-h-[80px]"
                                    style="view-transition-name: koshur-output;" v-html="examples[activeTab].output">
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Online Playground Screenshot -->
                    <div class="mt-8">
                        <div class="text-orange-400 font-bold mb-3 uppercase tracking-wider text-sm">Online
                            web-based playground
                        </div>
                        <div class="relative group rounded-xl border border-gray-700 shadow-2xl overflow-hidden">
                            <img src="/screenshots/koshur.png" alt="Koshur Online Playground"
                                class="w-full transform group-hover:scale-105 transition-transform duration-500" />
                            <div
                                class="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                <a href="https://koshur.afaan.dev" target="_blank" rel="noopener"
                                    aria-label="Try Online"
                                    class="p-4 bg-white rounded-full text-orange-900 hover:bg-orange-500 hover:text-white transition-colors transform hover:scale-110 shadow-lg"
                                    title="Try Online">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none"
                                        viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref } from 'vue';

const activeTab = ref('hello');

const switchTab = (key) => {
    if (!document.startViewTransition) {
        activeTab.value = key;
        return;
    }
    document.startViewTransition(() => {
        activeTab.value = key;
    });
};

const examples = {
    hello: {
        label: 'Hello World',
        filename: 'hello.k',
        code: `<span class="text-purple-400">wan</span>(<span class="text-green-400">"Hello, World!"</span>);<br>
<br>
<span class="text-purple-400">wan</span>(<span class="text-green-400">"Koshur programming language!"</span>);`,
        output: `Hello, World!<br>
Koshur programming language!`
    },
    math: {
        label: 'Arithmetic',
        filename: 'arithmetic.k',
        code: `<span class="text-purple-400">wan</span>(<span class="text-green-400">"1 + 2 ="</span>, <span class="text-orange-400">1</span> + <span class="text-orange-400">2</span>);<br>
<span class="text-purple-400">wan</span>(<span class="text-green-400">"1 - 2 ="</span>, <span class="text-orange-400">1</span> - <span class="text-orange-400">2</span>);<br>
<span class="text-purple-400">wan</span>(<span class="text-green-400">"1 * 2 ="</span>, <span class="text-orange-400">1</span> * <span class="text-orange-400">2</span>);<br>
<span class="text-purple-400">wan</span>(<span class="text-green-400">"1 / 2 ="</span>, <span class="text-orange-400">1</span> / <span class="text-orange-400">2</span>);`,
        output: `1 + 2 = 3<br>
1 - 2 = -1<br>
1 * 2 = 2<br>
1 / 2 = 0.5`
    },
    cond: {
        label: 'Control Flow',
        filename: 'control-flow.k',
        code: `<span class="text-blue-400">x</span> = <span class="text-orange-400">10</span>;<br>
<br>
<span class="text-yellow-400">yeli</span> <span class="text-blue-400">x</span> > <span class="text-orange-400">5</span> {<br>
&nbsp;&nbsp;&nbsp;&nbsp;<span class="text-purple-400">wan</span>(<span class="text-green-400">"5 nish bod"</span>);<br>
} <span class="text-yellow-400">nate</span> {<br>
&nbsp;&nbsp;&nbsp;&nbsp;<span class="text-purple-400">wan</span>(<span class="text-green-400">"5 nish lakut"</span>);<br>
}`,
        output: `5 nish bod`
    },
    fact: {
        label: 'Factorial',
        filename: 'factorial.k',
        code: `<span class="text-blue-400">factorial</span> = <span class="text-yellow-400">banav</span>(<span class="text-blue-400">n</span>) {<br>
&nbsp;&nbsp;&nbsp;&nbsp;<span class="text-yellow-400">yeli</span> <span class="text-blue-400">n</span> < <span class="text-orange-400">0</span> {<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="text-orange-400">0</span>;<br>
&nbsp;&nbsp;&nbsp;&nbsp;} <span class="text-yellow-400">nate</span> <span class="text-yellow-400">yeli</span> <span class="text-blue-400">n</span> == <span class="text-orange-400">0</span> {<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="text-orange-400">1</span>;<br>
&nbsp;&nbsp;&nbsp;&nbsp;} <span class="text-yellow-400">nate</span> {<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="text-blue-400">n</span> * <span class="text-blue-400">factorial</span>(<span class="text-blue-400">n</span> - <span class="text-orange-400">1</span>);<br>
&nbsp;&nbsp;&nbsp;&nbsp;};<br>
};<br>
<br>
<span class="text-purple-400">wan</span>(<span class="text-blue-400">factorial</span>(<span class="text-orange-400">5</span>));`,
        output: `120`
    }
};
</script>
