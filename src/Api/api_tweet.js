import { getAxiosInstance } from "./api"

export const getAllTweets = (callback) => {
    getAxiosInstance().get("/tweets")
        .then(response => {
            const data = response.data;
            callback(true, data);
        }).catch(error => {
            callback(false, error);
        })
};
export const getHashTags = (callback) => {
    getAxiosInstance().get("/hashtags")
        .then(response => {
            const data = response.data;
            callback(true, data);
        }).catch(error => {
            callback(false, error);
        })
};
export const getUsers = (callback) => {
    getAxiosInstance().get("/users")
        .then(response => {
            const data = response.data;
            callback(true, data);
        }).catch(error => {
            callback(false, error);
        })
};
export const newTweetRequest = (data, callback) => {
    getAxiosInstance().post("/tweets",data)
        .then(response => {
            callback(true, data);
        }).catch(error => {
            callback(false, error);
        })
}