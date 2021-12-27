const butInstall = document.getElementById('buttonInstall');

// does this make the install button appear by default?
// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
    window.deferredPrompt = event;
    butInstall.classList.toggle('hidden', false)
});

// When the install button is clicked does this make the button hide?
// TODO: Implement a click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {
    const promptEvent = window.deferredPrompt;

  if (!promptEvent) {
   return;
  }

  // Show prompt
  promptEvent.prompt();
  
  // Reset the deferred prompt variable, it can only be used once.
  window.deferredPrompt = null;
  
  butInstall.classList.toggle('hidden', true);
});

// Exactly how does the appinstalled event work?
// TODO: Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
     // Clear prompt
  window.deferredPrompt = null;
});
