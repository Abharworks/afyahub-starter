import { isPlatformBrowser } from '@angular/common';
import { Injectable, PLATFORM_ID, inject } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  private readonly platformId = inject(PLATFORM_ID);

  constructor() {}

  /**
   * Gets the value associated with the specified key from local storage.
   *
   * @param key - The key to retrieve the value for.
   * @returns The value associated with the key, or null if the key does not exist.
   */
  getItem(key: string) {
    if (!isPlatformBrowser(this.platformId)) return;
    return localStorage.getItem(key);
  }

  /**
   * Adds the specified key and value to local storage.
   *
   * @param key - The key to store the value under.
   * @param value - The value to store.
   */
  setItem(key: string, value: string) {
    if (!isPlatformBrowser(this.platformId)) return;
    localStorage.setItem(key, value);
  }

  /**
   * Removes the specified key from local storage.
   *
   * @param key - The key of the item to remove.
   */

  removeItem(key: string) {
    if (!isPlatformBrowser(this.platformId)) return;
    localStorage.removeItem(key);
  }

  /**
   * Removes all key/value pairs from local storage.
   */
  clear() {
    if (!isPlatformBrowser(this.platformId)) return;
    localStorage.clear();
  }
}
