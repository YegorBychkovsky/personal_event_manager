import React, { useState } from "react";
import Button from "../UI/Button";

const EditEventModal = ({ event, onClose, onSave }) => {
  const [name, setName] = useState(event.name);
  const [category, setCategory] = useState(event.category);
  const [date, setDate] = useState(event.date);
  const [status, setStatus] = useState(event.status);
  const [description, setDescription] = useState(event.description);

  const handleSave = () => {
    const updatedEvent = {
      ...event,
      name,
      category,
      date,
      status,
      description,
    };
    onSave(updatedEvent);
    onClose();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg max-h-[600px]">
        <h2 className="text-lg font-bold mb-4">Edit Event</h2>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Name
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Category
          </label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
          >
            <option value="Work">Work</option>
            <option value="Personal">Personal</option>
            <option value="Leisure">Leisure</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Date
          </label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Status
          </label>
          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
          >
            <option value="Upcoming">Upcoming</option>
            <option value="Completed">Completed</option>
            <option value="Cancelled">Cancelled</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Description
          </label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="mt-1 block w-full border border-gray-300 rounded-md p-2 max-h-20"
          />
        </div>
        <div className="flex justify-end">
          <Button
            text="Cancel"
            onClick={onClose}
            className="mr-4 bg-gray-300"
          />
          <Button text="Save" theme={"filled"} onClick={handleSave} />
        </div>
      </div>
    </div>
  );
};

export default EditEventModal;
