import { getAxiosInstanceJsonServer } from "./api"

export const getAllTweets = (callback) => {
    getAxiosInstanceJsonServer().get("/tweets")
        .then(response => {
            const data = response.data;
            callback(true, data);
        }).catch(error => {
            callback(false, error);
        })
};
export const getHashTags = (callback) => {
    getAxiosInstanceJsonServer().get("/hashtags")
        .then(response => {
            const data = response.data;
            callback(true, data);
        }).catch(error => {
            callback(false, error);
        })
};
export const getUsers = (callback) => {
    getAxiosInstanceJsonServer().get("/users")
        .then(response => {
            const data = response.data;
            callback(true, data);
        }).catch(error => {
            callback(false, error);
        })
};
export const newTweetRequest = (data, callback) => {
    getAxiosInstanceJsonServer().post("/tweets",data)
        .then(response => {
            callback(true, data);
        }).catch(error => {
            callback(false, error);
        })
}