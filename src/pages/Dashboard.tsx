import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Users, Megaphone, TrendingUp } from "lucide-react";

export default function Dashboard() {
  const stats = [
    { label: "Total Members", value: "1,234", icon: Users, trend: "+12%" },
    { label: "Upcoming Events", value: "8", icon: Calendar, trend: "+3" },
    { label: "Active Discussions", value: "42", icon: Megaphone, trend: "+18%" },
    { label: "Engagement Rate", value: "87%", icon: TrendingUp, trend: "+5%" },
  ];

  const upcomingEvents = [
    {
      title: "Tech Workshop: AI Fundamentals",
      date: "March 15, 2024",
      time: "2:00 PM",
      attendees: 45,
    },
    {
      title: "Networking Mixer",
      date: "March 20, 2024",
      time: "6:00 PM",
      attendees: 78,
    },
    {
      title: "Guest Speaker: Industry Insights",
      date: "March 25, 2024",
      time: "4:00 PM",
      attendees: 120,
    },
  ];

  const recentAnnouncements = [
    {
      title: "New Mentorship Program Launched",
      date: "2 hours ago",
      category: "Program",
    },
    {
      title: "Spring Semester Events Calendar Released",
      date: "1 day ago",
      category: "Events",
    },
    {
      title: "Society Meeting Minutes Available",
      date: "2 days ago",
      category: "Updates",
    },
  ];

  return (
    <div className="container mx-auto p-6 space-y-8">
      <header>
        <h1 className="text-3xl font-bold mb-2">Dashboard</h1>
        <p className="text-muted-foreground">
          Overview of society activities and engagement
        </p>
      </header>

      {/* Stats Grid */}
      <section aria-labelledby="stats-heading">
        <h2 id="stats-heading" className="sr-only">
          Society Statistics
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat, index) => (
            <Card key={index}>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  {stat.label}
                </CardTitle>
                <stat.icon className="h-4 w-4 text-primary" aria-hidden="true" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stat.value}</div>
                <p className="text-xs text-muted-foreground mt-1">
                  <span className="text-primary font-medium">{stat.trend}</span> from last
                  month
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Upcoming Events */}
        <section aria-labelledby="events-heading">
          <Card>
            <CardHeader>
              <CardTitle id="events-heading">Upcoming Events</CardTitle>
              <CardDescription>Next society events on the calendar</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {upcomingEvents.map((event, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-4 rounded-lg border hover:bg-accent transition-colors"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Calendar className="h-6 w-6 text-primary" aria-hidden="true" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold mb-1">{event.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      {event.date} at {event.time}
                    </p>
                    <p className="text-sm text-muted-foreground mt-1">
                      <Users className="inline h-3 w-3 mr-1" aria-hidden="true" />
                      {event.attendees} attending
                    </p>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </section>

        {/* Recent Announcements */}
        <section aria-labelledby="announcements-heading">
          <Card>
            <CardHeader>
              <CardTitle id="announcements-heading">Recent Announcements</CardTitle>
              <CardDescription>Latest updates from the society</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {recentAnnouncements.map((announcement, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-4 rounded-lg border hover:bg-accent transition-colors"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                    <Megaphone className="h-6 w-6 text-accent" aria-hidden="true" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold mb-1">{announcement.title}</h3>
                    <div className="flex items-center gap-2 mt-2">
                      <Badge variant="secondary">{announcement.category}</Badge>
                      <span className="text-xs text-muted-foreground">
                        {announcement.date}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
}
