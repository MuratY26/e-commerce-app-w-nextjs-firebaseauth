import admin  from "firebase-admin";
//import  serviceAccount  from "./fireadmin.json";

const pKey = process.env.FIREBASE_PRIVATE_KEY;
console.log(pKey,"******this is a test***");
export default function initializeAdmin() {

    if (!admin.apps.length) {
        admin.initializeApp({
            credential: admin.credential.cert({
                "project_id": process.env.FIREBASE_PROJECT_ID,
                "private_key": pKey,
                "client_email": process.env.FIREBASE_CLIENT_EMAIL,
            }),
        });
    }
};

