import { Link } from "react-router-dom";

const EVENTS = [
  { id: "ev1", title: "Event 1" },
  { id: "ev2", title: "Event 2" },
  { id: "ev3", title: "Event 3" },
];

function EventsPage() {
  return (
    <>
      <h1>Events page</h1>
      <ul>
        {EVENTS.map((evnt) => (
          <li key={evnt.id}>
            <Link to={evnt.id}>{evnt.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export default EventsPage;
