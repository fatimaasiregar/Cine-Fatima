import React, { useState, useEffect } from "react";

const Event = () => {
  const getStoredEvents = () => {
    const storedEvents = localStorage.getItem("events");
    return storedEvents
      ? JSON.parse(storedEvents)
      : [
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
    setEvents(
      events.map((event) =>
        event.id === editEvent.id ? { ...event, ...newEvent } : event
      )
    );
    setNewEvent({ name: "", movie: "", date: "" });
    setEditEvent(null);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white pt-24 md:pt-32 p-4 md:p-8">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="mb-8 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-yellow-400 mb-2">Event Management</h1>
          <p className="text-gray-300">Manage upcoming movie events and screenings</p>
        </div>

        {/* Event Form */}
        <div className="bg-gray-800 rounded-lg shadow-lg p-6 mb-8 border border-gray-700">
          <h2 className="text-xl font-semibold text-yellow-400 mb-4">
            {editEvent ? "Edit Event" : "Add New Event"}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">Event Name</label>
              <input
                type="text"
                className="w-full bg-gray-700 border border-gray-600 rounded-md py-2 px-3 text-white focus:outline-none focus:ring-2 focus:ring-yellow-500"
                placeholder="Premiere Night"
                value={newEvent.name}
                onChange={(e) => setNewEvent({ ...newEvent, name: e.target.value })}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">Movie Title</label>
              <input
                type="text"
                className="w-full bg-gray-700 border border-gray-600 rounded-md py-2 px-3 text-white focus:outline-none focus:ring-2 focus:ring-yellow-500"
                placeholder="Movie Name"
                value={newEvent.movie}
                onChange={(e) => setNewEvent({ ...newEvent, movie: e.target.value })}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">Event Date</label>
              <input
                type="date"
                className="w-full bg-gray-700 border border-gray-600 rounded-md py-2 px-3 text-white focus:outline-none focus:ring-2 focus:ring-yellow-500"
                value={newEvent.date}
                onChange={(e) => setNewEvent({ ...newEvent, date: e.target.value })}
              />
            </div>
          </div>

          <div className="flex justify-end">
            {editEvent ? (
              <button
                onClick={updateEvent}
                className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold py-2 px-6 rounded-md transition duration-300"
              >
                Update Event
              </button>
            ) : (
              <button
                onClick={addEvent}
                className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-6 rounded-md transition duration-300"
              >
                Add Event
              </button>
            )}
          </div>
        </div>

        {/* Events Table */}
        <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden border border-gray-700">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-700">
              <thead className="bg-gray-700">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-yellow-400 uppercase tracking-wider">Event Name</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-yellow-400 uppercase tracking-wider">Movie</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-yellow-400 uppercase tracking-wider">Date</th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-yellow-400 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-gray-800 divide-y divide-gray-700">
                {events.map((event) => (
                  <tr key={event.id} className="hover:bg-gray-750">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-white">{event.name}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">{event.movie}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">{event.date}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <button
                        onClick={() => editExistingEvent(event)}
                        className="text-blue-400 hover:text-blue-300 mr-4 transition duration-300"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => deleteEvent(event.id)}
                        className="text-red-400 hover:text-red-300 transition duration-300"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {events.length === 0 && (
          <div className="text-center py-8 text-gray-400">
            No events scheduled yet. Add your first event above.
          </div>
        )}
      </div>
    </div>
  );
};

export default Event;
