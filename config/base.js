import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
const configs = require("./index.json");

const config = {
  apiKey: configs.firebase.apiKey,
  authDomain: configs.firebase.authDomain,
  databaseURL: configs.firebase.databaseURL,
  projectId: configs.firebase.projectId,
  storageBucket: configs.firebase.storageBucket,
  messagingSenderId: configs.firebase.messagingSenderId,
  appId: configs.firebase.appId,
};

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}
export const googleProvider = new firebase.auth.GoogleAuthProvider();
export const facebookProvider = new firebase.auth.FacebookAuthProvider();

export default firebase.auth();
module.exports = {
  async redirects() {
    return [
      {
        source: '/how-to-become-seller',
        destination: '/views/Containers/Footer/widgets/seller',
        permanent: false,
      },
    ]
  },
}
