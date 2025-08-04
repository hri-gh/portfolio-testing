"use client"
import { Button } from '@/components/ui/button'
import { usePDF } from 'react-to-pdf'
import Image from 'next/image'


export const ReactToPdfResume = () => {
    const { toPDF, targetRef } = usePDF({ filename: 'page.pdf' })
    return (
        <>
            <Button onClick={() => toPDF()}>Download</Button>
            <div ref={targetRef}>
                <header className=" rounded-lg bg-gray-100 py-12 dark:bg-gray-800">
                    <div className="container mx-auto px-4 md:px-6">
                        <div className="flex flex-col items-center space-y-4 text-center md:flex-row md:text-left md:space-y-0 md:space-x-8">
                            <Image
                                alt="Profile Picture"
                                className="rounded-full mx-auto object-cover"
                                height="96"
                                src="/pp-pic.jpeg"
                                style={{
                                    aspectRatio: "96/96",
                                    objectFit: "cover",
                                }}
                                priority
                                width="96"
                            />
                            <div className="flex-1 space-y-2">
                                <h1 className="text-3xl font-bold">John Doe</h1>
                                <p className="text-gray-500 dark:text-gray-400">Software Engineer</p>
                            </div>
                            <div className="flex flex-col items-center space-y-2 md:items-end">
                                <p className="text-gray-500 dark:text-gray-400">johndoe@example.com</p>
                                <p className="text-gray-500 dark:text-gray-400">(123) 456-7890</p>
                                <p className="text-gray-500 dark:text-gray-400">123 Main St, Anytown USA</p>
                            </div>
                        </div>
                    </div>
                </header>
                <main className="container mx-auto px-4 py-12 md:px-6 md:py-16">
                    <section className="space-y-8">
                        <div>
                            <h2 className="mb-4 text-2xl font-bold">Education</h2>
                            <div className="space-y-4">
                                <div className="grid gap-2">
                                    <h3 className="text-lg font-medium">Bachelor of Science in Computer Science</h3>
                                    <p className="text-gray-500 dark:text-gray-600">University of Anytown, Anytown USA</p>
                                    <p className="text-gray-500 dark:text-gray-600">Graduated: May 2018</p>
                                </div>
                                <div className="grid gap-2">
                                    <h3 className="text-lg font-medium">High School Diploma</h3>
                                    <p className="text-gray-500 dark:text-gray-600">Anytown High School, Anytown USA</p>
                                    <p className="text-gray-500 dark:text-gray-600">Graduated: June 2014</p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <h2 className="mb-4 text-2xl font-bold">Work Experience</h2>
                            <div className="space-y-6">
                                <div className="grid gap-2">
                                    <h3 className="text-lg font-medium">Software Engineer</h3>
                                    <p className="text-gray-500 dark:text-gray-600">Acme Inc, Anytown USA</p>
                                    <p className="text-gray-500 dark:text-gray-600">June 2018 - Present</p>
                                    <p className="text-gray-500 dark:text-gray-600">
                                        Developed and maintained web applications using React, Node.js, and MongoDB. Collaborated with
                                        cross-functional teams to design and implement new features. Participated in code reviews and
                                        mentorship of junior developers.
                                    </p>
                                </div>
                                <div className="grid gap-2">
                                    <h3 className="text-lg font-medium">Intern, Software Development</h3>
                                    <p className="text-gray-500 dark:text-gray-600">Anytown Tech, Anytown USA</p>
                                    <p className="text-gray-500 dark:text-gray-600">May 2017 - August 2017</p>
                                    <p className="text-gray-500 dark:text-gray-600">
                                        Worked on a team to develop a mobile app using React Native. Gained experience in agile development
                                        practices and version control.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <h2 className="mb-4 text-2xl font-bold">Skills</h2>
                            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
                                <div className="rounded-md bg-gray-100 px-4 py-2 text-center dark:bg-gray-800">
                                    <p className="text-gray-500 dark:text-gray-400">React</p>
                                </div>
                                <div className="rounded-md bg-gray-100 px-4 py-2 text-center dark:bg-gray-800">
                                    <p className="text-gray-500 dark:text-gray-400">Node.js</p>
                                </div>
                                <div className="rounded-md bg-gray-100 px-4 py-2 text-center dark:bg-gray-800">
                                    <p className="text-gray-500 dark:text-gray-400">MongoDB</p>
                                </div>
                                <div className="rounded-md bg-gray-100 px-4 py-2 text-center dark:bg-gray-800">
                                    <p className="text-gray-500 dark:text-gray-400">Git</p>
                                </div>
                                <div className="rounded-md bg-gray-100 px-4 py-2 text-center dark:bg-gray-800">
                                    <p className="text-gray-500 dark:text-gray-400">Agile</p>
                                </div>
                                <div className="rounded-md bg-gray-100 px-4 py-2 text-center dark:bg-gray-800">
                                    <p className="text-gray-500 dark:text-gray-400">Problem Solving</p>
                                </div>
                                <div className="rounded-md bg-gray-100 px-4 py-2 text-center dark:bg-gray-800">
                                    <p className="text-gray-500 dark:text-gray-400">Communication</p>
                                </div>
                                <div className="rounded-md bg-gray-100 px-4 py-2 text-center dark:bg-gray-800">
                                    <p className="text-gray-500 dark:text-gray-400">Teamwork</p>
                                </div>
                            </div>
                        </div>
                    </section>
                </main>
            </div>

        </>
    )
}
