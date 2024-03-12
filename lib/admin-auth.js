import admin  from "firebase-admin";
import  serviceAccount from "./fireadmin.json";


export default function initializeAdmin() {

    if (!admin.apps.length) {
        admin.initializeApp({
            credential: admin.credential.cert(serviceAccount),
        });
    }
};

