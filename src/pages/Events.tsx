import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, MapPin, Users } from "lucide-react";
import { Link } from "react-router-dom";

export default function Events() {
  const events = [
    {
      id: 1,
      title: "Tech Workshop: AI Fundamentals",
      description: "Learn the basics of artificial intelligence and machine learning in this hands-on workshop.",
      date: "March 15, 2024",
      time: "2:00 PM - 4:00 PM",
      location: "Engineering Building, Room 301",
      attendees: 45,
      maxAttendees: 50,
      category: "Workshop",
    },
    {
      id: 2,
      title: "Networking Mixer",
      description: "Meet fellow students and industry professionals in a casual networking environment.",
      date: "March 20, 2024",
      time: "6:00 PM - 8:00 PM",
      location: "Student Union Hall",
      attendees: 78,
      maxAttendees: 100,
      category: "Networking",
    },
    {
      id: 3,
      title: "Guest Speaker: Industry Insights",
      description: "Hear from tech industry leaders about current trends and career opportunities.",
      date: "March 25, 2024",
      time: "4:00 PM - 5:30 PM",
      location: "Main Auditorium",
      attendees: 120,
      maxAttendees: 200,
      category: "Speaker",
    },
    {
      id: 4,
      title: "Hackathon 2024",
      description: "48-hour coding competition with prizes and mentorship from industry experts.",
      date: "April 5-7, 2024",
      time: "All Day",
      location: "Computer Science Building",
      attendees: 85,
      maxAttendees: 100,
      category: "Competition",
    },
  ];

  return (
    <div className="container mx-auto p-6 space-y-8">
      <header className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold mb-2">Events</h1>
          <p className="text-muted-foreground">
            Discover and register for upcoming society events
          </p>
        </div>
        <Button asChild variant="accent">
          <Link to="/post-event">Create Event</Link>
        </Button>
      </header>

      <section aria-labelledby="events-list-heading">
        <h2 id="events-list-heading" className="sr-only">
          List of upcoming events
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {events.map((event) => (
            <Card key={event.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <CardTitle className="text-xl mb-2">{event.title}</CardTitle>
                    <Badge variant="secondary">{event.category}</Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <CardDescription className="text-base">
                  {event.description}
                </CardDescription>

                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <Calendar className="h-4 w-4 text-primary" aria-hidden="true" />
                    <span>
                      <span className="sr-only">Date: </span>
                      {event.date}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Clock className="h-4 w-4 text-primary" aria-hidden="true" />
                    <span>
                      <span className="sr-only">Time: </span>
                      {event.time}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <MapPin className="h-4 w-4 text-primary" aria-hidden="true" />
                    <span>
                      <span className="sr-only">Location: </span>
                      {event.location}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Users className="h-4 w-4 text-primary" aria-hidden="true" />
                    <span>
                      <span className="sr-only">Attendees: </span>
                      {event.attendees} / {event.maxAttendees} registered
                    </span>
                  </div>
                </div>

                <Button className="w-full" variant="default">
                  Register for Event
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
