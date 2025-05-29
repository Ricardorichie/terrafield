import { users, newsletters, type User, type InsertUser, type Newsletter, type InsertNewsletter } from "@shared/schema";

export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  subscribeToNewsletter(newsletter: InsertNewsletter): Promise<Newsletter>;
  getNewsletterSubscription(email: string): Promise<Newsletter | undefined>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private newsletters: Map<number, Newsletter>;
  private currentUserId: number;
  private currentNewsletterId: number;

  constructor() {
    this.users = new Map();
    this.newsletters = new Map();
    this.currentUserId = 1;
    this.currentNewsletterId = 1;
  }

  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.currentUserId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async subscribeToNewsletter(insertNewsletter: InsertNewsletter): Promise<Newsletter> {
    // Check if email already exists
    const existingSubscription = await this.getNewsletterSubscription(insertNewsletter.email);
    if (existingSubscription) {
      // Update existing subscription
      const updated: Newsletter = {
        ...existingSubscription,
        ...insertNewsletter,
      };
      this.newsletters.set(existingSubscription.id, updated);
      return updated;
    }

    const id = this.currentNewsletterId++;
    const newsletter: Newsletter = {
      ...insertNewsletter,
      id,
      subscribedAt: new Date(),
    };
    this.newsletters.set(id, newsletter);
    return newsletter;
  }

  async getNewsletterSubscription(email: string): Promise<Newsletter | undefined> {
    return Array.from(this.newsletters.values()).find(
      (newsletter) => newsletter.email === email,
    );
  }
}

export const storage = new MemStorage();
