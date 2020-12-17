import React from "react";
import { Form, Button } from "semantic-ui-react";
import DataService from "../services/dataService";


class Likes extends React.Component {
  state = {
    likes: this.props.likes,
  };
  //

  handleLike = () => {
    const dataService = new DataService();
    const username = dataService.getUserName();
    const hasAlreadyLiked = this.state.likes.some(
      (like) => like.username === username
    );
    if (hasAlreadyLiked) return;

    dataService.postLike(this.props.id).then((like) => {
      this.setState((latestState) => ({
        likes: [...latestState.likes, like],
      }));
    });
  };
  handleDeleteLike = (event) => {
    event.persist();
    const dataService = new DataService();
    const username = dataService.getUserName();

    const like = this.state.likes.find((like) => like.username === username);
    if (!like) return;

    event.target.setAttribute("disabled", true);

    const onSuccess = (response) => {
      const handleState = (latestState) => ({
        likes: latestState.likes.filter((like) => like.id !== response.data.id),
      });

      const thenDo = () => event.target.removeAttribute("disabled");

      this.setState(handleState, thenDo);
    };

    const onError = (error) => event.target.removeAttribute("disabled");

    dataService.deleteLike(like.id).then(onSuccess).catch(onError);
  };

  render() {
    return (
      <div>
        <Form className="form-control">
          <li className="Message">
            <div className="user">{this.props.username} posted:</div>
            <br />
            <div className="the-message">{this.props.text}</div>
            {/* <div className="like-count">Likes: {this.state.likes.length}</div> */}
            <div className="buttons">
              <Button onClick={this.handleLike}>
                <span role="img" aria-label="Like">
                  👍
                </span>{" "}
                {this.state.likes.length}
              </Button>
              <Button onClick={this.handleDeleteLike}>
                <span role="img" aria-label="Like">
                  👎
                </span>
              </Button>
            </div>
          </li>
        </Form>
      </div>
    );
  }
}
export default Likes;
