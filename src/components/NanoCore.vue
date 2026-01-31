<template>
    <section id="nanocore" class="py-20 bg-gradient-to-br from-gray-900 to-black text-white relative overflow-hidden">
        <!-- Background Patterns -->
        <div
            class="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/circuit-board.png')]">
        </div>

        <div class="container mx-auto px-6 relative z-10">
            <div class="flex flex-col lg:flex-row items-center gap-12">
                <div class="lg:w-1/2">
                    <div
                        class="inline-block px-3 py-1 bg-green-500/20 border border-green-400/50 rounded-full text-green-300 text-sm font-bold mb-6">
                        Featured Project
                    </div>
                    <h2
                        class="text-5xl font-black mb-6 tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-600">
                        NanoCore</h2>
                    <p class="text-xl text-gray-300 mb-8 leading-relaxed">
                        A meticulously crafted <span class="text-green-400 font-bold">8-bit CPU emulator</span> written
                        in Rust. Designed with extreme minimalism, operating within a strict 256-byte memory space.
                    </p>

                    <div class="flex flex-wrap gap-4 mb-10">
                        <span
                            class="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-lg backdrop-blur-sm border border-white/20">
                            <span class="w-2 h-2 rounded-full bg-orange-500"></span> Rust
                        </span>
                        <span
                            class="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-lg backdrop-blur-sm border border-white/20">
                            <span class="w-2 h-2 rounded-full bg-blue-500"></span> 8-bit ISA
                        </span>
                        <span
                            class="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-lg backdrop-blur-sm border border-white/20">
                            <span class="w-2 h-2 rounded-full bg-purple-500"></span> TUI
                        </span>
                        <span
                            class="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-lg backdrop-blur-sm border border-white/20">
                            <span class="w-2 h-2 rounded-full bg-red-500"></span> Assembler
                        </span>
                    </div>

                    <div class="flex gap-4">
                        <a href="https://github.com/AfaanBilal/NanoCore" target="_blank" rel="noopener"
                            class="px-8 py-4 bg-green-600 text-white font-bold rounded-xl hover:bg-green-500 transition-transform hover:-translate-y-1 shadow-lg shadow-green-500/20">
                            View on GitHub
                        </a>
                    </div>
                </div>

                <div class="lg:w-1/2 w-full">
                    <div
                        class="bg-black/50 backdrop-blur-md rounded-xl shadow-2xl border border-gray-700 overflow-hidden font-mono text-sm leading-relaxed">
                        <div
                            class="flex justify-between items-center bg-gray-800/50 px-4 py-3 border-b border-gray-700">
                            <span class="text-gray-400">Terminal</span>
                            <div class="flex gap-2">
                                <div class="w-3 h-3 rounded-full bg-red-500"></div>
                                <div class="w-3 h-3 rounded-full bg-yellow-500"></div>
                                <div class="w-3 h-3 rounded-full bg-green-500"></div>
                            </div>
                        </div>
                        <div class="p-6 space-y-4">
                            <!-- Features Grid -->
                            <div class="grid grid-cols-2 gap-4 mb-6">
                                <div class="bg-gray-800/50 p-4 rounded-lg border border-gray-700">
                                    <div class="text-gray-400 text-xs mb-1">Architecture</div>
                                    <div class="text-lg font-bold text-green-400">True 8-bit</div>
                                </div>
                                <div class="bg-gray-800/50 p-4 rounded-lg border border-gray-700">
                                    <div class="text-gray-400 text-xs mb-1">Memory Limit</div>
                                    <div class="text-lg font-bold text-yellow-400">256 Bytes</div>
                                </div>
                            </div>

                            <!-- Assembly Code Snippet -->
                            <div>
                                <div class="text-gray-500 mb-2"># Example Assembly Code</div>
                                <div class="bg-gray-900 p-4 rounded-lg border border-gray-800 text-gray-300">
                                    <span class="text-purple-400">MOV</span> R1, <span
                                        class="text-orange-400">0x05</span> <span class="text-gray-600">; Load 5 into
                                        R1</span><br>
                                    <span class="text-purple-400">MOV</span> R2, <span
                                        class="text-orange-400">0x03</span> <span class="text-gray-600">; Load 3 into
                                        R2</span><br>
                                    <span class="text-purple-400">ADD</span> R1, R2 <span class="text-gray-600">; R1 =
                                        R1 + R2</span><br>
                                    <span class="text-purple-400">OUT</span> R1 <span class="text-gray-600">; Output
                                        result</span><br>
                                    <span class="text-purple-400">HLT</span> <span class="text-gray-600">; Halt
                                        execution</span>
                                </div>
                            </div>

                            <!-- Install Command -->
                            <div class="mt-4">
                                <div class="text-gray-500 mb-2"># Run Emulator</div>
                                <div class="text-gray-300">cargo <span class="text-green-400">run</span> --release</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
