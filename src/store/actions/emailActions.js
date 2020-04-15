export const createDonation = (donation) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        // FOR TESTING
        // console.log("shouldn't be undefined", donation)
        // dispatch({type: 'CREATE_DONATION',donation:donation})
        // make async call to db

        const firestore = getFirestore();
        firestore.collection('confirmedDonations').add({
            PPEType:donation.PPEType,
            PPEquantity:donation.PPEquantity,
            addedBy: 'AdiRamachandran',
            createdAt: new Date()
        }).then(()=> {
            dispatch({type: 'CREATE_DONATION',donation:donation})
        }).catch((err)=>{
            dispatch({type:'CREATE_DONATION_ERROR', err})
        }
        )

    }
}

export default createDonation