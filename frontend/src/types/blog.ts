export type BlogPost = {
  slug: string
  title: string
  summary: string
  publishedAt: string
  tags: string[]
  legacyPath?: string
  html: string
}

export type BlogFrontmatter = {
  title: string
  summary: string
  publishedAt: string
  tags: string[]
  legacyPath?: string
}
