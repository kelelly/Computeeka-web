<script setup lang="ts">
import { Shield, ArrowLeft, Phone, Mail } from 'lucide-vue-next'
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
        <div class="absolute top-0 right-0 w-64 h-64 bg-computeeka-500/10 rounded-full blur-3xl"></div>
        <div class="relative">
          <div class="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-computeeka-500/10 text-computeeka-400 mb-6">
            <Shield class="w-6 h-6" />
          </div>
          <h1 class="font-display text-3xl sm:text-4xl font-bold text-white mb-3">Privacy Policy</h1>
          <p class="text-sm text-slate-400 font-medium">Effective Date: October 13, 2026</p>
        </div>
      </div>

      <!-- Content Body -->
      <div class="glass-card rounded-2xl p-8 sm:p-12 space-y-8 text-slate-300 leading-relaxed border border-white/10">
        <p class="text-base text-slate-300">
          At <strong class="text-white">Computeeka Agencies</strong>, we value your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, and safeguard data when you interact with our website and services.
        </p>

        <section class="space-y-4">
          <h2 class="font-display text-xl font-bold text-white flex items-center gap-3">
            <span class="text-computeeka-400">1.</span> Information We Collect
          </h2>
          <ul class="list-disc pl-6 space-y-2 text-slate-400">
            <li><strong class="text-slate-200">Contact details</strong> you provide (name, email, phone number).</li>
            <li><strong class="text-slate-200">Project-related information</strong> shared during consultations and onboarding.</li>
            <li><strong class="text-slate-200">Website usage data</strong> (cookies, analytics, and browsing behavior).</li>
          </ul>
        </section>

        <section class="space-y-4">
          <h2 class="font-display text-xl font-bold text-white flex items-center gap-3">
            <span class="text-computeeka-400">2.</span> How We Use Your Information
          </h2>
          <ul class="list-disc pl-6 space-y-2 text-slate-400">
            <li>To respond to inquiries and deliver professional digital consultancy services.</li>
            <li>To improve user experience and optimize our website performance.</li>
            <li>To share updates, resources, or newsletters (<span class="italic">only if you opt in</span>).</li>
          </ul>
        </section>

        <section class="space-y-4">
          <h2 class="font-display text-xl font-bold text-white flex items-center gap-3">
            <span class="text-computeeka-400">3.</span> Data Sharing
          </h2>
          <ul class="list-disc pl-6 space-y-2 text-slate-400">
            <li>We may share data with trusted service providers (e.g., secure hosting infrastructure, analytics tools).</li>
            <li>We do not sell, rent, or trade your personal information to third parties.</li>
          </ul>
        </section>

        <section class="space-y-4">
          <h2 class="font-display text-xl font-bold text-white flex items-center gap-3">
            <span class="text-computeeka-400">4.</span> Data Security
          </h2>
          <p class="text-slate-400">
            We use secure enterprise servers, modern encryption protocols, and restricted role-based access to protect your data from unauthorized disclosure.
          </p>
        </section>

        <section class="space-y-4">
          <h2 class="font-display text-xl font-bold text-white flex items-center gap-3">
            <span class="text-computeeka-400">5.</span> Your Rights
          </h2>
          <ul class="list-disc pl-6 space-y-2 text-slate-400">
            <li>You may request access, correction, or deletion of your personal data at any time.</li>
            <li>You may opt out of promotional communications instantly.</li>
          </ul>
        </section>

          <section class="space-y-4">
          <h2 class="font-display text-xl font-bold text-white flex items-center gap-3">
            <span class="text-computeeka-400">6.</span> Google Workspace Add-ons (AP/AR Audit Engine)
          </h2>
          <ul class="list-disc pl-6 space-y-2 text-slate-400">
            <p>When you use our AP/AR Audit Engine Google Workspace Marketplace add-on, the application operates entirely locally within your active Google Sheet. We adhere strictly to the Google API Services User Data Policy, including Limited Use requirements. We do not collect, transmit, store, or log any of your financial data, client names, transaction histories, or sensitive ledger entries on external servers. The add-on only accesses the active spreadsheet (spreadsheets.currentonly) and uses UI elements (script.container.ui) locally on your device to execute automated auditing tasks.</p>
          </ul>
        </section>

        <section class="space-y-4 pt-4 border-t border-white/5">
          <h2 class="font-display text-xl font-bold text-white">7. Contact Us</h2>
          <p class="text-slate-400">For privacy-related inquiries, reach us directly via our support channels:</p>
          <div class="flex flex-wrap gap-6 pt-2">
            <a href="tel:+254716517145" class="inline-flex items-center gap-2 text-slate-200 hover:text-computeeka-400 font-semibold transition-colors">
              <Phone class="w-4 h-4 text-computeeka-400" />
              <span>+254 716 517 145</span>
            </a>
            <a href="mailto:computeekake@gmail.com" class="inline-flex items-center gap-2 text-slate-200 hover:text-computeeka-400 font-semibold transition-colors">
              <Mail class="w-4 h-4 text-computeeka-400" />
              <span>computeekake@gmail.com</span>
            </a>
          </div>
        </section>

      </div>
    </div>
  </div>
</template>
