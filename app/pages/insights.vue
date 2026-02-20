<script setup lang="ts">
import { 
  FileText, 
  ArrowRight, 
  Users, 
  BarChart3, 
  Code2, 
  ClipboardCheck, 
  LayoutDashboard, 
  Map, 
  Linkedin, 
  Mail 
} from 'lucide-vue-next'

useHead({
  title: 'Insights | Computeeka Agencies',
})
</script>

<template>
  <div class="bg-computeeka-900 text-slate-200 font-sans antialiased">
    <section class="relative min-h-[60vh] hero-bg flex items-center pt-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div class="grid lg:grid-cols-5 gap-12 items-center">
          <div class="lg:col-span-3">
            <span class="text-computeeka-400 font-semibold text-sm uppercase tracking-wider">Authority Hub</span>
            <h1 class="mt-4 font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Thinking Forward.<br>
              <span class="gradient-text">Building Smarter.</span>
            </h1>
            <p class="mt-6 text-lg sm:text-xl text-slate-400 leading-relaxed">
              Explore our deep dives into UX research, data science, and the future of digital innovation in Africa. We share the evidence behind our execution.
            </p>
          </div>
          <div class="lg:col-span-2">
            <div class="glass-card rounded-2xl overflow-hidden">
              <div class="h-48 bg-gradient-to-br from-computeeka-500/20 to-computeeka-accent/20 flex items-center justify-center">
                <FileText class="w-16 h-16 text-computeeka-400" />
              </div>
              <div class="p-6">
                <span class="text-computeeka-400 text-xs font-semibold uppercase tracking-wider">Featured Case Study</span>
                <h3 class="font-display text-xl font-bold text-white mt-2 mb-3">Impact Report: How Research Influenced National Healthcare Strategy</h3>
                <p class="text-slate-400 text-sm mb-4">A detailed look at the Dental IQ study conducted with KMTC that led the Ministry of Health to launch a new dental health program in 2025.</p>
                <a href="#" class="inline-flex items-center gap-2 text-computeeka-400 hover:text-computeeka-300 font-semibold text-sm transition-colors">
                  <span>Read Case Study</span>
                  <ArrowRight class="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="py-24 bg-computeeka-800">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <span class="text-computeeka-400 font-semibold text-sm uppercase tracking-wider">Knowledge Base</span>
          <h2 class="mt-4 font-display text-3xl sm:text-4xl font-bold text-white">Explore by Category</h2>
        </div>
        <div class="grid md:grid-cols-3 gap-8">
          <div class="space-y-6">
            <div class="flex items-center gap-3 mb-4">
              <div class="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center">
                <Users class="w-6 h-6 text-purple-400" />
              </div>
              <h3 class="font-display text-xl font-bold text-white">UX & Human-Centered Design</h3>
            </div>
            <div class="glass-card rounded-xl p-6 hover:border-purple-500/30 transition-all cursor-pointer">
              <h4 class="font-semibold text-white mb-2">Beyond Aesthetics: Why UX Research is the Foundation of ROI</h4>
              <p class="text-slate-400 text-sm">Discover how evidence-based design decisions drive measurable business outcomes.</p>
            </div>
            <div class="glass-card rounded-xl p-6 hover:border-purple-500/30 transition-all cursor-pointer">
              <h4 class="font-semibold text-white mb-2">Accessibility Audits: Making the Digital World Inclusive for All Kenyans</h4>
              <p class="text-slate-400 text-sm">Practical guidance on building products that serve everyone, regardless of ability.</p>
            </div>
          </div>
          <div class="space-y-6">
            <div class="flex items-center gap-3 mb-4">
              <div class="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center">
                <BarChart3 class="w-6 h-6 text-emerald-400" />
              </div>
              <h3 class="font-display text-xl font-bold text-white">Data Science & Analytics</h3>
            </div>
            <div class="glass-card rounded-xl p-6 hover:border-emerald-500/30 transition-all cursor-pointer">
              <h4 class="font-semibold text-white mb-2">From Raw Data to 40% Efficiency: Lessons from the Nganya App</h4>
              <p class="text-slate-400 text-sm">How we transformed fleet management through intelligent dashboard design.</p>
            </div>
            <div class="glass-card rounded-xl p-6 hover:border-emerald-500/30 transition-all cursor-pointer">
              <h4 class="font-semibold text-white mb-2">Predictive Insights: How Small Businesses Can Leverage SPSS for Growth</h4>
              <p class="text-slate-400 text-sm">Democratizing data science tools for Kenyan entrepreneurs and SMEs.</p>
            </div>
          </div>
          <div class="space-y-6">
            <div class="flex items-center gap-3 mb-4">
              <div class="w-12 h-12 rounded-xl bg-orange-500/10 flex items-center justify-center">
                <Code2 class="w-6 h-6 text-orange-400" />
              </div>
              <h3 class="font-display text-xl font-bold text-white">Lean Engineering</h3>
            </div>
            <div class="glass-card rounded-xl p-6 hover:border-orange-500/30 transition-all cursor-pointer">
              <h4 class="font-semibold text-white mb-2">Building Scalable MVPs: Why We Choose the Nuxt.js & Supabase Stack</h4>
              <p class="text-slate-400 text-sm">Technical deep-dive into our preferred architecture for rapid, reliable development.</p>
            </div>
            <div class="glass-card rounded-xl p-6 hover:border-orange-500/30 transition-all cursor-pointer">
              <h4 class="font-semibold text-white mb-2">Agile In Action: Using Azure DevOps to Reduce Project Timelines</h4>
              <p class="text-slate-400 text-sm">How modern project management tools accelerate delivery without sacrificing quality.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="py-24 bg-computeeka-900">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <span class="text-computeeka-400 font-semibold text-sm uppercase tracking-wider">Free Resources</span>
          <h2 class="mt-4 font-display text-3xl sm:text-4xl font-bold text-white">The Digital Library</h2>
          <p class="mt-4 text-slate-400 max-w-2xl mx-auto">Download our professional tools and templates to elevate your digital practice.</p>
        </div>
        <div class="grid md:grid-cols-3 gap-6">
          <div class="glass-card rounded-2xl p-6 text-center hover:border-computeeka-500/30 transition-all">
            <div class="w-16 h-16 rounded-2xl bg-computeeka-500/10 flex items-center justify-center mx-auto mb-4">
              <ClipboardCheck class="w-8 h-8 text-computeeka-400" />
            </div>
            <h3 class="font-display text-lg font-bold text-white mb-2">The UX Audit Checklist</h3>
            <p class="text-slate-400 text-sm mb-4">A 20-point guide to evaluating your product's usability today.</p>
            <button class="px-4 py-2 bg-computeeka-500/10 hover:bg-computeeka-500/20 text-computeeka-400 font-semibold rounded-lg transition-colors text-sm">
              Download for Free
            </button>
          </div>
          <div class="glass-card rounded-2xl p-6 text-center hover:border-computeeka-500/30 transition-all">
            <div class="w-16 h-16 rounded-2xl bg-computeeka-accent/10 flex items-center justify-center mx-auto mb-4">
              <LayoutDashboard class="w-8 h-8 text-computeeka-accent" />
            </div>
            <h3 class="font-display text-lg font-bold text-white mb-2">Data Visualization Template</h3>
            <p class="text-slate-400 text-sm mb-4">A professional dashboard layout guide for Excel and PowerBI users.</p>
            <button class="px-4 py-2 bg-computeeka-accent/10 hover:bg-computeeka-accent/20 text-computeeka-accent font-semibold rounded-lg transition-colors text-sm">
              Download for Free
            </button>
          </div>
          <div class="glass-card rounded-2xl p-6 text-center hover:border-computeeka-500/30 transition-all">
            <div class="w-16 h-16 rounded-2xl bg-purple-500/10 flex items-center justify-center mx-auto mb-4">
              <Map class="w-8 h-8 text-purple-400" />
            </div>
            <h3 class="font-display text-lg font-bold text-white mb-2">The MVP Roadmap</h3>
            <p class="text-slate-400 text-sm mb-4">A strategic template for founders looking to move from idea to execution.</p>
            <button class="px-4 py-2 bg-purple-500/10 hover:bg-purple-500/20 text-purple-400 font-semibold rounded-lg transition-colors text-sm">
              Download for Free
            </button>
          </div>
        </div>
      </div>
    </section>

    <section class="py-24 bg-computeeka-800">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="glass-card rounded-2xl p-8 md:p-12 relative overflow-hidden">
          <div class="absolute top-0 right-0 w-64 h-64 bg-computeeka-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          <div class="relative">
            <div class="flex items-center gap-4 mb-6">
              <div class="w-16 h-16 rounded-full overflow-hidden">
                <img src="http://static.photos/professional/200x200/42" alt="Kelvin Elly" class="w-full h-full object-cover">
              </div>
              <div>
                <h3 class="font-display text-xl font-bold text-white">A Note from Kelvin Elly</h3>
                <p class="text-computeeka-400 text-sm">Founder, Computeeka Agencies</p>
              </div>
            </div>
            <blockquote class="text-xl text-slate-300 italic leading-relaxed mb-6">
              "In an era of rapid digital noise, Computeeka stands for precision. We believe that the best software isn't just fast—it's right. It's validated. It's human."
            </blockquote>
            <a href="#" class="inline-flex items-center gap-2 text-computeeka-400 hover:text-computeeka-300 font-semibold transition-colors">
              <Linkedin class="w-5 h-5" />
              <span>Follow Kelvin on LinkedIn</span>
            </a>
          </div>
        </div>
      </div>
    </section>

    <section class="py-24 bg-computeeka-900">
      <div class="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div class="w-16 h-16 rounded-2xl bg-computeeka-500/10 flex items-center justify-center mx-auto mb-6">
          <Mail class="w-8 h-8 text-computeeka-400" />
        </div>
        <h2 class="font-display text-3xl font-bold text-white mb-4">Join the Multidisciplinary Revolution</h2>
        <p class="text-slate-400 mb-8">Get monthly insights on UX trends, data breakthroughs, and engineering best practices delivered straight to your inbox.</p>
        <form @submit.prevent class="flex flex-col sm:flex-row gap-4">
          <input type="email" placeholder="Enter your email address" class="flex-1 px-6 py-4 bg-computeeka-800 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-computeeka-500 transition-colors">
          <button type="submit" class="px-8 py-4 bg-computeeka-500 hover:bg-computeeka-400 text-white font-semibold rounded-xl transition-all hover:shadow-lg hover:shadow-computeeka-500/25">
            Subscribe
          </button>
        </form>
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
</style>
