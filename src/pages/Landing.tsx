import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Calendar, Megaphone, MessageSquare, ArrowRight } from "lucide-react";

export default function Landing() {
  const features = [
    {
      icon: Users,
      title: "Build Community",
      description: "Connect with fellow students and society members in a collaborative environment.",
    },
    {
      icon: Calendar,
      title: "Organize Events",
      description: "Plan and manage society events with an intuitive calendar interface.",
    },
    {
      icon: Megaphone,
      title: "Share Announcements",
      description: "Keep everyone informed with important updates and announcements.",
    },
    {
      icon: MessageSquare,
      title: "Real-time Chat",
      description: "Engage in discussions and stay connected with instant messaging.",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Skip to content link for screen readers */}
      <a href="#main-content" className="skip-to-content">
        Skip to main content
      </a>

      <main id="main-content">
        {/* Hero Section */}
        <section
          className="container mx-auto px-4 py-20 text-center"
          aria-labelledby="hero-heading"
        >
          <h1
            id="hero-heading"
            className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"
          >
            Welcome to Google Collaboration Society
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            A platform designed to help university students collaborate, share ideas, and build
            lasting connections within their societies.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button asChild size="lg" variant="accent">
              <Link to="/join">
                Join Society
                <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link to="/dashboard">View Dashboard</Link>
            </Button>
          </div>
        </section>

        {/* Features Section */}
        <section
          className="container mx-auto px-4 py-20"
          aria-labelledby="features-heading"
        >
          <h2
            id="features-heading"
            className="text-3xl md:text-4xl font-bold text-center mb-12"
          >
            Everything You Need to Succeed
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10">
                    <feature.icon className="h-6 w-6 text-primary" aria-hidden="true" />
                  </div>
                  <CardTitle>{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section
          className="container mx-auto px-4 py-20"
          aria-labelledby="cta-heading"
        >
          <Card className="bg-gradient-to-r from-primary to-accent text-primary-foreground">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl md:text-4xl mb-4">
                Ready to Get Started?
              </CardTitle>
              <CardDescription className="text-primary-foreground/90 text-lg">
                Join our society today and become part of a vibrant community of learners and
                innovators.
              </CardDescription>
            </CardHeader>
            <CardContent className="flex justify-center">
              <Button asChild size="lg" variant="secondary">
                <Link to="/join">Join Now</Link>
              </Button>
            </CardContent>
          </Card>
        </section>
      </main>
    </div>
  );
}
