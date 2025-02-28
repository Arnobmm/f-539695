
import { useEffect, useRef } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import { Link } from "react-router-dom";

const blogPosts = [
  {
    id: 1,
    title: "The Art of Mindful Living",
    excerpt: "Discover how mindfulness practices can transform your daily life and bring a sense of peace to your routine.",
    date: "June 15, 2023",
    category: "Lifestyle",
    readTime: "5 min read"
  },
  {
    id: 2,
    title: "Exploring Hidden Gems in South America",
    excerpt: "From the lush Amazon rainforest to the pristine beaches of Uruguay, South America offers countless hidden treasures.",
    date: "May 28, 2023",
    category: "Travel",
    readTime: "8 min read"
  },
  {
    id: 3,
    title: "The Future of Sustainable Tech",
    excerpt: "How eco-friendly innovations are reshaping the technology landscape and creating a more sustainable future.",
    date: "April 10, 2023",
    category: "Technology",
    readTime: "6 min read"
  },
  {
    id: 4,
    title: "Essential Cooking Techniques Everyone Should Know",
    excerpt: "Master these fundamental cooking methods to elevate your culinary skills and impress your dinner guests.",
    date: "March 22, 2023",
    category: "Food",
    readTime: "7 min read"
  }
];

const Index = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Smooth scrolling functionality
    const handleSmoothScroll = (event: WheelEvent) => {
      if (scrollRef.current) {
        event.preventDefault();
        
        const scrollSpeed = 1.5; // Adjust for faster/slower scrolling
        const targetScroll = scrollRef.current.scrollTop + (event.deltaY * scrollSpeed);
        
        // Smooth scroll animation
        scrollRef.current.scrollTo({
          top: targetScroll,
          behavior: 'smooth'
        });
      }
    };

    const currentRef = scrollRef.current;
    if (currentRef) {
      currentRef.addEventListener('wheel', handleSmoothScroll, { passive: false });
    }

    return () => {
      if (currentRef) {
        currentRef.removeEventListener('wheel', handleSmoothScroll);
      }
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
      {/* Video Background */}
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden z-0">
        <video
          autoPlay
          muted
          loop
          className="absolute min-w-full min-h-full object-cover opacity-40"
        >
          <source src="https://assets.mixkit.co/videos/preview/mixkit-ink-swirling-in-slow-motion-169-large.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-70"></div>
      </div>

      {/* Header/Navigation */}
      <header className="relative z-10 py-6 px-4 md:px-10 backdrop-blur-sm bg-black/30">
        <div className="container mx-auto">
          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
              Luminous Blog
            </h1>
            
            <NavigationMenu className="hidden md:block">
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()} href="#">
                    Home
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Categories</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                      {["Lifestyle", "Travel", "Technology", "Food", "Health", "Culture"].map((category) => (
                        <li key={category}>
                          <NavigationMenuLink asChild>
                            <a
                              href="#"
                              className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                            >
                              <div className="text-sm font-medium leading-none">{category}</div>
                            </a>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()} href="#">
                    About
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()} href="#">
                    Contact
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
            
            <div className="md:hidden">
              <button aria-label="Toggle menu" className="p-2">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 12H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M3 6H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M3 18H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main ref={scrollRef} className="flex-1 relative z-10 overflow-hidden">
        <ScrollArea className="h-[calc(100vh-144px)]">
          <section className="py-16 px-4 md:px-10">
            <div className="container mx-auto">
              <div className="mb-16 text-center">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
                    Explore Our Latest Stories
                  </span>
                </h2>
                <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto animate-fade-in">
                  Dive into a world of captivating stories, insightful perspectives, and thought-provoking ideas.
                </p>
              </div>
              
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
                {blogPosts.map((post) => (
                  <Card key={post.id} className="bg-black/50 backdrop-blur-md border-gray-800 hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300 hover-scale">
                    <CardHeader>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-xs text-purple-400">{post.category}</span>
                        <span className="text-xs text-gray-400">{post.date}</span>
                      </div>
                      <CardTitle className="text-xl md:text-2xl">{post.title}</CardTitle>
                      <CardDescription className="text-gray-300">
                        {post.excerpt}
                      </CardDescription>
                    </CardHeader>
                    <CardFooter className="flex justify-between">
                      <span className="text-xs text-gray-400">{post.readTime}</span>
                      <Link to="#" className="text-sm font-medium text-purple-400 hover:text-purple-300 underline">
                        Read more
                      </Link>
                    </CardFooter>
                  </Card>
                ))}
              </div>
              
              <div className="mt-16 text-center">
                <button className="px-6 py-3 rounded-full bg-gradient-to-r from-purple-500 to-pink-600 text-white font-medium hover:from-purple-600 hover:to-pink-700 transition-all duration-300 animate-pulse">
                  Load More Stories
                </button>
              </div>
            </div>
          </section>
          
          <section className="py-16 px-4 md:px-10 bg-gradient-to-b from-black/0 via-purple-900/20 to-black/0">
            <div className="container mx-auto">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
                    Subscribe to Our Newsletter
                  </span>
                </h2>
                <div className="flex flex-col md:flex-row gap-4">
                  <input 
                    type="email" 
                    placeholder="Enter your email address" 
                    className="flex-1 rounded-full px-6 py-3 bg-black/50 border border-purple-500/30 focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500 text-white"
                  />
                  <button className="rounded-full px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-600 text-white font-medium hover:from-purple-600 hover:to-pink-700 transition-all duration-300">
                    Subscribe
                  </button>
                </div>
                <p className="text-sm text-gray-400 mt-4 text-center">
                  Join our community and get weekly updates on new stories and exclusive content.
                </p>
              </div>
            </div>
          </section>
          
          <footer className="py-12 px-4 md:px-10 border-t border-gray-800 backdrop-blur-sm bg-black/30">
            <div className="container mx-auto">
              <div className="text-center">
                <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600 mb-4">
                  Luminous Blog
                </h3>
                <p className="text-gray-400 mb-6">
                  Illuminating perspectives, one story at a time.
                </p>
                <div className="flex justify-center space-x-6 mb-8">
                  {/* Social Media Icons */}
                  {["Facebook", "Twitter", "Instagram", "LinkedIn"].map((social) => (
                    <a href="#" key={social} className="text-gray-400 hover:text-white transition-colors">
                      {social}
                    </a>
                  ))}
                </div>
                <div className="text-sm text-gray-500">
                  © {new Date().getFullYear()} Luminous Blog. All rights reserved.
                </div>
              </div>
            </div>
          </footer>
        </ScrollArea>
      </main>
    </div>
  );
};

export default Index;
