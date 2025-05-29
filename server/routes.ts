import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertNewsletterSchema } from "@shared/schema";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // Newsletter subscription endpoint
  app.post("/api/newsletter/subscribe", async (req, res) => {
    try {
      const validatedData = insertNewsletterSchema.parse(req.body);
      
      const subscription = await storage.subscribeToNewsletter(validatedData);
      
      res.json({ 
        success: true, 
        message: "Successfully subscribed to newsletter!",
        subscription: {
          email: subscription.email,
          localSales: subscription.localSales,
          exportOpportunities: subscription.exportOpportunities,
          investmentNews: subscription.investmentNews,
        }
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ 
          success: false, 
          message: "Invalid input data", 
          errors: error.errors 
        });
      } else {
        res.status(500).json({ 
          success: false, 
          message: "Failed to subscribe to newsletter" 
        });
      }
    }
  });

  // Get newsletter subscription status
  app.get("/api/newsletter/:email", async (req, res) => {
    try {
      const { email } = req.params;
      const subscription = await storage.getNewsletterSubscription(email);
      
      if (subscription) {
        res.json({ 
          success: true, 
          subscription: {
            email: subscription.email,
            localSales: subscription.localSales,
            exportOpportunities: subscription.exportOpportunities,
            investmentNews: subscription.investmentNews,
            subscribedAt: subscription.subscribedAt,
          }
        });
      } else {
        res.status(404).json({ 
          success: false, 
          message: "Email not found in newsletter subscriptions" 
        });
      }
    } catch (error) {
      res.status(500).json({ 
        success: false, 
        message: "Failed to retrieve subscription" 
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
