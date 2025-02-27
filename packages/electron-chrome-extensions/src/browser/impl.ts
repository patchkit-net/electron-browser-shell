/** App-specific implementation details for extensions. */
export interface ChromeExtensionImpl {
  createTab?(
    extension: Electron.Extension,
    details: chrome.tabs.CreateProperties
  ): Promise<[Electron.WebContents, Electron.BrowserWindow]>
  selectTab?(tab: Electron.WebContents, window: Electron.BrowserWindow): void
  removeTab?(tab: Electron.WebContents, window: Electron.BrowserWindow): void

  /**
   * Populate additional details to a tab descriptor which gets passed back to
   * background pages and content scripts.
   */
  assignTabDetails?(details: chrome.tabs.Tab, tab: Electron.WebContents): void

  createWindow?(extension: Electron.Extension, details: chrome.windows.CreateData): Promise<Electron.BrowserWindow>
  removeWindow?(window: Electron.BrowserWindow): void
}
