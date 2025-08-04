


export async function fetchABoutMe() {
    const res = await fetch(`${process.env.BASE_URL}/about-me`, { next: { revalidate: 10 } })

    if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error('Failed to fetch data')
    }

    const data = await res.json()

    return data
}
