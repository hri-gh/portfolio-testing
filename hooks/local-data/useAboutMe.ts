// hooks/useAboutMe.ts
import { useState, useEffect } from 'react';
import { AboutMe } from '@/types/about-me';
import { fetchAboutMe } from '@/utils/fetchAboutMe';

export const useAboutMe = () => {
    const [aboutMe, setAboutMe] = useState<AboutMe | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    // useEffect(() => {
    //     const fetchAboutMe = async () => {
    //         try {
    //             const response = await fetch('/data/aboutMe.json');
    //             if (!response.ok) {
    //                 throw new Error('Failed to fetch About Me data');
    //             }
    //             const data: AboutMe = await response.json();
    //             setAboutMe(data);
    //         } catch (err: any) {
    //             setError(err.message || 'An unexpected error occurred');
    //         } finally {
    //             setLoading(false);
    //         }
    //     };

    //     fetchAboutMe();
    // }, []);

    useEffect(() => {
        const loadAboutMe = async () => {
            try {
                const data = await fetchAboutMe();
                setAboutMe(data);
            } catch (err: any) {
                setError(err.message || 'An unexpected error occurred');
            } finally {
                setLoading(false);
            }
        };

        loadAboutMe();
    }, []);

    return { aboutMe, loading, error };
};
