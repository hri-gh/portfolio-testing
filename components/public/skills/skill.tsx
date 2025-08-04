import Image from "next/image"

export function Skill({item}:any) {
    // console.log("SKILL.TSX::",item);

    return (
        <div key="1" className="m-1 content-center">
            <div className="">
                <Image
                    alt="Logo"
                    className="p-3 rounded-full object-cover bg-yellow-200"
                    height="64"
                    width="64"
                    src={item.imageUrl}
                    style={{
                        aspectRatio: "100/100",
                        objectFit: "cover",
                    }}
                />
            </div>
            <div className="bg-gray-500 rounded-md m-1 text-center text-sm font-medium">{item.name}</div>
        </div>
    )
}

