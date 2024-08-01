import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl font-bold text-center mb-12 text-purple-600"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Get in Touch
        </motion.h2>
        <div className="max-w-2xl mx-auto">
          <motion.form
            className="space-y-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Input placeholder="Your Name" />
            <Input type="email" placeholder="Your Email" />
            <Input placeholder="Subject" />
            <Textarea placeholder="Your Message" className="h-32" />
            <Button type="submit" className="w-full bg-purple-600 hover:bg-purple-700">
              Send Message
            </Button>
          </motion.form>
          <motion.div
            className="mt-12 flex justify-center space-x-6"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <a href="#" className="text-gray-600 hover:text-purple-600 transition-colors">
              <FaLinkedin size={24} />
            </a>
            <a href="#" className="text-gray-600 hover:text-purple-600 transition-colors">
              <FaGithub size={24} />
            </a>
            <a href="#" className="text-gray-600 hover:text-purple-600 transition-colors">
              <FaTwitter size={24} />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;