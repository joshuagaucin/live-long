import React from "react";
import Likes from "../../components/messages/Likes";
import Menu from "../../components/menu/Menu";
import BackendService from "../../components/services/messageService";
import "./messageFeed.css";
import { userIsAuthenticated } from "../../redux/HOCs";
import PostMessage from "../../components/messages/PostMessage";
import InfiniteScroll from "react-infinite-scroll-component";

class InfiniteFeed extends React.Component {
  state = {
    messages: [],
  };
  componentDidMount() {
    new BackendService().getRecentMessages().then((messages) => {
      this.setState({ messages });
    });
  }

  render() {
    if (this.state.messages.length === 0) {
      return (
        <div>
          <Menu isAuthenticated={this.props.isAuthenticated} />
          <div className="MessageFeed">
            <h1>Message Feed</h1>
            <h3>loading...</h3>
          </div>
        </div>
      );
    }
    return (
      <div className="container">
        <Menu isAuthenticated={this.props.isAuthenticated} />

        <h1>Lets talk about fitness!</h1>
        <div id="scrollableDiv">
          {/*Put the scroll bar always on the bottom*/}
          <InfiniteScroll
            dataLength={this.state.messages.length}
            next={this.fetchMoreData}
            inverse={true} //
            hasMore={true}
            loader={<h4>Loading...</h4>}
            scrollableTarget="scrollableDiv"
          >
            <ul>
              {this.state.messages.map((msg) => (
                <Likes key={msg.id} {...msg} />
              ))}
            </ul>
          </InfiniteScroll>
        </div>
        <PostMessage />
      </div>
    );
  }
}

export default userIsAuthenticated(InfiniteFeed);
