import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

export async function GET() {
  try {
    const { data, error } = await supabase.from('users').select('count').single();
    
    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ 
      message: 'Successfully connected to Supabase!',
      data 
    });
  } catch (error) {
    return NextResponse.json({ 
      error: 'Failed to connect to Supabase' 
    }, { 
      status: 500 
    });
  }
} 