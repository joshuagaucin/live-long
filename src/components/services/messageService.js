import axios from "axios";

class MessageService {
  constructor(
    baseURL = "https://socialapp-api.herokuapp.com",
    client = axios.create()
  ) {
    this.baseURL = baseURL;
    this.client = client;
  }

  getRecentMessages() {
    return this.client.get(this.baseURL + "/messages?").then((response) => {
      return response.data.messages;
    });
  }
}
export default MessageService;
