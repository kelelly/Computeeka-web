<script setup lang="ts">
</script>

<template>
  <div class="min-h-screen flex flex-col bg-brand-offwhite text-black font-sans">
    <AppHeader />
    <main class="flex-1">
      <slot />
    </main>
    <AppFooter />
    <UNotifications />
  </div>
</template>
