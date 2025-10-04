import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Megaphone } from "lucide-react";

export default function PostAnnouncement() {
  const { toast } = useToast();
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    // Simple validation
    const newErrors: Record<string, string> = {};
    if (!data.title) newErrors.title = "Title is required";
    if (!data.content) newErrors.content = "Content is required";
    if (!data.category) newErrors.category = "Category is required";
    if (!data.priority) newErrors.priority = "Priority is required";

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
      title: "Announcement posted!",
      description: "Your announcement has been shared with all members.",
    });
  };

  return (
    <div className="container mx-auto p-6 max-w-2xl">
      <header className="mb-8 text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
          <Megaphone className="h-8 w-8 text-primary" aria-hidden="true" />
        </div>
        <h1 className="text-3xl font-bold mb-2">Post Announcement</h1>
        <p className="text-muted-foreground">
          Share important updates with society members
        </p>
      </header>

      <Card>
        <CardHeader>
          <CardTitle>Announcement Details</CardTitle>
          <CardDescription>
            Create a new announcement. All fields marked with an asterisk (*) are required.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6" noValidate>
            <div className="space-y-2">
              <Label htmlFor="title">
                Title <span aria-label="required">*</span>
              </Label>
              <Input
                id="title"
                name="title"
                type="text"
                placeholder="e.g., New Mentorship Program Launched"
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
                <Label htmlFor="category">
                  Category <span aria-label="required">*</span>
                </Label>
                <Select name="category" required>
                  <SelectTrigger
                    id="category"
                    aria-required="true"
                    aria-invalid={!!errors.category}
                    aria-describedby={errors.category ? "category-error" : undefined}
                  >
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="program">Program</SelectItem>
                    <SelectItem value="events">Events</SelectItem>
                    <SelectItem value="updates">Updates</SelectItem>
                    <SelectItem value="opportunities">Opportunities</SelectItem>
                    <SelectItem value="community">Community</SelectItem>
                  </SelectContent>
                </Select>
                {errors.category && (
                  <p id="category-error" role="alert" className="text-sm text-destructive">
                    {errors.category}
                  </p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="priority">
                  Priority <span aria-label="required">*</span>
                </Label>
                <Select name="priority" required>
                  <SelectTrigger
                    id="priority"
                    aria-required="true"
                    aria-invalid={!!errors.priority}
                    aria-describedby={errors.priority ? "priority-error" : undefined}
                  >
                    <SelectValue placeholder="Select priority" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="high">High</SelectItem>
                    <SelectItem value="medium">Medium</SelectItem>
                    <SelectItem value="low">Low</SelectItem>
                  </SelectContent>
                </Select>
                {errors.priority && (
                  <p id="priority-error" role="alert" className="text-sm text-destructive">
                    {errors.priority}
                  </p>
                )}
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="content">
                Content <span aria-label="required">*</span>
              </Label>
              <Textarea
                id="content"
                name="content"
                rows={6}
                placeholder="Write your announcement content here..."
                aria-required="true"
                aria-invalid={!!errors.content}
                aria-describedby={errors.content ? "content-error" : undefined}
              />
              {errors.content && (
                <p id="content-error" role="alert" className="text-sm text-destructive">
                  {errors.content}
                </p>
              )}
            </div>

            <Button type="submit" className="w-full" size="lg" variant="accent">
              Post Announcement
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
