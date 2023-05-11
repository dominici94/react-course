// import { Fragment } from "react";
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

export async function getStaticPaths() {
  return {
    fallback: false,
    paths: [
      {
        params: {
          meetupid: "m1",
        },
      },
      {
        params: {
          meetupid: "m2",
        },
      },
    ],
  };
}

export async function getStaticProps(context) {
  const meetupId = context.params.meetupid;

  return {
    props: {
      meetupData: {
        image:
          "https://upload.wikimedia.org/wikipedia/commons/5/5d/Starbuck_Community_Church.jpg",
        id: meetupId,
        title: "A First Meetup",
        address: "some street 5, some city",
        description: "The meetup description",
      },
    },
  };
}

export default MeetupDetails;
