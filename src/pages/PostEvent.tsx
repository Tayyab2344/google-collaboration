import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Calendar } from "lucide-react";

export default function PostEvent() {
  const { toast } = useToast();
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    // Simple validation
    const newErrors: Record<string, string> = {};
    if (!data.title) newErrors.title = "Event title is required";
    if (!data.date) newErrors.date = "Event date is required";
    if (!data.time) newErrors.time = "Event time is required";
    if (!data.location) newErrors.location = "Location is required";
    if (!data.description) newErrors.description = "Description is required";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      const errorMessage = Object.values(newErrors).join(". ");
      toast({
        variant: "destructive",
        title: "Form validation failed",
        description: errorMessage,
      });
      return;
    }

    setErrors({});
    toast({
      title: "Event created!",
      description: "Your event has been posted successfully.",
    });
  };

  return (
    <div className="container mx-auto p-6 max-w-2xl">
      <header className="mb-8 text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
          <Calendar className="h-8 w-8 text-primary" aria-hidden="true" />
        </div>
        <h1 className="text-3xl font-bold mb-2">Create New Event</h1>
        <p className="text-muted-foreground">
          Organize and share events with society members
        </p>
      </header>

      <Card>
        <CardHeader>
          <CardTitle>Event Details</CardTitle>
          <CardDescription>
            Provide information about your event. All fields marked with an asterisk (*) are required.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6" noValidate>
            <div className="space-y-2">
              <Label htmlFor="title">
                Event Title <span aria-label="required">*</span>
              </Label>
              <Input
                id="title"
                name="title"
                type="text"
                aria-required="true"
                aria-invalid={!!errors.title}
                aria-describedby={errors.title ? "title-error" : undefined}
              />
              {errors.title && (
                <p id="title-error" role="alert" className="text-sm text-destructive">
                  {errors.title}
                </p>
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="date">
                  Date <span aria-label="required">*</span>
                </Label>
                <Input
                  id="date"
                  name="date"
                  type="date"
                  aria-required="true"
                  aria-invalid={!!errors.date}
                  aria-describedby={errors.date ? "date-error" : undefined}
                />
                {errors.date && (
                  <p id="date-error" role="alert" className="text-sm text-destructive">
                    {errors.date}
                  </p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="time">
                  Time <span aria-label="required">*</span>
                </Label>
                <Input
                  id="time"
                  name="time"
                  type="time"
                  aria-required="true"
                  aria-invalid={!!errors.time}
                  aria-describedby={errors.time ? "time-error" : undefined}
                />
                {errors.time && (
                  <p id="time-error" role="alert" className="text-sm text-destructive">
                    {errors.time}
                  </p>
                )}
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="location">
                Location <span aria-label="required">*</span>
              </Label>
              <Input
                id="location"
                name="location"
                type="text"
                placeholder="e.g., Engineering Building, Room 301"
                aria-required="true"
                aria-invalid={!!errors.location}
                aria-describedby={errors.location ? "location-error" : undefined}
              />
              {errors.location && (
                <p id="location-error" role="alert" className="text-sm text-destructive">
                  {errors.location}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="maxAttendees">
                Maximum Attendees (optional)
              </Label>
              <Input
                id="maxAttendees"
                name="maxAttendees"
                type="number"
                min="1"
                placeholder="Leave blank for unlimited"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="description">
                Description <span aria-label="required">*</span>
              </Label>
              <Textarea
                id="description"
                name="description"
                rows={5}
                placeholder="Provide details about the event..."
                aria-required="true"
                aria-invalid={!!errors.description}
                aria-describedby={errors.description ? "description-error" : undefined}
              />
              {errors.description && (
                <p id="description-error" role="alert" className="text-sm text-destructive">
                  {errors.description}
                </p>
              )}
            </div>

            <Button type="submit" className="w-full" size="lg" variant="accent">
              Create Event
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
