"use client";

import { ChevronDown, ChevronUp } from 'lucide-react';
import Image, { StaticImageData } from 'next/image';
import React, { useState } from 'react';

interface AccordionProps {
    title: string;
    content: string;
    img: StaticImageData;
    rounded?: boolean;
    imgAlt: string;
    extra?: string;
    link?: string;
}

export const Project: React.FC<AccordionProps> = ({ title, content, img, rounded, imgAlt, extra, link }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={`rounded-lg bg-[#111111] text-neutral-300 p-6 border-2 border-[#999] w-[450px] hover:cursor-pointer ${!isOpen ? 'max-h-[280px]' : ''}`}>
            <div className="flex flex-col items-center text-center" onClick={toggleAccordion}>
                <h2 className="text-2xl mb-4">{title}</h2>
                <Image className={`${rounded ? 'rounded-full' : ''} mb-4`} src={img} height={120} alt={imgAlt}/>
                <span>{isOpen ? <ChevronUp/> : <ChevronDown/>}</span>
            </div>
            <div className={`grid transition-all ease-in-out duration-300 overflow-hidden ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                <div className='overflow-hidden text-center'>
                    {content}
                    {
                        extra && 
                            <p className='mt-4'>
                                {extra}&nbsp;
                                <span>
                                {
                                    link && <a href={link} className="text-blue-500 hover:underline">here</a>
                                }  
                                </span>
                            </p>
                    }
                </div>
            </div>
        </div>
    );
};