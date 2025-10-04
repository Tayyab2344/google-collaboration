import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Megaphone, Clock } from "lucide-react";
import { Link } from "react-router-dom";

export default function Announcements() {
  const announcements = [
    {
      id: 1,
      title: "New Mentorship Program Launched",
      content: "We're excited to announce the launch of our new mentorship program connecting junior and senior students. Applications are now open for both mentors and mentees.",
      author: "Society Admin",
      date: "2 hours ago",
      category: "Program",
      priority: "high",
    },
    {
      id: 2,
      title: "Spring Semester Events Calendar Released",
      content: "Check out our packed schedule for the spring semester! From workshops to networking events, there's something for everyone.",
      author: "Events Team",
      date: "1 day ago",
      category: "Events",
      priority: "medium",
    },
    {
      id: 3,
      title: "Society Meeting Minutes Available",
      content: "Minutes from last week's general meeting are now available. Key decisions include budget allocation for upcoming events and new committee member appointments.",
      author: "Secretary",
      date: "2 days ago",
      category: "Updates",
      priority: "low",
    },
    {
      id: 4,
      title: "Scholarship Opportunities",
      content: "Several scholarship opportunities are available for active society members. Deadlines approaching soon - don't miss out!",
      author: "Financial Team",
      date: "3 days ago",
      category: "Opportunities",
      priority: "high",
    },
    {
      id: 5,
      title: "Community Service Initiative",
      content: "Join us in giving back to the community! We're organizing a volunteer day at the local tech education center. Sign up now!",
      author: "Outreach Team",
      date: "5 days ago",
      category: "Community",
      priority: "medium",
    },
  ];

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high":
        return "destructive";
      case "medium":
        return "default";
      default:
        return "secondary";
    }
  };

  return (
    <div className="container mx-auto p-6 space-y-8">
      <header className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold mb-2">Announcements</h1>
          <p className="text-muted-foreground">
            Stay updated with the latest society news and updates
          </p>
        </div>
        <Button asChild variant="accent">
          <Link to="/post-announcement">Post Announcement</Link>
        </Button>
      </header>

      <section aria-labelledby="announcements-list-heading">
        <h2 id="announcements-list-heading" className="sr-only">
          List of announcements
        </h2>
        <div className="space-y-4">
          {announcements.map((announcement) => (
            <Card
              key={announcement.id}
              className="hover:shadow-lg transition-shadow"
            >
              <CardHeader>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Megaphone
                        className="h-5 w-5 text-primary"
                        aria-hidden="true"
                      />
                    </div>
                    <div>
                      <CardTitle className="text-xl mb-2">
                        {announcement.title}
                      </CardTitle>
                      <div className="flex flex-wrap items-center gap-2">
                        <Badge variant="secondary">{announcement.category}</Badge>
                        <Badge variant={getPriorityColor(announcement.priority) as any}>
                          {announcement.priority} priority
                        </Badge>
                      </div>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <CardDescription className="text-base">
                  {announcement.content}
                </CardDescription>
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <span>By {announcement.author}</span>
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" aria-hidden="true" />
                    <time dateTime={announcement.date}>{announcement.date}</time>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
