import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Header } from "@/components/Header";
import { useToast } from "@/hooks/use-toast";
import { Search, MapPin, Calendar, Clock, Users, Star, Car, DollarSign } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface Ride {
  id: string;
  startLocation: string;
  destination: string;
  date: string;
  time: string;
  seats: string;
  price: string;
  car: string;
  description: string;
  driver: {
    name: string;
    rating: number;
    ridesCount: number;
  };
}

export default function FindRide() {
  const [searchData, setSearchData] = useState({
    from: "",
    to: "",
    date: "",
  });
  const [rides, setRides] = useState<Ride[]>([]);
  const [searching, setSearching] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setSearching(true);
    
    // Simulate API call delay
    setTimeout(() => {
      // Get rides from localStorage (in a real app, this would be an API call)
      const storedRides = JSON.parse(localStorage.getItem("rideshare_rides") || "[]");
      
      // Simple filtering logic - in a real app, this would be more sophisticated
      const filteredRides = storedRides.filter((ride: Ride) => {
        const matchesFrom = !searchData.from || ride.startLocation.toLowerCase().includes(searchData.from.toLowerCase());
        const matchesTo = !searchData.to || ride.destination.toLowerCase().includes(searchData.to.toLowerCase());
        const matchesDate = !searchData.date || ride.date === searchData.date;
        return matchesFrom && matchesTo && matchesDate;
      });
      
      // Add some mock rides if no stored rides exist
      if (filteredRides.length === 0 && storedRides.length === 0) {
        const mockRides: Ride[] = [
          {
            id: "1",
            startLocation: "San Francisco, CA",
            destination: "Los Angeles, CA",
            date: "2024-01-15",
            time: "08:00",
            seats: "3",
            price: "45",
            car: "Toyota Prius 2022, Silver",
            description: "Comfortable ride with AC, music allowed. One stop for coffee halfway.",
            driver: { name: "Sarah M.", rating: 4.9, ridesCount: 28 }
          },
          {
            id: "2",
            startLocation: "New York, NY",
            destination: "Boston, MA",
            date: "2024-01-15",
            time: "14:30",
            seats: "2",
            price: "32",
            car: "Honda Civic 2021, Blue",
            description: "Direct route, no smoking, pet-friendly.",
            driver: { name: "Michael R.", rating: 4.7, ridesCount: 15 }
          },
        ];
        setRides(mockRides);
      } else {
        setRides(filteredRides);
      }
      
      setSearching(false);
    }, 1000);
  };

  const handleBookRide = (rideId: string) => {
    toast({
      title: "Ride booking request sent!",
      description: "The driver will be notified and will respond soon.",
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setSearchData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <Header />
      
      <main className="mx-auto max-w-6xl px-6 py-12 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">Find a Ride</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Search for available rides and connect with drivers going your way.
          </p>
        </div>

        {/* Search Form */}
        <Card className="mb-12 shadow-medium">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Search className="h-5 w-5 text-primary" />
              Search for Rides
            </CardTitle>
          </CardHeader>
          
          <CardContent>
            <form onSubmit={handleSearch} className="space-y-4 md:space-y-0 md:grid md:grid-cols-4 md:gap-4">
              <div className="space-y-2">
                <Label htmlFor="from">From</Label>
                <Input
                  id="from"
                  placeholder="Starting location"
                  value={searchData.from}
                  onChange={(e) => handleInputChange("from", e.target.value)}
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="to">To</Label>
                <Input
                  id="to"
                  placeholder="Destination"
                  value={searchData.to}
                  onChange={(e) => handleInputChange("to", e.target.value)}
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="date">Date</Label>
                <Input
                  id="date"
                  type="date"
                  value={searchData.date}
                  onChange={(e) => handleInputChange("date", e.target.value)}
                />
              </div>
              
              <div className="flex items-end">
                <Button type="submit" className="w-full" disabled={searching}>
                  {searching ? "Searching..." : "Search Rides"}
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>

        {/* Results */}
        {rides.length > 0 && (
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-foreground">
              {rides.length} ride{rides.length !== 1 ? "s" : ""} found
            </h2>
            
            <div className="grid gap-6">
              {rides.map((ride) => (
                <Card key={ride.id} className="shadow-soft hover:shadow-medium transition-smooth">
                  <CardContent className="p-6">
                    <div className="grid md:grid-cols-4 gap-6">
                      {/* Route & Time */}
                      <div className="md:col-span-2 space-y-4">
                        <div className="flex items-center gap-2 text-lg font-semibold">
                          <MapPin className="h-5 w-5 text-primary" />
                          <span>{ride.startLocation}</span>
                          <span className="text-muted-foreground">→</span>
                          <span>{ride.destination}</span>
                        </div>
                        
                        <div className="flex items-center gap-4 text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            <span>{new Date(ride.date).toLocaleDateString()}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="h-4 w-4" />
                            <span>{ride.time}</span>
                          </div>
                        </div>
                        
                        <div className="flex items-center gap-4">
                          <Badge variant="secondary" className="flex items-center gap-1">
                            <Users className="h-3 w-3" />
                            {ride.seats} seats available
                          </Badge>
                          {ride.car && (
                            <Badge variant="outline" className="flex items-center gap-1">
                              <Car className="h-3 w-3" />
                              {ride.car}
                            </Badge>
                          )}
                        </div>
                        
                        {ride.description && (
                          <p className="text-muted-foreground text-sm">{ride.description}</p>
                        )}
                      </div>
                      
                      {/* Driver Info */}
                      <div className="flex flex-col justify-between">
                        <div className="space-y-2">
                          <div className="flex items-center gap-2">
                            <Avatar className="h-8 w-8">
                              <AvatarFallback className="bg-primary text-primary-foreground">
                                {ride.driver.name.split(' ').map(n => n[0]).join('')}
                              </AvatarFallback>
                            </Avatar>
                            <div>
                              <div className="font-medium">{ride.driver.name}</div>
                              <div className="flex items-center gap-1 text-sm text-muted-foreground">
                                <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                                <span>{ride.driver.rating}</span>
                                <span>•</span>
                                <span>{ride.driver.ridesCount} rides</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      {/* Price & Action */}
                      <div className="flex flex-col justify-between items-end">
                        <div className="text-right">
                          <div className="flex items-center gap-1 text-2xl font-bold text-foreground">
                            <DollarSign className="h-5 w-5" />
                            {ride.price}
                          </div>
                          <div className="text-sm text-muted-foreground">per person</div>
                        </div>
                        
                        <Button 
                          onClick={() => handleBookRide(ride.id)}
                          className="mt-4"
                        >
                          Book Ride
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            {/* No results message for empty searches */}
            {rides.length === 0 && !searching && (
              <div className="text-center py-12">
                <div className="text-6xl mb-4">🚗</div>
                <h3 className="text-xl font-semibold text-foreground mb-2">No rides found</h3>
                <p className="text-muted-foreground mb-6">
                  Try adjusting your search criteria or check back later.
                </p>
                <Button onClick={() => navigate("/offer-ride")} variant="outline">
                  Offer a Ride Instead
                </Button>
              </div>
            )}
          </div>
        )}
      </main>
    </div>
  );
}