import React from "react";
import Button from "../UI/Button";

const EventModal = ({ event, onClose }) => {
  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg max-w-lg w-full relative max-h-[600px] overflow-scroll">
        <h2 className="text-2xl font-semibold mb-4">Event Details</h2>

        <p>
          <strong>Name:</strong> {event.name}
        </p>
        <p>
          <strong>Category:</strong> {event.category}
        </p>
        <p>
          <strong>Date:</strong> {event.date}
        </p>
        <p className={
          ''
        }>
          <strong>Status:</strong> {event.status}
        </p>
        <p>
          <strong>Description:</strong>{" "}
          {event.description || "No description available."}
        </p>

        <div className="flex justify-end mt-6">
          <Button text="Close" onClick={onClose} theme="default" />
        </div>
      </div>
    </div>
  );
};

export default EventModal;
