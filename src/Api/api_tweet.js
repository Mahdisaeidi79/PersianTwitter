import { getAxiosInstanceApi, getAxiosInstanceJsonServer } from "./api"

export const getAllTweets = (callback) => {
    getAxiosInstanceApi().post("getAllTweet")/* this is use for real backend */
        .then(response => {
            const data = response.data;
            callback(true, data);
        }).catch(error => {
            callback(false, error);
        })
};
/* export const getAllTweets = (callback) => { 
getAxiosInstanceJsonServer().post("getAllTweet")
        .then(response => {
            const data = response.data;
            callback(true, data);
        }).catch(error => {
            callback(false, error);
        })
}; */
export const getHashTags = (callback) => {
    getAxiosInstanceApi().get("getAllHashTags")
        .then(response => {
            const data = response.data;
            callback(true, data);
        }).catch(error => {
            callback(false, error);
        })
};
export const getUsers = (callback) => {
    getAxiosInstanceApi().get("getAllUser")
        .then(response => {
            const data = response.data;
            callback(true, data);
        }).catch(error => {
            callback(false, error);
        })
};
export const newTweetRequest = (data, callback) => {
    getAxiosInstanceApi().post("newTweet",data)
        .then(response => {
            callback(true, data);
        }).catch(error => {
            callback(false, error);
        })
}