import React from "react";
import EventForm from "./components/EventForm";
import EventTable from "./components/EventTable/EventTable";
import { useFetch } from "./hooks/useFetch";

const App = () => {
  const { events, setEvents, loading, error, updateEvent } = useFetch();

  const handleAddEvent = (newEvent) => {
    setEvents([...events, { id: Date.now(), ...newEvent }]);
  };

  return (
    <div className="container mx-auto px-4 py-6">
      <h1 className="text-3xl sm-text-2xl font-bold mb-6 text-center">
        Personal Event Manager
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div>
          <EventForm onSubmit={handleAddEvent} />
        </div>
        <div>
          <EventTable
            events={events}
            setEvents={setEvents}
            updateEvent={updateEvent}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
