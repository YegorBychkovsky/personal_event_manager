import { useState, useEffect } from "react";

const initialEvents = [
  {
    id: 1,
    name: "Event Alpha",
    category: "Work",
    date: "2024-10-21",
    status: "Active",
  },
  {
    id: 2,
    name: "Event Beta",
    category: "Leisure",
    date: "2024-11-15",
    status: "Completed",
  },
  {
    id: 3,
    name: "Event Gamma",
    category: "Personal",
    date: "2024-12-05",
    status: "Active",
  },
  {
    id: 4,
    name: "Event Delta",
    category: "Personal",
    date: "2024-10-25",
    status: "Cancelled",
  },
  {
    id: 5,
    name: "Event Epsilon",
    category: "Personal",
    date: "2024-11-01",
    status: "Pending",
  },
];

export const useFetch = () => {
  const [events, setEvents] = useState(initialEvents);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEvents = async () => {
      setLoading(true);
      try {
        const response = await new Promise((resolve) =>
          setTimeout(() => resolve({ data: initialEvents }), 1000)
        );
        setEvents(response.data);
      } catch (err) {
        setError(err.message || "Failed to fetch events");
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, [initialEvents]);

  const updateEvent = (updatedEvent) => {
    const updatedEvents = initialEvents.map((event) =>
      event.id === updatedEvent.id ? updatedEvent : event
    );
    setEvents(updatedEvents);
  };

  return { events, setEvents, loading, error, updateEvent };
};
