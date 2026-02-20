<script setup lang="ts">
import { Cpu, Linkedin, Twitter, Github, MapPin, Mail, Phone } from 'lucide-vue-next'
const currentYear = new Date().getFullYear()
</script>

<template>
  <footer class="bg-computeeka-900 border-t-2 border-ui-primary mt-20 relative overflow-hidden">
    <div class="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 md:grid-cols-12 gap-12">
        
        <div class="md:col-span-5 space-y-6">
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 rounded-lg bg-ui-primary/10 flex items-center justify-center border border-ui-primary/20">
              <Cpu class="w-6 h-6 text-ui-primary" />
            </div>
            <h2 class="font-display text-2xl font-black tracking-tighter uppercase italic text-white">
              COMPUTEEKA <span class="text-ui-primary not-italic">AGENCIES</span>
            </h2>
          </div>
          <p class="text-slate-200 text-base font-bold italic leading-tight max-w-sm">
            "Engineering certainty in a world of guesswork."
          </p>
          <p class="text-slate-400 text-sm leading-relaxed max-w-sm">
            Evidence-led innovation across all disciplines. We blend rigorous engineering with empathy to solve complex global problems.
          </p>
        </div>

        <div class="md:col-span-2 space-y-4">
          <h3 class="text-xs font-black text-ui-primary uppercase tracking-[0.2em]">Explore</h3>
          <ul class="space-y-3 text-sm font-bold">
            <li><NuxtLink to="/" class="text-slate-400 hover:text-white transition-colors">Home</NuxtLink></li>
            <li><NuxtLink to="/services" class="text-slate-400 hover:text-white transition-colors">Services</NuxtLink></li>
            <li><NuxtLink to="/insights" class="text-slate-400 hover:text-white transition-colors">Insights</NuxtLink></li>
            <li><NuxtLink to="/contact" class="text-slate-400 hover:text-white transition-colors">Contact</NuxtLink></li>
          </ul>
        </div>

        <div class="md:col-span-3 space-y-6">
          <h3 class="text-xs font-black text-ui-primary uppercase tracking-[0.2em]">Direct Line</h3>
          <div class="space-y-4">
            <a href="tel:+254716517145" class="flex items-center gap-3 group">
              <Phone class="w-4 h-4 text-slate-500 group-hover:text-ui-primary" />
              <span class="text-sm font-bold text-slate-300 group-hover:text-white">+254 716 517 145</span>
            </a>
            <a href="mailto:computeekake@gmail.com" class="flex items-center gap-3 group">
              <Mail class="w-4 h-4 text-slate-500 group-hover:text-ui-primary" />
              <span class="text-sm font-bold text-slate-300 group-hover:text-white">computeekake@gmail.com</span>
            </a>
          </div>
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/20 bg-emerald-500/10">
            <span class="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
            <span class="text-[9px] font-black uppercase text-emerald-500 tracking-widest">Active Globally</span>
          </div>
        </div>

        <div class="md:col-span-2 space-y-6">
          <h3 class="text-xs font-black text-ui-primary uppercase tracking-[0.2em]">Follow Us</h3>
          <div class="flex gap-5">
            <a href="#" class="text-slate-500 hover:text-ui-primary transition-colors"><Linkedin class="w-5 h-5" /></a>
            <a href="#" class="text-slate-500 hover:text-ui-primary transition-colors"><Twitter class="w-5 h-5" /></a>
            <a href="#" class="text-slate-500 hover:text-ui-primary transition-colors"><Github class="w-5 h-5" /></a>
          </div>
          <div class="pt-2">
            <p class="text-xs font-black uppercase italic text-white">Eldoret, Kenya</p>
            <p class="text-[10px] text-slate-500 font-bold uppercase tracking-tighter">HQ & Operations</p>
          </div>
        </div>
      </div>

      <div class="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] font-black uppercase tracking-widest text-slate-500">
        <p>© {{ currentYear }} Computeeka Agencies. Engineered for Impact.</p>
        <div class="flex gap-8">
          <NuxtLink to="/privacy" class="hover:text-white transition-colors">Privacy</NuxtLink>
          <NuxtLink to="/terms" class="hover:text-white transition-colors">Terms</NuxtLink>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.text-ui-primary { color: var(--ui-primary); }
.border-ui-primary { border-color: var(--ui-primary); }
.bg-ui-primary { background-color: var(--ui-primary); }
</style>
