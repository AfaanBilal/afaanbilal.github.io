<template>
    <section id="koshur"
        class="py-20 bg-gradient-to-br from-orange-900 to-red-900 text-white relative overflow-hidden scroll-mt-12">
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

                    <div class="flex gap-4 mb-10">
                        <span
                            class="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-lg backdrop-blur-sm border border-white/20">
                            <span class="w-3 h-3 rounded-full bg-yellow-500"></span> JavaScript
                        </span>
                        <span
                            class="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-lg backdrop-blur-sm border border-white/20">
                            <span class="w-3 h-3 rounded-full bg-blue-500"></span> TypeScript
                        </span>
                        <span
                            class="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-lg backdrop-blur-sm border border-white/20">
                            <span class="w-3 h-3 rounded-full bg-green-500"></span> Parser Info
                        </span>
                    </div>

                    <div class="flex gap-4">
                        <a href="https://github.com/AfaanBilal/koshur-lang" target="_blank" rel="noopener"
                            class="px-8 py-4 bg-white text-orange-900 font-bold rounded-xl hover:bg-gray-100 transition-transform hover:-translate-y-1 shadow-lg">
                            View on GitHub
                        </a>
                        <a href="https://koshur.afaan.dev" target="_blank" rel="noopener"
                            class="px-8 py-4 bg-orange-800/50 text-white border border-orange-500/50 font-bold rounded-xl hover:bg-orange-800 transition-transform hover:-translate-y-1">
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
