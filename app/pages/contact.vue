<script setup lang="ts">
import { 
  Mail, 
  Phone, 
  MessageSquare, 
  MapPin, 
  Clock, 
  ChevronDown, 
  Send, 
  HelpCircle, 
  ShieldCheck,
  Globe
} from 'lucide-vue-next'

useHead({
  title: 'Contact | Computeeka Agencies',
})

// FAQ Toggle Logic (Optional)
const faqs = [
  {
    q: "Why does Computeeka prioritize UX before Development?",
    a: "Because building the wrong product perfectly is a waste of capital. We use research to ensure we build the right product for your users first."
  },
  {
    q: "Can you work with existing datasets?",
    a: "Yes. We specialize in taking raw data—whether from Excel, SQL, or SPSS—and turning it into visual dashboards and actionable insights."
  },
  {
    q: "Do you offer remote consulting?",
    a: "Absolutely. While we are based in Eldoret, our multidisciplinary team serves clients across the globe using Agile methodologies and Azure DevOps for seamless collaboration."
  }
]
</script>

<template>
  <div class="bg-computeeka-900 text-slate-200 font-sans antialiased">
    
    <section class="relative min-h-[80vh] hero-bg flex items-center pt-24 pb-12">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid lg:grid-cols-2 gap-16 items-start">
          
          <div class="space-y-8">
            <div>
              <span class="text-computeeka-400 font-semibold text-sm uppercase tracking-wider">Start Your Intelligence-Led Journey</span>
              <h1 class="mt-4 font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
                Let’s Build the Future, <span class="gradient-text">Verified.</span>
              </h1>
              <p class="mt-6 text-lg text-slate-400 leading-relaxed max-w-xl">
                Ready to transform your data into strategy and your ideas into high-performance software? Reach out today for a consultation tailored to your organizational goals.
              </p>
            </div>

            <div class="grid sm:grid-cols-2 gap-6 mt-12">
              <div class="glass-card p-6 rounded-2xl border-l-4 border-computeeka-500">
                <Mail class="w-6 h-6 text-computeeka-400 mb-4" />
                <h4 class="text-white font-bold mb-1">Email Us</h4>
                <p class="text-slate-400 text-sm">computeekake@gmail.com</p>
              </div>
              <div class="glass-card p-6 rounded-2xl border-l-4 border-computeeka-accent">
                <Phone class="w-6 h-6 text-computeeka-accent mb-4" />
                <h4 class="text-white font-bold mb-1">Global Lines</h4>
                <p class="text-slate-400 text-sm">+254 716 517 145</p>
                <p class="text-slate-400 text-sm">+254 742 584 681</p>
              </div>
              <div class="glass-card p-6 rounded-2xl">
                <MapPin class="w-6 h-6 text-slate-400 mb-4" />
                <h4 class="text-white font-bold mb-1">Headquarters</h4>
                <p class="text-slate-400 text-sm">Eldoret City, Kenya</p>
              </div>
              <div class="glass-card p-6 rounded-2xl">
                <Clock class="w-6 h-6 text-slate-400 mb-4" />
                <h4 class="text-white font-bold mb-1">Operational Hours</h4>
                <p class="text-slate-400 text-sm">Mon – Fri, 08:00 AM – 06:00 PM (EAT)</p>
              </div>
            </div>

            <div class="pt-8 border-t border-slate-800">
              <div class="flex items-center gap-4 text-slate-500 text-sm italic">
                <Globe class="w-5 h-5" />
                <span>Serving innovators in HealthTech, EdTech, and Fleet Management.</span>
              </div>
            </div>
          </div>

          <div class="relative">
            <div class="absolute -inset-1 bg-gradient-to-r from-computeeka-500 to-computeeka-accent rounded-3xl blur opacity-20"></div>
            <div class="relative glass-card rounded-3xl p-8 md:p-10 border border-slate-700/50">
              <div class="mb-8">
                <h3 class="text-2xl font-display font-bold text-white">Project Briefing</h3>
                <p class="text-slate-400 text-sm">Fill in the technical details to help us prepare.</p>
              </div>

              <form @submit.prevent class="space-y-5">
                <div>
                  <label class="block text-slate-300 text-sm font-medium mb-2">Name & Organization</label>
                  <input type="text" placeholder="She-Kel Ventures Ltd" 
                    class="w-full px-5 py-3.5 bg-computeeka-900/50 border border-slate-700 rounded-xl text-white focus:outline-none focus:border-computeeka-500 transition-all placeholder:text-slate-600">
                </div>

                <div>
                  <label class="block text-slate-300 text-sm font-medium mb-2">Service of Interest</label>
                  <div class="relative">
                    <select class="w-full px-5 py-3.5 bg-computeeka-900/50 border border-slate-700 rounded-xl text-white focus:outline-none focus:border-computeeka-500 appearance-none transition-all cursor-pointer">
                      <option disabled selected>Select a Service</option>
                      <option>UX Research & Audit</option>
                      <option>Data Analytics & Visualization</option>
                      <option>Lean MVP Development</option>
                      <option>Team Training/Workshop</option>
                    </select>
                    <ChevronDown class="absolute right-5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500 pointer-events-none" />
                  </div>
                </div>

                <div>
                  <label class="block text-slate-300 text-sm font-medium mb-2">Project Phase</label>
                  <div class="relative">
                    <select class="w-full px-5 py-3.5 bg-computeeka-900/50 border border-slate-700 rounded-xl text-white focus:outline-none focus:border-computeeka-500 appearance-none transition-all cursor-pointer">
                      <option disabled selected>Current status...</option>
                      <option>Idea/Concept Phase</option>
                      <option>Existing Product (Needs Optimization)</option>
                      <option>Scaling/Growth Phase</option>
                    </select>
                    <ChevronDown class="absolute right-5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500 pointer-events-none" />
                  </div>
                </div>

                <div>
                  <label class="block text-slate-300 text-sm font-medium mb-2">Describe Your Challenge</label>
                  <textarea rows="4" placeholder="Tell us about the problem you are solving or the data you need to understand..." 
                    class="w-full px-5 py-3.5 bg-computeeka-900/50 border border-slate-700 rounded-xl text-white focus:outline-none focus:border-computeeka-500 transition-all placeholder:text-slate-600 resize-none"></textarea>
                </div>

                <div class="flex items-start gap-3 py-2">
                  <ShieldCheck class="w-5 h-5 text-computeeka-400 shrink-0 mt-0.5" />
                  <p class="text-[11px] text-slate-500 leading-relaxed">
                    By submitting this form, you agree to our privacy policy. We treat your project data with the highest level of technical integrity and confidentiality.
                  </p>
                </div>

                <button type="submit" class="w-full py-4 bg-computeeka-500 hover:bg-computeeka-400 text-white font-bold rounded-xl transition-all flex items-center justify-center gap-3 shadow-lg shadow-computeeka-500/20">
                  <Send class="w-5 h-5" />
                  Submit Technical Inquiry
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="py-24 bg-computeeka-800">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-computeeka-500/10 border border-computeeka-500/20 text-computeeka-400 text-xs font-bold uppercase tracking-widest mb-4">
            Pre-Consultation FAQ
          </div>
          <h2 class="font-display text-3xl sm:text-4xl font-bold text-white">Smart Answers for Serious Clients</h2>
        </div>

        <div class="space-y-4">
          <div v-for="(item, index) in faqs" :key="index" class="glass-card rounded-2xl overflow-hidden border border-slate-700/30">
            <div class="p-6">
              <div class="flex gap-4">
                <HelpCircle class="w-6 h-6 text-computeeka-500 shrink-0" />
                <div>
                  <h3 class="text-lg font-bold text-white mb-2">{{ item.q }}</h3>
                  <p class="text-slate-400 leading-relaxed text-sm">{{ item.a }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="py-16 bg-computeeka-900 border-t border-slate-800">
      <div class="max-w-7xl mx-auto px-4 text-center">
        <div class="max-w-3xl mx-auto">
          <p class="text-computeeka-400 font-display text-xl md:text-2xl font-medium leading-relaxed">
            "Proven to reduce manual reporting time by <span class="text-white font-bold">40%</span> and influence <span class="text-white font-bold">national healthcare decisions</span>."
          </p>
          <div class="mt-6 flex items-center justify-center gap-4 text-slate-500 text-xs uppercase tracking-[0.2em]">
            <div class="h-px w-8 bg-slate-800"></div>
            Trust Indicators
            <div class="h-px w-8 bg-slate-800"></div>
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

/* Custom transitions for form focus */
input, select, textarea {
  transition: all 0.2s ease-in-out;
}

input:focus, select:focus, textarea:focus {
  background: rgba(14, 165, 233, 0.05);
  box-shadow: 0 0 20px rgba(14, 165, 233, 0.1);
}
</style>
