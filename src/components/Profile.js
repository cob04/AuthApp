import React from "react";
import { Link } from "react-router-dom";
import { Jumbotron, Card, CardImg, CardBody, CardTitle } from "reactstrap";
import moment from "moment";

const ProfileInfo = user => (
  <>
    <div className="profile-description">
      <p className="name">{user.name}</p>
      <span className="online-dot"></span>
      <span className="online">{user.roles}</span>
      <p>
        <span className="text-muted">Joined: </span>
        {moment(user.created_at).fromNow()}
      </p>
      <p>
        <span className="text-muted">Email: </span> {user.email}
      </p>
      <p>
        <span className="text-muted">First name: </span>
        {user.first_name}
      </p>
      <p>
        <span className="text-muted">Surname: </span>
        {user.surname}
      </p>
    </div>
    <hr className="my-2" />
  </>
);

const Profile = props => (
  <div className="profile-wrapper">
    <Jumbotron className="cover-image"></Jumbotron>
    <Card className="profile">
      <CardImg
        top
        width="100%"
        src="https://images.unsplash.com/photo-1566095763944-23cc46c84c42?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
        alt="Card image cap"
      />
      <CardBody>
        <CardTitle className="name">{props.user.name}</CardTitle>
      </CardBody>
    </Card>
    <ProfileInfo {...props.user} />
  </div>
);

export const ProfileWithNoData = () => (
  <div>
    <Jumbotron className="custom-jumbotron">
      <h1 className="main-text">
        You're not logged in{" "}
        <small>
          <Link to="/">Go back home and try again</Link>
        </small>
      </h1>
    </Jumbotron>
  </div>
);

export default Profile;
