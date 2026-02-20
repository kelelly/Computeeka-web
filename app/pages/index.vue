<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { 
  Cpu, Calendar, Menu, ArrowRight, Brain, Code2, 
  BarChart3, Users, Search, Zap, ChevronDown, 
  PieChart, GraduationCap, Landmark, Layers, 
  Phone, Mail, MapPin, Linkedin, Twitter, Github, User 
} from 'lucide-vue-next'

// Data for the nodes to keep the template clean
const nodes = [
  { top: '20%', left: '10%', delay: '0s' },
  { top: '30%', left: '25%', delay: '0.5s' },
  { top: '15%', left: '40%', delay: '1s' },
  { top: '45%', left: '15%', delay: '1.5s' },
  { top: '60%', left: '30%', delay: '2s' },
  { top: '25%', left: '60%', delay: '0.3s' },
  { top: '50%', left: '70%', delay: '0.8s' },
  { top: '70%', left: '55%', delay: '1.3s' },
  { top: '35%', left: '85%', delay: '1.8s' },
  { top: '55%', left: '90%', delay: '2.3s' },
]
</script>

<template>
  <div class="bg-computeeka-900 text-slate-200 font-sans antialiased">

    <section class="relative min-h-screen hero-bg network-bg flex items-center pt-16 overflow-hidden">
      <div class="absolute inset-0 overflow-hidden">
        <div v-for="(node, i) in nodes" :key="i" class="data-node" 
             :style="{ top: node.top, left: node.left, animationDelay: node.delay }"></div>
        <svg class="absolute inset-0 w-full h-full opacity-20">
          <line x1="10%" y1="20%" x2="25%" y2="30%" stroke="#0ea5e9" stroke-width="0.5"/>
          <line x1="25%" y1="30%" x2="40%" y2="15%" stroke="#0ea5e9" stroke-width="0.5"/>
          <line x1="15%" y1="45%" x2="30%" y2="60%" stroke="#0ea5e9" stroke-width="0.5"/>
          <line x1="60%" y1="25%" x2="70%" y2="50%" stroke="#06b6d4" stroke-width="0.5"/>
          <line x1="70%" y1="50%" x2="55%" y2="70%" stroke="#06b6d4" stroke-width="0.5"/>
          <line x1="85%" y1="35%" x2="90%" y2="55%" stroke="#22d3ee" stroke-width="0.5"/>
        </svg>
      </div>
      
      <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div class="grid lg:grid-cols-2 gap-12 items-center">
          <div class="space-y-8">
            <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-computeeka-500/10 border border-computeeka-500/20">
              <span class="w-2 h-2 rounded-full bg-computeeka-400 animate-pulse"></span>
              <span class="text-sm font-medium text-computeeka-300">Digital Consultancy • Eldoret, Kenya</span>
            </div>
            <h1 class="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Evidence-Led Innovation.<br>
              <span class="gradient-text">Engineering with Empathy.</span>
            </h1>
            <p class="text-lg sm:text-xl text-slate-400 max-w-xl leading-relaxed">
              Computeeka Agencies is a multidisciplinary digital consultancy blending software engineering, data analytics, and user experience research to build intelligent, human-centered solutions.
            </p>
            <div class="flex flex-wrap gap-4">
              <NuxtLink to="/services" class="inline-flex items-center gap-2 px-8 py-4 bg-computeeka-500 hover:bg-computeeka-400 text-white font-semibold rounded-xl transition-all hover:shadow-xl hover:shadow-computeeka-500/25">
                <span>Explore Our Services</span>
                <ArrowRight class="w-5 h-5" />
              </NuxtLink>
              <NuxtLink to="/contact" class="inline-flex items-center gap-2 px-8 py-4 border-2 border-slate-600 hover:border-computeeka-400 text-white font-semibold rounded-xl transition-all hover:bg-computeeka-500/10">
                <Calendar class="w-5 h-5" />
                <span>Book Free Consultation</span>
              </NuxtLink>
            </div>
          </div>
          <div class="relative hidden lg:block">
            <div class="relative w-full aspect-square max-w-lg mx-auto">
              <div class="absolute inset-0 flex items-center justify-center">
                <div class="w-64 h-64 rounded-full bg-gradient-to-br from-computeeka-500/20 to-computeeka-accent/20 animate-pulse-slow"></div>
                <User class="absolute w-32 h-32 text-computeeka-300/40" />
              </div>
              <div class="absolute top-0 left-1/2 -translate-x-1/2 glass-card rounded-2xl p-4 animate-float"><Brain class="w-8 h-8 text-computeeka-400" /></div>
              <div class="absolute top-1/4 right-0 glass-card rounded-2xl p-4 animate-float" style="animation-delay: 1s;"><Code2 class="w-8 h-8 text-computeeka-accent" /></div>
              <div class="absolute bottom-1/4 right-0 glass-card rounded-2xl p-4 animate-float" style="animation-delay: 2s;"><BarChart3 class="w-8 h-8 text-computeeka-300" /></div>
              <div class="absolute bottom-0 left-1/2 -translate-x-1/2 glass-card rounded-2xl p-4 animate-float" style="animation-delay: 3s;"><Users class="w-8 h-8 text-computeeka-400" /></div>
              <div class="absolute top-1/4 left-0 glass-card rounded-2xl p-4 animate-float" style="animation-delay: 4s;"><Search class="w-8 h-8 text-computeeka-accent" /></div>
              <div class="absolute bottom-1/4 left-0 glass-card rounded-2xl p-4 animate-float" style="animation-delay: 5s;"><Zap class="w-8 h-8 text-computeeka-300" /></div>
            </div>
          </div>
        </div>
      </div>
      <div class="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown class="w-6 h-6 text-slate-500" />
      </div>
    </section>

    <section class="py-24 bg-computeeka-800 relative">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <span class="text-computeeka-400 font-semibold text-sm uppercase tracking-wider">Our Philosophy</span>
          <h2 class="mt-4 font-display text-3xl sm:text-4xl font-bold text-white">The Computeeka Edge</h2>
        </div>
        <div class="grid md:grid-cols-3 gap-8">
          <div class="glass-card rounded-2xl p-8 hover:border-computeeka-500/30 transition-all group">
            <div class="w-14 h-14 rounded-xl bg-computeeka-500/10 flex items-center justify-center mb-6 group-hover:bg-computeeka-500/20">
              <Search class="w-7 h-7 text-computeeka-400" />
            </div>
            <h3 class="font-display text-xl font-bold text-white mb-4">Strategy First, Code Second</h3>
            <p class="text-slate-400 leading-relaxed">We believe every line of code should be backed by evidence. We don't just build apps; we discover what your users actually need through rigorous UX research.</p>
          </div>
          <div class="glass-card rounded-2xl p-8 hover:border-computeeka-500/30 transition-all group">
            <div class="w-14 h-14 rounded-xl bg-computeeka-accent/10 flex items-center justify-center mb-6 group-hover:bg-computeeka-accent/20">
              <BarChart3 class="w-7 h-7 text-computeeka-accent" />
            </div>
            <h3 class="font-display text-xl font-bold text-white mb-4">Data-Driven Execution</h3>
            <p class="text-slate-400 leading-relaxed">Leveraging advanced analytics and behavioral tracking to turn raw data into actionable business intelligence.</p>
          </div>
          <div class="glass-card rounded-2xl p-8 hover:border-computeeka-500/30 transition-all group">
            <div class="w-14 h-14 rounded-xl bg-computeeka-300/10 flex items-center justify-center mb-6 group-hover:bg-computeeka-300/20">
              <MapPin class="w-7 h-7 text-computeeka-300" />
            </div>
            <h3 class="font-display text-xl font-bold text-white mb-4">Grounded Innovation</h3>
            <p class="text-slate-400 leading-relaxed">Passionate about research, focused on execution. Based in Eldoret, we deliver global-standard software with a deep understanding of local market opportunities.</p>
          </div>
        </div>
      </div>
    </section>

    <section class="py-24 bg-computeeka-900 relative overflow-hidden">
      <div class="absolute inset-0 network-bg opacity-50"></div>
      <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <span class="text-computeeka-400 font-semibold text-sm uppercase tracking-wider">What We Do</span>
          <h2 class="mt-4 font-display text-3xl sm:text-4xl font-bold text-white">One Firm. Four Pillars of Impact.</h2>
        </div>
        <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div v-for="(service, i) in [
            { icon: Users, title: 'UX Research & Strategy', desc: '17+ services including usability testing and MVP scoping.', color: 'text-purple-400', bg: 'bg-purple-500/10' },
            { icon: PieChart, title: 'Data Analytics', desc: 'From dashboard design to behavioral analytics for clarity.', color: 'text-emerald-400', bg: 'bg-emerald-500/10' },
            { icon: Code2, title: 'Lean Development', desc: 'Scalable web and mobile apps built with a data-first mindset.', color: 'text-orange-400', bg: 'bg-orange-500/10' },
            { icon: GraduationCap, title: 'Training', desc: 'Empowering teams through bootcamps in UX and Data strategy.', color: 'text-pink-400', bg: 'bg-pink-500/10' }
          ]" :key="i" class="glass-card rounded-2xl p-6 hover:bg-computeeka-700/50 transition-all cursor-pointer">
            <div :class="`w-12 h-12 rounded-lg ${service.bg} flex items-center justify-center mb-4`">
              <component :is="service.icon" :class="`w-6 h-6 ${service.color}`" />
            </div>
            <h3 class="font-display text-lg font-bold text-white mb-3">{{ service.title }}</h3>
            <p class="text-sm text-slate-400">{{ service.desc }}</p>
          </div>
        </div>
        <div class="text-center mt-12">
          <NuxtLink to="/services" class="inline-flex items-center gap-2 text-computeeka-400 hover:text-computeeka-300 font-semibold transition-colors">
            <span>View All Services</span>
            <ArrowRight class="w-5 h-5" />
          </NuxtLink>
        </div>
      </div>
    </section>

    <section class="py-24 bg-computeeka-800">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <span class="text-computeeka-400 font-semibold text-sm uppercase tracking-wider">Evidence of Impact</span>
          <h2 class="mt-4 font-display text-3xl sm:text-4xl font-bold text-white">Why Organizations Trust Us</h2>
        </div>
        <div class="grid md:grid-cols-3 gap-8">
          <div class="text-center p-8">
            <div class="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-computeeka-500/10 mb-6">
              <span class="font-display text-4xl font-bold text-computeeka-400">40%</span>
            </div>
            <h3 class="font-display text-lg font-bold text-white mb-2">Efficiency Improvement</h3>
            <p class="text-slate-400">Improvement in manual reporting efficiency for transport operators.</p>
          </div>
          <div class="text-center p-8">
            <div class="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-computeeka-accent/10 mb-6">
              <Landmark class="w-10 h-10 text-computeeka-accent" />
            </div>
            <h3 class="font-display text-lg font-bold text-white mb-2">Policy-Driving Research</h3>
            <p class="text-slate-400">Research that influenced national healthcare decisions in Kenya.</p>
          </div>
          <div class="text-center p-8">
            <div class="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-computeeka-300/10 mb-6">
              <Layers class="w-10 h-10 text-computeeka-300" />
            </div>
            <h3 class="font-display text-lg font-bold text-white mb-2">Multidisciplinary Expertise</h3>
            <p class="text-slate-400">Software Engineering, Data Science, and Agile Management.</p>
          </div>
        </div>
      </div>
    </section>

    <section class="py-24 bg-computeeka-900 relative overflow-hidden">
      <div class="absolute inset-0">
        <div class="absolute top-0 left-1/4 w-96 h-96 bg-computeeka-500/10 rounded-full blur-3xl"></div>
        <div class="absolute bottom-0 right-1/4 w-96 h-96 bg-computeeka-accent/10 rounded-full blur-3xl"></div>
      </div>
      <div class="relative max-w-4xl mx-auto px-4 text-center">
        <h2 class="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">Ready to Build Something Intelligent?</h2>
        <p class="text-lg text-slate-400 mb-10 max-w-2xl mx-auto">Transform your ideas into scalable products today.</p>
        <NuxtLink to="/contact" class="inline-flex items-center gap-2 px-8 py-4 bg-computeeka-500 hover:bg-computeeka-400 text-white font-semibold rounded-xl transition-all">
          <span>Start Your Project Today</span>
          <ArrowRight class="w-5 h-5" />
        </NuxtLink>
      </div>
    </section>
  </div>
</template>
