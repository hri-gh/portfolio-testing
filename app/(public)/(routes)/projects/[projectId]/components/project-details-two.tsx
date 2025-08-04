/**
 * v0 by Vercel.
 * @see https://v0.dev/t/WgcmIqi8sfl
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link"
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator, BreadcrumbPage } from "@/components/ui/breadcrumb"
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel"
import Image from "next/image"

export default function ProjectDetailsTwo() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link href="#" className="flex items-center justify-center" prefetch={false}>
          <MountainIcon className="h-6 w-6" />
          <span className="sr-only">My Portfolio</span>
        </Link>
        <Breadcrumb className="ml-4 hidden sm:flex">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="/projects">Projects</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Project Details</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_550px]">
              <Carousel className="w-full max-w-md">
                <CarouselContent>
                  <CarouselItem>
                    <Image
                      src="/placeholder.svg"
                      width="1100"
                      height="620"
                      alt="Project Screenshot"
                      className="aspect-video overflow-hidden rounded-xl object-cover"
                    />
                  </CarouselItem>
                  <CarouselItem>
                    <Image
                      src="/placeholder.svg"
                      width="1100"
                      height="620"
                      alt="Project Screenshot 2"
                      className="aspect-video overflow-hidden rounded-xl object-cover"
                    />
                  </CarouselItem>
                  <CarouselItem>
                    <Image
                      src="/placeholder.svg"
                      width="1100"
                      height="620"
                      alt="Project Screenshot 3"
                      className="aspect-video overflow-hidden rounded-xl object-cover"
                    />
                  </CarouselItem>
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">Project Name</h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    A brief description of the project, highlighting its key features and purpose.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Project Details</h2>
                <div className="grid gap-4">
                  <div className="grid gap-1">
                    <h3 className="text-xl font-bold">Technologies Used</h3>
                    <p className="text-muted-foreground">React, Next.js, Tailwind CSS, TypeScript</p>
                  </div>
                  <div className="grid gap-1">
                    <h3 className="text-xl font-bold">Project Goals</h3>
                    <p className="text-muted-foreground">
                      Develop a modern and responsive portfolio website to showcase my work and skills.
                    </p>
                  </div>
                  <div className="grid gap-1">
                    <h3 className="text-xl font-bold">Key Features</h3>
                    <ul className="list-disc pl-4 text-muted-foreground">
                      <li>Clean and minimal design</li>
                      <li>Responsive layout for all devices</li>
                      <li>Smooth scrolling and animations</li>
                      <li>Easily customizable and maintainable</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="grid gap-4">
                <Image
                  src="/placeholder.svg"
                  width="550"
                  height="310"
                  alt="Project Screenshot 2"
                  className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
                />
                <Image
                  src="/placeholder.svg"
                  width="550"
                  height="310"
                  alt="Project Screenshot 3"
                  className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Resources</h2>
                <div className="grid gap-4">
                  <div className="grid gap-1">
                    <h3 className="text-xl font-bold">Live Project</h3>
                    <Link
                      href="#"
                      className="inline-flex items-center gap-2 text-primary hover:underline"
                      prefetch={false}
                    >
                      <GlobeIcon className="h-4 w-4" />
                      example.com
                    </Link>
                  </div>
                  <div className="grid gap-1">
                    <h3 className="text-xl font-bold">GitHub Repository</h3>
                    <Link
                      href="#"
                      className="inline-flex items-center gap-2 text-primary hover:underline"
                      prefetch={false}
                    >
                      <GitlabIcon className="h-4 w-4" />
                      example/project
                    </Link>
                  </div>
                  <div className="grid gap-1">
                    <h3 className="text-xl font-bold">Documentation</h3>
                    <Link
                      href="#"
                      className="inline-flex items-center gap-2 text-primary hover:underline"
                      prefetch={false}
                    >
                      <FileTextIcon className="h-4 w-4" />
                      Project Documentation
                    </Link>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Project Showcase</h2>
                <div className="grid grid-cols-2 gap-4">
                  <Image
                    src="/placeholder.svg"
                    width="270"
                    height="150"
                    alt="Project Screenshot 4"
                    className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center"
                  />
                  <Image
                    src="/placeholder.svg"
                    width="270"
                    height="150"
                    alt="Project Screenshot 5"
                    className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center"
                  />
                  <Image
                    src="/placeholder.svg"
                    width="270"
                    height="150"
                    alt="Project Screenshot 6"
                    className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center"
                  />
                  <Image
                    src="/placeholder.svg"
                    width="270"
                    height="150"
                    alt="Project Screenshot 7"
                    className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-muted-foreground">&copy; 2024 My Portfolio. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link href="#" className="text-xs hover:underline underline-offset-4" prefetch={false}>
            Terms of Service
          </Link>
          <Link href="#" className="text-xs hover:underline underline-offset-4" prefetch={false}>
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  )
}

function FileTextIcon(props:any) {
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
      <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
      <path d="M14 2v4a2 2 0 0 0 2 2h4" />
      <path d="M10 9H8" />
      <path d="M16 13H8" />
      <path d="M16 17H8" />
    </svg>
  )
}


function GitlabIcon(props:any) {
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
      <path d="m22 13.29-3.33-10a.42.42 0 0 0-.14-.18.38.38 0 0 0-.22-.11.39.39 0 0 0-.23.07.42.42 0 0 0-.14.18l-2.26 6.67H8.32L6.1 3.26a.42.42 0 0 0-.1-.18.38.38 0 0 0-.26-.08.39.39 0 0 0-.23.07.42.42 0 0 0-.14.18L2 13.29a.74.74 0 0 0 .27.83L12 21l9.69-6.88a.71.71 0 0 0 .31-.83Z" />
    </svg>
  )
}


function GlobeIcon(props:any) {
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
      <circle cx="12" cy="12" r="10" />
      <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
      <path d="M2 12h20" />
    </svg>
  )
}


function MountainIcon(props:any) {
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
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  )
}
