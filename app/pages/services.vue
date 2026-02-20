<script setup lang="ts">
import { 
  Search, 
  BarChart3, 
  Code2, 
  GitMerge, 
  Users, 
  Check, 
  PieChart, 
  Rocket, 
  Smartphone, 
  Plug, 
  GraduationCap, 
  BookOpen, 
  BarChart2, 
  Award, 
  Download, 
  Calendar 
} from 'lucide-vue-next'

useHead({
  title: 'Services | Computeeka Agencies',
})
</script>

<template>
  <div class="bg-computeeka-900 text-slate-200 font-sans antialiased">
    <section class="relative min-h-[60vh] hero-bg flex items-center pt-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div class="max-w-3xl">
          <span class="text-computeeka-400 font-semibold text-sm uppercase tracking-wider">Our Expertise</span>
          <h1 class="mt-4 font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
            Engineering Certainty through <span class="gradient-text">Data and Design</span>
          </h1>
          <p class="mt-6 text-lg sm:text-xl text-slate-400 leading-relaxed">
            We move beyond guesswork. Computeeka provides a tiered suite of UX, Data, and Engineering services designed to validate your ideas, optimize your systems, and scale your impact.
          </p>
        </div>
      </div>
    </section>

    <section class="py-16 bg-computeeka-800">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="glass-card rounded-2xl p-8 md:p-12">
          <div class="grid md:grid-cols-3 gap-8 text-center">
            <div class="relative">
              <div class="w-20 h-20 rounded-2xl bg-purple-500/10 flex items-center justify-center mx-auto mb-4">
                <Search class="w-10 h-10 text-purple-400" />
              </div>
              <h3 class="font-display text-xl font-bold text-white mb-2">Research</h3>
              <p class="text-slate-400 text-sm">Evidence & Discovery</p>
            </div>
            <div class="relative">
              <div class="w-20 h-20 rounded-2xl bg-emerald-500/10 flex items-center justify-center mx-auto mb-4">
                <BarChart3 class="w-10 h-10 text-emerald-400" />
              </div>
              <h3 class="font-display text-xl font-bold text-white mb-2">Data</h3>
              <p class="text-slate-400 text-sm">Analytics & Insights</p>
            </div>
            <div class="relative">
              <div class="w-20 h-20 rounded-2xl bg-orange-500/10 flex items-center justify-center mx-auto mb-4">
                <Code2 class="w-10 h-10 text-orange-400" />
              </div>
              <h3 class="font-display text-xl font-bold text-white mb-2">Engineering</h3>
              <p class="text-slate-400 text-sm">Build & Scale</p>
            </div>
          </div>
          <div class="hidden md:block relative h-4 mt-8">
            <div class="absolute left-1/6 right-1/6 top-1/2 h-0.5 bg-gradient-to-r from-purple-500/30 via-computeeka-500/30 to-orange-500/30"></div>
          </div>
          <div class="text-center mt-8">
            <div class="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-computeeka-500/10 border border-computeeka-500/20">
              <GitMerge class="w-5 h-5 text-computeeka-400" />
              <span class="text-computeeka-300 font-medium">Where All Three Intersect: Multidisciplinary Excellence</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="py-24 bg-computeeka-900">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="mb-12">
          <div class="flex items-center gap-3 mb-4">
            <div class="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center">
              <Users class="w-6 h-6 text-purple-400" />
            </div>
            <div>
              <span class="text-purple-400 font-semibold text-sm uppercase tracking-wider">Core Category A</span>
              <h2 class="font-display text-3xl font-bold text-white">UX Consulting Services</h2>
            </div>
          </div>
          <p class="text-slate-400 text-lg max-w-2xl">We help you build products that are intuitive, accessible, and user-validated.</p>
        </div>
        
        <div class="grid md:grid-cols-3 gap-6">
          <div class="service-tier glass-card rounded-2xl p-6 border-t-4 border-purple-500">
            <div class="flex items-center gap-3 mb-4">
              <span class="px-3 py-1 rounded-full bg-purple-500/10 text-purple-400 text-xs font-semibold">TIER 1</span>
            </div>
            <h3 class="font-display text-xl font-bold text-white mb-4">UX Research</h3>
            <p class="text-slate-400 text-sm mb-6">Foundational Insights</p>
            <ul class="space-y-3">
              <li v-for="item in ['User Interviews', 'Usability Testing', 'Journey Mapping', 'UX Audits', 'Accessibility Audits', 'Survey Design', 'Continuous Feedback Loops']" :key="item" class="flex items-center gap-2 text-slate-300 text-sm">
                <Check class="w-4 h-4 text-purple-400" />
                {{ item }}
              </li>
            </ul>
          </div>
          <div class="service-tier glass-card rounded-2xl p-6 border-t-4 border-purple-400">
            <div class="flex items-center gap-3 mb-4">
              <span class="px-3 py-1 rounded-full bg-purple-400/10 text-purple-300 text-xs font-semibold">TIER 2</span>
            </div>
            <h3 class="font-display text-xl font-bold text-white mb-4">UX Strategy</h3>
            <p class="text-slate-400 text-sm mb-6">Product Roadmap</p>
            <ul class="space-y-3">
              <li v-for="item in ['Product Discovery', 'Feature Prioritization', 'Personas & Scenarios', 'MVP Scoping', 'Design Sprints', 'UX Writing']" :key="item" class="flex items-center gap-2 text-slate-300 text-sm">
                <Check class="w-4 h-4 text-purple-400" />
                {{ item }}
              </li>
            </ul>
          </div>
          <div class="service-tier glass-card rounded-2xl p-6 border-t-4 border-purple-300">
            <div class="flex items-center gap-3 mb-4">
              <span class="px-3 py-1 rounded-full bg-purple-300/10 text-purple-200 text-xs font-semibold">TIER 3</span>
            </div>
            <h3 class="font-display text-xl font-bold text-white mb-4">UX Design & Testing</h3>
            <p class="text-slate-400 text-sm mb-6">Iterative Execution</p>
            <ul class="space-y-3">
              <li v-for="item in ['Wireframing', 'Prototyping', 'Interface Redesign', 'A/B Testing', 'Heuristic Evaluation']" :key="item" class="flex items-center gap-2 text-slate-300 text-sm">
                <Check class="w-4 h-4 text-purple-400" />
                {{ item }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <section class="py-24 bg-computeeka-800">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="mb-12">
          <div class="flex items-center gap-3 mb-4">
            <div class="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center">
              <PieChart class="w-6 h-6 text-emerald-400" />
            </div>
            <div>
              <span class="text-emerald-400 font-semibold text-sm uppercase tracking-wider">Core Category B</span>
              <h2 class="font-display text-3xl font-bold text-white">Data Services</h2>
            </div>
          </div>
          <p class="text-slate-400 text-lg max-w-2xl">Transform raw data into actionable business intelligence to optimize every digital experience.</p>
        </div>
        
        <div class="grid md:grid-cols-2 gap-6">
          <div class="service-tier glass-card rounded-2xl p-6 border-t-4 border-emerald-500">
            <div class="flex items-center gap-3 mb-4">
              <span class="px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-semibold">TIER 1</span>
            </div>
            <h3 class="font-display text-xl font-bold text-white mb-4">Analytics & Visualization</h3>
            <ul class="space-y-3">
              <li v-for="item in ['Custom Dashboard Design', 'KPI Tracking', 'Data Visualization']" :key="item" class="flex items-center gap-2 text-slate-300 text-sm">
                <Check class="w-4 h-4 text-emerald-400" />
                {{ item }}
              </li>
            </ul>
          </div>
          <div class="service-tier glass-card rounded-2xl p-6 border-t-4 border-emerald-400">
            <div class="flex items-center gap-3 mb-4">
              <span class="px-3 py-1 rounded-full bg-emerald-400/10 text-emerald-300 text-xs font-semibold">TIER 2</span>
            </div>
            <h3 class="font-display text-xl font-bold text-white mb-4">Insights & Validation</h3>
            <ul class="space-y-3">
              <li v-for="item in ['Behavioral Analytics', 'Funnel Analysis', 'Market Validation', 'Survey Deployment', 'Feedback Analysis']" :key="item" class="flex items-center gap-2 text-slate-300 text-sm">
                <Check class="w-4 h-4 text-emerald-400" />
                {{ item }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <section class="py-24 bg-computeeka-900">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="mb-12">
          <div class="flex items-center gap-3 mb-4">
            <div class="w-12 h-12 rounded-xl bg-orange-500/10 flex items-center justify-center">
              <Code2 class="w-6 h-6 text-orange-400" />
            </div>
            <div>
              <span class="text-orange-400 font-semibold text-sm uppercase tracking-wider">Core Category C</span>
              <h2 class="font-display text-3xl font-bold text-white">Data-Driven Software Development</h2>
            </div>
          </div>
          <p class="text-slate-400 text-lg max-w-2xl">Lean development tailored for early-stage products, grounded in research and validated through user interaction.</p>
        </div>
        
        <div class="grid md:grid-cols-3 gap-6">
          <div class="service-tier glass-card rounded-2xl p-6">
            <div class="w-12 h-12 rounded-xl bg-orange-500/10 flex items-center justify-center mb-4">
              <Rocket class="w-6 h-6 text-orange-400" />
            </div>
            <h3 class="font-display text-lg font-bold text-white mb-3">MVP Development</h3>
            <p class="text-slate-400 text-sm">Rapid, high-quality builds for market entry.</p>
          </div>
          <div class="service-tier glass-card rounded-2xl p-6">
            <div class="w-12 h-12 rounded-xl bg-orange-400/10 flex items-center justify-center mb-4">
              <Smartphone class="w-6 h-6 text-orange-300" />
            </div>
            <h3 class="font-display text-lg font-bold text-white mb-3">Web & Mobile Apps</h3>
            <p class="text-slate-400 text-sm">Scalable, responsive platforms built with modern stacks like Nuxt.js and Vue.js.</p>
          </div>
          <div class="service-tier glass-card rounded-2xl p-6">
            <div class="w-12 h-12 rounded-xl bg-orange-300/10 flex items-center justify-center mb-4">
              <Plug class="w-6 h-6 text-orange-200" />
            </div>
            <h3 class="font-display text-lg font-bold text-white mb-3">Technical Ecosystem</h3>
            <p class="text-slate-400 text-sm">API Integration, Frontend Prototyping, and Technical Audits to ensure system health.</p>
          </div>
        </div>
      </div>
    </section>

    <section class="py-24 bg-computeeka-800">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="mb-12">
          <div class="flex items-center gap-3 mb-4">
            <div class="w-12 h-12 rounded-xl bg-pink-500/10 flex items-center justify-center">
              <GraduationCap class="w-6 h-6 text-pink-400" />
            </div>
            <div>
              <span class="text-pink-400 font-semibold text-sm uppercase tracking-wider">Core Category D</span>
              <h2 class="font-display text-3xl font-bold text-white">Training & Capacity Building</h2>
            </div>
          </div>
          <p class="text-slate-400 text-lg max-w-2xl">Empowering your internal teams with the skills to maintain a user-centric and data-driven culture.</p>
        </div>
        
        <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div class="glass-card rounded-2xl p-6">
            <BookOpen class="w-8 h-8 text-pink-400 mb-4" />
            <h3 class="font-display text-lg font-bold text-white mb-2">UX Design & Research Bootcamps</h3>
          </div>
          <div class="glass-card rounded-2xl p-6">
            <BarChart2 class="w-8 h-8 text-pink-400 mb-4" />
            <h3 class="font-display text-lg font-bold text-white mb-2">Data Analytics for Decision Makers</h3>
          </div>
          <div class="glass-card rounded-2xl p-6">
            <Users class="w-8 h-8 text-pink-400 mb-4" />
            <h3 class="font-display text-lg font-bold text-white mb-2">Agile Product Management Workshops</h3>
          </div>
          <div class="glass-card rounded-2xl p-6">
            <Award class="w-8 h-8 text-pink-400 mb-4" />
            <h3 class="font-display text-lg font-bold text-white mb-2">Professional Mentorship & Certifications</h3>
          </div>
        </div>
      </div>
    </section>

    <section class="py-24 bg-computeeka-900">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <span class="text-computeeka-400 font-semibold text-sm uppercase tracking-wider">Scaled to Your Needs</span>
          <h2 class="mt-4 font-display text-3xl sm:text-4xl font-bold text-white">Service Packages</h2>
        </div>
        <div class="grid md:grid-cols-3 gap-8">
          <div class="glass-card rounded-2xl p-8 relative">
            <div class="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-slate-600 to-slate-500 rounded-t-2xl"></div>
            <div class="mb-6">
              <h3 class="font-display text-2xl font-bold text-white mb-2">Starter</h3>
              <p class="text-computeeka-400 font-semibold">The Validator</p>
            </div>
            <p class="text-slate-400 mb-6">Perfect for early-stage startups needing a clear roadmap.</p>
            <ul class="space-y-3 mb-8">
              <li v-for="item in ['UX Audits', 'MVP Scoping', 'User Research']" :key="item" class="flex items-center gap-2 text-slate-300 text-sm">
                <Check class="w-4 h-4 text-computeeka-400" />
                {{ item }}
              </li>
            </ul>
            <NuxtLink to="/contact" class="block w-full text-center px-6 py-3 border border-slate-600 hover:border-computeeka-400 text-white font-semibold rounded-lg transition-all hover:bg-computeeka-500/10">
              Get Started
            </NuxtLink>
          </div>
          <div class="glass-card rounded-2xl p-8 relative transform md:-translate-y-4">
            <div class="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-computeeka-500 to-computeeka-accent rounded-t-2xl"></div>
            <div class="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-computeeka-500 text-white text-xs font-semibold rounded-full">POPULAR</div>
            <div class="mb-6">
              <h3 class="font-display text-2xl font-bold text-white mb-2">Growth</h3>
              <p class="text-computeeka-400 font-semibold">The Optimizer</p>
            </div>
            <p class="text-slate-400 mb-6">Designed for scaling platforms ready to optimize.</p>
            <ul class="space-y-3 mb-8">
              <li v-for="item in ['Behavioral Analytics', 'Dashboard Design', 'Interface Redesigns', 'A/B Testing']" :key="item" class="flex items-center gap-2 text-slate-300 text-sm">
                <Check class="w-4 h-4 text-computeeka-400" />
                {{ item }}
              </li>
            </ul>
            <NuxtLink to="/contact" class="block w-full text-center px-6 py-3 bg-computeeka-500 hover:bg-computeeka-400 text-white font-semibold rounded-lg transition-all hover:shadow-lg hover:shadow-computeeka-500/25">
              Get Started
            </NuxtLink>
          </div>
          <div class="glass-card rounded-2xl p-8 relative">
            <div class="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-t-2xl"></div>
            <div class="mb-6">
              <h3 class="font-display text-2xl font-bold text-white mb-2">Enterprise</h3>
              <p class="text-computeeka-400 font-semibold">The Full-Stack Partner</p>
            </div>
            <p class="text-slate-400 mb-6">Comprehensive multidisciplinary support for large organizations.</p>
            <ul class="space-y-3 mb-8">
              <li v-for="item in ['Deep Research Labs', 'Custom Software Engineering', 'Team Training', 'Dedicated Support']" :key="item" class="flex items-center gap-2 text-slate-300 text-sm">
                <Check class="w-4 h-4 text-computeeka-400" />
                {{ item }}
              </li>
            </ul>
            <NuxtLink to="/contact" class="block w-full text-center px-6 py-3 border border-slate-600 hover:border-computeeka-400 text-white font-semibold rounded-lg transition-all hover:bg-computeeka-500/10">
              Contact Us
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <section class="py-24 bg-computeeka-800">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 class="font-display text-3xl sm:text-4xl font-bold text-white mb-4">Ready to Deploy Multidisciplinary Excellence?</h2>
        <p class="text-slate-400 text-lg mb-8">Select the tier that fits your current challenge, or let us build a custom strategy for your organization.</p>
        <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="#" class="inline-flex items-center gap-2 px-8 py-4 bg-computeeka-500 hover:bg-computeeka-400 text-white font-semibold rounded-xl transition-all hover:shadow-xl hover:shadow-computeeka-500/25">
            <Download class="w-5 h-5" />
            <span>Download Service Brochure</span>
          </a>
          <NuxtLink to="/contact" class="inline-flex items-center gap-2 px-8 py-4 border-2 border-slate-600 hover:border-computeeka-400 text-white font-semibold rounded-xl transition-all hover:bg-computeeka-500/10">
            <Calendar class="w-5 h-5" />
            <span>Schedule a Technical Briefing</span>
          </NuxtLink>
        </div>
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

.service-tier {
  transition: all 0.3s ease;
}

.service-tier:hover {
  transform: translateY(-4px);
}

/* Ensure intersection line positioning works */
.left-1\/6 {
  left: 16.666667%;
}
.right-1\/6 {
  right: 16.666667%;
}
</style>
