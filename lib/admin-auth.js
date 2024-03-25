
import admin  from "firebase-admin";
//import  serviceAccount  from "./fireadmin.json";

//const pKey = process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, '\n');

const firebase_private_key_b64 = Buffer.from(process.env.FIREBASE_PRIVATE_KEY, 'base64');
const firebase_private_key = firebase_private_key_b64.toString('utf8');
const config = {
    "project_id": process.env.FIREBASE_PROJECT_ID,
    "private_key": firebase_private_key,
    "client_email": process.env.FIREBASE_CLIENT_EMAIL,
}

export default function initializeAdmin() {

    if (!admin.apps.length) {
        console.log(config,"******this is a test***");
        admin.initializeApp({
            credential: admin.credential.cert(config),
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