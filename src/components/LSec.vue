<template>
    <section id="lsec"
        class="py-24 bg-gradient-to-br from-gray-950 to-red-950 text-white relative overflow-hidden scroll-mt-12">
        <!-- Background Pattern -->
        <div
            class="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/dark-matter.png')]">
        </div>

        <div class="container mx-auto px-6 relative z-10">
            <div class="flex flex-col lg:flex-row items-start gap-12">

                <!-- Left: Info -->
                <div class="lg:w-1/2">
                    <div class="mb-6 pl-4 border-l-4 border-red-500">
                        <div class="text-red-400 font-bold uppercase tracking-wider text-sm mb-1">Featured Project
                        </div>
                        <p class="text-red-200 italic text-lg">Fast, static, heuristic-based. Catch security issues
                            before they reach production.</p>
                    </div>

                    <h2
                        class="text-5xl font-black mb-6 tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400">
                        lsec</h2>

                    <p class="text-xl text-red-100 mb-8 leading-relaxed">
                        A <span class="text-red-400 font-bold">static analysis security scanner</span> for Laravel
                        applications, written in Rust. Scans for insecure patterns, risky config, exposed secrets, and
                        vulnerable dependencies.
                    </p>

                    <div class="flex flex-wrap gap-4 mb-10">
                        <span
                            class="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-lg backdrop-blur-sm border border-white/20">
                            <span class="w-3 h-3 rounded-full bg-orange-500"></span> Rust
                        </span>
                        <span
                            class="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-lg backdrop-blur-sm border border-white/20">
                            <span class="w-3 h-3 rounded-full bg-red-500"></span> Laravel
                        </span>
                        <span
                            class="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-lg backdrop-blur-sm border border-white/20">
                            <span class="w-3 h-3 rounded-full bg-yellow-400"></span> SARIF 2.1.0
                        </span>
                    </div>

                    <ul class="space-y-2 mb-10 text-gray-300">
                        <li class="flex items-center gap-3">
                            <span
                                class="flex items-center justify-center w-6 h-6 rounded-full bg-red-500/20 text-red-400">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24"
                                    stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                </svg>
                            </span>
                            <span><span class="font-bold text-white">51</span> Security Rules</span>
                        </li>
                        <li class="flex items-center gap-3">
                            <span
                                class="flex items-center justify-center w-6 h-6 rounded-full bg-orange-500/20 text-orange-400">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24"
                                    stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                                </svg>
                            </span>
                            <span><span class="font-bold text-white">8</span> Rule Categories</span>
                        </li>
                        <li class="flex items-center gap-3">
                            <span
                                class="flex items-center justify-center w-6 h-6 rounded-full bg-yellow-500/20 text-yellow-400">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24"
                                    stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                </svg>
                            </span>
                            <span><span class="font-bold text-white">3</span> Output Formats <span
                                    class="text-gray-400 text-sm font-normal">(pretty, JSON, SARIF)</span></span>
                        </li>
                        <li class="flex items-center gap-3">
                            <span
                                class="flex items-center justify-center w-6 h-6 rounded-full bg-green-500/20 text-green-400">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24"
                                    stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                                </svg>
                            </span>
                            <span><span class="font-bold text-white">CI-first</span> Design</span>
                        </li>
                        <li class="flex items-center gap-3">
                            <span
                                class="flex items-center justify-center w-6 h-6 rounded-full bg-blue-500/20 text-blue-400">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24"
                                    stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                            </span>
                            <span><span class="font-bold text-white">OSV</span> Dependency Scanning</span>
                        </li>
                    </ul>

                    <div class="flex flex-wrap gap-4">
                        <a href="https://lsec.afaan.dev" target="_blank" rel="noopener"
                            class="px-6 py-3 md:px-8 md:py-4 bg-red-700 text-white font-bold rounded-xl hover:bg-red-600 transition-transform hover:-translate-y-1 shadow-lg shadow-red-500/20">
                            Visit Website
                        </a>
                        <a href="https://github.com/AfaanBilal/lsec" target="_blank" rel="noopener"
                            class="px-6 py-3 md:px-8 md:py-4 bg-red-900/30 text-red-300 border border-red-500/30 font-bold rounded-xl hover:bg-red-900/50 transition-transform hover:-translate-y-1">
                            View on GitHub
                        </a>
                        <a href="https://crates.io/crates/lsec" target="_blank" rel="noopener"
                            class="px-6 py-3 md:px-8 md:py-4 bg-red-900/30 text-red-300 border border-red-500/30 font-bold rounded-xl hover:bg-red-900/50 transition-transform hover:-translate-y-1">
                            crates.io
                        </a>
                    </div>
                </div>

                <!-- Right: Terminal output -->
                <div class="lg:w-1/2 w-full">
                    <div
                        class="bg-black/60 backdrop-blur-md rounded-xl shadow-2xl border border-gray-700 overflow-hidden font-mono text-sm leading-relaxed">
                        <div
                            class="flex justify-between items-center bg-gray-800/60 px-4 py-3 border-b border-gray-700">
                            <span class="text-gray-400">Terminal — lsec scan</span>
                            <div class="flex gap-2">
                                <div class="w-3 h-3 rounded-full bg-red-500"></div>
                                <div class="w-3 h-3 rounded-full bg-yellow-500"></div>
                                <div class="w-3 h-3 rounded-full bg-green-500"></div>
                            </div>
                        </div>
                        <div class="p-6 space-y-4">

                            <!-- Rule categories -->
                            <div class="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-2">
                                <div v-for="cat in categories" :key="cat.name"
                                    class="bg-gray-800/50 p-3 rounded-lg border border-gray-700 text-center">
                                    <div class="text-xs text-gray-400 mb-1">{{ cat.name }}</div>
                                    <div class="font-bold" :class="cat.color">{{ cat.count }}</div>
                                </div>
                            </div>

                            <!-- Sample scan output -->
                            <div>
                                <div class="text-gray-400 mb-2"># Sample scan output</div>
                                <div
                                    class="bg-gray-900 p-4 rounded-lg border border-gray-800 text-sm space-y-2 overflow-x-auto">
                                    <div class="text-gray-400">$ lsec scan .</div>
                                    <div class="text-red-400 font-bold mt-2">
                                        [CRITICAL] secrets/hardcoded-key</div>
                                    <div class="text-gray-300 pl-4 text-xs">app/Services/PaymentService.php:14</div>
                                    <div class="text-yellow-400 font-bold mt-1">
                                        [HIGH] injection/raw-query</div>
                                    <div class="text-gray-300 pl-4 text-xs">app/Repositories/UserRepo.php:42</div>
                                    <div class="text-yellow-400 font-bold mt-1">
                                        [HIGH] auth/missing-auth-middleware</div>
                                    <div class="text-gray-300 pl-4 text-xs">routes/api.php:87</div>
                                    <div class="text-blue-400 font-bold mt-1">
                                        [MEDIUM] http/debug-mode-enabled</div>
                                    <div class="text-gray-300 pl-4 text-xs">.env:3</div>
                                    <div class="border-t border-gray-700 mt-3 pt-3 flex flex-wrap gap-4 text-xs">
                                        <span class="text-red-400">● 1 critical</span>
                                        <span class="text-yellow-400">● 2 high</span>
                                        <span class="text-blue-400">● 1 medium</span>
                                        <span class="text-gray-400">127 files scanned</span>
                                    </div>
                                </div>
                            </div>

                            <!-- Install -->
                            <div>
                                <div class="text-gray-400 mb-2"># Install</div>
                                <div
                                    class="bg-black p-4 rounded-lg border border-gray-800 text-gray-300 font-mono text-sm">
                                    cargo install <span class="text-red-400">lsec</span>
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
const categories = [
    { name: 'Env', count: 7, color: 'text-yellow-400' },
    { name: 'Auth', count: 8, color: 'text-red-400' },
    { name: 'Injection', count: 7, color: 'text-red-400' },
    { name: 'HTTP', count: 8, color: 'text-orange-400' },
    { name: 'Storage', count: 6, color: 'text-blue-400' },
    { name: 'Deps', count: 6, color: 'text-purple-400' },
    { name: 'Secrets', count: 4, color: 'text-red-400' },
    { name: 'Logging', count: 5, color: 'text-green-400' },
]
</script>
