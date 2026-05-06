import type { BlogPost } from '@/types/blog'
import { loadAllBlogPosts } from '@/utils/markdown'

// Vite のビルド時に src/content/posts/*.md を raw 文字列として全読み込みする
const rawFiles = import.meta.glob<string>('@/content/posts/*.md', {
  query: '?raw',
  import: 'default',
  eager: true,
})

// 非同期パースを同期的に扱うため、起動時にまとめて初期化する promise を公開する
let _cachedPosts: BlogPost[] | null = null

export async function getAllPosts(): Promise<BlogPost[]> {
  if (_cachedPosts) return _cachedPosts
  _cachedPosts = await loadAllBlogPosts(rawFiles as Record<string, string>)
  return _cachedPosts
}

export async function getRecentPosts(limit = 3): Promise<BlogPost[]> {
  const posts = await getAllPosts()
  return posts.slice(0, limit)
}

export async function getPostBySlug(slug: string): Promise<BlogPost | undefined> {
  const posts = await getAllPosts()
  return posts.find((p) => p.slug === slug)
}
