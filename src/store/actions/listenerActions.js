import db from '../../firebase.js'
const COLLECTION = "Emails";
var unsubscribes = [];

export const setEmailListener = (status) => {
    return ((dispatch, getState) => {
        const newUnsubscribe = db.collection(COLLECTION)
            .where("status", "==", status)
        // .orderBy("createdAt", "desc")
            .onSnapshot(snapshot => {
                const items = snapshot.docs.map(doc => ({
                    ...doc.data(),
                    id: doc.id
                }));
                dispatch({
                    type: 'GET_EMAILS',
                    emails: items,
                    status: status
                });
            });
        unsubscribes.push(newUnsubscribe);
    });
};

export const removeEmailListener = () => {
    return ((dispatch, getState) => {
        if (unsubscribes.length != 0) {
            unsubscribes[0]();
            unsubscribes.shift();
        }
    });
};
