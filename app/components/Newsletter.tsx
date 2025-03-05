"use client";

import { motion } from "framer-motion";
import { Send, Check } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate subscription (replace with actual logic)
    if (email) {
      setSubscribed(true);
      // Reset after 3 seconds
      setTimeout(() => {
        setSubscribed(false);
        setEmail("");
      }, 3000);
    }
  };

  return (
    <section className="py-16">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-8 md:p-12 text-center glass-morphism"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
            Stay Ahead of Tech Trends
          </h2>
          <p className="text-primary/70 mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter and get exclusive insights, early access
            to new products, and special offers.
          </p>

          <form
            onSubmit={handleSubscribe}
            className="max-w-lg mx-auto flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4"
          >
            <Input
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-grow"
            />
            <Button
              type="submit"
              size="lg"
              className="flex items-center space-x-2 bg-primary text-primary-foreground hover:bg-primary/90"
              disabled={subscribed}
            >
              {subscribed ? (
                <>
                  <Check className="mr-2" />
                  Subscribed
                </>
              ) : (
                <>
                  <Send className="mr-2" />
                  Subscribe
                </>
              )}
            </Button>
          </form>

          {subscribed && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-4 text-green-600 font-medium"
            >
              Thank you for subscribing! Stay tuned for exciting updates.
            </motion.p>
          )}
        </motion.div>
      </div>
    </section>
  );
}
