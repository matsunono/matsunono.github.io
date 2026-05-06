<template>
  <div class="space-y-8">
    <section class="hero overflow-hidden rounded-[2rem] bg-base-200 shadow-xl">
      <div class="hero-content w-full flex-col items-start gap-8 px-8 py-12 lg:flex-row lg:items-center lg:justify-between">
        <div class="max-w-2xl space-y-4">
          <p class="text-sm uppercase tracking-[0.3em] text-base-content/60">Profile</p>
          <h1 class="text-4xl font-bold tracking-tight lg:text-5xl">{{ profile.name }}</h1>
          <p class="text-lg text-base-content/80">{{ profile.role }}</p>
        </div>
        <div class="card w-full max-w-sm bg-base-100 shadow-md">
          <div class="card-body">
            <h2 class="card-title">Links</h2>
            <div class="space-y-3">
              <a
                v-for="link in profile.links"
                :key="link.href"
                :href="link.href"
                class="btn btn-outline btn-block"
                target="_blank"
                rel="noreferrer"
              >
                {{ link.label }}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="card bg-base-100 shadow-sm">
      <div class="card-body gap-4">
        <h2 class="card-title text-2xl">About</h2>
        <p
          v-for="paragraph in profile.bio"
          :key="paragraph"
          class="leading-8 text-base-content/80"
        >
          {{ paragraph }}
        </p>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { profile } from '@/content/profile'
</script>
