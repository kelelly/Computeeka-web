<script setup lang="ts">
import { 
  Target, 
  Telescope, 
  Brain, 
  GitMerge, 
  Compass, 
  Anchor, 
  ShieldCheck, 
  Globe, 
  Microscope,
  GraduationCap,
  Rocket,
  Sparkles,
  ArrowRight
} from 'lucide-vue-next'

useHead({
  title: 'About Us | Computeeka Agencies',
})

const coreValues = [
  { icon: Brain, title: 'Intelligent & Professional', desc: 'Data-driven, insight-led rigor in every solution.', color: 'text-computeeka-400', bg: 'bg-computeeka-500/10' },
  { icon: GitMerge, title: 'Multidisciplinary Synergy', desc: 'Blending UX, engineering, and data into one force.', color: 'text-purple-400', bg: 'bg-purple-500/10' },
  { icon: Compass, title: 'Purposeful Design', desc: 'Building for efficiency, scalability, and human need.', color: 'text-emerald-400', bg: 'bg-emerald-500/10' },
  { icon: Anchor, title: 'Grounded Innovation', desc: 'Passionate about research, obsessed with execution.', color: 'text-orange-400', bg: 'bg-orange-500/10' },
  { icon: ShieldCheck, title: 'Integrity in Data', desc: 'Technical precision and ethical care in every dataset.', color: 'text-pink-400', bg: 'bg-pink-500/10' }
]

const processSteps = [
  { id: 1, title: 'Discovery & Research', desc: 'Deep-dive interviews and UX audits to uncover the "why" before the "how".', color: 'bg-computeeka-500' },
  { id: 2, title: 'Data-Driven Strategy', desc: 'Analyzing behavioral patterns and market validation to map the optimal path forward.', color: 'bg-computeeka-accent' },
  { id: 3, title: 'Lean Engineering', desc: 'Building high-performance MVPs and scalable apps using modern, agile frameworks.', color: 'bg-purple-500' },
  { id: 4, title: 'Continuous Optimization', desc: 'Using feedback loops and A/B testing to ensure long-term success and scalability.', color: 'bg-emerald-500' }
]
</script>

<template>
  <div class="bg-computeeka-900 text-slate-200 font-sans antialiased overflow-x-hidden">
    
    <!-- Hero Section -->
    <section class="relative min-h-[45vh] hero-bg flex items-center pt-12 sm:pt-16 pb-6 sm:pb-8">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div class="max-w-3xl">
          <span class="text-computeeka-400 font-semibold text-xs sm:text-sm uppercase tracking-wider">Our Story</span>
          <h1 class="mt-2 sm:mt-3 font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
            Where Engineering Meets <span class="gradient-text">Evidence</span>
          </h1>
          <p class="mt-3 sm:mt-4 text-sm sm:text-base lg:text-lg text-slate-400 leading-relaxed">
            We don't just build digital tools; we craft intelligent systems. Discover the story of a consultancy born from the intersection of software engineering, data analytics, and user experience research.
          </p>
        </div>
      </div>
    </section>

    <!-- Founder's Vision Section -->
    <section class="py-6 sm:py-8 lg:py-10 bg-computeeka-800">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          
          <div class="relative">
            <div class="aspect-[4/5] max-w-sm mx-lg:max-w-none rounded-2xl overflow-hidden border border-slate-700/50 shadow-2xl bg-slate-900">
              <img 
                src="/images/Kelvin_Founder.jpeg" 
                alt="Kelvin Elly - Founder" 
                class="w-full h-full object-cover object-top"
              >
            </div>

            <div class="absolute -bottom-4 right-0 sm:-right-4 glass-card rounded-xl p-4 sm:p-5 max-w-xs shadow-2xl z-10">
              <p class="text-computeeka-300 font-display text-xs sm:text-sm font-semibold italic">
                "The most powerful solutions are those grounded in data and validated by real human behavior."
              </p>
              <p class="text-slate-400 text-xs mt-2">— Kelvin Elly, Founder</p>
            </div>
          </div>

          <div class="space-y-4 mt-6 lg:mt-0">
            <span class="text-computeeka-400 font-semibold text-xs sm:text-sm uppercase tracking-wider">The Founder's Vision</span>
            <h2 class="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-white">From Code to Impact</h2>
            <p class="text-slate-400 text-xs sm:text-sm leading-relaxed">
              Computeeka Agencies was founded by <strong class="text-white">Kelvin Elly</strong>, a Software Engineer and Data Analyst with a mission to eliminate the gap between technical execution and user reality.
            </p>
            <p class="text-slate-400 text-xs sm:text-sm leading-relaxed">
              After building deep technical competence at the <strong class="text-white">University of Eastern Africa, Baraton</strong>, Kelvin recognized a critical flaw in traditional tech development: products were frequently built with high-level code but low-level empathy.
            </p>
            <p class="text-slate-400 text-xs sm:text-sm leading-relaxed">
              From optimizing local digital tools to driving impactful research, Computeeka bridges this gap through a multidisciplinary approach combining engineering, data, and design.
            </p>
          </div>

        </div>
      </div>
    </section>

    <!-- Mission & Vision Section -->
    <section class="py-6 sm:py-8 lg:py-10 bg-computeeka-900 relative overflow-hidden">
      <div class="absolute inset-0 pointer-events-none">
        <div class="absolute top-1/4 left-0 w-72 h-72 sm:w-96 sm:h-96 bg-computeeka-500/5 rounded-full blur-3xl"></div>
        <div class="absolute bottom-1/4 right-0 w-72 h-72 sm:w-96 sm:h-96 bg-computeeka-accent/5 rounded-full blur-3xl"></div>
      </div>
      <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid md:grid-cols-2 gap-6">
          <div class="glass-card rounded-2xl p-6 sm:p-8 md:p-10 group hover:border-computeeka-500/30 transition-all text-center sm:text-left flex flex-col items-center sm:items-start">
            <div class="w-12 h-12 rounded-xl bg-computeeka-500/10 flex items-center justify-center mb-4">
              <Target class="w-6 h-6 text-computeeka-400" />
            </div>
            <h3 class="font-display text-xl sm:text-2xl font-bold text-white mb-2 sm:mb-3">Our Mission</h3>
            <p class="text-slate-400 text-xs sm:text-sm lg:text-base leading-relaxed">
              To empower organizations and growing businesses to build digital products that truly serve people by leading with empathy, evidence, and robust technical execution.
            </p>
          </div>
          <div class="glass-card rounded-2xl p-6 sm:p-8 md:p-10 group hover:border-computeeka-accent/30 transition-all text-center sm:text-left flex flex-col items-center sm:items-start">
            <div class="w-12 h-12 rounded-xl bg-computeeka-accent/10 flex items-center justify-center mb-4">
              <Telescope class="w-6 h-6 text-computeeka-accent" />
            </div>
            <h3 class="font-display text-xl sm:text-2xl font-bold text-white mb-2 sm:mb-3">Our Vision</h3>
            <p class="text-slate-400 text-xs sm:text-sm lg:text-base leading-relaxed">
              To be a leading catalyst for digital transformation, where every technical innovation is intelligent, scalable, and deeply human-centered.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Core Values Section -->
    <section class="py-6 sm:py-8 lg:py-10 bg-computeeka-800">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-6 sm:mb-8">
          <span class="text-computeeka-400 font-semibold text-xs sm:text-sm uppercase tracking-wider">What We Stand For</span>
          <h2 class="mt-1 font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-white">The 5 Pillars of Our Philosophy</h2>
        </div>
        <div class="grid sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-6">
          <div v-for="value in coreValues" :key="value.title" class="glass-card rounded-2xl p-5 sm:p-6 text-center hover:border-computeeka-500/30 transition-all flex flex-col items-center justify-between">
            <div>
              <div :class="['w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-3 sm:mb-4', value.bg]">
                <component :is="value.icon" :class="['w-6 h-6', value.color]" />
              </div>
              <h3 class="font-display text-base sm:text-lg font-bold text-white mb-2">{{ value.title }}</h3>
            </div>
            <p class="text-xs sm:text-sm text-slate-400">{{ value.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Approach Section -->
    <section class="py-6 sm:py-8 lg:py-10 bg-computeeka-900">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-6 sm:mb-8">
          <span class="text-computeeka-400 font-semibold text-xs sm:text-sm uppercase tracking-wider">How We Work</span>
          <h2 class="mt-1 font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-white">Our Approach: The 4-Phase Process</h2>
        </div>
        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          <div v-for="step in processSteps" :key="step.id" class="glass-card rounded-2xl p-5 sm:p-6 h-full border border-slate-700/30 flex flex-col justify-between">
            <div>
              <div :class="['w-10 h-10 sm:w-12 sm:h-12 rounded-full text-white flex items-center justify-center font-display font-bold text-lg sm:text-xl mb-3 sm:mb-4 shadow-lg', step.color]">
                {{ step.id }}
              </div>
              <h3 class="font-display text-base sm:text-lg font-bold text-white mb-2">{{ step.title }}</h3>
            </div>
            <p class="text-slate-400 text-xs sm:text-sm leading-relaxed">{{ step.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Milestones Section -->
    <section class="py-6 sm:py-8 lg:py-10 bg-computeeka-800">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-6 sm:mb-8">
          <span class="text-computeeka-400 font-semibold text-xs sm:text-sm uppercase tracking-wider">Our Journey</span>
          <h2 class="mt-1 font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-white">Milestones of Excellence</h2>
        </div>
        <div class="relative">
          <div class="absolute left-6 sm:left-8 top-0 bottom-0 w-0.5 timeline-line"></div>
          <div class="space-y-6 sm:space-y-8">
            <div class="relative flex gap-6 sm:gap-8 items-start">
              <div class="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-computeeka-500 flex items-center justify-center flex-shrink-0 z-10 shadow-lg">
                <GraduationCap class="w-6 h-6 sm:w-8 sm:h-8 text-white" />
              </div>
              <div class="glass-card rounded-xl p-5 sm:p-6 flex-1">
                <span class="text-computeeka-400 font-semibold text-xs sm:text-sm">Foundational Years</span>
                <h3 class="font-display text-base sm:text-lg font-bold text-white mt-1">Rigorous Academic & Technical Training</h3>
                <p class="text-slate-400 text-xs sm:text-sm mt-2">Deep foundational education in Software Engineering and quantitative data analysis methodologies.</p>
              </div>
            </div>
            <div class="relative flex gap-6 sm:gap-8 items-start">
              <div class="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-computeeka-accent flex items-center justify-center flex-shrink-0 z-10 shadow-lg">
                <Rocket class="w-6 h-6 sm:w-8 sm:h-8 text-white" />
              </div>
              <div class="glass-card rounded-xl p-5 sm:p-6 flex-1">
                <span class="text-computeeka-accent font-semibold text-xs sm:text-sm">Current Era</span>
                <h3 class="font-display text-base sm:text-lg font-bold text-white mt-1">Impact in Action & Digital Execution</h3>
                <p class="text-slate-400 text-xs sm:text-sm mt-2">Delivering operational software systems, responsive web architectures, and quantitative research insights for clients.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Bottom Call to Action -->
    <section class="py-8 sm:py-10 lg:py-12 bg-computeeka-900">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 class="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-2 sm:mb-3">Work With a Partner Who Understands the Full Picture</h2>
        <p class="text-slate-400 text-xs sm:text-sm lg:text-base mb-5 max-w-xl mx-auto">Let’s combine technical precision and user empathy to build your next product.</p>
        <NuxtLink to="/contact" class="inline-flex items-center gap-2 px-6 sm:px-8 py-3 bg-computeeka-500 hover:bg-computeeka-400 text-white font-semibold rounded-xl transition-all shadow-lg hover:shadow-computeeka-500/25 text-xs sm:text-sm">
          <span>Start a Project</span>
          <ArrowRight class="w-4 h-4 sm:w-5 sm:h-5" />
        </NuxtLink>
      </div>
    </section>

  </div>
</template>

<style scoped>
.font-display {
  font-family: 'Space Grotesk', sans-serif;
}

.gradient-text {
  background: linear-gradient(135deg, #0ea5e9 0%, #06b6d4 50%, #22d3ee 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.glass-card {
  background: rgba(30, 41, 59, 0.6);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(148, 163, 184, 0.1);
}

.hero-bg {
  background: radial-gradient(ellipse at top, #1e3a5f 0%, #0a0f1c 50%, #0a0f1c 100%);
}

.timeline-line {
  background: linear-gradient(180deg, #0ea5e9 0%, #06b6d4 100%);
}
</style>
