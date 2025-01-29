// js/auth-manager.js

class AuthManager {
    constructor() {
        this.storageKey = "lightningDebriefUsers"; // stocke la liste des users
        this.currentUserKey = "lightningDebriefCurrentUser";
        this.users = this.loadUsers();
    }

    loadUsers() {
        const raw = localStorage.getItem(this.storageKey);
        return raw ? JSON.parse(raw) : [];
    }

    saveUsers() {
        localStorage.setItem(this.storageKey, JSON.stringify(this.users));
    }

    createUser(email, password) {
        if(!email || !password) return false;
        // Vérifie si l'email existe déjà
        const existing = this.users.find(u => u.email === email);
        if(existing) {
            return false;
        }
        const newUser = {
            email: email,
            password: password
        };
        this.users.push(newUser);
        this.saveUsers();
        // Connecte directement l'utilisateur
        localStorage.setItem(this.currentUserKey, email);
        return true;
    }

    loginUser(email, password) {
        const user = this.users.find(u => u.email === email && u.password === password);
        if(!user) {
            return false;
        }
        // On stocke l'utilisateur actuel
        localStorage.setItem(this.currentUserKey, email);
        return true;
    }

    logout() {
        localStorage.removeItem(this.currentUserKey);
    }

    getCurrentUser() {
        return localStorage.getItem(this.currentUserKey);
    }
}
