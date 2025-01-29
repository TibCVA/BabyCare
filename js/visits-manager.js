// js/visits-manager.js
class VisitsManager {
  constructor() {
    this.visitsKey = "mdCVA_visits";
  }

  loadVisits() {
    const data = StorageUtil.get(this.visitsKey);
    return data || [];
  }

  saveVisit(visitObj) {
    const visits = this.loadVisits();
    visits.push(visitObj);
    StorageUtil.set(this.visitsKey, visits);
  }
}