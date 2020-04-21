import db from '../../firebase.js'

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

export const getPotentialEmails = () => {
    return ((dispatch, getState) => {
        db.collection("Emails")
            .where("status", "==", "potential")
            // .orderBy("createdAt", "desc")
            .get()
            .then(snapshot => {
                const items = snapshot.docs.map(doc => doc.data());
                console.log(items)
                dispatch({type: 'GET_POTENTIAL_EMAILS', emails:items});
            }).catch((err) => {
                console.log("Error getting recent documents: ", err);
            });
    });
};

export const getConfirmedEmails = () => {
    return ((dispatch, getState) => {
        db.collection("Emails")
            .where("status", "==", "confirmed")
            // .orderBy("createdAt", "desc")
            .get()
            .then(snapshot => {
                const items = snapshot.docs.map(doc => doc.data());
                console.log(items)
                dispatch({type: 'GET_CONFIRMED_EMAILS', emails:items});
            }).catch((err) => {
                console.log("Error getting recent documents: ", err);
            });
    });
};

export const getRecentEmails = () => {
    return ((dispatch, getState) => {
        db.collection("Emails")
            .where("status", "==", "potential")
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
