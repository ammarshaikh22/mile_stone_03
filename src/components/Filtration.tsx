import React, { useEffect, useState } from "react";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import fetchingData from "@/data/FetchingData";
import { filtrationMenu } from "@/data/data";
import SearchInputData from "./SearchInputData";

const Filtration = ({ setFilterData, setCount, className }: any) => {
    const [value, setValue] = useState("Mobile-accessories");
    useEffect(() => {
        const getOneData = async () => {
            let res = await fetchingData(
                `https://dummyjson.com/products/category/${value}`
            );
            setCount(res.total)
            setFilterData(res.products);
        };
        getOneData();
    }, [value, setValue]);
    return (
        <div className={className}>
            <div className="mb-8 relative">
                <SearchInputData />
            </div>
            <Accordion type="single" collapsible className="w-full">
                {filtrationMenu.map((elem) => {
                    return (
                        <AccordionItem value={elem.id.toString()} key={elem.id}>
                            <AccordionTrigger className="text-xl font-semibold">
                                {elem.name}
                            </AccordionTrigger>
                            <AccordionContent>
                                <ul className="flex flex-col gap-4">
                                    {elem.options.map((elem: any, ind: number) => {
                                        return (
                                            <div key={ind} className="flex items-center gap-4">
                                                <input
                                                    type="radio"
                                                    name="option"
                                                    onChange={(e) => setValue(e.target.value)}
                                                    value={elem}
                                                />
                                                <li className="text-gray-400">{elem}</li>
                                            </div>
                                        );
                                    })}
                                </ul>
                            </AccordionContent>
                        </AccordionItem>
                    );
                })}
            </Accordion>
        </div>
    );
};

export default Filtration;
