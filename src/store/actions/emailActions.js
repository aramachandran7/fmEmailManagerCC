import db from '../../firebase.js'
const COLLECTION = "Emails"

export const createDonation = (donation) => {
    return ({dispatch, getState}) => {
        db.collection("donations").add({
            PPEType:donation.PPEType,
            PPEquantity:donation.PPEquantity,
            createdAt: new Date()
        }).then(()=> {
            dispatch({type: 'CREATE_DONATION',donation:donation})
        }).catch((err)=>{
            dispatch({type:'CREATE_DONATION_ERROR', err})
        })
    }
}

export const setStatus = (email, status) => {
    return ((dispatch, getState) => {
        db.collection(COLLECTION).doc(email.id)
            .update({
                status: status
            })
            .then(() => {
                
            }).catch(err => {
                console.log("Error updating status: ", err);
            });
    });
};

export const getEmails = (status) => {
    return ((dispatch, getState) => {
        db.collection(COLLECTION)
            .where("status", "==", status)
        // .orderBy("createdAt", "desc")
            .get()
            .then(snapshot => {
                const items = snapshot.docs.map(doc => ({
                    ...doc.data(),
                    id: doc.id
                }));
                dispatch({
                    type: 'GET_EMAILS',
                    emails: items,
                    status: status
                });
            }).catch((err) => {
                console.log("Error getting recent documents: ", err);
            });
    });
};

export const getRecentEmails = () => {
    return ((dispatch, getState) => {
        db.collection(COLLECTION)
            .where("status", "==", "potential")
        // .orderBy("createdAt", "desc")
            .limit(10)
            .get()
            .then(snapshot => {
                const items = snapshot.docs.map(doc => ({
                    ...doc.data(),
                    id: doc.id
                }));
                dispatch({type: 'GET_RECENT_EMAILS', emails:items});
            }).catch((err) => {
                console.log("Error getting recent documents: ", err);
            });
    });
};
