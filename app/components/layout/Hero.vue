<script setup lang="ts">
import {nextTick, onMounted, reactive, ref} from "vue";
import {GitBranch} from "lucide-vue-next";
import {clickLink} from "../../lib/clickLink";

const terminalInput = ref('');
const terminalInputRef = ref<HTMLInputElement | null>(null);
const terminalBody = ref<HTMLDivElement | null>(null);
const terminalHistory = reactive([
  { user: false, msg: 'Last login: ' + new Date().toLocaleString() + ' on /dev/ttys001' },
  { user: false, msg: 'Kernel: 6.2.17 - Distro: bdavies.net' },
  { user: false, msg: 'bensh: Welcome to Ben Davies Portfolio Shell' },
]);

const typing = reactive({
  line1: '',
  line2: '',
  suffix: '',
  step: 0,
});

const startTyping = () => {
  const line1Full = "Software";
  const line2Full = "Engineer";
  const suffixFull = ".js";
  let speed = 35;
  const extCycle = [
      ".ts",
      ".rs",
      ".java",
      ".vue",
      ".go",
      ".php",
      ".sh",
      ".asm",
      ".json",
      ".yml",
  ]

  let extIndex = 0;
  const cycleThroughExts = () => {
    speed = 75;
     setTimeout(() => {
       const int = setInterval(() => {
         typing.suffix = typing.suffix.substring(0, typing.suffix.length - 1)
         if (typing.suffix === '') {
           clearInterval(int);
           typeChar(extCycle[extIndex++], 'suffix', 4);
           if (extIndex > extCycle.length - 1) {
             extIndex = 0;
           }
         }
       }, speed)
     }, 1250);
  }

  const typeChar = (text: any, target: any, nextStep: any) => {
    let i = 0;
    const interval = setInterval(() => {
      //@ts-expect-error yeah it works
      typing[target] += text[i];
      i++;
      if (i === text.length) {
        clearInterval(interval);
        setTimeout(() => {
          typing.step = nextStep;
          if (nextStep === 2) typeChar(line2Full, 'line2', 3);
          if (nextStep === 3) typeChar(suffixFull, 'suffix', 4);
          if (nextStep === 4) cycleThroughExts()
        }, 200);
      }
    }, speed);
  };

  typing.step = 1;
  setTimeout(() => typeChar(line1Full, 'line1', 2), 200);
}

const commandRegister: Record<string, () => string[]> = {
  'sudo': () => ['Username is not in the sudoers file. This incident will be reported..'],
  'help': () => [
    'Available Commands:',
    (Object.keys(commandRegister)).join(', ')
  ],
  'skills': () => [
    'Skills I have:',
    (['Java',
      'JS/TS',
      'PHP',
      'Vue',
      'React',
      'Nuxt',
      'Next.js',
      'Docker',
      'Podman',
      'Kubernetes',
      'Sysadmin']).join(', ')
  ],
  'contact': () => [
    'Contact me via the following:',
    '- Email: portfolio@bdavies.net',
    '- Github: https://github.com/bendavies99'
  ],
  'clear': () => {
    terminalHistory.splice(0, terminalHistory.length);
    return [];
  },
  'whoami': () => ['user'],
  'id': () => ['uid=1000(user) gid=1000(user)'],
  'pwd': () => ['/home/user'],
  'pacman': () => ['I use Arch btw :D']
}

const handleCommand = () => {
  const cmdRaw = terminalInput.value.trim().toLowerCase();

  if (cmdRaw === '') {
    return;
  }

  const cmd = cmdRaw.split(/\s+/g)[0]!
  terminalHistory.push({ user: true, msg: cmdRaw });
  if (commandRegister[cmd]) {
    terminalHistory.push(...commandRegister[cmd]().map(i => ({ user: false, msg: i })));
  } else {
    terminalHistory.push({ user: false, msg: `bensh: command not found: ${cmd}` })
  }

  terminalInput.value = '';

  nextTick(() => {
    const container = terminalBody.value;
    if (container) {
      container.scrollTop = container.scrollHeight;
    }
  });
}

onMounted(() => {
  startTyping();
})
</script>

<template>
  <section class="w-full flex items-center flex-1 min-h-[90%] relative md:p-20">
    <div
        class="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-size-[24px_24px]"></div>
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <div class="inline-flex flex-col">
            <div
                class="items-center gap-2 px-3 py-1 rounded-full inline-flex my-2 mt-8 md:mt-0 bg-neutral-800/50 border border-neutral-600 text-nuxt text-xs font-mono mb-6">
              <span class="rounded-full w-2 h-2 bg-green-500"></span>
              <span class="lowercase">Version {{ new Date().getFullYear()-2000 }}.{{ new Date().getMonth() + 1 }}.{{ new Date().getDate() }} released! 🎉 </span>
            </div>
          </div>
          <h2 class="text-neutral-400 text-5xl">Ben Davies</h2>
          <h1 class="text-5xl md:text-7xl font-bold tracking-tight mb-6 font-sans min-h-35 md:min-h-50">
            <span class="text-white">{{ typing.line1 }}</span>
            <span v-if="typing.step === 1"
                  class="inline-block w-3 h-8 md:h-12 bg-emerald-400 ml-1 align-middle cursor-blink shadow-[0_0_10px_rgba(52,211,153,0.5)]"></span>
            <br v-if="typing.step > 1">

            <span v-if="typing.step >= 2"
                  class="bg-clip-text bg-primary text-transparent bg-linear-to-r to-emerald-400">{{
                typing.line2
              }}
            <span v-if="typing.step === 2"
                  class="inline-block w-3 h-8 md:h-12 bg-emerald-400 ml-1 align-middle cursor-blink shadow-[0_0_10px_rgba(52,211,153,0.5)]"></span>
            </span>

            <span v-if="typing.step >= 3" class="text-neutral-500 text-4xl">{{ typing.suffix }}
            </span>

            <span v-if="typing.step >= 3"
                  class="inline-block w-3 h-8 md:h-12 bg-emerald-400 ml-1 align-middle cursor-blink shadow-[0_0_10px_rgba(52,211,153,0.5)]"></span>
          </h1>
          <p class="text-xl text-neutral-400 mb-8 max-w-lg leading-relaxed">
            Programming sleek <span class="font-bold text-orange-400">Java</span> backends and fluid <span
              class="text-primary font-bold">Vue/Nuxt</span> frontends.
            Passionate about self-hosting, zero-trust architectures, and owning my data.
          </p>
          <div class="flex flex-wrap gap-4">
            <Button size="xl" variant="default" @click="clickLink('/#projects')">
              View Projects
            </Button>
            <Button size="xl" variant="outline" @click="clickLink('/#contact')">
              sh ./contact.sh
            </Button>
          </div>
        </div>

        <!-- Interactive Terminal Component -->
        <div
            class="w-full max-w-lg mx-auto bg-neutral-950 rounded-lg border border-neutral-700 shadow-2xl overflow-hidden font-mono text-sm relative group">
          <!-- Terminal Header -->
          <div class="bg-neutral-800 px-4 py-2 flex items-center justify-between border-b border-neutral-700">
            <div class="flex gap-2">
              <div class="w-3 h-3 rounded-full bg-red-500"></div>
              <div class="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div class="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <div class="text-neutral-400 text-xs">user@bensh-emulator: ~</div>
            <div class="w-8"></div>
          </div>
          <!-- Terminal Body -->
          <div class="p-4 h-75 overflow-y-auto text-neutral-300 space-y-2 cursor-pointer" ref="terminalBody" tabindex="0" @focus="() => terminalInputRef?.focus()" @click="() => terminalInputRef?.focus()">
            <div v-for="(line, index) in terminalHistory" :key="index">
              <span v-if="line.user" class="text-emerald-500 inline-flex items-center">[<GitBranch :size="15" class="mr-2" /> main] ➜</span> <span v-if="line.user" class="text-blue-400">~</span> <span>{{ line.msg }}</span>
            </div>
            <div class="flex items-center">
              <span class="text-emerald-500 mr-2 inline-flex items-center">[<GitBranch :size="15" class="mr-2" /> main] ➜</span>
              <span class="text-blue-400 mr-2">~</span>
              <input type="text"
                     ref="terminalInputRef"
                     v-model="terminalInput"
                     @keyup.enter="handleCommand"
                     class="bg-transparent border-none outline-none text-neutral-100 flex-1 font-mono"
                     placeholder="Type 'help'..."
                     >
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style>
.cursor-blink {
  animation: blink 1s step-end infinite;
}

@keyframes blink {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
}
</style>