<template>
  <div class="space-y-8">
    <section class="rounded-[2rem] bg-base-200 px-8 py-12 shadow-xl">
      <p class="text-sm uppercase tracking-[0.3em] text-base-content/60">Blogs</p>
      <h1 class="mt-3 text-4xl font-bold tracking-tight lg:text-5xl">備忘録とブログ</h1>
      <p class="mt-4 max-w-3xl leading-8 text-base-content/75">
        セットアップ記録や実験ログを、あとから検索しやすいように整理していくための一覧です。
      </p>
    </section>

    <section class="grid gap-5 lg:grid-cols-2">
      <article
        v-for="blogPost in blogPosts"
        :key="blogPost.slug"
        class="card border border-base-300 bg-base-100 shadow-sm transition-transform hover:-translate-y-1 hover:shadow-lg"
      >
        <div class="card-body gap-4">
          <div class="flex flex-wrap items-center gap-2 text-sm text-base-content/60">
            <span>{{ formatDate(blogPost.publishedAt) }}</span>
            <div class="badge badge-outline" v-for="tag in blogPost.tags" :key="tag">{{ tag }}</div>
          </div>
          <h2 class="card-title text-2xl">
            <RouterLink :to="{ name: 'blog-detail', params: { slug: blogPost.slug } }">
              {{ blogPost.title }}
            </RouterLink>
          </h2>
          <p class="leading-7 text-base-content/75">{{ blogPost.summary }}</p>
          <div class="card-actions justify-end">
            <RouterLink
              class="btn btn-primary"
              :to="{ name: 'blog-detail', params: { slug: blogPost.slug } }"
            >
              続きを読む
            </RouterLink>
          </div>
        </div>
      </article>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import type { BlogPost } from '@/types/blog'
import { getAllPosts } from '@/content/blogs'

const blogPosts = ref<BlogPost[]>([])

onMounted(async () => {
  blogPosts.value = await getAllPosts()
})

const formatDate = (value: string) =>
  new Intl.DateTimeFormat('ja-JP', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  }).format(new Date(value))
</script>
