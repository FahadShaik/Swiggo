import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {
        name: "B4 render",
        location: "Dehradun",
        avatar_url: "Image",
      },
    };
    // console.log("this is a child constructor");
  }

  async componentDidMount() {
    // console.log("This is a child component");
    const data = await fetch("https://api.github.com/users/FahadShaik");
    const json = await data.json();

    console.log(json);

    this.setState({
      userInfo: json,
    });
  }

  render() {
    const { name, location, avatar_url } = this.state.userInfo;
    // console.log("this is a child render");

    return (
      <div className="user-card-classbased">
        <img src={avatar_url} />
        <h1>Name: {name}</h1>
        <h3>Location: {location}</h3>
        <h3>Designation: Developer</h3>
        <h3>Linkedin: Fahad</h3>
      </div>
    );
  }
}

export default UserClass;
