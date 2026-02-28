import {
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
  Twitter,
} from "lucide-react";
import { cn } from "@/lib/util";
import { useToast } from "@/component/ui/use-toast";
import { useState } from "react";
import { motion } from "framer-motion";

export const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "I'll get back to you soon 🚀",
      });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section
      id="contact"
      className="py-24 px-4 bg-gradient-to-b from-background to-secondary/40"
    >
      <div className="container mx-auto max-w-6xl">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="text-4xl font-bold mb-3">
            Get In <span className="text-primary">Touch</span>
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto text-sm">
            Let’s build something amazing together.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10">
          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <h3 className="text-xl font-semibold">Contact Info</h3>

            <div className="space-y-4">
              {[
                {
                  icon: <Mail size={18} />,
                  title: "Email",
                  value: "vgvanshgoel2004@gmail.com",
                  link: "mailto:vgvanshgoel2004@gmail.com",
                },
                {
                  icon: <Phone size={18} />,
                  title: "Phone",
                  value: "+91 82187 73511",
                  link: "tel:+918218773511",
                },
                {
                  icon: <MapPin size={18} />,
                  title: "Location",
                  value: "Meerut, India",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 p-3 rounded-lg bg-card/60 backdrop-blur hover:shadow-md transition"
                >
                  <div className="p-2 bg-primary/10 text-primary rounded-full">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">
                      {item.title}
                    </p>
                    {item.link ? (
                      <a
                        href={item.link}
                        className="text-sm font-medium hover:text-primary transition"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-sm font-medium">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Socials */}
            <div>
              
              <div className="flex gap-3">
                {/* LinkedIn (active) */}
                <motion.a
                  href="https://www.linkedin.com/in/vansh-goel-7319a1307"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.15 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-2.5 rounded-full bg-card/60 backdrop-blur hover:bg-primary hover:text-white transition-all"
                >
                  <Linkedin size={16} />
                </motion.a>

                {/* Twitter (inactive) */}
                <div className="p-2.5 rounded-full bg-card/40 opacity-60 cursor-not-allowed">
                  <Twitter size={16} />
                </div>

                {/* Instagram (inactive) */}
                <div className="p-2.5 rounded-full bg-card/40 opacity-60 cursor-not-allowed">
                  <Instagram size={16} />
                </div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT SIDE FORM */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="p-6 rounded-xl border bg-white/10 backdrop-blur-lg shadow-lg h-fit"
          >
            <h3 className="text-xl font-semibold mb-4">Send a Message</h3>

            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                required
                placeholder="Your Name"
                className="input-style"
              />

              <input
                type="email"
                required
                placeholder="Your Email"
                className="input-style"
              />

              <textarea
                required
                rows={3}
                placeholder="Your Message"
                className="input-style resize-none"
              />

              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                type="submit"
                disabled={isSubmitting}
                className={cn(
                  "w-full py-2.5 rounded-lg flex items-center justify-center gap-2 text-sm font-medium transition-all",
                  "bg-primary text-white hover:shadow-md",
                  isSubmitting && "opacity-70 cursor-not-allowed"
                )}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                <Send size={14} />
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>

      {/* Input Styles */}
      <style>
        {`
          .input-style {
            width: 100%;
            padding: 10px 12px;
            border-radius: 8px;
            border: 1px solid hsl(var(--input));
            background: rgba(255,255,255,0.05);
            backdrop-filter: blur(6px);
            outline: none;
            font-size: 14px;
            transition: 0.2s;
          }

          .input-style:focus {
            border-color: hsl(var(--primary));
            box-shadow: 0 0 0 2px hsl(var(--primary) / 0.2);
          }
        `}
      </style>
    </section>
  );
};