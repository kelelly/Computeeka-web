// nuxt.config.ts
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  // Referencing your root-level assets directory
  css: ['~~/assets/css/main.css'],

  modules: ['@nuxt/ui'],

  // Nuxt UI 4 settings
  ui: {
    // This tells Nuxt UI to look for the 'primary' variable we define in CSS
    primary: 'royal-blue'
  },

  runtimeConfig: {
    supabaseServiceRoleKey: process.env.SUPABASE_SERVICE_ROLE_KEY,
    emailServiceApiKey: process.env.NUXT_PUBLIC_EMAIL_SERVICE_API_KEY,

    public: {
      appEnv: process.env.NUXT_PUBLIC_APP_ENV || 'development',
      siteUrl: process.env.NUXT_PUBLIC_SITE_URL || 'http://localhost:3000',
      siteName: process.env.NUXT_PUBLIC_SITE_NAME || 'Computeeka Agencies',
      supabaseUrl: process.env.NUXT_PUBLIC_SUPABASE_URL,
      supabaseAnonKey: process.env.NUXT_PUBLIC_SUPABASE_ANON_KEY,
      contactEmail: process.env.NUXT_PUBLIC_CONTACT_EMAIL || 'computeekake@gmail.com',
      contactPhonePrimary: process.env.NUXT_PUBLIC_CONTACT_PHONE_PRIMARY || '+254716517145',
      contactPhoneSecondary: process.env.NUXT_PUBLIC_CONTACT_PHONE_SECONDARY || '+254742584681',
      contactLocation: process.env.NUXT_PUBLIC_CONTACT_LOCATION || 'Eldoret City, Kenya',
      businessHoursStart: process.env.NUXT_PUBLIC_BUSINESS_HOURS_START || '08:00',
      businessHoursEnd: process.env.NUXT_PUBLIC_BUSINESS_HOURS_END || '18:00',
      businessTimezone: process.env.NUXT_PUBLIC_BUSINESS_TIMEZONE || 'EAT',
      formSubmissionEnabled: process.env.NUXT_PUBLIC_FORM_SUBMISSION_ENABLED === 'true',
      enableAnalytics: process.env.NUXT_PUBLIC_ENABLE_ANALYTICS === 'true',
      googleAnalyticsId: process.env.NUXT_PUBLIC_GOOGLE_ANALYTICS_ID,
      linkedinUrl: process.env.NUXT_PUBLIC_LINKEDIN_URL,
      twitterUrl: process.env.NUXT_PUBLIC_TWITTER_URL,
      githubUrl: process.env.NUXT_PUBLIC_GITHUB_URL
    }
  }
})
