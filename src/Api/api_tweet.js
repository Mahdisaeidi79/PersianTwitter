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
export const getAllTweetsByHashtag = (hashTag,callback) => {
    getAxiosInstanceApi().post("getAllTweet" , {hashTag})
        .then(response => {
            const data = response.data;
            callback(true, data);
        }).catch(error => {
            callback(false, error);
        })
};
export const getAllTweetsByUser = (user,callback) => {
    getAxiosInstanceApi().post("getAllTweet" , {user})
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
export const likeTweetRequest = (id, callback) => {
    getAxiosInstanceApi().get("likeTweet/"+id)
      .then(response => {
        const data = response.data;
        callback(true, data);
      }).catch(error => {
      console.log(error);
      callback(false, error);
    });
  };
export const getProfileRequest =  (callback) => {
    getAxiosInstanceApi().get("getProfile")
      .then(response => {
        const data = response.data;
        callback(true, data);
      }).catch(error => {
      console.log(error);
      callback(false, error);
    });
  };