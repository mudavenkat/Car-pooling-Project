import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { AuthModal } from "./AuthModal";
import { ArrowRight, Users, MapPin, Clock } from "lucide-react";
import heroImage from "@/assets/hero-carpooling.jpg";

export const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-hero">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-background/5 backdrop-blur-[1px]"></div>
      
      <div className="relative mx-auto max-w-7xl px-6 py-20 sm:py-32 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl font-bold tracking-tight text-primary-foreground sm:text-6xl">
                Share the journey, 
                <span className="text-secondary-glow"> split the cost</span>
              </h1>
              <p className="text-xl text-primary-foreground/90 max-w-lg">
                Connect with fellow travelers and make your commute more affordable, 
                sustainable, and social. Join thousands who've already made the switch.
              </p>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-primary-foreground/20 rounded-xl mb-2 mx-auto">
                  <Users className="h-6 w-6 text-primary-foreground" />
                </div>
                <div className="text-2xl font-bold text-primary-foreground">50K+</div>
                <div className="text-sm text-primary-foreground/70">Active Users</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-primary-foreground/20 rounded-xl mb-2 mx-auto">
                  <MapPin className="h-6 w-6 text-primary-foreground" />
                </div>
                <div className="text-2xl font-bold text-primary-foreground">200+</div>
                <div className="text-sm text-primary-foreground/70">Cities</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-primary-foreground/20 rounded-xl mb-2 mx-auto">
                  <Clock className="h-6 w-6 text-primary-foreground" />
                </div>
                <div className="text-2xl font-bold text-primary-foreground">1M+</div>
                <div className="text-sm text-primary-foreground/70">Rides Shared</div>
              </div>
            </div>
            
            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Dialog>
                <DialogTrigger asChild>
                  <Button 
                    size="lg" 
                    className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 shadow-medium"
                  >
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-md">
                  <AuthModal mode="signup" />
                </DialogContent>
              </Dialog>
              
              <Button 
                size="lg" 
                variant="outline" 
                className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
              >
                Learn More
              </Button>
            </div>
          </div>
          
          {/* Image */}
          <div className="relative lg:ml-8">
            <div className="relative overflow-hidden rounded-2xl shadow-glow">
              <img
                src={heroImage}
                alt="People carpooling together"
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
            </div>
            
            {/* Floating card */}
            <div className="absolute -bottom-6 -left-6 bg-card p-6 rounded-xl shadow-medium border">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-success/10 rounded-full flex items-center justify-center">
                  <span className="text-2xl">💰</span>
                </div>
                <div>
                  <div className="font-semibold text-card-foreground">Save up to 75%</div>
                  <div className="text-sm text-muted-foreground">on your commute costs</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};