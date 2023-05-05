import EventsList from "../components/EventsList";
import { Suspense } from "react";

import { useLoaderData, defer, Await } from "react-router-dom";

function EventsPage() {
  const { events } = useLoaderData();

  return (
    <Suspense fallback={<p style={{ textAlign: "center" }}>Loading...</p>}>
      <Await resolve={events}>
        {(loadedEvents) => <EventsList events={loadedEvents} />}
      </Await>
    </Suspense>
  );
}

export default EventsPage;

async function loadEvents() {
  // LOADER EXECUTE IN BROWSER SO YOU CAN USE ALL BROWSER API (EX: LOCALSTORAGE), BUT CAN'T USE REACT HOOKS (ONLY AVAILABLE IN REACT COMPONENTS)! WHILE LOADER FUNCTION IS NOT A REACT COMPONENT
  const response = await fetch("http://localhost:8080/events");

  if (!response.ok) {
    // return { isError: true, message: "Could not fetch events." };
    // throw { message: "Could not fetch events." };
    throw new Response(JSON.stringify({ message: "Could not fetch events." }), {
      status: 500,
    });
    // return json({ message: "Could not fetch events." }, { status: 500 });
  } else {
    // const resData = await response.json();
    // return resData.events;
    const resData = await response.json();
    return resData.events;
  }
}

export function loader() {
  return defer({
    events: loadEvents(),
  });
}
