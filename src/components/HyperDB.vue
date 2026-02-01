<template>
    <section id="hyperdb"
        class="py-20 bg-gradient-to-br from-purple-900 to-indigo-900 text-white relative overflow-hidden scroll-mt-12">
        <!-- Background Patterns -->
        <div
            class="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]">
        </div>

        <div class="container mx-auto px-6 relative z-10">
            <div class="flex flex-col lg:flex-row items-center gap-12">
                <div class="lg:w-1/2">
                    <div
                        class="inline-block px-3 py-1 bg-purple-500/30 border border-purple-400/50 rounded-full text-purple-200 text-sm font-bold mb-6">
                        Featured Project
                    </div>
                    <h2 class="text-5xl font-black mb-6 tracking-tight">HyperDB</h2>
                    <p class="text-xl text-purple-100 mb-8 leading-relaxed">
                        An in-memory <span class="text-yellow-400 font-bold">hyper-fast</span> key-value store with an
                        HTTP API. Designed for speed, simplicity, and ease of use.
                    </p>

                    <div class="flex gap-4 mb-10">
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
                            class="px-8 py-4 bg-white text-purple-900 font-bold rounded-xl hover:bg-gray-100 transition-transform hover:-translate-y-1 shadow-lg">
                            View on GitHub
                        </a>
                        <a href="https://afaan.dev/hyperdb-docs" target="_blank" rel="noopener"
                            class="px-8 py-4 bg-purple-800/50 text-white border border-purple-500/50 font-bold rounded-xl hover:bg-purple-800 transition-transform hover:-translate-y-1">
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
                                    <div class="text-2xl font-bold text-green-400">50,675 <span
                                            class="text-sm text-gray-500">RPS</span></div>
                                </div>
                                <div class="bg-gray-800 p-4 rounded-lg border border-gray-700">
                                    <div class="text-gray-400 text-xs mb-1">Write Operations</div>
                                    <div class="text-2xl font-bold text-yellow-400">49,797 <span
                                            class="text-sm text-gray-500">RPS</span></div>
                                </div>
                            </div>

                            <!-- Commands -->
                            <div>
                                <div class="text-gray-500 mb-2"># Run Server</div>
                                <div class="text-purple-300">docker run <span class="text-white">--rm -it -p
                                        8765:8765</span> afaanbilal/hyperdb</div>
                            </div>
                            <div>
                                <div class="text-gray-500 mb-2"># Install JS Client</div>
                                <div class="text-purple-300">npm <span class="text-white">install</span> hyperdb-js
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
