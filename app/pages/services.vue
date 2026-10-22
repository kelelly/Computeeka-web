<script setup lang="ts">
import { 
  Globe, 
  MapPin, 
  MessageSquare, 
  ShieldCheck, 
  BarChart3, 
  FileSpreadsheet, 
  Smartphone, 
  FolderSearch, 
  Mail, 
  Boxes, 
  Check, 
  ArrowRight, 
  Calendar 
} from 'lucide-vue-next'

useHead({
  title: 'Services | Computeeka Agencies',
})

const servicesList = [
  {
    icon: Globe,
    title: '1. Business Websites',
    description: 'Building clean, fast web pages so people can easily find your business and services on their phones.',
    color: 'text-purple-400',
    bgColor: 'bg-purple-500/10'
  },
  {
    icon: MapPin,
    title: '2. Google & Map Listings',
    description: 'Setting up your business properly on Google Maps so local customers can call, find, or message you directly.',
    color: 'text-emerald-400',
    bgColor: 'bg-emerald-500/10'
  },
  {
    icon: MessageSquare,
    title: '3. Online Booking & WhatsApp Integration',
    description: 'Adding simple buttons to your site that let customers book appointments or chat with you instantly on WhatsApp.',
    color: 'text-orange-400',
    bgColor: 'bg-orange-500/10'
  },
  {
    icon: ShieldCheck,
    title: '4. Business Hosting & Maintenance',
    description: 'Keeping your website safe, secure, and online every day without any downtime or technical stress.',
    color: 'text-sky-400',
    bgColor: 'bg-sky-500/10'
  },
  {
    icon: BarChart3,
    title: '5. Data & Spreadsheet Help',
    description: 'Organizing messy records, spreadsheets, or raw data into clear, easy-to-read charts and reports.',
    color: 'text-pink-400',
    bgColor: 'bg-pink-500/10'
  },
  {
    icon: FileSpreadsheet,
    title: '6. AP/AR Smart Ledger (Google Sheets)',
    description: 'Setting up automated, user-friendly ledgers integrated with Google Sheets to track what customers owe you, what you owe suppliers, and keep your cash flow clear.',
    color: 'text-emerald-400',
    bgColor: 'bg-emerald-500/10'
  },
  {
    icon: Smartphone,
    title: '7. Mobile Responsiveness Fixes',
    description: 'Fixing broken or slow web pages so they load smoothly and look professional on smartphones and tablets.',
    color: 'text-purple-400',
    bgColor: 'bg-purple-500/10'
  },
  {
    icon: FolderSearch,
    title: '8. Digital Directory Listings',
    description: 'Featuring your business on targeted online directories to increase your search visibility and attract new buyers.',
    color: 'text-orange-400',
    bgColor: 'bg-orange-500/10'
  },
  {
    icon: Mail,
    title: '9. Professional Business Email Setup',
    description: 'Moving you away from generic free emails to professional corporate addresses (e.g., info@yourbusiness.com) to build instant trust.',
    color: 'text-sky-400',
    bgColor: 'bg-sky-500/10'
  },
  {
    icon: Boxes,
    title: '10. Simple Inventory & Record Systems',
    description: 'Setting up easy digital tools to track stock, client orders, or business transactions without paperwork chaos.',
    color: 'text-pink-400',
    bgColor: 'bg-pink-500/10'
  }
]
</script>

<template>
  <div class="bg-computeeka-900 text-slate-200 font-sans antialiased">
    
    <!-- Section 1: Hero Header -->
    <section class="relative hero-bg flex items-center pt-16 sm:pt-20 lg:pt-24 pb-8 sm:pb-12">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-left">
        <div class="max-w-3xl mx-auto sm:mx-0">
          <span class="text-computeeka-400 font-semibold text-xs sm:text-sm uppercase tracking-wider">Simple, Fast, and Reliable Digital Solutions</span>
          <h1 class="mt-2 sm:mt-3 font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
            Stop Guessing. Start Getting Found, Trusted, and <span class="gradient-text">Booked Online.</span>
          </h1>
          <p class="mt-3 sm:mt-4 text-sm sm:text-base text-slate-400 leading-relaxed">
            We help businesses cut through digital chaos, build lightning-fast web pages, and organize business data—without the bloated costs or delays of a traditional agency.
          </p>
          <div class="mt-6 flex flex-wrap justify-center sm:justify-start gap-3 sm:gap-4">
            <NuxtLink to="/contact" class="inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 bg-computeeka-500 hover:bg-computeeka-400 text-white font-semibold rounded-lg transition-all hover:shadow-lg hover:shadow-computeeka-500/25 text-xs sm:text-sm">
              <span>Book a Free Consultation</span>
              <ArrowRight class="w-4 h-4" />
            </NuxtLink>
            <a href="#services-list" class="inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 border border-slate-600 hover:border-computeeka-400 text-white font-semibold rounded-lg transition-all hover:bg-computeeka-500/10 text-xs sm:text-sm">
              <span>Explore Services Below</span>
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Section 2: Core Problem-Solving List (10 Services — 2 Per Row Grid & Centered Text) -->
    <section id="services-list" class="py-8 sm:py-12 lg:py-16 bg-computeeka-800">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="mb-6 sm:mb-10 text-center max-w-3xl mx-auto">
          <span class="text-computeeka-400 font-semibold text-xs sm:text-sm uppercase tracking-wider">Core Capabilities</span>
          <h2 class="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-white mt-1">10 Direct Ways We Help Your Business Grow</h2>
          <p class="text-slate-400 text-xs sm:text-sm mt-2">Practical, outcome-oriented digital solutions tailored to remove operational bottlenecks and drive sales.</p>
        </div>

        <!-- Balanced 2-Column Grid (5 rows x 2 columns = 10 items) -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          <div 
            v-for="service in servicesList" 
            :key="service.title" 
            class="service-tier glass-card rounded-2xl p-5 sm:p-6 text-center flex flex-col items-center justify-between"
          >
            <div class="flex flex-col items-center">
              <div :class="['w-12 h-12 rounded-xl flex items-center justify-center mb-3 sm:mb-4', service.bgColor]">
                <component :is="service.icon" :class="['w-6 h-6', service.color]" />
              </div>
              <h3 class="font-display text-lg sm:text-xl font-bold text-white mb-2">{{ service.title }}</h3>
              <p class="text-slate-400 text-xs sm:text-sm leading-relaxed mb-4">{{ service.description }}</p>
            </div>
            <NuxtLink 
              :to="`/contact?service=${encodeURIComponent(service.title)}`" 
              class="inline-flex items-center gap-2 text-computeeka-400 hover:text-computeeka-300 text-xs sm:text-sm font-semibold transition-colors mt-auto pt-1"
            >
              <span>Get Started with This</span>
              <ArrowRight class="w-4 h-4" />
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <!-- Section 3: Productized Packages -->
    <section class="py-10 sm:py-14 lg:py-16 bg-computeeka-900">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-8 sm:mb-10">
          <span class="text-computeeka-400 font-semibold text-xs sm:text-sm uppercase tracking-wider">Clear Pricing & Peace of Mind</span>
          <h2 class="mt-1 sm:mt-2 font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-white">Productized Service Packages</h2>
          <p class="text-slate-400 text-xs sm:text-sm mt-2 max-w-2xl mx-auto">Select a clear, fixed-scope option to get started quickly without endless negotiations.</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          <!-- Package 1 -->
          <div class="glass-card rounded-2xl p-6 sm:p-8 relative text-center flex flex-col items-center justify-between">
            <div class="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-slate-600 to-slate-500 rounded-t-2xl"></div>
            <div class="w-full flex flex-col items-center">
              <div class="mb-4 sm:mb-6">
                <h3 class="font-display text-xl sm:text-2xl font-bold text-white mb-1">The Local Launchpad</h3>
                <p class="text-computeeka-400 font-semibold text-xs sm:text-sm">Immediate Visibility</p>
              </div>
              <p class="text-slate-400 text-xs sm:text-sm mb-5 sm:mb-6">Best for local shops, service providers, and startups needing immediate digital trust.</p>
              <ul class="space-y-2.5 sm:space-y-3 mb-6 sm:mb-8 text-left w-full">
                <li v-for="item in ['1-Page High-Converting Business Site', 'Google Maps & Listing Setup', 'Mobile Responsiveness Optimization', 'WhatsApp Booking Link Integration']" :key="item" class="flex items-start gap-2 text-slate-300 text-xs sm:text-sm">
                  <Check class="w-4 h-4 text-computeeka-400 flex-shrink-0 mt-0.5" />
                  <span>{{ item }}</span>
                </li>
              </ul>
            </div>
            <NuxtLink to="/contact?package=Package: The Local Launchpad" class="block w-full text-center px-5 sm:px-6 py-2.5 sm:py-3 border border-slate-600 hover:border-computeeka-400 text-white font-semibold rounded-lg transition-all hover:bg-computeeka-500/10 text-xs sm:text-sm">
              Get Started
            </NuxtLink>
          </div>

          <!-- Package 2 -->
          <div class="glass-card rounded-2xl p-6 sm:p-8 relative transform md:-translate-y-2 text-center flex flex-col items-center justify-between">
            <div class="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-computeeka-500 to-computeeka-accent rounded-t-2xl"></div>
            <div class="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3.5 py-0.5 bg-computeeka-500 text-white text-[10px] sm:text-xs font-semibold rounded-full">POPULAR</div>
            <div class="w-full flex flex-col items-center">
              <div class="mb-4 sm:mb-6 mt-1">
                <h3 class="font-display text-xl sm:text-2xl font-bold text-white mb-1">The Growth & Systems Pack</h3>
                <p class="text-computeeka-400 font-semibold text-xs sm:text-sm">Workflow & Data Automation</p>
              </div>
              <p class="text-slate-400 text-xs sm:text-sm mb-5 sm:mb-6">Best for growing businesses needing multi-page setups, booking flows, or basic data organization.</p>
              <ul class="space-y-2.5 sm:space-y-3 mb-6 sm:mb-8 text-left w-full">
                <li v-for="item in ['Multi-Page Web Assets', 'Custom Inquiry & Booking Forms', 'AP/AR Ledger or Inventory System Setup', 'Basic Business Systems Setup']" :key="item" class="flex items-start gap-2 text-slate-300 text-xs sm:text-sm">
                  <Check class="w-4 h-4 text-computeeka-400 flex-shrink-0 mt-0.5" />
                  <span>{{ item }}</span>
                </li>
              </ul>
            </div>
            <NuxtLink to="/contact?package=Package: The Growth & Systems Pack" class="block w-full text-center px-5 sm:px-6 py-2.5 sm:py-3 bg-computeeka-500 hover:bg-computeeka-400 text-white font-semibold rounded-lg transition-all hover:shadow-lg hover:shadow-computeeka-500/25 text-xs sm:text-sm">
              Get Started
            </NuxtLink>
          </div>

          <!-- Package 3 -->
          <div class="glass-card rounded-2xl p-6 sm:p-8 relative text-center flex flex-col items-center justify-between">
            <div class="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-t-2xl"></div>
            <div class="w-full flex flex-col items-center">
              <div class="mb-4 sm:mb-6">
                <h3 class="font-display text-xl sm:text-2xl font-bold text-white mb-1">The Monthly Retainer</h3>
                <p class="text-computeeka-400 font-semibold text-xs sm:text-sm">Peace of Mind</p>
              </div>
              <p class="text-slate-400 text-xs sm:text-sm mb-5 sm:mb-6">Best for complete, hands-off technical management and stability.</p>
              <ul class="space-y-2.5 sm:space-y-3 mb-6 sm:mb-8 text-left w-full">
                <li v-for="item in ['Secure Cloud Hosting & SSL Monitoring', 'Domain & Technical Management', 'Regular Automated Backups', 'Monthly Content & Software Updates']" :key="item" class="flex items-start gap-2 text-slate-300 text-xs sm:text-sm">
                  <Check class="w-4 h-4 text-computeeka-400 flex-shrink-0 mt-0.5" />
                  <span>{{ item }}</span>
                </li>
              </ul>
            </div>
            <NuxtLink to="/contact?package=Package: The Monthly Retainer" class="block w-full text-center px-5 sm:px-6 py-2.5 sm:py-3 border border-slate-600 hover:border-computeeka-400 text-white font-semibold rounded-lg transition-all hover:bg-computeeka-500/10 text-xs sm:text-sm">
              Contact Us
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <!-- Section 4: Bottom Call to Action -->
    <section class="py-10 sm:py-14 lg:py-16 bg-computeeka-800">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 class="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-2 sm:mb-3">Ready to solve your digital bottlenecks?</h2>
        <p class="text-slate-400 text-xs sm:text-sm lg:text-base mb-5 sm:mb-6">Let’s talk about what your business needs to run smoother and grow faster.</p>
        <div class="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
          <NuxtLink to="/contact" class="inline-flex items-center gap-2 px-6 sm:px-8 py-3 bg-computeeka-500 hover:bg-computeeka-400 text-white font-semibold rounded-xl transition-all hover:shadow-xl hover:shadow-computeeka-500/25 text-xs sm:text-sm">
            <Calendar class="w-4 h-4 sm:w-5 sm:h-5" />
            <span>Get Started Today</span>
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
</style>
