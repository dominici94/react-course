import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "A first meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/5/5d/Starbuck_Community_Church.jpg",
    address: "Some address 5, 12345 Some City",
    description: "This is a first meetup!",
  },
  {
    id: "m2",
    title: "A Second meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/5/5d/Starbuck_Community_Church.jpg",
    address: "Some address 10, 54321 Other City",
    description: "This is a second meetup!",
  },
];
function HomePage() {
  return <MeetupList meetups={DUMMY_MEETUPS} />;
}

export default HomePage;
