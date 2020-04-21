
//fix initState to be different from Firebase state
const initState = {
    emails: [
    // {id:'1', subject:'ppe masks', sendDate:'', sender:'Joe Biden', body: 'Hi! My name is Joe and I really wanted to donate some masks to your hosptial.', PPEquantity:40, PPEType:'n95masks'}, 
    // {id:'2', subject:'ppe masks', sendDate:'', sender:'KOBE', body: 'no maks for you', PPEquantity:200, PPEType:'gowns'}, 
    // {id:'3', subject:'ppe masks', sendDate:'', sender:'Maggie Jordan Biden', body: 'we have gowns pls take', PPEquantity:30, PPEType:'faceShields'}, 
    ]
}

const emailReducer = (state = initState, action) => {
    switch(action.type){
        case 'CREATE_DONATION':
            console.log('created Donation', action.donation)
            return state;
        case 'CREATE_DONATION_ERROR':
            console.log('ERROR in creating donation', action.err)
            return state;
            return {
                ...state,
                potentialEmails: action.emails
            };
        case "GET_EMAILS":
            console.log("START REDUCER")
            console.log(action.emails)
            console.log(action.status)
            console.log("END REDUCER")
            return {
                ...state,
                [action.status]: action.emails
            };
        case "GET_RECENT_EMAILS":
            return {
                ...state,
                recentEmails: action.emails
            };
        default:
            return state
    }
}

export default emailReducer
