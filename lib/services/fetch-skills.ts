
export async function fetchSkills() {
    const res = await fetch(`${process.env.BASE_URL}/skills`, { cache: 'no-cache' })

    if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error('Failed to fetch data')
    }
    const data = await res.json();

    return data
}
