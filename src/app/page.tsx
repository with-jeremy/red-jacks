import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex flex-col items-center justify-center bg-gradient-to-b from-black to-background text-center px-4">
        <h1 className="text-5xl md:text-7xl font-script text-bloodRed mb-6">Red Jacks</h1>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl">
          The ultimate punk rock venue management platform
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link 
            href="/events" 
            className="bg-bloodRed hover:bg-bloodRed-700 text-white font-bold py-3 px-6 rounded-md transition-colors"
          >
            Upcoming Events
          </Link>
          <Link 
            href="/dashboard" 
            className="bg-secondary hover:bg-secondary/80 text-secondary-foreground font-bold py-3 px-6 rounded-md transition-colors"
          >
            Staff Login
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-secondary">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-script text-bloodRed mb-12 text-center">Venue Management Made Easy</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-card p-6 rounded-lg">
              <h3 className="text-2xl font-script text-bloodRed mb-4">Events</h3>
              <p className="mb-4">Create and manage upcoming shows, set ticket prices, and track attendance.</p>
            </div>
            
            <div className="bg-card p-6 rounded-lg">
              <h3 className="text-2xl font-script text-bloodRed mb-4">Tickets</h3>
              <p className="mb-4">Sell tickets online with secure QR codes for easy check-in on event day.</p>
            </div>
            
            <div className="bg-card p-6 rounded-lg">
              <h3 className="text-2xl font-script text-bloodRed mb-4">Analytics</h3>
              <p className="mb-4">Track venue performance, popular events, and audience demographics.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* About Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-script text-bloodRed mb-6">About Red Jacks</h2>
          <p className="text-xl mb-6">
            A legendary punk rock venue with a history of hosting the best underground shows.
            Our management platform keeps the chaos organized so the music can stay wild.
          </p>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="mt-auto py-8 bg-black px-4 text-center">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Red Jacks Venue Management. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
