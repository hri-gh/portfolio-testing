import { format } from "date-fns";
import React from 'react'

// import prismadb from '@/lib/prismadb'
import { AboutmeClient } from "./components/client";
import { AboutMe } from "@prisma/client";

export type AboutmeCardData = {
  id: string;
  name: string,
  location: string,
  bio: string,
  aboutMeHeader: string,
  aboutMeDescription: string,
  schools: string,
  collages: string,
  overview: string,
  overviewHeader: string,
  learningJourney: string,
  learningJourneyHeader: string,
  linkedinUrl: string,
  githubUrl: string,
  whatsappUrl: string,
  instagramUrl: string,
  facebookUrl: string,
  primaryGmail: string,
  secondaryGmail: string,
  mobileNumber: string,
  anonymousMessageUrl: string,
  updatedAt: string;
  createdAt: string;
}

const AboutmePage = async () => {
  const res = await fetch(`${process.env.BASE_URL}/about-me`, { cache: 'no-cache' })
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }
  const aboutMe = await res.json();
  // const aboutMe = await prismadb.aboutMe.findMany()

  const formattedAboutMe: AboutmeCardData[] = aboutMe.map((item:AboutMe) => ({
    id: item.id,
    name: item.name,
    location: item.location,
    bio: item.bio,
    aboutMeHeader: item.aboutMeHeader,
    aboutMeDescription: item.aboutMeDescription,
    schools: item.schools,
    collages: item.collages,
    overview: item.overview,
    overviewHeader: item.overviewHeader,
    learningJourney: item.learningJourney,
    learningJourneyHeader: item.learningJourneyHeader,
    linkedinUrl: item.linkedinUrl,
    githubUrl: item.githubUrl,
    whatsappUrl: item.whatsappUrl,
    instagramUrl: item.instagramUrl,
    facebookUrl: item.facebookUrl,
    primaryGmail: item.primaryGmail,
    secondaryGmail: item.secondaryGmail,
    mobileNumber: item.mobileNumber,
    anonymousMessageUrl: item.anonymousMessageUrl,
    updatedAt: format(item.updatedAt, 'MMMM do, yyyy'),
    createdAt: format(item.createdAt, 'MMMM do, yyyy'),
  }))
  return (
    <>
      <div className="flex-col">
        <div className="flex-1 space-y-4 p-8 pt-6">
          <AboutmeClient data={formattedAboutMe} />
        </div>
      </div>
    </>
  )
}

export default AboutmePage
