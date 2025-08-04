"use client"

import React, { useState, useRef } from 'react'
import { useBadges } from '@/hooks/get-badges';
import { Badge } from './badge';
import { BentoGrid } from '@/components/custom-ui/bento-grid';
import BadgeSkeleton from './badge-skeleton';
import { Badge as BadgeData } from '@prisma/client';
import { Button } from '@/components/ui/button';

export const BadgeList = ({data}:{data: BadgeData[]}) => {
    const [selectedPlatform, setSelectedPlatform] = useState<string | null>(null);

    // const [data, error, loading] = useBadges()

    // Extract unique platform names from badges
    // const platforms = Array.from(new Set(data.map((badge: any) => badge.platformName)));


    // Filter the badges based on selectedPlatform
    const filteredBadges = selectedPlatform
        ? data.filter((item: any) => item.platformName === selectedPlatform)
        : data;

    const skeletons = [1, 2, 3, 4, 5, 6]
    return (
        <>
            {/* <PlatformCarousel
                platforms={platforms}
                onPlatformSelect={setSelectedPlatform} // Pass the selected platform to state
            /> */}

            {/* Dropdown for selecting platformName */}
            <div className=" flex max-w-4xl mx-auto my-3 justify-end">
                <select
                    className=" py-2 px-3 border border-gray-300 text-black bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    value={selectedPlatform || ''}
                    onChange={(e) => setSelectedPlatform(e.target.value || null)}
                >
                    <option value="" className='text-gray-700 bg-white hover:bg-gray-100'>All Platforms</option>
                    {Array.from(new Set(data.map((item: any) => item.platformName))).map(
                        (platform: any) => (
                            <option key={platform} value={platform} className="text-gray-700 bg-white hover:bg-gray-100">
                                {platform}
                            </option>
                        )
                    )}
                </select>
            </div>

            {/* {loading && (
                // grid lg:grid-cols-3 md:grid-cols-1  gap-4
                <div className="lg:flex lg:flex-wrap lg:justify-between mx-auto max-w-4xl ">
                    {skeletons.map((skeleton: any) => (
                        <BadgeSkeleton key={skeleton} />

                    ))}
                </div>
            )} */}
            <BentoGrid className='max-w-4xl mx-auto'>
                {filteredBadges.map((item: any) => (
                    <Badge key={item.id} item={item} />
                ))}
            </BentoGrid>
        </>
    )
}


interface PlatformCarouselProps {
    platforms: any;
    onPlatformSelect: (platform: string | null) => void; // Callback to pass selected platform
}

const PlatformCarousel: React.FC<PlatformCarouselProps> = ({ platforms, onPlatformSelect }) => {
    const [selectedPlatform, setSelectedPlatform] = useState<string | null>(null);
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    const scrollLeft = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({
                left: -150, // Adjust scroll distance
                behavior: "smooth",
            });
        }
    };

    const scrollRight = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({
                left: 150, // Adjust scroll distance
                behavior: "smooth",
            });
        }
    };

    const handlePlatformClick = (platform: string) => {
        const newPlatform = platform === selectedPlatform ? null : platform;
        setSelectedPlatform(newPlatform);
        onPlatformSelect(newPlatform); // Pass selected platform to parent
    };

    return (
        <div className="relative flex items-center my-4">
            <Button className="absolute left-0 z-10" onClick={scrollLeft}>
                &#8249;
            </Button>

            <div
                className="flex overflow-x-auto  scrollbar-hide space-x-4 px-10"
                ref={scrollContainerRef}
            >
                {platforms.map((platform: any, index: number) => (
                    <Button
                        key={index}
                        onClick={() => handlePlatformClick(platform)}
                        className={`flex-shrink-0 ${selectedPlatform === platform ? 'bg-blue-500 text-white' : ''}`}
                    >
                        {platform}
                    </Button>
                ))}
            </div>

            <Button className="absolute right-0 z-10" onClick={scrollRight}>
                &#8250;
            </Button>
        </div>
    );
};
