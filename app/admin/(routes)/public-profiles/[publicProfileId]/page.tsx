import prismadb from "@/lib/prismadb";

import { PublicProfileForm } from './components/public-profile-form'

const PublicProfilePage = async ({
    params
}: {
    params: { publicProfileId: string }
}
) => {

    const publicProfile = await prismadb.publicProfile.findUnique({
        where: {
            id: params.publicProfileId
        },
    })

    return (
        <div className="flex-col">
            <div className="flex-1 space-y-4 p-8 pt-6">
                <PublicProfileForm initialData={publicProfile} />
            </div>
        </div>
    )
}

export default PublicProfilePage
