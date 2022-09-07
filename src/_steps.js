/* 
* steps to use firebase
* 1. Create a project on conssole.firebase.google.com
* 2. install firebase npm install 
* 3. Register 
* 4. copy firebase init with config from firebase project settings into a file firebase.init.js
* 5. export default app from firebase.init.js
* 6. import getAuth from firebase/auth and create const auth = getAuth(app) in app.js
* 7. import app firebase init.js into your app.js
* 8. turn on google authetication (firebase > autehntication > google sign in)
* 9. create google provider
* 10. use signInWithPopup and pass auth and provider
* 11. handle .then (if successful) and catch error (if error)
*/