<script lang="ts">
  import { onMount } from "svelte";
  import { UserPresenter } from "shared/user/user.presenter";

  const userPresenter = new UserPresenter();
  let viewModel = [];

  onMount(async () => {
    await userPresenter.load((vm: unknown[]) => {
      viewModel = vm;
    });
  });
  
</script>

<div>
  <ul>
  {#each viewModel as user}
   <li>{user.firstName}</li> 
  {:else}
    <li>Loading...</li>
  {/each}
  </ul>
</div>

<style>
</style>
