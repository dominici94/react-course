import { Fragment } from "react";
import MeetupDetail from "../../components/meetups/MeetupDetail";

function MeetupDetails() {
  return (
    <MeetupDetail
      image="https://upload.wikimedia.org/wikipedia/commons/5/5d/Starbuck_Community_Church.jpg"
      title="A First Meetup"
      address="some street 5, some city"
      description="The meetup description"
    />
  );
}

export default MeetupDetails;
