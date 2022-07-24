<script lang="ts">
  import svelteLogo from "./assets/svelte.svg";
  import expressLogo from "./assets/express.png";
  import Counter from "./components/Counter.svelte";
  import ApiTest from "./components/ApiTest.svelte";
</script>

<main>
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite Logo" />
    </a>
    <a href="https://svelte.dev" target="_blank">
      <img src={svelteLogo} class="logo svelte" alt="Svelte Logo" />
    </a>
    <a href="https://expressjs.com" target="_blank">
      <img src={expressLogo} class="logo express" alt="Svelte Logo" />
    </a>
  </div>
  <h1>Vite + Svelte + Express</h1>

  <div class="cardGroup">
    <div class="card">
      <Counter />
    </div>

    <div class="card">
      <ApiTest />
    </div>
  </div>

  <p>
    Check out <a href="https://github.com/sveltejs/kit#readme" target="_blank"
      >SvelteKit</a
    >, the official Svelte app framework powered by Vite!
  </p>

  <p class="read-the-docs">Click on the Vite and Svelte logos to learn more</p>
</main>

<style lang="scss">
  .cardGroup {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-top: 2rem;
    .card {
      max-width: 120px;
      word-break: break-all;
    }
  }

  .logo {
    height: 6em;
    padding: 1.5em;
    will-change: filter;
    transition: 0.3s;
    &:hover {
      filter: drop-shadow(0 0 2em #646cff);
    }
    &.svelte:hover {
      filter: drop-shadow(0 0 2em #f34105);
    }
    &.express:hover {
      filter: drop-shadow(0 0 2em #696969);
    }
  }
  .read-the-docs {
    color: #888;
  }

  h1 {
    color: white;
    transition: 0.3s;
    background: linear-gradient(
      90deg,
      #696969,
      #8be9fd,
      #50fa7b,
      #ffb86c,
      #ff79c6,
      #bd93f9,
      #646cff
    );
    background-clip: text;
    &:hover {
      color: transparent;
    }
  }
</style>
