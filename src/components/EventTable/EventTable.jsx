import React, { useState } from "react";
import EventItem from "./EventItem";
import Button from "../UI/Button";
import { useEventSort } from "../../hooks/useEventSort";

const EventTable = ({ events, setEvents }) => {
  const [sortConfig, setSortConfig] = useState({ key: null, direction: null });

  const [currentPage, setCurrentPage] = useState(0);
  const [itemsPerPage] = useState(5); // Количество элементов на странице
  const [searchQuery, setSearchQuery] = useState(""); // Состояние для поиска
  const { sortedEvents, requestSort } = useEventSort(events); // Используем хук для сортировки

  const filteredEvents = sortedEvents.filter((event) =>
    event.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const startIndex = currentPage * itemsPerPage;
  const currentEvents = filteredEvents.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  const nextPage = () => {
    setCurrentPage((prev) =>
      Math.min(prev + 1, Math.ceil(filteredEvents.length / itemsPerPage) - 1)
    );
  };

  const previousPage = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 0));
  };

  const updateEvent = (updatedEvent) => {
    const updatedEvents = events.map((event) =>
      event.id === updatedEvent.id ? updatedEvent : event
    );
    setEvents(updatedEvents);
  };

  return (
    <div>
      <div className="mb-4">
        <input
          type="text"
          className="px-4 py-2 border border-gray-300 rounded-lg"
          placeholder="Search by event name"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      <div className="max-w-full overflow-x-auto">
        <table className="min-w-full bg-white border rounded-lg">
          <thead>
            <tr className="bg-gray-100">
              <th
                className="text-left py-2 px-4 border-b cursor-pointer"
                onClick={() => requestSort("name")}
              >
                Name{" "}
                {sortConfig.key === "name" &&
                  (sortConfig.direction === "ascending" ? "🔼" : "🔽")}
              </th>
              <th
                className="text-left py-2 px-4 border-b cursor-pointer"
                onClick={() => requestSort("category")}
              >
                Category{" "}
                {sortConfig.key === "category" &&
                  (sortConfig.direction === "ascending" ? "🔼" : "🔽")}
              </th>
              <th
                className="text-left py-2 px-4 border-b cursor-pointer"
                onClick={() => requestSort("date")}
              >
                Date{" "}
                {sortConfig.key === "date" &&
                  (sortConfig.direction === "ascending" ? "🔼" : "🔽")}
              </th>
              <th
                className="text-left py-2 px-4 border-b cursor-pointer"
                onClick={() => requestSort("status")}
              >
                Status{" "}
                {sortConfig.key === "status" &&
                  (sortConfig.direction === "ascending" ? "🔼" : "🔽")}
              </th>
              <th className="text-left py-2 px-4 border-b">Actions</th>
            </tr>
          </thead>
          <tbody>
            {currentEvents.map((event) => (
              <EventItem
                key={event.id}
                event={event}
                onUpdateEvent={updateEvent}
              />
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex justify-between py-4">
        <Button
          text="Previous"
          onClick={previousPage}
          disabled={currentPage === 0}
        />
        <Button
          text="Next"
          onClick={nextPage}
          disabled={
            currentPage >= Math.ceil(filteredEvents.length / itemsPerPage) - 1
          }
        />
      </div>
    </div>
  );
};

export default EventTable;
