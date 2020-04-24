import db from '../../firebase';
import { COLLECTIONS } from '../constants/constants';
import axios from 'axios';

const PARSEURL = "https://us-central1-him-hack-274205.cloudfunctions.net/function-1";

export const parseEmailsCall = () => {
    return ((dispatch, getState) => {
        console.log("PARSING");
        axios.get(PARSEURL)
            .then(response => {
                console.log("Cloud function response: ", response); 
            })
            .catch(err => {
                console.log("Error while calling cloud function: ", err);
            });
    });
};
