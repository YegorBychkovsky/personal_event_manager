import React, { useState } from "react";
import * as yup from "yup";
import Button from "./UI/Button";

const eventSchema = yup.object().shape({
  name: yup.string().required("Event name is required"),
  description: yup.string(),
  category: yup
    .string()
    .oneOf(["work", "personal", "leisure"], "Invalid category")
    .required("Category is required"),
  date: yup
    .date()
    .min(new Date(), "Date must be in the future")
    .required("Date is required"),
  status: yup
    .string()
    .oneOf(["upcoming", "completed", "cancelled"], "Invalid status")
    .required("Status is required"),
});

const EventForm = ({ onSubmit }) => {
  const [formValues, setFormValues] = useState({
    name: "",
    description: "",
    category: "",
    date: "",
    status: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await eventSchema.validate(formValues, { abortEarly: false });
      setErrors({});
      onSubmit(formValues);
      setFormValues({
        name: "",
        description: "",
        category: "",
        date: "",
        status: "",
      });
    } catch (err) {
      console.log(err);
      const validationErrors = {};
      err.inner.forEach((error) => {
        validationErrors[error.path] = error.message;
      });
      setErrors(validationErrors);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 max-w-lg mx-auto p-4 bg-white shadow-md rounded-lg"
    >
      <div>
        <input
          name="name"
          value={formValues.name}
          onChange={handleChange}
          placeholder="Event Name"
          className="border p-2 w-full"
        />
        {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
      </div>

      <div>
        <input
          name="description"
          value={formValues.description}
          onChange={handleChange}
          placeholder="Description"
          className="border p-2 w-full"
        />
      </div>

      <div>
        <select
          name="category"
          value={formValues.category}
          onChange={handleChange}
          className="border p-2 w-full"
        >
          <option value="">Select Category</option>
          <option value="work">Work</option>
          <option value="personal">Personal</option>
          <option value="leisure">Leisure</option>
        </select>
        {errors.category && (
          <p className="text-red-500 text-sm">{errors.category}</p>
        )}
      </div>

      <div>
        <input
          type="date"
          name="date"
          value={formValues.date}
          onChange={handleChange}
          className="border p-2 w-full"
        />
        {errors.date && <p className="text-red-500 text-sm">{errors.date}</p>}
      </div>

      <div>
        <select
          name="status"
          value={formValues.status}
          onChange={handleChange}
          className="border p-2 w-full"
        >
          <option value="">Select Status</option>
          <option value="upcoming">Upcoming</option>
          <option value="completed">Completed</option>
          <option value="cancelled">Cancelled</option>
        </select>
        {errors.status && (
          <p className="text-red-500 text-sm">{errors.status}</p>
        )}
      </div>

      <Button text="Submit" type="submit" theme={"filled"} />
    </form>
  );
};

export default EventForm;
