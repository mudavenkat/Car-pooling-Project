import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, Users, DollarSign, Leaf, Clock, Star, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  const features = [
    {
      icon: <DollarSign className="h-8 w-8" />,
      title: "Save Money",
      description: "Split fuel costs and reduce your travel expenses by up to 75%"
    },
    {
      icon: <Leaf className="h-8 w-8" />,
      title: "Go Green",
      description: "Reduce carbon emissions by sharing rides and helping the environment"
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Meet People",
      description: "Connect with like-minded travelers and make new friends"
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Stay Safe",
      description: "Verified profiles and ratings ensure safe, reliable journeys"
    }
  ];

  const howItWorks = [
    {
      step: "1",
      title: "Search or Offer",
      description: "Find a ride that matches your route or offer seats in your car"
    },
    {
      step: "2", 
      title: "Connect & Book",
      description: "Chat with your travel companion and confirm the details"
    },
    {
      step: "3",
      title: "Travel Together",
      description: "Meet up and enjoy a comfortable, affordable journey"
    }
  ];

  const testimonials = [
    {
      name: "Emma S.",
      rating: 5,
      text: "Saved over $200 last month on my daily commute. The drivers are friendly and reliable!"
    },
    {
      name: "David M.",
      rating: 5,
      text: "Great way to meet new people while reducing my carbon footprint. Highly recommend!"
    },
    {
      name: "Lisa K.",
      rating: 5,
      text: "As a driver, I've covered most of my gas costs by offering rides. Win-win situation!"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <Hero />
      
      {/* Features Section */}
      <section className="py-24 bg-gradient-subtle">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground sm:text-4xl mb-4">
              Why Choose RideShare?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Join thousands of happy travelers who've discovered a better way to commute
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center shadow-soft hover:shadow-medium transition-spring hover:scale-105">
                <CardHeader>
                  <div className="mx-auto w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center text-primary-foreground mb-4">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{feature.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground sm:text-4xl mb-4">
              How It Works
            </h2>
            <p className="text-xl text-muted-foreground">
              Getting started is easy. Follow these simple steps.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {howItWorks.map((step, index) => (
              <div key={index} className="text-center relative">
                <div className="mx-auto w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-2xl font-bold mb-6">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
                
                {/* Connecting arrow for desktop */}
                {index < howItWorks.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-full transform -translate-y-1/2">
                    <ArrowRight className="h-6 w-6 text-muted-foreground" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="py-24 bg-gradient-hero">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-primary-foreground sm:text-4xl mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
              Whether you're looking for a ride or have space to share, we've got you covered.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="p-8 text-center shadow-glow hover:shadow-glow transition-spring hover:scale-105">
              <div className="w-16 h-16 bg-secondary/10 rounded-xl flex items-center justify-center mx-auto mb-6">
                <Users className="h-8 w-8 text-secondary" />
              </div>
              <CardTitle className="text-2xl mb-4">Need a Ride?</CardTitle>
              <CardDescription className="text-base mb-6">
                Search for available rides and find the perfect travel companion for your journey.
              </CardDescription>
              <Button asChild size="lg" className="w-full">
                <Link to="/find-ride">Find a Ride</Link>
              </Button>
            </Card>
            
            <Card className="p-8 text-center shadow-glow hover:shadow-glow transition-spring hover:scale-105">
              <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-6">
                <DollarSign className="h-8 w-8 text-primary" />
              </div>
              <CardTitle className="text-2xl mb-4">Offer a Ride?</CardTitle>
              <CardDescription className="text-base mb-6">
                Share your empty seats and earn money while helping others reach their destination.
              </CardDescription>
              <Button asChild variant="secondary" size="lg" className="w-full">
                <Link to="/offer-ride">Offer a Ride</Link>
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground sm:text-4xl mb-4">
              What Our Users Say
            </h2>
            <p className="text-xl text-muted-foreground">
              Join thousands of satisfied travelers who've made the switch.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="shadow-soft">
                <CardContent className="p-6">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4">"{testimonial.text}"</p>
                  <div className="font-semibold text-foreground">— {testimonial.name}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-16 bg-accent">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-foreground mb-4">
            Start Your Journey Today
          </h2>
          <p className="text-muted-foreground mb-8">
            Join our community and discover a better way to travel.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild variant="hero" size="lg">
              <Link to="/find-ride">Find Rides</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/offer-ride">Offer Rides</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;