import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Header } from "@/components/Header";
import { MapPin, Calendar, Clock, Users, DollarSign } from "lucide-react";

export default function OfferRide() {
  const [formData, setFormData] = useState({
    startLocation: "",
    destination: "",
    date: "",
    time: "",
    seats: "",
    price: "",
    description: "",
    car: "",
    preferences: "",
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Mock ride creation - in a real app, this would hit an API
    const ride = {
      id: Date.now().toString(),
      ...formData,
      driver: {
        name: "Current User",
        rating: 4.8,
        ridesCount: 15,
      },
      createdAt: new Date(),
    };

    // Store in localStorage for demo purposes
    const existingRides = JSON.parse(localStorage.getItem("rideshare_rides") || "[]");
    existingRides.push(ride);
    localStorage.setItem("rideshare_rides", JSON.stringify(existingRides));
    
    toast({
      title: "Ride offered successfully!",
      description: "Your ride is now available for passengers to book.",
    });
    
    // Reset form
    setFormData({
      startLocation: "",
      destination: "",
      date: "",
      time: "",
      seats: "",
      price: "",
      description: "",
      car: "",
      preferences: "",
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <Header />
      
      <main className="mx-auto max-w-4xl px-6 py-12 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">Offer a Ride</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Share your journey and help others while earning some extra money for gas and tolls.
          </p>
        </div>

        <Card className="shadow-medium">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MapPin className="h-5 w-5 text-primary" />
              Ride Details
            </CardTitle>
            <CardDescription>
              Fill out the information about your upcoming trip
            </CardDescription>
          </CardHeader>
          
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Route Information */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="startLocation">Starting Location *</Label>
                  <Input
                    id="startLocation"
                    placeholder="Enter pickup location"
                    value={formData.startLocation}
                    onChange={(e) => handleInputChange("startLocation", e.target.value)}
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="destination">Destination *</Label>
                  <Input
                    id="destination"
                    placeholder="Enter destination"
                    value={formData.destination}
                    onChange={(e) => handleInputChange("destination", e.target.value)}
                    required
                  />
                </div>
              </div>

              {/* Date and Time */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="date" className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    Date *
                  </Label>
                  <Input
                    id="date"
                    type="date"
                    value={formData.date}
                    onChange={(e) => handleInputChange("date", e.target.value)}
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="time" className="flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    Departure Time *
                  </Label>
                  <Input
                    id="time"
                    type="time"
                    value={formData.time}
                    onChange={(e) => handleInputChange("time", e.target.value)}
                    required
                  />
                </div>
              </div>

              {/* Seats and Price */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="seats" className="flex items-center gap-2">
                    <Users className="h-4 w-4" />
                    Available Seats *
                  </Label>
                  <Select value={formData.seats} onValueChange={(value) => handleInputChange("seats", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select number of seats" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1">1 seat</SelectItem>
                      <SelectItem value="2">2 seats</SelectItem>
                      <SelectItem value="3">3 seats</SelectItem>
                      <SelectItem value="4">4 seats</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="price" className="flex items-center gap-2">
                    <DollarSign className="h-4 w-4" />
                    Price per Seat *
                  </Label>
                  <Input
                    id="price"
                    type="number"
                    placeholder="25"
                    min="0"
                    step="0.01"
                    value={formData.price}
                    onChange={(e) => handleInputChange("price", e.target.value)}
                    required
                  />
                </div>
              </div>

              {/* Car Information */}
              <div className="space-y-2">
                <Label htmlFor="car">Vehicle Information</Label>
                <Input
                  id="car"
                  placeholder="e.g., Toyota Camry 2020, Blue"
                  value={formData.car}
                  onChange={(e) => handleInputChange("car", e.target.value)}
                />
              </div>

              {/* Description */}
              <div className="space-y-2">
                <Label htmlFor="description">Additional Information</Label>
                <Textarea
                  id="description"
                  placeholder="Any additional details about the trip, stops, or preferences..."
                  value={formData.description}
                  onChange={(e) => handleInputChange("description", e.target.value)}
                  rows={3}
                />
              </div>

              {/* Preferences */}
              <div className="space-y-2">
                <Label htmlFor="preferences">Passenger Preferences</Label>
                <Input
                  id="preferences"
                  placeholder="e.g., No smoking, Pet-friendly, Music preferences"
                  value={formData.preferences}
                  onChange={(e) => handleInputChange("preferences", e.target.value)}
                />
              </div>

              <div className="flex gap-4 pt-6">
                <Button type="submit" className="flex-1">
                  Offer This Ride
                </Button>
                <Button type="button" variant="outline" className="flex-1">
                  Save as Draft
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}