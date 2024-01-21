import React from "react";
import { createEvents } from "ics";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const EventCalendar = ({ events }) => {
  const [date, setDate] = React.useState(new Date());

  const exportToIcal = () => {
    const icsEvents = events.map((event) => ({
      start: event.start,
      duration: event.duration,
      title: event.title,
      description: event.description,
      location: event.location,
      url: event.url,
    }));

    createEvents(icsEvents, (error, value) => {
      if (error) {
        console.log(error);
      } else {
        const blob = new Blob([value], {
          type: "text/calendar;charset=utf-8;",
        });
        const url = URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", "events.ics");
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }
    });
  };

  const tileContent = ({ date, view }) => {
    // Only show events for days (not months or years)
    if (view === "month" && Array.isArray(events)) {
      // Find events for this date
      const dayEvents = events.filter(
        (event) =>
          event.start[0] === date.getFullYear() &&
          event.start[1] === date.getMonth() + 1 &&
          event.start[2] === date.getDate()
      );
      // Return a list of events
      return (
        <ul>
          {dayEvents.map((event, index) => (
            <li key={index}>{event.title}</li>
          ))}
        </ul>
      );
    }
  };

  return (
    <div>
      <Calendar onChange={setDate} value={date} tileContent={tileContent} />
      <button onClick={exportToIcal}>Export to iCal</button>
    </div>
  );
};

export default EventCalendar;
