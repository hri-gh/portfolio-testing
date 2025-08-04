/**
 * v0 by Vercel.
 * @see https://v0.dev/t/0FJSMyBuJO6
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Badge } from "@/components/ui/badge"
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel"
import Link from "next/link"
import Image from "next/image"

export default function ProjectDetailsPage() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
                <Image
                  src={"/placeholder.svg"}
                  alt={""}
                  width={1000}
                  height={1000}
                  className="w-full h-[60vh] object-cover rounded-lg shadow-xl"
                />
      <section className="w-full py-12 md:py-24 lg:py-32 border-b">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">Acme Web App</h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  A full-stack web application built with React, Node.js, and MongoDB. It features a modern and
                  responsive design, user authentication, and CRUD functionality.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">React</Badge>
                  <Badge variant="secondary">Node.js</Badge>
                  <Badge variant="secondary">MongoDB</Badge>
                  <Badge variant="secondary">Express</Badge>
                </div>
              </div>
            </div>
            <Carousel className="w-full max-w-md">
              <CarouselContent>
                <CarouselItem>
                  <Image
                    src="/placeholder.svg"
                    width={550}
                    height={550}
                    alt="Project Screenshot"
                    className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:aspect-square"
                  />
                </CarouselItem>
                <CarouselItem>
                  <Image
                    src="/placeholder.svg"
                    width={550}
                    height={550}
                    alt="Project Screenshot"
                    className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:aspect-square"
                  />
                </CarouselItem>
                <CarouselItem>
                  <Image
                    src="/placeholder.svg"
                    width={550}
                    height={550}
                    alt="Project Screenshot"
                    className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:aspect-square"
                  />
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-12">
            <div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Project Features</h2>
              <p className="mt-4 max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                The Acme Web App offers a range of features to help users manage their tasks and projects effectively.
              </p>
            </div>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <div className="grid gap-1">
                <h3 className="text-xl font-bold">User Authentication</h3>
                <p className="text-muted-foreground">Users can sign up, log in, and manage their account settings.</p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-xl font-bold">Task Management</h3>
                <p className="text-muted-foreground">
                  Users can create, update, and delete tasks, and mark them as complete.
                </p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-xl font-bold">Project Collaboration</h3>
                <p className="text-muted-foreground">
                  Users can invite team members to collaborate on projects and assign tasks.
                </p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-xl font-bold">Calendar Integration</h3>
                <p className="text-muted-foreground">
                  Users can view their tasks and projects on a calendar and set due dates.
                </p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-xl font-bold">Reporting and Analytics</h3>
                <p className="text-muted-foreground">
                  Users can generate reports and view analytics on their task and project progress.
                </p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-xl font-bold">Mobile Responsive</h3>
                <p className="text-muted-foreground">
                  The app is designed to be fully responsive and accessible on mobile devices.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="grid gap-10 sm:px-10 md:gap-16 md:grid-cols-2">
            <div className="space-y-4">
              <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Live Demo</div>
              <h2 className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
                Experience the Acme Web App
              </h2>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link
                  href="#"
                  className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  prefetch={false}
                >
                  Live Demo
                </Link>
                <Link
                  href="#"
                  className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  prefetch={false}
                >
                  View Source
                </Link>
              </div>
            </div>
            <div className="flex flex-col items-start space-y-4">
              <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Screenshots</div>
              <Carousel className="w-full max-w-md">
                <CarouselContent>
                  <CarouselItem>
                    <Image
                      src="/placeholder.svg"
                      width={300}
                      height={200}
                      alt="Screenshot 1"
                      className="rounded-lg object-cover"
                      style={{ aspectRatio: "300/200", objectFit: "cover" }}
                    />
                  </CarouselItem>
                  <CarouselItem>
                    <Image
                      src="/placeholder.svg"
                      width={300}
                      height={200}
                      alt="Screenshot 2"
                      className="rounded-lg object-cover"
                      style={{ aspectRatio: "300/200", objectFit: "cover" }}
                    />
                  </CarouselItem>
                  <CarouselItem>
                    <Image
                      src="/placeholder.svg"
                      width={300}
                      height={200}
                      alt="Screenshot 3"
                      className="rounded-lg object-cover"
                      style={{ aspectRatio: "300/200", objectFit: "cover" }}
                    />
                  </CarouselItem>
                  <CarouselItem>
                    <Image
                      src="/placeholder.svg"
                      width={300}
                      height={200}
                      alt="Screenshot 4"
                      className="rounded-lg object-cover"
                      style={{ aspectRatio: "300/200", objectFit: "cover" }}
                    />
                  </CarouselItem>
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
