// Calendar & Navigation utilities for Sandeep & Devika's Wedding

export const WEDDING_EVENTS = {
  ceremony: {
    title: "Sandeep & Devika's Wedding Solemnisation (Muhurtham)",
    description: "Wedding Solemnisation of Sandeep Suryan P.S. & Devika K.T. (1202 Chingam 28). Muhoortham between 10:30 AM and 11:30 AM.",
    location: "Liya Auditorium, Changaleeri, Kerala",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Liya+Auditorium+Changaleeri+Kerala",
    startDate: "20260913T050000Z", // 10:30 AM IST = 05:00 UTC
    endDate: "20260913T060000Z",   // 11:30 AM IST = 06:00 UTC
    timeDisplay: "10:30 AM – 11:30 AM",
    dateDisplay: "Sunday, September 13, 2026",
    malayalamDate: "1202 Chingam 28",
  },
  reception: {
    title: "Sandeep & Devika's Wedding Reception",
    description: "Wedding Reception of Sandeep Suryan P.S. & Devika K.T. Hosts: P. K. Suryakumar & Suma Suryan (Mannarkkad).",
    location: "Community Hall, Kunthipuzha, Mannarkkad, Kerala",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Community+Hall+Kunthipuzha+Mannarkkad",
    startDate: "20260913T110000Z", // 04:30 PM IST = 11:00 UTC
    endDate: "20260913T140000Z",   // 07:30 PM IST = 14:00 UTC
    timeDisplay: "4:30 PM – 7:30 PM",
    dateDisplay: "Sunday, September 13, 2026",
    malayalamDate: "1202 Chingam 28",
  }
};

export function getGoogleCalendarUrl(eventKey) {
  const event = WEDDING_EVENTS[eventKey];
  if (!event) return '#';
  const baseUrl = "https://calendar.google.com/calendar/render?action=TEMPLATE";
  const params = new URLSearchParams({
    text: event.title,
    dates: `${event.startDate}/${event.endDate}`,
    details: event.description,
    location: event.location,
  });
  return `${baseUrl}&${params.toString()}`;
}

export function downloadIcsFile(eventKey) {
  const event = WEDDING_EVENTS[eventKey];
  if (!event) return;

  const icsContent = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//Sandeep & Devika Wedding//EN",
    "CALSCALE:GREGORIAN",
    "METHOD:PUBLISH",
    "BEGIN:VEVENT",
    `SUMMARY:${event.title}`,
    `DESCRIPTION:${event.description}`,
    `LOCATION:${event.location}`,
    `DTSTART:${event.startDate}`,
    `DTEND:${event.endDate}`,
    "STATUS:CONFIRMED",
    "END:VEVENT",
    "END:VCALENDAR"
  ].join("\r\n");

  const blob = new Blob([icsContent], { type: "text/calendar;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.setAttribute("download", `${eventKey}-sandeep-devika-wedding.ics`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}
