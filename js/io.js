/* io.js – export/import JSON backup */
window.IO = (() => {

  function exportToFile() {
    const json = Store.exportJSON();
    const blob = new Blob([json], { type: 'application/json' });
    const url  = URL.createObjectURL(blob);
    const a    = document.createElement('a');
    const date = new Date().toISOString().slice(0, 10);
    a.href     = url;
    a.download = `medreview-backup-${date}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    UI.toast('Backup downloaded', 'success');
  }

  function importFromFile(file) {
    if (!file) return;
    const reader = new FileReader();
    reader.onload = e => {
      try {
        Store.importJSON(e.target.result);
        // Re-render everything from scratch
        const settings = Store.getSettings();
        UI.applyDarkMode(settings.darkMode);
        UI.applySidebar(settings.sidebarOpen !== false);
        Render.stepTabs();
        Render.sidebar();
        Render.cardList();
        UI.toast('Backup restored successfully', 'success');
      } catch (err) {
        UI.toast('Import failed: ' + err.message, 'error');
      }
    };
    reader.readAsText(file);
  }

  function init() {
    document.getElementById('btn-export').addEventListener('click', exportToFile);

    document.getElementById('btn-import').addEventListener('click', () => {
      UI.showModal({
        title: 'Import Backup',
        body: '<p>Importing will <b>replace all current data</b> with the backup file. Make sure to export a backup first if needed.</p>',
        confirmText: 'Choose File…',
        onConfirm: () => document.getElementById('import-file').click()
      });
    });

    document.getElementById('import-file').addEventListener('change', e => {
      importFromFile(e.target.files[0]);
      e.target.value = ''; // reset so same file can be re-imported
    });
  }

  return { init, exportToFile, importFromFile };
})();
