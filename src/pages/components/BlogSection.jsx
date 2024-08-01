import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const blogPosts = [
  {
    title: "The Future of Web Development",
    excerpt: "Exploring upcoming trends and technologies in web development.",
    image: "/placeholder.svg",
    link: "#",
  },
  {
    title: "Mastering Project Management",
    excerpt: "Key strategies for successful project management in tech.",
    image: "/placeholder.svg",
    link: "#",
  },
  {
    title: "UI/UX Design Principles",
    excerpt: "Essential principles for creating user-friendly interfaces.",
    image: "/placeholder.svg",
    link: "#",
  },
];

const BlogSection = () => {
  return (
    <section id="blog" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl font-bold text-center mb-12 text-purple-600"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Latest Blog Posts
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full flex flex-col">
                <CardHeader>
                  <img src={post.image} alt={post.title} className="w-full h-48 object-cover rounded-t-lg" />
                </CardHeader>
                <CardContent className="flex-grow">
                  <CardTitle>{post.title}</CardTitle>
                  <CardDescription>{post.excerpt}</CardDescription>
                </CardContent>
                <CardFooter>
                  <Button asChild variant="outline" className="w-full">
                    <a href={post.link}>Read More</a>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;