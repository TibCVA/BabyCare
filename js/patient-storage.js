// js/visits-manager.js
// Gère la liste des visites en localStorage

class VisitsManager {
    constructor() {
        this.key = "lightningDebriefVisits";
    }

    loadVisits() {
        const raw = localStorage.getItem(this.key);
        return raw ? JSON.parse(raw) : [];
    }

    saveVisit(visit) {
        const visits = this.loadVisits();
        visits.push(visit);
        localStorage.setItem(this.key, JSON.stringify(visits));
    }
}