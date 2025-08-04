/**
 * v0 by Vercel.
 * @see https://v0.dev/t/yWFDavfPiRN
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { AboutMe } from "@/types/about-me"


export default function SidebarResumeWithCard({ data }: { data: AboutMe }) {
  return (
    <div className="bg-background text-foreground font-sans rounded-lg">
      <div className="container mx-auto py-12 px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-[1fr,2fr] gap-8">
          <Card className="bg-primary-foreground text-primary p-6">
            <div className="flex items-center gap-4">
              <Avatar className="w-20 h-20">
                <AvatarImage src="/placeholder-user.jpg" alt="Profile Photo" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <div>
                <h1 className="text-3xl font-bold">{data.name}</h1>
                <p className="text-sm text-muted-foreground">{data.bio}</p>
              </div>
            </div>
            <Separator className="my-6" />
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <MailIcon className="w-5 h-5" />
                <span>{data.primaryGmail}</span>
              </div>
              <div className="flex items-center gap-2">
                <PhoneIcon className="w-5 h-5" />
                <span>{data.mobileNumber}</span>
              </div>
              <div className="flex items-center gap-2">
                <LinkIcon className="w-5 h-5" />
                <Link href="#" className="hover:underline" prefetch={false}>
                  johndoe.com
                </Link>
              </div>
              <div className="flex items-center gap-2">
                <LocateIcon className="w-5 h-5" />
                <span>{data.location}</span>
              </div>
            </div>
          </Card>
          <div className="space-y-8">
            {/* TECHNICAL SKILLS */}
            <Card>
              <CardHeader>
                <CardTitle>Technical Skills</CardTitle>
              </CardHeader>
              <CardContent className="grid grid-cols-2 md:grid-cols-3 gap-4">
                <Badge variant="outline" className="border-primary bg-primary-foreground text-primary">
                  React
                </Badge>
                <Badge variant="outline" className="border-primary bg-primary-foreground text-primary">
                  Node.js
                </Badge>
                <Badge variant="outline" className="border-primary bg-primary-foreground text-primary">
                  MongoDB
                </Badge>
                <Badge variant="outline" className="border-primary bg-primary-foreground text-primary">
                  JavaScript
                </Badge>
                <Badge variant="outline" className="border-primary bg-primary-foreground text-primary">
                  TypeScript
                </Badge>
                <Badge variant="outline" className="border-primary bg-primary-foreground text-primary">
                  Git
                </Badge>
              </CardContent>
            </Card>


            {/* WORK EXPERIENCE */}
            <Card>
              <CardHeader>
                <CardTitle>Work Experience</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold">Software Engineer</h3>
                  <p className="text-muted-foreground">Acme Inc. | 2019 - Present</p>
                  <ul className="mt-2 space-y-2 list-disc pl-5">
                    <li>Developed and maintained web applications using React, Node.js, and MongoDB</li>
                    <li>Collaborated with cross-functional teams to deliver high-quality software</li>
                    <li>Implemented new features and improvements based on user feedback</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Intern</h3>
                  <p className="text-muted-foreground">Widgets Inc. | 2018 - 2019</p>
                  <ul className="mt-2 space-y-2 list-disc pl-5">
                    <li>Assisted in the development of a SaaS platform using Angular and Firebase</li>
                    <li>Participated in daily stand-ups and sprint planning meetings</li>
                    <li>Gained experience in agile software development practices</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* PROJECTS */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-gray-700 bg-yellow-100 px-2 py-1 rounded">Projects</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div  className="flex">
                  <h3 className="text font-semibold text-blue-500 underline">Certified Scrum Master: </h3>
                  <p className="text-muted-foreground flex-1 ml-2">Project Description Lorem ipsum dolor sit amet con Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima doloribus optio velit, non dolorem illum.</p>
                </div>

                <div className="flex ">
                  <h3 className="font-semibold text-blue-500 underline">Best Hackathon Project: </h3>
                  <p className="text-muted-foreground flex-1 ml-2 justify-between">Project Description Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis excepturi atque laudantium dolores officiis dignissimos, sint quod odio ex quos!</p>
                </div>
              </CardContent>
            </Card>

            {/* EDUCATION */}
            <Card>
              <CardHeader>
                <CardTitle>Education</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold">Bachelor of Science in Computer Science</h3>
                  <p className="text-muted-foreground">University of California, Berkeley | 2015 - 2019</p>
                  <p className="mt-2">
                    Graduated with a 3.8 GPA and received the Deans List award for academic excellence.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* AWARDS & CERTIFICATES */}
            <Card>
              <CardHeader>
                <CardTitle>Awards & Certifications</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold">Certified Scrum Master</h3>
                  <p className="text-muted-foreground">Scrum Alliance | 2021</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Best Hackathon Project</h3>
                  <p className="text-muted-foreground">Acme Hackathon | 2020</p>
                </div>
              </CardContent>
            </Card>

          </div>
        </div>
      </div>
    </div>
  )
}

function LinkIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
    </svg>
  )
}


function LocateIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="2" x2="5" y1="12" y2="12" />
      <line x1="19" x2="22" y1="12" y2="12" />
      <line x1="12" x2="12" y1="2" y2="5" />
      <line x1="12" x2="12" y1="19" y2="22" />
      <circle cx="12" cy="12" r="7" />
    </svg>
  )
}


function MailIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  )
}


function PhoneIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  )
}
