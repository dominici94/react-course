import EventsNavigation from "../components/EventsNavigation";
import { Outlet } from "react-router-dom";

function EventsRootlayout() {
  return (
    <>
      <EventsNavigation />
      <Outlet />
    </>
  );
}

export default EventsRootlayout;
