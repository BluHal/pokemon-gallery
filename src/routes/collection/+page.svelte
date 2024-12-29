<script lang="ts">
  export let data: { collection: Collection };
</script>

<main class="p-4">
  <div class="grid grid-cols-3 gap-4">
    {#each data.collection.cardIds as cardId}
      <div class="h-full">
        <img src={cardId.imageUrl} alt="" class="h-full" />
      </div>
    {/each}
  </div>
</main>

<footer>
  <div class="cursor-pointer">
    <a href="/pack-opening" data-sveltekit-preload-data>OPEN PACK</a>
  </div>
</footer>
