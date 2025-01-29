// js/storage.js
// Petit wrapper de localStorage
class StorageUtil {
  static set(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
  }
  static get(key) {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : null;
  }
  static remove(key) {
    localStorage.removeItem(key);
  }
}
