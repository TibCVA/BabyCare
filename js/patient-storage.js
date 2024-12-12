// patient-storage.js
const PatientStorageManager = {
    CONSTRAINTS: {
        maxFileSize: 10 * 1024 * 1024,
        maxTotalSize: 50 * 1024 * 1024,
        allowedTypes: [
            'image/jpeg',
            'image/png',
            'image/gif',
            'image/heic',
            'application/pdf'
        ]
    },

    async initDB() {
        ...
    },

    async saveDocuments(documents) {
        ...
    },

    async loadDocuments() {
        ...
    },

    getBase64Size(base64String) {
        ...
    },

    validateDocument(doc) {
        ...
    }
};

if (!window.PatientStorageManager) {
    window.PatientStorageManager = PatientStorageManager;
}

