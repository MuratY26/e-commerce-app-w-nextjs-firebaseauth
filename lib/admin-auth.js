
import admin  from "firebase-admin";
//import  serviceAccount  from "./fireadmin.json";

//const pKey = process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, '\n');

const pKey = process.env.FIREBASE_PRIVATE_KEY;

export default function initializeAdmin() {

    if (!admin.apps.length) {
        console.log(pKey)
        admin.initializeApp({
            credential: admin.credential.cert({
                "project_id": process.env.FIREBASE_PROJECT_ID,
                "private_key": pKey,
                "client_email": process.env.FIREBASE_CLIENT_EMAIL,
            }),
        });
    }
};


/* export default function initializeAdmin() {

    if (!admin.apps.length) {
        admin.initializeApp({
            credential: admin.credential.cert({
                "project_id": serviceAccount.project_id,
                "private_key": serviceAccount.private_key,
                "client_email": serviceAccount.client_email,
            }),
        });
    }
}; */