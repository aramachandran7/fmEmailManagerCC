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

export default createDonation
