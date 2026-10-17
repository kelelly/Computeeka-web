<script setup lang="ts">
import { FileText, ArrowLeft } from 'lucide-vue-next'
</script>

<template>
  <div class="bg-computeeka-900 text-slate-200 font-sans antialiased min-h-screen pt-24 pb-20">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <!-- Back to Home -->
      <div class="mb-8">
        <NuxtLink to="/" class="inline-flex items-center gap-2 text-computeeka-400 hover:text-computeeka-300 font-semibold text-sm transition-colors">
          <ArrowLeft class="w-4 h-4" />
          <span>Back to Home</span>
        </NuxtLink>
      </div>

      <!-- Header Card -->
      <div class="glass-card rounded-2xl p-8 sm:p-12 mb-8 border border-white/10 relative overflow-hidden">
        <div class="absolute top-0 right-0 w-64 h-64 bg-computeeka-accent/10 rounded-full blur-3xl"></div>
        <div class="relative">
          <div class="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-computeeka-accent/10 text-computeeka-accent mb-6">
            <FileText class="w-6 h-6" />
          </div>
          <h1 class="font-display text-3xl sm:text-4xl font-bold text-white mb-3">Terms & Conditions</h1>
          <p class="text-sm text-slate-400 font-medium">Effective Date: October 13, 2026</p>
        </div>
      </div>

      <!-- Content Body -->
      <div class="glass-card rounded-2xl p-8 sm:p-12 space-y-8 text-slate-300 leading-relaxed border border-white/10">
        <p class="text-base text-slate-300">
          By accessing or using <strong class="text-white">Computeeka Agencies’</strong> website and digital services, you agree to comply with and be bound by the following terms and conditions.
        </p>

        <section class="space-y-4">
          <h2 class="font-display text-xl font-bold text-white flex items-center gap-3">
            <span class="text-computeeka-accent">1.</span> Acceptance of Terms
          </h2>
          <p class="text-slate-400">Your use of our website, software solutions, and advisory services constitutes formal acceptance of these Terms & Conditions.</p>
        </section>

        <section class="space-y-4">
          <h2 class="font-display text-xl font-bold text-white flex items-center gap-3">
            <span class="text-computeeka-accent">2.</span> Services
          </h2>
          <p class="text-slate-400">We provide professional consultancy in UX research, data analytics, lean software development, and technical training. Service scopes may evolve over time based on project requirements.</p>
        </section>

        <section class="space-y-4">
          <h2 class="font-display text-xl font-bold text-white flex items-center gap-3">
            <span class="text-computeeka-accent">3.</span> Client Responsibilities
          </h2>
          <ul class="list-disc pl-6 space-y-2 text-slate-400">
            <li>Provide accurate, timely information necessary for project execution.</li>
            <li>Comply with agreed operational timelines and payment milestones.</li>
          </ul>
        </section>

        <section class="space-y-4">
          <h2 class="font-display text-xl font-bold text-white flex items-center gap-3">
            <span class="text-computeeka-accent">4.</span> Intellectual Property
          </h2>
          <p class="text-slate-400">All proprietary content, custom code architecture, designs, and research outputs remain the intellectual property of Computeeka Agencies unless explicitly transferred via a separate written contract.</p>
        </section>

        <section class="space-y-4">
          <h2 class="font-display text-xl font-bold text-white flex items-center gap-3">
            <span class="text-computeeka-accent">5.</span> Limitation of Liability
          </h2>
          <p class="text-slate-400">We are not liable for indirect damages, service interruptions, or downtime caused by third-party hosting, infrastructure providers, or APIs.</p>
        </section>

        <section class="space-y-4">
          <h2 class="font-display text-xl font-bold text-white flex items-center gap-3">
            <span class="text-computeeka-accent">6.</span> Payments & Refunds
          </h2>
          <p class="text-slate-400">Payment structures, milestones, and deposits will be mutually agreed upon prior to project commencement. Refund requests are evaluated strictly on a case-by-case basis.</p>
        </section>

        <section class="space-y-4">
          <h2 class="font-display text-xl font-bold text-white flex items-center gap-3">
            <span class="text-computeeka-accent">7.</span> Software Subscriptions and digital products
          </h2>
          <p class="text-slate-400">Access to automated Google Workspace add-ons and software tools provided by Computeeka Agencies may be managed via recurring digital subscriptions (e.g., monthly billing via third-party processors like PayPal). Subscriptions can be canceled at any time, with access continuing through the end of the paid billing cycle. All software tools are provided "as-is" under a blank template execution model.</p>
          </section>

        <section class="space-y-4">
          <h2 class="font-display text-xl font-bold text-white flex items-center gap-3">
            <span class="text-computeeka-accent">8.</span> Termination
          </h2>
          <p class="text-slate-400">Either party may terminate an ongoing engagement if contractual obligations are not met or upon written notice as specified in your service agreement.</p>
        </section>

        <section class="space-y-4 pt-4 border-t border-white/5">
          <h2 class="font-display text-xl font-bold text-white flex items-center gap-3">
            <span class="text-computeeka-accent">9.</span> Governing Law
          </h2>
          <p class="text-slate-400">These terms are governed by and construed in accordance with the laws of Kenya. International clients agree to comply with all applicable local jurisdiction laws.</p>
        </section>

      </div>
    </div>
  </div>
</template>
