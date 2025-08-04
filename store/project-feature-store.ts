import { create } from 'zustand';
import { ProjectFeature as Feature } from '@prisma/client';

// interface Feature {
//     id: string;
//     featureTitle: string;
//     featureDescription: string;
//     featureImage: string;
// }

interface FeatureStore {
    features: Feature[];
    setFeatures: (features: Feature[]) => void;
    addFeature: (feature: Feature) => void;
    deleteFeature: (featureId: string) => void;
}

export const useFeatureStore = create<FeatureStore>((set) => ({
    features: [],

    setFeatures: (features: Feature[]) => {
        set(() => ({
            features,
        }));
    },

    addFeature: (feature: Feature) => {
        set((state) => ({
            features: [...state.features, feature],
        }));
    },

    deleteFeature: (featureId: string) => {
        set((state) => ({
            features: state.features.filter((feature) => feature.id !== featureId),
        }));
    },
}));
