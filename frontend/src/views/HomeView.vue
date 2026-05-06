<template>
  <div class="space-y-8">
    <section class="hero overflow-hidden rounded-[2rem] bg-base-200 shadow-xl">
      <div class="hero-content flex-col items-start gap-8 px-8 py-12 lg:flex-row lg:items-end lg:justify-between">
        <div class="max-w-2xl space-y-5">
          <p class="text-sm uppercase tracking-[0.35em] text-base-content/60">Home</p>
          <h1 class="text-4xl font-bold tracking-tight lg:text-6xl">あとで読む自分のための技術メモ</h1>
          <p class="text-base leading-8 text-base-content/75 lg:text-lg">
            既存の HTML 群を Vue ベースに移行しながら、Jetson Nano や Linux の作業記録を整理していくための土台です。
          </p>
          <div class="flex flex-wrap gap-3">
            <RouterLink class="btn btn-primary" to="/blogs">記事一覧を見る</RouterLink>
            <RouterLink class="btn btn-outline" to="/profile">プロフィール</RouterLink>
          </div>
        </div>

        <div class="stats stats-vertical w-full max-w-md bg-base-100 shadow lg:stats-horizontal">
          <div class="stat">
            <div class="stat-title">公開中の土台記事</div>
            <div class="stat-value text-primary">{{ recentBlogs.length }}</div>
          </div>
          <div class="stat">
            <div class="stat-title">移行方式</div>
            <div class="stat-value text-secondary">SPA</div>
          </div>
        </div>
      </div>
    </section>

    <section class="space-y-4">
      <div class="flex items-center justify-between">
        <h2 class="text-2xl font-semibold">最近のメモ</h2>
        <RouterLink class="link link-hover" to="/blogs">すべて見る</RouterLink>
      </div>

      <div class="grid gap-4 lg:grid-cols-3">
        <article v-for="blog in recentBlogs" :key="blog.slug" class="card bg-base-100 shadow-sm ring-1 ring-base-300">
          <div class="card-body gap-3">
            <div class="flex flex-wrap gap-2 text-sm text-base-content/60">
              <span>{{ formatDate(blog.publishedAt) }}</span>
              <div class="badge badge-outline" v-for="tag in blog.tags" :key="tag">{{ tag }}</div>
            </div>
            <h3 class="card-title text-xl">{{ blog.title }}</h3>
            <p class="leading-7 text-base-content/75">{{ blog.summary }}</p>
            <div class="card-actions justify-end">
              <RouterLink class="btn btn-sm btn-ghost" :to="{ name: 'blog-detail', params: { slug: blog.slug } }">
                詳細へ
              </RouterLink>
            </div>
          </div>
        </article>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import type { BlogPost } from '@/types/blog'
import { getRecentPosts } from '@/content/blogs'

const recentBlogs = ref<BlogPost[]>([])

onMounted(async () => {
  recentBlogs.value = await getRecentPosts(3)
})

const formatDate = (value: string) =>
  new Intl.DateTimeFormat('ja-JP', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  }).format(new Date(value))
</script>
