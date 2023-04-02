import BookCover from "@/components/BookCover";
import H2 from "@/components/H2";
import ProgressPurchase from "@/components/ProgressPurchase";
import Costs from "@/components/Costs";
import XMargin from "@/components/XMargin";
import YMargin from "@/components/YMargin";
import { useState } from "react";
import CONSTANTS from "@/constants";
import { useRouter } from "next/router";
import { queryToUrlParams } from "@/functions/utils";
import Anchor from "@/components/Anchor";
import ArrowRight from "@/components/ArrowRight";

export default function velgpakke() {
    const [currentBook, setCurrentBook] = useState()
    const books = CONSTANTS.books;
    const router = useRouter();
    function clickHandler(name, cost, imageURL) {
        setCurrentBook({name, cost, imageURL})
        router.push(`?book_name=${name}`, undefined, { shallow: true })
    }
    return (
        <XMargin>
            <YMargin>
                <div className="max-md:flex max-md:justify-center w-full">
                    <ProgressPurchase step={1}/>
                </div>
                <H2 className="w-full max-md:block hidden text-center pt-4">Velg bok omslag 🏞️</H2>
                <div className="w-full flex pt-16 max-md:pt-8 max-md:flex-col flex-row">
                    <div className="px-8 w-3/5 max-md:w-full max-md:justify-center bg-blue-300+ flex flex-wrap gap-4 gap-y-8 justify-between">
                        {
                            books.map((book, i) => {
                                return <BookCover 
                                name={book.name}
                                cost={book.cost}
                                imageURL={book.imageURL}
                                key={i}
                                clickHandler={clickHandler}
                                />
                            })
                        }
                    </div>
                    <div className="w-2/5 max-md:w-full h-96 px-8 max-md:pt-8">
                        <Costs
                        products={currentBook ? [currentBook] : []}
                        />
                        {/* 
                        // TODO make the code below pretty
                        */}
                        <Anchor
                        href={(currentBook ? [currentBook] : []).length ? "/registrerdeg?" + queryToUrlParams(router.query) : "#"}
                        title={(currentBook ? [currentBook] : []).length ? "Neste side" : "Du må velge et bok omslag for å gå videre"}
                        disabled={!(currentBook ? [currentBook] : []).length}
                        >
                            <button className="btn btn-primary text-white bg-green-800" disabled={!(currentBook ? [currentBook] : []).length}>
                                Gå videre 
                                <ArrowRight strokeWidth="4" style='w-4 h-4 ml-4' strokeColor={(currentBook ? [currentBook] : []).length ? "white": "rgb(177, 177, 183)"}/>
                            </button>
                        </Anchor>
                    </div>
                </div>
            </YMargin>
        </XMargin>)
}