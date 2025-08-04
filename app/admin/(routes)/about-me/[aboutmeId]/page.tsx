import prismadb from "@/lib/prismadb";

import { AboutmeForm } from './components/aboutMe-form'

const AboutMe = async ({
    params
}: {
    params: { aboutmeId: string }
}
) => {

    const aboutMe = await prismadb.aboutMe.findUnique({
        where: {
            id: params.aboutmeId
        }
    })

    return (
        <div className="flex-col">
            <div className="flex-1 space-y-4 p-8 pt-6">
                <AboutmeForm initialData={aboutMe} />
            </div>
        </div>
    )
}

export default AboutMe
