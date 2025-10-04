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
import { UserPlus } from "lucide-react";

export default function JoinSociety() {
  const { toast } = useToast();
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    // Simple validation
    const newErrors: Record<string, string> = {};
    if (!data.fullName) newErrors.fullName = "Full name is required";
    if (!data.email) newErrors.email = "Email is required";
    if (!data.studentId) newErrors.studentId = "Student ID is required";
    if (!data.year) newErrors.year = "Year of study is required";
    if (!data.interests) newErrors.interests = "Please share your interests";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      // Announce errors to screen readers
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
      title: "Application submitted!",
      description: "We'll review your application and get back to you soon.",
    });
  };

  return (
    <div className="container mx-auto p-6 max-w-2xl">
      <header className="mb-8 text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
          <UserPlus className="h-8 w-8 text-primary" aria-hidden="true" />
        </div>
        <h1 className="text-3xl font-bold mb-2">Join Our Society</h1>
        <p className="text-muted-foreground">
          Become part of a vibrant community of students and innovators
        </p>
      </header>

      <Card>
        <CardHeader>
          <CardTitle>Membership Application</CardTitle>
          <CardDescription>
            Fill out the form below to apply for society membership. All fields marked with an
            asterisk (*) are required.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6" noValidate>
            {/* Full Name */}
            <div className="space-y-2">
              <Label htmlFor="fullName">
                Full Name <span aria-label="required">*</span>
              </Label>
              <Input
                id="fullName"
                name="fullName"
                type="text"
                aria-required="true"
                aria-invalid={!!errors.fullName}
                aria-describedby={errors.fullName ? "fullName-error" : undefined}
              />
              {errors.fullName && (
                <p id="fullName-error" role="alert" className="text-sm text-destructive">
                  {errors.fullName}
                </p>
              )}
            </div>

            {/* Email */}
            <div className="space-y-2">
              <Label htmlFor="email">
                Email Address <span aria-label="required">*</span>
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                aria-required="true"
                aria-invalid={!!errors.email}
                aria-describedby={errors.email ? "email-error" : undefined}
              />
              {errors.email && (
                <p id="email-error" role="alert" className="text-sm text-destructive">
                  {errors.email}
                </p>
              )}
            </div>

            {/* Student ID */}
            <div className="space-y-2">
              <Label htmlFor="studentId">
                Student ID <span aria-label="required">*</span>
              </Label>
              <Input
                id="studentId"
                name="studentId"
                type="text"
                aria-required="true"
                aria-invalid={!!errors.studentId}
                aria-describedby={errors.studentId ? "studentId-error" : undefined}
              />
              {errors.studentId && (
                <p id="studentId-error" role="alert" className="text-sm text-destructive">
                  {errors.studentId}
                </p>
              )}
            </div>

            {/* Year of Study */}
            <div className="space-y-2">
              <Label htmlFor="year">
                Year of Study <span aria-label="required">*</span>
              </Label>
              <Select name="year" required>
                <SelectTrigger
                  id="year"
                  aria-required="true"
                  aria-invalid={!!errors.year}
                  aria-describedby={errors.year ? "year-error" : undefined}
                >
                  <SelectValue placeholder="Select your year" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1">First Year</SelectItem>
                  <SelectItem value="2">Second Year</SelectItem>
                  <SelectItem value="3">Third Year</SelectItem>
                  <SelectItem value="4">Fourth Year</SelectItem>
                  <SelectItem value="graduate">Graduate</SelectItem>
                </SelectContent>
              </Select>
              {errors.year && (
                <p id="year-error" role="alert" className="text-sm text-destructive">
                  {errors.year}
                </p>
              )}
            </div>

            {/* Interests */}
            <div className="space-y-2">
              <Label htmlFor="interests">
                Why do you want to join? <span aria-label="required">*</span>
              </Label>
              <Textarea
                id="interests"
                name="interests"
                rows={4}
                placeholder="Tell us about your interests and what you hope to gain from joining..."
                aria-required="true"
                aria-invalid={!!errors.interests}
                aria-describedby={errors.interests ? "interests-error" : undefined}
              />
              {errors.interests && (
                <p id="interests-error" role="alert" className="text-sm text-destructive">
                  {errors.interests}
                </p>
              )}
            </div>

            <Button type="submit" className="w-full" size="lg" variant="accent">
              Submit Application
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
