// js/auth-manager.js
// Gère des comptes user localement
class AuthManager {
  constructor() {
    this.userKey = "mdCVA_currentUser";
    this.usersKey = "mdCVA_users";
    this.users = StorageUtil.get(this.usersKey) || [];
  }
  createUser(email, password) {
    if(!email || !password) return false;
    const existing = this.users.find(u => u.email === email);
    if(existing) return false;
    this.users.push({ email, password });
    StorageUtil.set(this.usersKey, this.users);
    localStorage.setItem(this.userKey, email);
    return true;
  }
  loginUser(email, password) {
    const user = this.users.find(u => u.email === email && u.password === password);
    if(!user) return false;
    localStorage.setItem(this.userKey, email);
    return true;
  }
  logout() {
    localStorage.removeItem(this.userKey);
  }
  getCurrentUser() {
    return localStorage.getItem(this.userKey) || null;
  }
}
