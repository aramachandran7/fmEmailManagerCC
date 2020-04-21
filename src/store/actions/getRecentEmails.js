import db from '../../firebase.js'

export const getRecentEmails = (donation) => {
    return ((dispatch, getState) => {
        db.collection("Emails")
            // .where("status", "==", "potential")
            // .orderBy("createdAt", "desc")
            .limit(10)
            .get()
            .then(snapshot => {
                const items = snapshot.docs.map(doc => doc.data());
                console.log(items)
                dispatch({type: 'GET_RECENT_EMAILS', emails:items});
            }).catch((err) => {
                console.log("Error getting recent documents: ", err);
            });
    });
};

export default getRecentEmails
