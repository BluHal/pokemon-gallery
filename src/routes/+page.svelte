<script>
  // Replace with your actual asset paths
  const heroImage = "hero-section.jpg";
  const galleryPreviewImages = [
    "https://images.pokemontcg.io/sv3pt5/198_hires.png",
    "https://images.pokemontcg.io/sv3pt5/199_hires.png",
    "https://images.pokemontcg.io/sv3pt5/200_hires.png",
    "https://images.pokemontcg.io/sv3pt5/201_hires.png",
  ];
</script>

<div
  class="min-h-screen bg-gradient-to-b from-blue-900 via-blue-800 to-blue-900 text-gray-100"
>
  <!-- Hero Section -->
  <section class="relative">
    <img
      src={heroImage}
      alt="Gallery Hero"
      class="w-full h-96 object-cover shadow-lg"
    />
    <div
      class="absolute inset-0 bg-gradient-to-b from-transparent to-blue-900 opacity-80"
    ></div>
    <div
      class="absolute inset-0 flex flex-col justify-center items-center text-white px-5 text-center"
    >
      <h1 class="text-4xl md:text-5xl font-bold tracking-wide">
        A Gallery of Pokémon Treasures
      </h1>
      <p class="mt-4 text-lg max-w-prose">
        Immerse yourself in a world of rare and stunning Pokémon cards,
        elegantly showcased.
      </p>
      <a
        href="/collection"
        class="mt-6 px-10 py-3 bg-yellow-400 text-gray-900 font-medium text-lg rounded-md shadow hover:bg-yellow-300 transition"
      >
        Create Your Collection
      </a>
    </div>
  </section>

  <!-- Features Section -->
  <section class="py-16 px-8 md:px-16 bg-blue-800 text-gray-200">
    <h2
      class="text-3xl font-semibold text-center tracking-wide uppercase text-yellow-400"
    >
      Why Join?
    </h2>
    <div class="mt-12 grid gap-10 md:grid-cols-3">
      <div class="text-center">
        <div
          class="w-16 h-16 mx-auto bg-blue-700 rounded-full flex items-center justify-center shadow-md"
        >
          <span class="text-2xl text-yellow-400 font-semibold">🎴</span>
        </div>
        <h3 class="mt-6 text-xl font-medium">Curate Your Collection</h3>
        <p class="mt-2 text-gray-300">
          Showcase your most prized cards in a stunning virtual gallery.
        </p>
      </div>
      <div class="text-center">
        <div
          class="w-16 h-16 mx-auto bg-blue-700 rounded-full flex items-center justify-center shadow-md"
        >
          <span class="text-2xl text-yellow-400 font-semibold">✨</span>
        </div>
        <h3 class="mt-6 text-xl font-medium">Discover Rarities</h3>
        <p class="mt-2 text-gray-300">
          Unlock packs to find rare and valuable Pokémon treasures.
        </p>
      </div>
      <div class="text-center">
        <div
          class="w-16 h-16 mx-auto bg-blue-700 rounded-full flex items-center justify-center shadow-md"
        >
          <span class="text-2xl text-yellow-400 font-semibold">🏆</span>
        </div>
        <h3 class="mt-6 text-xl font-medium">Compete & Collect</h3>
        <p class="mt-2 text-gray-300">
          Build your collection and rise to the top of the community.
        </p>
      </div>
    </div>
  </section>

  <!-- Gallery Preview -->
  <section class="py-16 px-8 bg-blue-900">
    <h2
      class="text-3xl font-semibold text-center tracking-wide uppercase text-yellow-400"
    >
      Gallery Preview
    </h2>
    <div class="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
      {#each galleryPreviewImages as image}
        <div class="group relative rounded-lg overflow-hidden shadow-lg">
          <img
            src={image}
            alt="Card Preview"
            class="w-full h-full object-cover transition transform group-hover:scale-105"
          />
          <div
            class="absolute inset-0 bg-gradient-to-b from-transparent to-blue-900 opacity-0 group-hover:opacity-80 transition"
          ></div>
        </div>
      {/each}
    </div>
  </section>

  <!-- Footer -->
  <footer class="py-10 bg-blue-900 text-gray-400">
    <div class="max-w-7xl mx-auto text-center">
      <p class="text-sm">
        &copy; {new Date().getFullYear()} Pokémon Art Gallery. All rights reserved.
      </p>
      <nav class="mt-4 space-x-6">
        <a href="/login" class="hover:underline">Login</a>
        <a href="/signup" class="hover:underline">Sign Up</a>
        <a href="/about" class="hover:underline">About Us</a>
      </nav>
    </div>
  </footer>
</div>
