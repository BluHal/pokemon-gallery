<script lang="ts">
  import { page } from "$app/state";

  interface PageState {
    cards: PokemonCard[];
  }

  let cards: PokemonCard[];

  let revealedCards = new Map<string, boolean>();

  let isOneCardFullScreen = false;

  function fullScreenCard(id: string, index: number) {
    const isCardRevealed = revealedCards.get(`${id}_${index}`);

    revealedCards = new Map(revealedCards);
    revealedCards.set(`${id}_${index}`, !isCardRevealed);
    isOneCardFullScreen = !isCardRevealed;
  }

  $: {
    const pageState = page.state as PageState;
    cards = pageState.cards;
  }
</script>

<main
  class="p-8 h-screen flex justify-center overflow-hidden items-center bg-gradient-to-b from-[#cbddee] to-[#82cee7]"
>
  {#if cards.length === 0}
    <h1>Loading...</h1>
  {:else}
    <div class="flex flex-col justify-center items-center h-full gap-4">
      <div class="flex justify-center items-end w-full h-1/2 gap-4">
        <button
          type="button"
          class="lg:h-full md:h-3/5 h-2/5 min-w-[120px] {revealedCards.get(
            `${cards[0].id}_0`
          )
            ? 'full-screen-card'
            : ''}"
          on:click={() => fullScreenCard(cards[0].id, 0)}
        >
          <img
            src={cards[0].images.large}
            alt={cards[0].name}
            class="h-full object-contain"
          />
        </button>
        <button
          type="button"
          class="lg:h-full md:h-3/5 h-2/5 min-w-[120px] {revealedCards.get(
            `${cards[1].id}_1`
          )
            ? 'full-screen-card'
            : ''}"
          on:click={() => fullScreenCard(cards[1].id, 1)}
        >
          <img
            src={cards[1].images.large}
            alt={cards[1].name}
            class="h-full object-contain"
          />
        </button>
        <button
          type="button"
          class="lg:h-full md:h-3/5 h-2/5 min-w-[120px] {revealedCards.get(
            `${cards[2].id}_2`
          )
            ? 'full-screen-card'
            : ''}"
          on:click={() => fullScreenCard(cards[2].id, 2)}
        >
          <img
            src={cards[2].images.large}
            alt={cards[2].name}
            class="h-full object-contain"
          />
        </button>
      </div>
      <div class="flex justify-center items-start w-full h-1/2 gap-4">
        <button
          type="button"
          class="lg:h-full md:h-3/5 h-2/5 min-w-[120px] {revealedCards.get(
            `${cards[3].id}_3`
          )
            ? 'full-screen-card'
            : ''}"
          on:click={() => fullScreenCard(cards[3].id, 3)}
        >
          <img
            src={cards[3].images.large}
            alt={cards[3].name}
            class="h-full object-contain"
          />
        </button>
        <button
          type="button"
          class="lg:h-full md:h-3/5 h-2/5 min-w-[120px] {revealedCards.get(
            `${cards[4].id}_4`
          )
            ? 'full-screen-card'
            : ''}"
          on:click={() => fullScreenCard(cards[4].id, 4)}
        >
          <img
            src={cards[4].images.large}
            alt={cards[4].name}
            class="h-full object-contain"
          />
        </button>
      </div>
    </div>
    <div class="backdrop {!isOneCardFullScreen ? 'hidden' : ''}"></div>

    <div class="absolute top-0 left-0">
      <a
        href="/collection"
        class="rounded-full bg-white p-4 shadow-lg"
        aria-label="collection"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          class="w-6 h-6 text-black"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </a>
    </div>
  {/if}
</main>

<style lang="postcss">
  .backdrop {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    backdrop-filter: blur(10px);
    z-index: 10;
  }

  .full-screen-card {
    position: absolute;
    display: flex;
    justify-content: center;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 1.25rem;
    z-index: 20;
    animation-name: go-full-screen;
    animation-duration: 0.5s;
    height: 100%;
    width: 100%;
  }

  @keyframes go-full-screen {
    0% {
      position: block;
      height: 50%;
      width: 50%;
    }
    100% {
      height: 100%;
      width: 100%;
    }
  }
</style>
