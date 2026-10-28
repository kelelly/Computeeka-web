<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  ChevronDown, 
  Send, 
  HelpCircle, 
  ShieldCheck,
  Globe,
  MessageCircle,
  CheckCircle2
} from 'lucide-vue-next'

useHead({
  title: 'Contact | Computeeka Agencies',
})

const route = useRoute()

// Primary Business WhatsApp Number
const WHATSAPP_NUMBER = '254716517145'

// Available Service / Product Options for Multi-Select
const availableServices = [
  '1. Business Websites',
  '2. Google & Map Listings',
  '3. Online Booking & WhatsApp Integration',
  '4. Business Hosting & Maintenance',
  '5. Data & Spreadsheet Help',
  '6. AP/AR Smart Ledger (Google Sheets)',
  '7. Mobile Responsiveness Fixes',
  '8. Digital Directory Listings',
  '9. Professional Business Email Setup',
  '10. Simple Inventory & Record Systems'
]

// Available Packages
const availablePackages = [
  'Package: The Local Launchpad',
  'Package: The Growth & Systems Pack',
  'Package: The Monthly Retainer'
]

// Form State
const form = ref({
  name: '',
  email: '',
  phone: '',
  selectedItems: [] as string[],
  phase: '',
  message: ''
})

const isSubmitting = ref(false)
const submitSuccess = ref(false)
const errorMessage = ref('')

// Auto-fill form if redirected with package or service query params
onMounted(() => {
  const queryPackage = route.query.package as string
  const queryService = route.query.service as string

  if (queryPackage && !form.value.selectedItems.includes(queryPackage)) {
    form.value.selectedItems.push(queryPackage)
  }
  if (queryService && !form.value.selectedItems.includes(queryService)) {
    form.value.selectedItems.push(queryService)
  }
})

// 1. Submit via Resend API (Email Channel)
async function handleSubmit() {
  if (form.value.selectedItems.length === 0) {
    errorMessage.value = 'Please select at least one service or package of interest.'
    return
  }

  isSubmitting.value = true
  submitSuccess.value = false
  errorMessage.value = ''

  try {
    await $fetch('/api/contact', {
      method: 'POST',
      body: {
        ...form.value,
        service: form.value.selectedItems.join(', ')
      }
    })

    submitSuccess.value = true
    form.value = { name: '', email: '', phone: '', selectedItems: [], phase: '', message: '' }
  } catch (err: any) {
    errorMessage.value = err?.data?.statusMessage || 'An error occurred while sending your inquiry. Please try again.'
  } finally {
    isSubmitting.value = false
  }
}

// 2. Redirect & Send via WhatsApp Channel
function handleWhatsAppSubmit() {
  const { name, email, phone, selectedItems, phase, message } = form.value

  if (!name || selectedItems.length === 0) {
    errorMessage.value = 'Please provide your Name/Organization and select at least one service or package to launch WhatsApp.'
    return
  }

  const textPayload = `*New Project Inquiry — Computeeka Web*
----------------------------------
*Name & Org:* ${name || 'N/A'}
*Email:* ${email || 'N/A'}
*Phone:* ${phone || 'N/A'}
*Selected Products/Packages:* ${selectedItems.join(', ')}
*Project Phase:* ${phase || 'Not specified'}

*Challenge / Details:*
${message || 'None provided'}
`

  const encodedMessage = encodeURIComponent(textPayload)
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`

  errorMessage.value = ''
  window.open(whatsappUrl, '_blank', 'noopener,noreferrer')
}

// FAQ Data
const faqs = [
  {
    q: "Why does Computeeka prioritize practical business solutions before complex tech?",
    a: "Because building the wrong product or over-engineering a system is a waste of capital. We focus on solving immediate operational bottlenecks to drive real results first."
  },
  {
    q: "Can you work with existing spreadsheets or raw data?",
    a: "Yes. We specialize in taking messy records, raw data, or spreadsheets and transforming them into clear reports, tracking systems, and automated AP/AR ledgers."
  },
  {
    q: "Do you offer remote support and consulting?",
    a: "Absolutely. We work with local businesses and growing enterprises everywhere, ensuring fast digital execution and seamless communication."
  }
]
</script>

<template>
  <div class="bg-computeeka-900 text-slate-200 font-sans antialiased">
    
    <section class="relative min-h-[75vh] hero-bg flex items-center pt-16 sm:pt-20 lg:pt-24 pb-8 sm:pb-12 lg:pb-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div class="grid lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-12 items-start">
          
          <!-- Left Column: Sticky Info & Balance Card (5 cols) -->
          <div class="lg:col-span-5 space-y-4 sm:space-y-6 lg:space-y-8 lg:sticky lg:top-28 text-center lg:text-left">
            <div>
              <span class="text-computeeka-400 font-semibold text-xs sm:text-sm uppercase tracking-wider">Start Your Digital Growth Journey</span>
              <h1 class="mt-2 sm:mt-4 font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
                Stop Guessing. <span class="gradient-text">Get Found & Booked.</span>
              </h1>
              <p class="mt-3 sm:mt-4 text-sm sm:text-base text-slate-400 leading-relaxed">
                Ready to establish your online presence, automate your workflows, or clean up your business records? Reach out today for a practical consultation tailored to your goals.
              </p>
            </div>

            <!-- Contact Cards Grid (Centered text and icons) -->
            <div class="grid grid-cols-2 gap-3 sm:gap-4">
              <div class="glass-card p-4 sm:p-5 rounded-2xl border-t-4 sm:border-t-0 sm:border-l-4 border-computeeka-500 text-center flex flex-col items-center justify-center">
                <Mail class="w-5 h-5 text-computeeka-400 mb-2" />
                <h4 class="text-white font-bold text-xs sm:text-sm mb-0.5">Email Us</h4>
                <p class="text-slate-400 text-[11px] sm:text-xs break-all">computeekake@gmail.com</p>
              </div>
              <div class="glass-card p-4 sm:p-5 rounded-2xl border-t-4 sm:border-t-0 sm:border-l-4 border-computeeka-accent text-center flex flex-col items-center justify-center">
                <Phone class="w-5 h-5 text-computeeka-accent mb-2" />
                <h4 class="text-white font-bold text-xs sm:text-sm mb-0.5">Global Lines</h4>
                <p class="text-slate-400 text-[11px] sm:text-xs">+254 716 517 145</p>
                <p class="text-slate-400 text-[11px] sm:text-xs">+254 742 584 681</p>
              </div>
              <div class="glass-card p-4 sm:p-5 rounded-2xl text-center flex flex-col items-center justify-center">
                <MapPin class="w-5 h-5 text-slate-400 mb-2" />
                <h4 class="text-white font-bold text-xs sm:text-sm mb-0.5">Headquarters</h4>
                <p class="text-slate-400 text-[11px] sm:text-xs">Nairobi City, Kenya</p>
              </div>
              <div class="glass-card p-4 sm:p-5 rounded-2xl text-center flex flex-col items-center justify-center">
                <Clock class="w-5 h-5 text-slate-400 mb-2" />
                <h4 class="text-white font-bold text-xs sm:text-sm mb-0.5">Hours</h4>
                <p class="text-slate-400 text-[11px] sm:text-xs">Mon–Fri, 08:00 AM – 06:00 PM</p>
              </div>
            </div>

            <!-- Balanced Visual Summary Card -->
            <div class="glass-card p-5 sm:p-6 rounded-2xl border border-computeeka-500/20 bg-gradient-to-br from-computeeka-900/80 to-slate-900/90 text-center">
              <h3 class="text-white font-display font-bold text-sm sm:text-base mb-3 flex items-center justify-center gap-2">
                <CheckCircle2 class="w-5 h-5 text-computeeka-400 shrink-0" />
                <span>What Happens Next?</span>
              </h3>
              <ul class="space-y-2 text-xs text-slate-400 text-center">
                <li class="flex items-center justify-center gap-2">
                  <span class="text-computeeka-400 font-bold">1.</span>
                  <span>We review your selected options instantly.</span>
                </li>
                <li class="flex items-center justify-center gap-2">
                  <span class="text-computeeka-400 font-bold">2.</span>
                  <span>Engineers assess feasibility & respond within 24hrs.</span>
                </li>
                <li class="flex items-center justify-center gap-2">
                  <span class="text-computeeka-400 font-bold">3.</span>
                  <span>We schedule a direct call or connect on WhatsApp.</span>
                </li>
              </ul>
            </div>

            <div class="pt-3 border-t border-slate-800">
              <div class="flex items-center justify-center lg:justify-start gap-2 text-slate-500 text-xs italic">
                <Globe class="w-4 h-4 shrink-0" />
                <span>Empowering local businesses and growing enterprises.</span>
              </div>
            </div>
          </div>

          <!-- Right Column: The Form (7 cols) -->
          <div class="lg:col-span-7 relative mt-4 lg:mt-0">
            <div class="absolute -inset-1 bg-gradient-to-r from-computeeka-500 to-computeeka-accent rounded-3xl blur opacity-20"></div>
            <div class="relative glass-card rounded-3xl p-5 sm:p-8 border border-slate-700/50">
              <div class="mb-5 text-center sm:text-left">
                <h3 class="text-xl sm:text-2xl font-display font-bold text-white">Project Briefing</h3>
                <p class="text-slate-400 text-xs sm:text-sm mt-1">Select your desired packages or services below and fill in your details.</p>
              </div>

              <form @submit.prevent="handleSubmit" class="space-y-4 sm:space-y-5">
                <div>
                  <label class="block text-slate-300 text-xs sm:text-sm font-medium mb-1.5">Name & Organization</label>
                  <input 
                    v-model="form.name"
                    type="text" 
                    required
                    placeholder="She-Kel Ventures Ltd" 
                    class="w-full px-4 sm:px-5 py-3 bg-computeeka-900/50 border border-slate-700 rounded-xl text-white focus:outline-none focus:border-computeeka-500 transition-all placeholder:text-slate-600 text-xs sm:text-sm"
                  >
                </div>

                <div class="grid sm:grid-cols-2 gap-3 sm:gap-4">
                  <div>
                    <label class="block text-slate-300 text-xs sm:text-sm font-medium mb-1.5">Email address</label>
                    <input 
                      v-model="form.email"
                      type="email" 
                      required
                      placeholder="shekel@gmail.com" 
                      class="w-full px-4 sm:px-5 py-3 bg-computeeka-900/50 border border-slate-700 rounded-xl text-white focus:outline-none focus:border-computeeka-500 transition-all placeholder:text-slate-600 text-xs sm:text-sm"
                    >
                  </div>
                  <div>
                    <label class="block text-slate-300 text-xs sm:text-sm font-medium mb-1.5">Phone number</label>
                    <input 
                      v-model="form.phone"
                      type="text" 
                      required
                      placeholder="+254716517145" 
                      class="w-full px-4 sm:px-5 py-3 bg-computeeka-900/50 border border-slate-700 rounded-xl text-white focus:outline-none focus:border-computeeka-500 transition-all placeholder:text-slate-600 text-xs sm:text-sm"
                    >
                  </div>
                </div>

                <!-- Multi-Select Packages & Services Checklist -->
                <div>
                  <label class="block text-slate-300 text-xs sm:text-sm font-medium mb-1.5">Select Packages & Services Needed (Check all that apply)</label>
                  <div class="space-y-1.5 max-h-48 sm:max-h-56 overflow-y-auto pr-2 custom-scrollbar p-2.5 bg-computeeka-900/40 border border-slate-700 rounded-xl">
                    
                    <div class="text-[10px] sm:text-[11px] font-semibold text-computeeka-400 uppercase tracking-wider pt-0.5 pb-0.5 text-center sm:text-left">Featured Packages</div>
                    <label v-for="pkg in availablePackages" :key="pkg" class="flex items-center gap-2.5 p-1.5 rounded-lg hover:bg-slate-800/50 cursor-pointer transition-all">
                      <input type="checkbox" :value="pkg" v-model="form.selectedItems" class="rounded border-slate-700 bg-computeeka-900 text-computeeka-500 focus:ring-computeeka-500 w-4 h-4 shrink-0">
                      <span class="text-xs sm:text-sm font-medium text-white">{{ pkg }}</span>
                    </label>

                    <div class="text-[10px] sm:text-[11px] font-semibold text-computeeka-400 uppercase tracking-wider pt-2 pb-0.5 border-t border-slate-800 text-center sm:text-left">Individual Services</div>
                    <label v-for="srv in availableServices" :key="srv" class="flex items-center gap-2.5 p-1.5 rounded-lg hover:bg-slate-800/50 cursor-pointer transition-all">
                      <input type="checkbox" :value="srv" v-model="form.selectedItems" class="rounded border-slate-700 bg-computeeka-900 text-computeeka-500 focus:ring-computeeka-500 w-4 h-4 shrink-0">
                      <span class="text-xs sm:text-sm text-slate-300">{{ srv }}</span>
                    </label>

                  </div>
                </div>

                <div>
                  <label class="block text-slate-300 text-xs sm:text-sm font-medium mb-1.5">Project Phase</label>
                  <div class="relative">
                    <select 
                      v-model="form.phase"
                      class="w-full px-4 sm:px-5 py-3 bg-computeeka-900/50 border border-slate-700 rounded-xl text-white focus:outline-none focus:border-computeeka-500 appearance-none transition-all cursor-pointer text-xs sm:text-sm"
                    >
                      <option value="" disabled selected class="bg-white text-slate-400">Current status...</option>
                      <option class="bg-white text-black">Idea/Concept Phase (Start from scratch)</option>
                      <option class="bg-white text-black">Existing Product (Needs Optimization or modification)</option>
                      <option class="bg-white text-black">Scaling/Growth Phase (upgrading)</option>
                      <option class="bg-white text-black">Other (Specific details below)</option>
                    </select>
                    <ChevronDown class="absolute right-4 sm:right-5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500 pointer-events-none" />
                  </div>
                </div>

                <div>
                  <label class="block text-slate-300 text-xs sm:text-sm font-medium mb-1.5">Describe Your Challenge / Additional Details</label>
                  <textarea 
                    v-model="form.message"
                    rows="3" 
                    placeholder="Tell us any specific requirements or timelines..." 
                    class="w-full px-4 sm:px-5 py-3 bg-computeeka-900/50 border border-slate-700 rounded-xl text-white focus:outline-none focus:border-computeeka-500 transition-all placeholder:text-slate-600 resize-none text-xs sm:text-sm"
                  ></textarea>
                </div>

                <div class="flex items-start gap-2.5 py-1">
                  <ShieldCheck class="w-4 h-4 text-computeeka-400 shrink-0 mt-0.5" />
                  <p class="text-[10px] sm:text-[11px] text-slate-500 leading-relaxed text-center sm:text-left">
                    By submitting this form, you agree to our privacy policy. We treat your project data with technical integrity and confidentiality.
                  </p>
                </div>

                <!-- Status Feedback Alerts -->
                <div v-if="submitSuccess" class="p-3 bg-emerald-500/10 border border-emerald-500/30 rounded-xl text-emerald-400 text-xs sm:text-sm font-medium text-center">
                  Thank you! Your inquiry has been sent directly to our team via Email.
                </div>

                <div v-if="errorMessage" class="p-3 bg-rose-500/10 border border-rose-500/30 rounded-xl text-rose-400 text-xs sm:text-sm font-medium text-center">
                  {{ errorMessage }}
                </div>

                <!-- Action Channel Buttons (Dual Channel Layout) -->
                <div class="grid sm:grid-cols-2 gap-3 pt-1">
                  <button 
                    type="submit" 
                    :disabled="isSubmitting"
                    class="py-3 px-4 bg-computeeka-500 hover:bg-computeeka-400 text-white font-bold rounded-xl transition-all flex items-center justify-center gap-2 shadow-lg shadow-computeeka-500/20 disabled:opacity-50 cursor-pointer text-xs sm:text-sm"
                  >
                    <Send class="w-4 h-4" />
                    <span>{{ isSubmitting ? 'Sending Email...' : 'Send via Email' }}</span>
                  </button>

                  <button 
                    type="button" 
                    @click="handleWhatsAppSubmit"
                    class="py-3 px-4 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-xl transition-all flex items-center justify-center gap-2 shadow-lg shadow-emerald-600/20 cursor-pointer text-xs sm:text-sm"
                  >
                    <MessageCircle class="w-4 h-4 fill-current" />
                    <span>Submit via WhatsApp</span>
                  </button>
                </div>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>

    <!-- FAQ Section (Tight mobile padding) -->
    <section class="py-10 sm:py-16 lg:py-20 bg-computeeka-800">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-8 sm:mb-12">
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-computeeka-500/10 border border-computeeka-500/20 text-computeeka-400 text-[10px] sm:text-xs font-bold uppercase tracking-widest mb-3">
            Pre-Consultation FAQ
          </div>
          <h2 class="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-white">Smart Answers for Serious Clients</h2>
        </div>

        <div class="space-y-3 sm:space-y-4">
          <div v-for="(item, index) in faqs" :key="index" class="glass-card rounded-2xl overflow-hidden border border-slate-700/30">
            <div class="p-5 sm:p-6 text-center sm:text-left">
              <div class="flex flex-col sm:flex-row items-center sm:items-start gap-3 sm:gap-4">
                <HelpCircle class="w-6 h-6 text-computeeka-500 shrink-0 mb-1 sm:mb-0" />
                <div>
                  <h3 class="text-base sm:text-lg font-bold text-white mb-1.5">{{ item.q }}</h3>
                  <p class="text-slate-400 leading-relaxed text-xs sm:text-sm">{{ item.a }}</p>
                </div>
              </div>
            </div>
          </div>
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
  background: rgba(17, 24, 39, 0.7);
  backdrop-filter: blur(12px);
}

.hero-bg {
  background: radial-gradient(circle at 10% 20%, rgba(14, 165, 233, 0.05) 0%, transparent 50%),
              radial-gradient(circle at 90% 80%, rgba(6, 182, 212, 0.05) 0%, transparent 50%),
              #0a0f1c;
}

input, select, textarea {
  transition: all 0.2s ease-in-out;
}

input:focus, select:focus, textarea:focus {
  background: rgba(14, 165, 233, 0.05);
  box-shadow: 0 0 20px rgba(14, 165, 233, 0.1);
}

.custom-scrollbar::-webkit-scrollbar {
  width: 6px;
}
.custom-scrollbar::-webkit-scrollbar-track {
  background: rgba(15, 23, 42, 0.5);
  border-radius: 4px;
}
.custom-scrollbar::-webkit-scrollbar-thumb {
  background: rgba(14, 165, 233, 0.3);
  border-radius: 4px;
}
</style>
