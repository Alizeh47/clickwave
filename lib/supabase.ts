import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Types for Supabase tables
export type Database = {
  public: {
    Tables: {
      users: {
        Row: {
          id: string;
          email: string;
          full_name: string | null;
          avatar_url: string | null;
          created_at: string;
          updated_at: string;
          last_login: string | null;
          is_active: boolean;
          role: 'user' | 'admin' | 'editor';
        };
        Insert: {
          email: string;
          full_name?: string;
          avatar_url?: string;
          is_active?: boolean;
          role?: 'user' | 'admin' | 'editor';
        };
        Update: {
          email?: string;
          full_name?: string;
          avatar_url?: string;
          last_login?: string;
          is_active?: boolean;
          role?: 'user' | 'admin' | 'editor';
        };
      };
      profiles: {
        Row: {
          id: string;
          username: string | null;
          bio: string | null;
          website: string | null;
          company: string | null;
          location: string | null;
          social_links: Record<string, any> | null;
          preferences: Record<string, any>;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id: string;
          username?: string;
          bio?: string;
          website?: string;
          company?: string;
          location?: string;
          social_links?: Record<string, any>;
          preferences?: Record<string, any>;
        };
        Update: {
          username?: string;
          bio?: string;
          website?: string;
          company?: string;
          location?: string;
          social_links?: Record<string, any>;
          preferences?: Record<string, any>;
        };
      };
      newsletter_subscriptions: {
        Row: {
          id: string;
          email: string;
          status: 'active' | 'unsubscribed' | 'bounced';
          subscription_date: string;
          unsubscribe_date: string | null;
          preferences: Record<string, any>;
          source: string | null;
          tags: string[] | null;
        };
        Insert: {
          email: string;
          status?: 'active' | 'unsubscribed' | 'bounced';
          preferences?: Record<string, any>;
          source?: string;
          tags?: string[];
        };
        Update: {
          status?: 'active' | 'unsubscribed' | 'bounced';
          unsubscribe_date?: string;
          preferences?: Record<string, any>;
          tags?: string[];
        };
      };
      contact_submissions: {
        Row: {
          id: string;
          name: string;
          email: string;
          subject: string | null;
          message: string;
          status: 'pending' | 'in_progress' | 'resolved' | 'spam';
          submitted_at: string;
          resolved_at: string | null;
          assigned_to: string | null;
          priority: 'low' | 'normal' | 'high' | 'urgent';
          tags: string[] | null;
          metadata: Record<string, any>;
        };
        Insert: {
          name: string;
          email: string;
          subject?: string;
          message: string;
          status?: 'pending' | 'in_progress' | 'resolved' | 'spam';
          priority?: 'low' | 'normal' | 'high' | 'urgent';
          tags?: string[];
          metadata?: Record<string, any>;
        };
        Update: {
          status?: 'pending' | 'in_progress' | 'resolved' | 'spam';
          resolved_at?: string;
          assigned_to?: string;
          priority?: 'low' | 'normal' | 'high' | 'urgent';
          tags?: string[];
          metadata?: Record<string, any>;
        };
      };
    };
  };
}; 