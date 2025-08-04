import { z } from "zod"

export const RegisterSchema = z.object({
    email: z.string().email({
        message: "Email is required",
    }),
    password: z.string().min(6, {
        message: "Minimum 6 characters required",
    }),
    username: z.string().min(1, {
        message: "Name is required",
    }),
});

export const LoginSchema = z.object({
    email: z.string().email({
        message: "Email is required",
    }),
    password: z.string().min(1, {
        message: "Password is required",
    }),
});

export const OverviewFormSchema = z.object({
    header: z.string().min(1),
    description: z.string().min(1),
})

export const AboutmeFormSchema = z.object({
    name: z.string().min(1),
    location: z.string().min(1),
    bio: z.string().min(1),

    aboutMeHeader: z.string().min(1),
    aboutMeDescription: z.string().min(1),

    schools: z.string().optional(),
    collages: z.string().optional(),

    overviewHeader: z.string().min(1),
    overview: z.string().min(1),

    learningJourneyHeader: z.string().min(1),
    learningJourney: z.string().min(1),

    linkedinUrl: z.string().min(1),
    githubUrl: z.string().min(1),
    whatsappUrl: z.string().min(1),
    instagramUrl: z.string().min(1),
    facebookUrl: z.string().min(1),
    primaryGmail: z.string().min(1),
    secondaryGmail: z.string().min(1).optional(),
    mobileNumber: z.string().max(10),

    anonymousMessageUrl: z.string().min(1).optional(),


})


export const ProjectFormSchema = z.object({
    images: z.object({ url: z.string() }).array().min(1),
    projectName: z.string().min(1),
    technologies: z.string().min(1),
    aboutProject: z.string().min(1),
    liveDemoLink: z.string().optional(),
    websiteLink: z.string().optional(),
    githubLink: z.string().url(),
    gitlabLink: z.string().optional(),
    bitbucketLink: z.string().optional(),
    projectType: z.string().min(1),
})

export const ProjectFeatureSchema = z.object({
    featureTitle: z.string().min(1),
    featureDescription: z.string().min(1),
    featureImage: z.string().min(1),
    featureVideo:z.string().optional(),
})


export const SkillFormSchema = z.object({
    name: z.string().min(1),
    imageUrl: z.string().min(1),
})

export const CertificateFormSchema = z.object({
    provider: z.string().min(1),
    title: z.string().min(1),
    imageUrl: z.string().min(1),
    providerLogoUrl: z.string().min(1).optional().nullable(),
})

export const PublicProfileFormSchema = z.object({
    imageUrl: z.string().min(1),
    publicProfileName: z.string().min(1),
    publicProfileLink: z.string().min(1),

})

export const BadgeFormSchema = z.object({
    imageUrl: z.string().min(1),
    platformName: z.string().min(1),
    platformLink: z.string().min(1),

})


