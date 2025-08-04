// utils/fetchAboutMe.ts
import axios from 'axios';
import { AboutMe } from '@/types/about-me';

export const fetchAboutMe = async (): Promise<AboutMe> => {
    try {
        const response = await axios.get<AboutMe>('/data/about-me.json');
        return response.data;
    } catch (error) {
        throw new Error('Failed to fetch About Me data');
    }
};
