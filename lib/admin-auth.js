import admin  from "firebase-admin";

 const serviceAccount = process.env.serviceAccount;

export default function initializeAdmin() {

    if (!admin.apps.length) {
        admin.initializeApp({
            credential: admin.credential.cert(serviceAccount),
        });
    }
};

