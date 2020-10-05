import axios from "axios"
import { store } from "../../redux/"
class DataService {
  constructor(
    baseURL = "https://socialapp-api.herokuapp.com",
    client = axios.create()
  ) {
    this.baseURL = baseURL;
    this.client = client;
  }
  putUserPic(picture) {
    const { username } = store.getState().auth.login.result;
    const config = {
      headers: {
        Authorization: `Bearer ${this.getToken()}`,
      },
    };
    return this.client.put(
      `${this.baseURL}/users/${username}/picture`,
      picture,
      config
    );
  }
  getUserName() {
    const { username } = store.getState().auth.login.result;
    return username;
  }

  getToken() {
    const { token } = store.getState().auth.login.result;
    return token;
  }

  getRecentMessages() {
    return this.client
      .get(this.baseURL + "/messages?limit=20")
      .then((response) => {
        return response.data.messages;
      });
  }

  registerUser(userData) {
    console.log(userData);
    return this.client.post(this.baseURL + "/users", userData);
  }

  getUsers() {
    return this.client
      .get(this.baseURL + "/users?limit=20")
      .then((response) => {
        return response.data.users;
      });
  }

  postLike(messageId) {
    const requestBody = { messageId };
    const config = {
      headers: {
        Authorization: `Bearer ${this.getToken()}`,
      },
    };

    return this.client
      .post(this.baseURL + "/likes", requestBody, config)
      .then((response) => response.data.like);
  }

  deleteLike(likeId) {
    const config = {
      headers: {
        Authorization: `Bearer ${this.getToken()}`,
      },
    };

    return this.client.delete(`${this.baseURL}/likes/${likeId}`, config);
  }
  postMessage(messageData) {
    const loginData = JSON.parse(localStorage.getItem("login"));
    const requestBody = { text: messageData };
    const config = {
      headers: {
        Authorization: `Bearer ${loginData.result.token}`,
      },
    };
    return this.client
      .post(this.baseURL + "/messages", requestBody, config)
      .then((response) => response.data.messages);
  }
}


export default DataService