import events from "../data/events";
import EventsCard from "./EventsCard";
import "../styles/events.css";


function Home() {
  return (
    <>
      <div className="events-grid">
        {events.map((event,index) => (
          <EventsCard key={index} event={event} />
        ))}
      </div>

    
      
    </>
  );
}

export default Home;