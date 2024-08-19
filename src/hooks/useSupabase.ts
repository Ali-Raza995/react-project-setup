import { useState } from 'react';
import { supabase } from '../lib/supabase-client';

interface UseSupabase {
    sendMagicLink: (email: string) => Promise<void>;
    fetchData: (table: string) => Promise<any>;
    insertData: (table: string, data: any) => Promise<any>;
    loading: boolean;
    error: string | null;
}

const useSupabase = (): UseSupabase => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const sendMagicLink = async (email: string) => {
        setLoading(true);
        setError(null);
        try {
            const { data, error } = await supabase.auth.signInWithOtp({
                email,
                options: {
                    shouldCreateUser: false,
                    emailRedirectTo: 'http://localhost:5173/dashboard',
                }
            });
            if (error) {
                console.error('Supabase Error:', error);
                throw error;
            }
            console.log('Supabase Response Data:', data);
        } catch (err: any) {
            setError(err.message || 'Something went wrong');
            console.error('Error Details:', err);
        } finally {
            setLoading(false);
        }
    };

    // Fetch data from a table
    const fetchData = async (table: string) => {
        setLoading(true);
        setError(null);
        try {
            const { data, error } = await supabase.from(table).select('*');
            if (error) throw error;
            return data;
        } catch (err: any) {
            setError(err.message || 'Failed to fetch data');
            console.error('Error Details:', err);
        } finally {
            setLoading(false);
        }
    };

    const insertData = async (table: string, data: any) => {
        setLoading(true);
        setError(null);
        try {
            const { error } = await supabase.from(table).insert(data);
            if (error) throw error;
        } catch (err: any) {
            setError(err.message || 'Failed to insert data');
            console.error('Error Details:', err);
        } finally {
            setLoading(false);
        }
    };

    return {
        sendMagicLink,
        fetchData,
        insertData,
        loading,
        error,
    };
};

export default useSupabase;
