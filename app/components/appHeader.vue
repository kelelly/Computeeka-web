<script setup lang="ts">
import { ref } from 'vue'
import { Cpu, Calendar, Menu, X } from 'lucide-vue-next'

const route = useRoute()
const isMenuOpen = ref(false)

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About Us' },
  { to: '/services', label: 'Services' },
  { to: '/insights', label: 'Insights' },
  { to: '/contact', label: 'Contact' }
]

// Close mobile menu when route changes
watch(() => route.path, () => {
  isMenuOpen.value = false
})
</script>

<template>
  <nav class="fixed top-0 left-0 right-0 z-50 bg-computeeka-900/80 backdrop-blur-xl border-b border-slate-700/30">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16">
        
        <NuxtLink to="/" class="flex items-center gap-2 group">
          <div class="w-9 h-9 rounded-lg bg-gradient-to-br from-computeeka-500 to-computeeka-accent flex items-center justify-center transition-transform group-hover:scale-105">
            <Cpu class="w-5 h-5 text-white" />
          </div>
          <span class="font-display font-bold text-lg text-white tracking-tight">Computeeka</span>
        </NuxtLink>

        <div class="hidden md:flex items-center bg-slate-800/50 border border-slate-700/50 rounded-lg p-1">
          <NuxtLink 
            v-for="link in navLinks" 
            :key="link.to"
            :to="link.to"
            class="px-4 py-1.5 text-sm font-medium transition-all rounded-md"
            :class="route.path === link.to 
              ? 'bg-computeeka-500 text-white shadow-lg shadow-computeeka-500/20' 
              : 'text-slate-400 hover:text-white hover:bg-slate-700/50'"
          >
            {{ link.label }}
          </NuxtLink>
        </div>

        <div class="hidden md:flex items-center">
          <NuxtLink to="/contact" class="inline-flex items-center gap-2 px-5 py-2 bg-computeeka-500 hover:bg-computeeka-400 text-white text-sm font-semibold rounded-lg transition-all hover:shadow-lg hover:shadow-computeeka-500/25">
            <Calendar class="w-4 h-4" />
            <span>Book a Consultation</span>
          </NuxtLink>
        </div>

        <button @click="isMenuOpen = !isMenuOpen" class="md:hidden p-2 text-slate-400 hover:text-white transition-colors">
          <component :is="isMenuOpen ? X : Menu" class="w-6 h-6" />
        </button>
      </div>
    </div>

    <Transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="opacity-0 -translate-y-4"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-4"
    >
      <div v-if="isMenuOpen" class="md:hidden bg-computeeka-900 border-t border-slate-700/30 shadow-2xl">
        <div class="px-4 py-6 space-y-2">
          <NuxtLink 
            v-for="link in navLinks" 
            :key="link.to"
            :to="link.to"
            class="block px-4 py-3 rounded-xl text-base font-medium transition-colors"
            :class="route.path === link.to ? 'bg-computeeka-500/10 text-computeeka-400' : 'text-slate-400'"
          >
            {{ link.label }}
          </NuxtLink>
          <div class="pt-4 border-t border-slate-800">
            <NuxtLink to="/contact" class="flex items-center justify-center gap-2 w-full px-5 py-3 bg-computeeka-500 text-white font-bold rounded-xl">
              <Calendar class="w-5 h-5" />
              Book a Consultation
            </NuxtLink>
          </div>
        </div>
      </div>
    </Transition>
  </nav>
</template>
