import User from "./User";
import UserClass from "./UserClass";

const About = () => {
  return (
    <div>
      <h1>This is namaste React About page</h1>
      {/* Lets have a user card by creating a user component about developers */}

      <UserClass name={"Shaik (Class BC)"} location={"Bangalore"} />
    </div>
  );
};

export default About;
