import prismadb from "@/lib/prismadb";

import { BadgeForm } from './components/badge-form'

const BadgePage = async ({
    params
}: {
    params: { badgeId: string }
}
) => {

    const badge = await prismadb.badge.findUnique({
        where: {
            id: params.badgeId
        },
    })

    return (
        <div className="flex-col">
            <div className="flex-1 space-y-4 p-8 pt-6">
                <BadgeForm initialData={badge} />
            </div>
        </div>
    )
}

export default BadgePage
