import Image from "next/image"
import H2 from "./H2"
import H3 from "./H3"
export default function BookCover({cost=10000, name="Ukjent Navn", imageURL="/images/books/hardcover_21x28.png", clickHandler}) {
    return (<button onClick={() => clickHandler(name, cost, imageURL)}
    className="card card-compact w-64 py-4 bg-base-100 shadow-xl border-2 focus:border-green-500 focus:shadow-2xl h-max">
        <div className="w-full h-48 overflow-hidden flex justify-center">
            <img src={imageURL}
            alt="Shoes" className="h-full" />
            {/* <Image
            src="/images/books/hardcover_21x28.png"
            alt="Ødelagt bilde"
            width={512}
            height={512}
            className="rounded-2xl z-0"
            /> */}
        </div>
        <div className="card-body w-full">
            <H3 className="w-full text-left">{name}</H3>
            <p className="text-gray-500 text-left">+ {cost.toString() + "kr Ekstra"}</p>
        </div>
    </button>
    
    )
}