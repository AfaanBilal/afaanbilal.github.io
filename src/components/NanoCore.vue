<template>
    <section id="nanocore"
        class="py-20 bg-gradient-to-br from-gray-900 to-black text-white relative overflow-hidden scroll-mt-12">
        <!-- Background Patterns -->
        <div
            class="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/circuit-board.png')]">
        </div>

        <div class="container mx-auto px-6 relative z-10">
            <div class="flex flex-col lg:flex-row items-start gap-12">
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
                            class="px-8 py-4 bg-green-700 text-white font-bold rounded-xl hover:bg-green-600 transition-transform hover:-translate-y-1 shadow-lg shadow-green-500/20">
                            View on GitHub
                        </a>
                        <a href="https://deepwiki.com/AfaanBilal/NanoCore" target="_blank" rel="noopener"
                            class="px-8 py-4 bg-green-900/30 text-green-300 border border-green-500/30 font-bold rounded-xl hover:bg-green-900/50 transition-transform hover:-translate-y-1">
                            Documentation
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
                                <div class="flex flex-col sm:flex-row justify-between sm:items-end gap-4 mb-2">
                                    <div class="text-gray-400"># Example Assembly Code</div>
                                    <div class="flex flex-wrap gap-2">
                                        <button v-for="(example, key) in examples" :key="key" @click="switchTab(key)"
                                            class="px-3 py-1 rounded text-xs font-bold transition-colors border cursor-pointer"
                                            :class="activeTab === key ? 'bg-green-500/20 text-green-300 border-green-500/50' : 'bg-gray-800 text-gray-400 border-gray-700 hover:border-gray-600 hover:text-gray-300'">
                                            {{ example.label }}
                                        </button>
                                    </div>
                                </div>
                                <div class="bg-gray-900 p-4 rounded-lg border border-gray-800 text-gray-300 font-mono text-sm leading-relaxed overflow-x-auto"
                                    style="view-transition-name: code-container;" v-html="examples[activeTab].code">
                                </div>
                            </div>

                            <!-- Run Command -->
                            <div class="mt-4">
                                <div class="text-gray-400 mb-2"># Run Emulator</div>
                                <div
                                    class="bg-gray-900 p-4 rounded-lg border border-gray-800 text-gray-300 font-mono text-sm leading-relaxed">
                                    <div class="text-gray-300">
                                        cargo <span class="text-green-400">run</span> --release
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
import { ref } from 'vue';

const activeTab = ref('fib');

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
    abcde: {
        label: 'ABCDE',
        code: `<span class="text-gray-400">; Prints ABCDE</span><br>
<span class="text-yellow-400">start:</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span class="text-purple-400">LDI</span> R0 <span class="text-orange-400">65</span>&nbsp;&nbsp;&nbsp;<span class="text-gray-400">; Init R0 with 'A'</span><br>
<span class="text-yellow-400">loop:</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span class="text-purple-400">PRINT</span> R0&nbsp;&nbsp;&nbsp;&nbsp;<span class="text-gray-400">; Print character</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span class="text-purple-400">INC</span> R0&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="text-gray-400">; Increment char</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span class="text-purple-400">LDI</span> R1 <span class="text-orange-400">70</span>&nbsp;&nbsp;&nbsp;<span class="text-gray-400">; Load 'F' limit</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span class="text-purple-400">SUB</span> R1 R0&nbsp;&nbsp;&nbsp;<span class="text-gray-400">; Check vs limit</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span class="text-purple-400">JNZ</span> <span class="text-yellow-400">loop</span>&nbsp;&nbsp;&nbsp;&nbsp;<span class="text-gray-400">; Repeat if != 0</span><br>
<br>
&nbsp;&nbsp;&nbsp;&nbsp;<span class="text-purple-400">HLT</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="text-gray-400">; Stop execution</span>`
    },
    counter: {
        label: 'Counter',
        code: `<span class="text-gray-400">; Count down from 5</span><br>
<span class="text-yellow-400">start:</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span class="text-purple-400">LDI</span> R0 <span class="text-orange-400">5</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="text-gray-400">; Start count at 5</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span class="text-purple-400">LDI</span> R1 <span class="text-orange-400">1</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="text-gray-400">; Decrement step</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span class="text-purple-400">LDI</span> R2 <span class="text-orange-400">48</span>&nbsp;&nbsp;&nbsp;&nbsp;<span class="text-gray-400">; ASCII '0' offset</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span class="text-purple-400">ADD</span> R2 R0&nbsp;&nbsp;&nbsp;&nbsp;<span class="text-gray-400">; Convert to char</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span class="text-purple-400">PRINT</span> R2&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="text-gray-400">; Print digit</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span class="text-purple-400">SUB</span> R0 R1&nbsp;&nbsp;&nbsp;&nbsp;<span class="text-gray-400">; Decrement count</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span class="text-purple-400">JZ</span> <span class="text-orange-400">0x13</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="text-gray-400">; Jump if zero</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span class="text-purple-400">JMP</span> <span class="text-orange-400">0x06</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="text-gray-400">; Loop back</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span class="text-purple-400">HLT</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="text-gray-400">; Stop execution</span>`
    },
    fib: {
        label: 'Fibonacci',
        code: `<span class="text-gray-400">; Print Fibonacci seq (first 7)</span><br>
<span class="text-yellow-400">start:</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span class="text-purple-400">LDI</span> R0 <span class="text-orange-400">0</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="text-gray-400">; Fib(0)</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span class="text-purple-400">LDI</span> R1 <span class="text-orange-400">1</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="text-gray-400">; Fib(1)</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span class="text-purple-400">LDI</span> R2 <span class="text-orange-400">7</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="text-gray-400">; Terms to print</span><br>
<span class="text-yellow-400">loop:</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span class="text-purple-400">LDI</span> R4 <span class="text-orange-400">48</span>&nbsp;&nbsp;&nbsp;&nbsp;<span class="text-gray-400">; ASCII '0' offset</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span class="text-purple-400">ADD</span> R4 R0&nbsp;&nbsp;&nbsp;&nbsp;<span class="text-gray-400">; Convert to char</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span class="text-purple-400">PRINT</span> R4&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="text-gray-400">; Print term</span><br>
<br>
&nbsp;&nbsp;&nbsp;&nbsp;<span class="text-purple-400">MOV</span> R3 R1&nbsp;&nbsp;&nbsp;&nbsp;<span class="text-gray-400">; Temp = Next</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span class="text-purple-400">ADD</span> R1 R0&nbsp;&nbsp;&nbsp;&nbsp;<span class="text-gray-400">; Next += Curr</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span class="text-purple-400">MOV</span> R0 R3&nbsp;&nbsp;&nbsp;&nbsp;<span class="text-gray-400">; Curr = Temp</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span class="text-purple-400">DEC</span> R2&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="text-gray-400">; Decrement count</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span class="text-purple-400">JNZ</span> <span class="text-yellow-400">loop</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="text-gray-400">; Repeat if > 0</span><br>
<span class="text-yellow-400">end:</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span class="text-purple-400">HLT</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="text-gray-400">; Stop execution</span>`
    },
    rect: {
        label: 'Rectangle',
        code: `<span class="text-gray-400">; Draw a rectangle</span><br>
<span class="text-yellow-400">start:</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span class="text-purple-400">LDI</span> R10 <span class="text-orange-400">10</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="text-gray-400">; Newline char</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span class="text-purple-400">LDI</span> R11 <span class="text-orange-400">32</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="text-gray-400">; Space char</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span class="text-purple-400">LDI</span> R12 <span class="text-orange-400">35</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="text-gray-400">; '#' char</span><br>
<br>
&nbsp;&nbsp;&nbsp;&nbsp;<span class="text-purple-400">LDI</span> R2 <span class="text-orange-400">20</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="text-gray-400">; Width</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span class="text-purple-400">LDI</span> R3 <span class="text-orange-400">6</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="text-gray-400">; Height</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span class="text-purple-400">LDI</span> R4 <span class="text-orange-400">2</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="text-gray-400">; Border thickness</span><br>
<br>
<span class="text-yellow-400">print_border_line:</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span class="text-purple-400">PRINT</span> R12&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="text-gray-400">; Print border</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span class="text-purple-400">DEC</span> R2&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="text-gray-400">; Decr width</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span class="text-purple-400">JNZ</span> <span class="text-yellow-400">print_border_line</span>&nbsp;&nbsp;<span class="text-gray-400">; Loop width</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span class="text-purple-400">DEC</span> R4&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="text-gray-400">; Decr thickness</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span class="text-purple-400">JZ</span> <span class="text-yellow-400">end</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="text-gray-400">; Stop if done</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span class="text-purple-400">PRINT</span> R10&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="text-gray-400">; Print newline</span><br>
<br>
<span class="text-yellow-400">print_line:</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span class="text-purple-400">PRINT</span> R12&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="text-gray-400">; Left border</span><br>
<br>
&nbsp;&nbsp;&nbsp;&nbsp;<span class="text-purple-400">LDI</span> R2 <span class="text-orange-400">18</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="text-gray-400">; Inner width</span><br>
<span class="text-yellow-400">print_line_space:</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span class="text-purple-400">PRINT</span> R11&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="text-gray-400">; Print space</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span class="text-purple-400">DEC</span> R2&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="text-gray-400">; Decr inner</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span class="text-purple-400">JNZ</span> <span class="text-yellow-400">print_line_space</span>&nbsp;&nbsp;&nbsp;<span class="text-gray-400">; Loop inner</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span class="text-purple-400">PRINT</span> R12&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="text-gray-400">; Right border</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span class="text-purple-400">PRINT</span> R10&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="text-gray-400">; Newline</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span class="text-purple-400">DEC</span> R3&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="text-gray-400">; Decr height</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span class="text-purple-400">JNZ</span> <span class="text-yellow-400">print_line</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="text-gray-400">; Loop rows</span><br>
<br>
&nbsp;&nbsp;&nbsp;&nbsp;<span class="text-purple-400">LDI</span> R2 <span class="text-orange-400">20</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="text-gray-400">; Reset width</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span class="text-purple-400">JMP</span> <span class="text-yellow-400">print_border_line</span>&nbsp;&nbsp;<span class="text-gray-400">; Bottom border</span><br>
<br>
<span class="text-yellow-400">end:</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span class="text-purple-400">HLT</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="text-gray-400">; Stop</span>`
    },
    funcs: {
        label: 'Functions',
        code: `<span class="text-yellow-400">start:</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span class="text-purple-400">LDI</span> R0 <span class="text-orange-400">2</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="text-gray-400">; Base = 2</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span class="text-purple-400">LDI</span> R1 <span class="text-orange-400">4</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="text-gray-400">; Exponent = 4</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span class="text-purple-400">CALL</span> <span class="text-yellow-400">raise_to_power</span>&nbsp;&nbsp;&nbsp;<span class="text-gray-400">; Calc 2^4</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span class="text-purple-400">CALL</span> <span class="text-yellow-400">print_digits</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="text-gray-400">; Print 16</span><br>
<br>
<span class="text-yellow-400">end:</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span class="text-purple-400">HLT</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="text-gray-400">; Stop</span><br>
<br>
<span class="text-yellow-400">raise_to_power:</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span class="text-purple-400">PUSH</span> R10&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="text-gray-400">; Save R10</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span class="text-purple-400">PUSH</span> R11&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="text-gray-400">; Save R11</span><br>
<br>
&nbsp;&nbsp;&nbsp;&nbsp;<span class="text-purple-400">MOV</span> R10 R0&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="text-gray-400">; Copy base</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span class="text-purple-400">MOV</span> R11 R1&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="text-gray-400">; Copy exp</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span class="text-purple-400">DEC</span> R11&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="text-gray-400">; Exp - 1</span><br>
<span class="text-yellow-400">multiply:</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span class="text-purple-400">MUL</span> R10 R0&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="text-gray-400">; Result *= Base</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span class="text-purple-400">DEC</span> R11&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="text-gray-400">; Decr loop</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span class="text-purple-400">JNZ</span> <span class="text-yellow-400">multiply</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="text-gray-400">; Repeat</span><br>
<br>
&nbsp;&nbsp;&nbsp;&nbsp;<span class="text-purple-400">MOV</span> R0 R10&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="text-gray-400">; Store result</span><br>
<br>
&nbsp;&nbsp;&nbsp;&nbsp;<span class="text-purple-400">POP</span> R11&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="text-gray-400">; Restore R11</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span class="text-purple-400">POP</span> R10&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="text-gray-400">; Restore R10</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span class="text-purple-400">RET</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="text-gray-400">; Return</span><br>
<br>
<span class="text-yellow-400">print_digits:</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span class="text-purple-400">PUSH</span> R10&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="text-gray-400">; Save R10</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span class="text-purple-400">PUSH</span> R11&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="text-gray-400">; Save R11</span><br>
<br>
&nbsp;&nbsp;&nbsp;&nbsp;<span class="text-purple-400">MOV</span> R10 R0&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="text-gray-400">; Copy num</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span class="text-purple-400">DIVI</span> R10 <span class="text-orange-400">10</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="text-gray-400">; Get tens</span><br>
<br>
&nbsp;&nbsp;&nbsp;&nbsp;<span class="text-purple-400">JZ</span> <span class="text-yellow-400">unit_digit</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="text-gray-400">; Skip if 0</span><br>
<br>
&nbsp;&nbsp;&nbsp;&nbsp;<span class="text-purple-400">ADDI</span> R10 <span class="text-orange-400">48</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="text-gray-400">; ASCII conv</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span class="text-purple-400">PRINT</span> R10&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="text-gray-400">; Print tens</span><br>
<br>
<span class="text-yellow-400">unit_digit:</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span class="text-purple-400">MOV</span> R11 R0&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="text-gray-400">; Copy num</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span class="text-purple-400">MODI</span> R11 <span class="text-orange-400">10</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="text-gray-400">; Get units</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span class="text-purple-400">ADDI</span> R11 <span class="text-orange-400">48</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="text-gray-400">; ASCII conv</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span class="text-purple-400">PRINT</span> R11&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="text-gray-400">; Print units</span><br>
<br>
&nbsp;&nbsp;&nbsp;&nbsp;<span class="text-purple-400">POP</span> R11&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="text-gray-400">; Restore R11</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span class="text-purple-400">POP</span> R10&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="text-gray-400">; Restore R10</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span class="text-purple-400">RET</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="text-gray-400">; Return</span>`
    }
};
</script>
