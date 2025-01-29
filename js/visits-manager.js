// js/visits-manager.js
// Stocke les visites en localStorage
class VisitsManager {
  constructor() {
    this.visitsKey = "mdCVA_visits";
  }
  loadVisits() {
    const data = StorageUtil.get(this.visitsKey);
    return data || [];
  }
  saveVisit(visitObj) {
    const all = this.loadVisits();
    all.push(visitObj);
    StorageUtil.set(this.visitsKey, all);
  }
}
