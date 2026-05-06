import type { BlogFrontmatter, BlogPost } from '@/types/blog'

/**
 * Markdown の --- frontmatter を手前でパースする。
 * YAML パーサーは使わず、シンプルな key: value 形式のみ対応。
 * 複雑なデータ（配列など）は JSON で書く。
 */
function parseFrontmatter(raw: string): { meta: BlogFrontmatter; body: string } {
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/)
  if (!match) {
    return { meta: {} as BlogFrontmatter, body: raw }
  }

  const frontRaw = match[1]
  const body = match[2]
  if (frontRaw === undefined || body === undefined) {
    return { meta: {} as BlogFrontmatter, body: raw }
  }

  const meta: Record<string, unknown> = {}

  for (const line of frontRaw.split('\n')) {
    const colonIndex = line.indexOf(':')
    if (colonIndex < 0) continue

    const key = line.slice(0, colonIndex).trim()
    const rawValue = line.slice(colonIndex + 1).trim()

    if (rawValue.startsWith('[')) {
      try {
        meta[key] = JSON.parse(rawValue)
      } catch {
        meta[key] = rawValue
      }
    } else {
      meta[key] = rawValue
    }
  }

  return { meta: meta as BlogFrontmatter, body }
}

/**
 * Markdown 文字列を HTML に変換する (marked が利用可能な場合はそちらを使い、
 * 未インストール時は pre タグにフォールバックする)。
 * インポートは非同期にして、marked が入った段階で自然に有効になる形にする。
 */
async function markdownToHtml(md: string): Promise<string> {
  try {
    const { marked } = await import('marked')
    return await (marked as (src: string) => Promise<string>)(md)
  } catch {
    return `<pre class="whitespace-pre-wrap leading-7">${md.replace(/</g, '&lt;')}</pre>`
  }
}

/**
 * 静的 Markdown ファイルを BlogPost に変換する。
 * Vite の import.meta.glob で raw 文字列として読み込んだものを渡す。
 */
export async function parseMarkdownPost(slug: string, rawMd: string): Promise<BlogPost> {
  const { meta, body } = parseFrontmatter(rawMd)
  const html = await markdownToHtml(body.trim())
  return { slug, ...meta, html }
}

/**
 * Vite の glob import から全 BlogPost を生成する。
 * 使い方:
 *   const files = import.meta.glob('@/content/posts/*.md', { as: 'raw', eager: true })
 *   const posts = await loadAllBlogPosts(files)
 */
export async function loadAllBlogPosts(
  files: Record<string, string>,
): Promise<BlogPost[]> {
  const posts: BlogPost[] = []

  for (const [filePath, rawMd] of Object.entries(files)) {
    const slug = filePath.split('/').pop()!.replace(/\.md$/, '')
    const post = await parseMarkdownPost(slug, rawMd)
    posts.push(post)
  }

  return posts.sort((a, b) => b.publishedAt.localeCompare(a.publishedAt))
}
