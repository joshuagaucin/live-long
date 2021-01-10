import React from "react";
import Menu from "../../components/menu/Menu";
import { userIsAuthenticated } from "../../redux/HOCs";
import MainFooter from "../../components/mainFooter/MainFooter";
import "./main.css";
import { Link } from "react-router-dom";

class Main extends React.Component {
  render() {
    return (
      <div className="Main">
        <Menu isAuthenticated={this.props.isAuthenticated} />
        <div className="about">
          <div id="site" className="img"></div>
          <h1>How to Live Long</h1>
          <p>
            Welcome to Live Long, we are dedicated to giving you the tools you
            need to reach your health and fitness goals. From this one page
            alone we believe we have given you the most essential information
            needed to make and meet realistic goals.
          </p>
        </div>

        <div className="about">
          <div id="eating" className="img"></div>
          <h1>Stop Dieting</h1>
          <p>
            {" "}
            I know what you're thinking, "Stop dieting?" but thats how you lose
            weight! However it happens to be the case that dieting is extremely
            inefficient when it comes to long-term results. Have you ever heard
            of the term yo-yo dieting? It refers to the ups and downs of weight
            loss; people tend to be extremely restrictive, sometimes cutting out
            entire food-groups, and what tends to happen is the person will feel
            like they are starving so they have a "cheat meal" which becomes a
            cheat day, week, month... They binge until they've gained all the
            weight they lost back and sometimes more!
          </p>
          <h1>So What do you do?</h1>
          <p>
            The key to long term success is eating foods you love, while
            maintaining a calorie defecit. checkout this great video from Greg
            Duecette where he goes over the challenges of weight loss and what
            you need to do about it.
          </p>
          <iframe
            title="losing-weight"
            className="video"
            src="https://www.youtube.com/embed/JOWF0eF-tOs"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
          <p>
            Now that you know a little more about the challenges of dieting
            please use our own recipe finder to discover delicous recipes
            alligned with your goals!<Link to="/recipeSearch">Recipes</Link>
          </p>
        </div>
        <div className="about">
          <div id="training" className="img"></div>
          <h1>Start Training</h1>
          <p>
            Our bodies are constantly changing as we age, and the things we do
            everyday, shape that change. By training our bodies to be stronger,
            faster, more agile, and tougher; we prevent our bodies from becoming
            weaker, slower, less agile, and more susceptable to injury. The most
            important piece of advice I can give when it comes to training is to
            be consistent and to push your limits as much as possible.
          </p>
          <p>
            Check out this video below from the "Buff Dudes" which walks through
            a workout aimed at beginners who want to build muscle
          </p>
          <iframe
            title="training"
            className="video"
            src="https://www.youtube.com/embed/Umu4cxTPaC8"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
        <MainFooter />
      </div>
    );
  }
}

export default userIsAuthenticated(Main);
