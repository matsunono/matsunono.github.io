<template>
  <div class="min-h-screen bg-base-100 text-base-content">
    <div class="mx-auto flex min-h-screen max-w-6xl flex-col px-4 py-6 lg:px-6">
      <header class="navbar rounded-[2rem] border border-base-300 bg-base-100/80 px-4 shadow-sm backdrop-blur">
        <div class="flex-1">
          <RouterLink class="text-xl font-semibold tracking-wide" to="/">松ノさんメモ</RouterLink>
        </div>
        <nav class="flex gap-2">
          <RouterLink class="btn btn-ghost btn-sm" to="/blogs">Blogs</RouterLink>
          <RouterLink class="btn btn-ghost btn-sm" to="/profile">Profile</RouterLink>
        </nav>
      </header>

      <main class="flex-1 py-8">
        <RouterView />
      </main>

      <footer class="footer footer-center rounded-[2rem] border border-base-300 bg-base-200 p-6 text-sm text-base-content/70">
        <aside>
          <p>Vue + TypeScript + DaisyUI で移行中の個人メモサイトです。</p>
        </aside>
      </footer>
    </div>
  </div>
</template>
