import React, { useState } from "react";
import EditEventModal from "./EditEventModal";
import EventModal from "./EventModal";
import Button from "../UI/Button";

const EventItem = ({ event, onUpdateEvent }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [isViewing, setIsViewing] = useState(false);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleView = () => {
    setIsViewing(true);
  };

  const handleCloseEditModal = () => {
    setIsEditing(false);
  };

  const handleCloseViewModal = () => {
    setIsViewing(false);
  };

  const handleSaveEvent = (updatedEvent) => {
    onUpdateEvent(updatedEvent);
    setIsEditing(false);
  };

  return (
    <>
      <tr className="hover:bg-gray-50 border-b">
        <td className="py-2 px-4 truncate max-w-6">{event.name}</td>
        <td className="py-2 px-4 ">{event.category}</td>
        <td className="py-2 px-4 ">
          {new Date(event.date).toLocaleDateString()}
        </td>
        <td className="py-2 px-4 ">{event.status}</td>
        <td className="py-2 px-4 flex gap-2">
          <Button text="More" onClick={handleView} theme={"default"} />
          <Button text="Edit" onClick={handleEdit} theme={"filled"} />
        </td>
      </tr>

      {isEditing && (
        <EditEventModal
          event={event}
          onClose={handleCloseEditModal}
          onSave={handleSaveEvent}
        />
      )}

      {isViewing && <EventModal event={event} onClose={handleCloseViewModal} />}
    </>
  );
};

export default EventItem;
