const initState = {
    emails: [
    {id:'1', subject:'ppe masks', sendDate:'', sender:'Joe Biden', body: 'hahahaa', PPEquantity:15, PPEType:'n95'}, 
    {id:'2', subject:'ppe masks', sendDate:'', sender:'KOBE', body: 'no maks for you', PPEquantity:200, PPEType:'gowns'}, 
    {id:'3', subject:'ppe masks', sendDate:'', sender:'Maggie Jordan Biden', body: 'we have gowns pls take', PPEquantity:30, PPEType:'faceShields'}, 
    ]
}

const emailReducer = (state = initState, action) => {
    switch(action.type){
        case 'CREATE_DONATION':
            console.log('created Donation', action.donation)
            return state
        case 'CREATE_DONATION_ERROR':
            console.log('ERROR in creating donation', action.err)
            return state
        default:
            return state
    }
}

export default emailReducer