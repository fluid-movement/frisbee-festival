<script lang="ts">
  import { onMount } from 'svelte';
  import { page } from '$app/state';
  import * as AlertDialog from '$lib/components/ui/alert-dialog';

  let open = $state(false);

  const isEnglishSite = $derived(
    page.url.pathname.split('/').filter(Boolean)[0] === 'en'
  );

  onMount(() => {
    if (localStorage.getItem('lang-checked')) return;
    localStorage.setItem('lang-checked', 'true');

    const isGermanBrowser = navigator.language.startsWith('de');
    const currentIsEn = page.url.pathname.split('/').filter(Boolean)[0] === 'en';

    if ((!currentIsEn && !isGermanBrowser) || (currentIsEn && isGermanBrowser)) {
      setTimeout(() => { open = true; }, 600);
    }
  });

  function getTargetUrl(): string {
    const segments = page.url.pathname.split('/').filter(Boolean);
    if (segments[0] === 'en') segments.shift();
    const rest = segments.length ? '/' + segments.join('/') : '/';
    return isEnglishSite ? rest : `/en${rest}`;
  }

  function switchLanguage() {
    open = false;
    window.location.href = getTargetUrl();
  }
</script>

<AlertDialog.Root bind:open>
  <AlertDialog.Content>
    <AlertDialog.Header>
      <AlertDialog.Title>
        {isEnglishSite ? 'Also available in German' : 'Also available in English'}
      </AlertDialog.Title>
      <AlertDialog.Description>
        Would you like to switch languages?
      </AlertDialog.Description>
    </AlertDialog.Header>
    <AlertDialog.Footer>
      <AlertDialog.Cancel>Stay</AlertDialog.Cancel>
      <AlertDialog.Action onclick={switchLanguage}>
        {isEnglishSite ? 'Switch to German →' : 'Switch to English →'}
      </AlertDialog.Action>
    </AlertDialog.Footer>
  </AlertDialog.Content>
</AlertDialog.Root>
