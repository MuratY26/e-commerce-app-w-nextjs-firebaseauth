import admin  from "firebase-admin";

const serviceAccount = JSON.parse(process.env.serviceAccount as string);

export default function initializeAdmin() {

    if (!admin.apps.length) {
        admin.initializeApp({
            credential: admin.credential.cert(serviceAccount),
        });
    }
};

