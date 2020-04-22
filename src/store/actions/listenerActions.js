import db from '../../firebase.js'
const COLLECTION = "Emails";
var unsubscribe = null;

export const setEmailListener = (status) => {
    return ((dispatch, getState) => {
        unsubscribe = db.collection(COLLECTION)
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
    });
};

export const removeEmailListener = () => {
    return ((dispatch, getState) => {
        if (!unsubscribe) {
            unsubscribe();
            unsubscribe = null;
        }
    });
};
