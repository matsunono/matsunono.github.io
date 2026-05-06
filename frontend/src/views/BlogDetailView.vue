<template>
  <div v-if="loading" class="flex justify-center py-20">
    <span class="loading loading-spinner loading-lg text-primary"></span>
  </div>

  <article v-else-if="blogPost" class="space-y-8">
    <header class="rounded-[2rem] bg-base-200 px-8 py-12 shadow-xl">
      <div class="flex flex-wrap items-center gap-2 text-sm text-base-content/60">
        <span>{{ formatDate(blogPost.publishedAt) }}</span>
        <div class="badge badge-outline" v-for="tag in blogPost.tags" :key="tag">{{ tag }}</div>
      </div>
      <h1 class="mt-4 text-4xl font-bold tracking-tight lg:text-5xl">{{ blogPost.title }}</h1>
      <p class="mt-4 max-w-3xl leading-8 text-base-content/75">{{ blogPost.summary }}</p>
      <div class="mt-6 flex flex-wrap gap-3">
        <!-- <RouterLink class="btn btn-primary" to="/blogs">一覧へ戻る</RouterLink> -->
        <a
          v-if="blogPost.legacyPath"
          class="btn btn-outline"
          :href="blogPost.legacyPath"
          target="_blank"
          rel="noreferrer"
        >
          旧HTMLを見る
        </a>
      </div>
    </header>

    <section class="card bg-base-100 shadow-sm ring-1 ring-base-300">
      <div
        class="card-body prose prose-slate max-w-none"
        v-html="blogPost.html"
      ></div>
    </section>
  </article>

  <section v-else class="hero rounded-[2rem] bg-base-200 py-16 shadow-xl">
    <div class="hero-content text-center">
      <div class="max-w-md space-y-4">
        <h1 class="text-3xl font-bold">記事が見つかりません</h1>
        <p class="leading-7 text-base-content/75">
          指定された slug に対応する記事がまだありません。まずは一覧から記事を選んでください。
        </p>
        <RouterLink class="btn btn-primary" to="/blogs">記事一覧へ</RouterLink>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, watch, onMounted } from 'vue'
import type { BlogPost } from '@/types/blog'
import { getPostBySlug } from '@/content/blogs'

const props = defineProps<{
  slug: string
}>()

const blogPost = ref<BlogPost | undefined>(undefined)
const loading = ref(true)

async function load(slug: string) {
  loading.value = true
  blogPost.value = await getPostBySlug(slug)
  loading.value = false
}

onMounted(() => load(props.slug))
watch(() => props.slug, (slug) => load(slug))

const formatDate = (value: string) =>
  new Intl.DateTimeFormat('ja-JP', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  }).format(new Date(value))
</script>
