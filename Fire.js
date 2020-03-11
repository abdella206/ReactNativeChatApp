import firebase from 'firebase'

class Fire {

    constructor() {

        this.init()
        this.checkAuth()

    }

    init = () => {

        if (!firebase.apps.length) {
            firebase.initializeApp({
                apiKey: "AIzaSyDzmWlNmTBZxLseC9HpXmG5JD8TznwqIzo",
                authDomain: "chatapp-60f3d.firebaseapp.com",
                databaseURL: "https://chatapp-60f3d.firebaseio.com",
                projectId: "chatapp-60f3d",
                storageBucket: "chatapp-60f3d.appspot.com",
                messagingSenderId: "603394106693",
                appId: "1:603394106693:web:f324648009850fdbf70a2c",
                measurementId: "G-8JDD08E6KC"
            });
        }
    };

    checkAuth = () => {
        firebase.auth().onAuthStateChanged(user => {
            if (!user) {
                firebase.auth().signInAnonymously();
            }
        });
    };

    send = messages => {
        messages.forEach(item => {
            const message = {
                text: item.text,
                timestamp: firebase.database.ServerValue.TIMESTAMP,
                user: item.user 
            }


            this.db.push(message)
        })
    }


    parse = message => {
        const { user, text, timestamp } = message.val();
        const { key: _id } = message;
        const createdAt = new Date(timestamp);

        return {
            _id,
            createdAt,
            text,
            user
        };
    };


    get = callback => {
        this.db.on('child_added', snapshot => callback(this.parse(snapshot)))
    }

    off() {
        this.db.off()
    }

    get db() {
        return firebase.database().ref('messages')
    }

    get uid() {
        return (firebase.auth().currentUser || {}).uid
    }
}

export default new Fire();