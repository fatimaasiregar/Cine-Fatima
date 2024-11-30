import React, { useState, useEffect } from "react";

const Event = () => {
  const getStoredEvents = () => {
    const storedEvents = localStorage.getItem("events");
    return storedEvents ? JSON.parse(storedEvents) : [
      { id: 1, name: "Inception Premiere", movie: "Inception", date: "2024-12-01" },
      { id: 2, name: "The Dark Knight Screening", movie: "The Dark Knight", date: "2024-12-05" },
      { id: 3, name: "Avatar 2 Special Screening", movie: "Avatar 2", date: "2024-12-10" },
      { id: 4, name: "Spider-Man: No Way Home Fan Event", movie: "Spider-Man: No Way Home", date: "2024-12-12" },
      { id: 5, name: "Guardians of the Galaxy Vol. 3 Launch", movie: "Guardians of the Galaxy Vol. 3", date: "2024-12-15" },
      { id: 6, name: "Mission: Impossible - Dead Reckoning Premiere", movie: "Mission: Impossible - Dead Reckoning", date: "2024-12-20" },
      { id: 7, name: "The Matrix 4 Virtual Premiere", movie: "The Matrix 4", date: "2024-12-25" },
    ];
  };

  const [events, setEvents] = useState(getStoredEvents); 
  const [newEvent, setNewEvent] = useState({ name: "", movie: "", date: "" });
  const [editEvent, setEditEvent] = useState(null);  

  useEffect(() => {
    localStorage.setItem("events", JSON.stringify(events));
  }, [events]);

  const addEvent = () => {
    if (!newEvent.name || !newEvent.movie || !newEvent.date) {
      alert("Please fill in all fields.");
      return;
    }

    const event = { ...newEvent, id: Date.now() }; 
    setEvents([...events, event]);
    setNewEvent({ name: "", movie: "", date: "" });
  };

  const deleteEvent = (id) => {
    setEvents(events.filter((event) => event.id !== id));
  };

  const editExistingEvent = (event) => {
    setEditEvent(event); 
    setNewEvent({ name: event.name, movie: event.movie, date: event.date });
  };

  const updateEvent = () => {
    if (!newEvent.name || !newEvent.movie || !newEvent.date) {
      alert("Please fill in all fields.");
      return;
    }

    setEvents(events.map((event) => 
      event.id === editEvent.id ? { ...event, ...newEvent } : event
    ));
    setNewEvent({ name: "", movie: "", date: "" });
    setEditEvent(null); 
  };

  return (
    <div className="event-management">
      <h1>Event Management</h1>
      
      {/* Form Add or Edit Event */}
      <div>
        <input
          type="text"
          placeholder="Event Name"
          value={newEvent.name}
          onChange={(e) => setNewEvent({ ...newEvent, name: e.target.value })}
        />
        <input
          type="text"
          placeholder="Movie Name"
          value={newEvent.movie}
          onChange={(e) => setNewEvent({ ...newEvent, movie: e.target.value })}
        />
        <input
          type="date"
          value={newEvent.date}
          onChange={(e) => setNewEvent({ ...newEvent, date: e.target.value })}
        />
        {editEvent ? (
          <button onClick={updateEvent}>Update Event</button>
        ) : (
          <button onClick={addEvent}>Add Event</button>
        )}
      </div>

      {/* Event Table */}
      <table>
        <thead>
          <tr>
            <th>Event Name</th>
            <th>Movie</th>
            <th>Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {events.map((event) => (
            <tr key={event.id}>
              <td>{event.name}</td>
              <td>{event.movie}</td>
              <td>{event.date}</td>
              <td>
                <button onClick={() => editExistingEvent(event)}>Edit</button>
                <button onClick={() => deleteEvent(event.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Event;
