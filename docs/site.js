(() => {
  'use strict';
  const catalogs = window.RideLinkWebsiteLocales;
  const storageKey = 'ridelink.website.language';
  const selector = document.getElementById('site-language');
  const download = document.getElementById('download');
  let language = 'en';
  try {
    const saved = localStorage.getItem(storageKey);
    if (Object.hasOwn(catalogs, saved)) language = saved;
  } catch { /* Storage may be blocked; switching still works for this visit. */ }
  function render() {
    const strings = catalogs[language];
    const text = key => strings[key] ?? catalogs.en[key];
    document.documentElement.lang = language;
    selector.value = language;
    document.title = text('page.title');
    document.querySelector('meta[name="description"]').content = text('page.description');
    // Markup is limited to our trusted bundled translations (line breaks and emphasis).
    document.querySelectorAll('[data-i18n]').forEach(node => { node.innerHTML = text(node.dataset.i18n); });
    document.querySelectorAll('[data-i18n-label]').forEach(node => { node.setAttribute('aria-label', text(node.dataset.i18nLabel)); });
    // Website-only launch: no metadata or stale cache can activate a download.
    download.removeAttribute('href');
    download.setAttribute('aria-disabled', 'true');
  }
  selector.addEventListener('change', () => {
    language = Object.hasOwn(catalogs, selector.value) ? selector.value : 'en';
    try { localStorage.setItem(storageKey, language); } catch { /* Optional persistence. */ }
    render();
  });
  render();
})();
