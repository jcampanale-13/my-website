import Link from "next/link";
import { ROUTING_CONSTANTS } from "../constants/routing.constants";
import { Github, Linkedin } from "lucide-react";

export default function Contact() {
    return (
        <div className="flex items-center space-x-20 justify-center my-32">
            <div className="rounded-lg bg-[#111111] text-neutral-300 p-6 border-2 border-[#999] ">
                <h1 className="text-4xl mb-4">Contact Me:</h1>
                <p className="text-xl">Email: 
                    <span className="text-white font-bold hover:underline">
                    <Link href="mailto:jcampanale54@gmail.com">
                        jcampanale54@gmail.com
                    </Link>  
                    </span>
                </p>
                <p className="text-xl">Phone: <span className="text-white font-bold"> 774-239-2508 </span></p>
                <div className="flex gap-3">
                    <button className="bg-[#333] text-white p-2 rounded-md mt-4 hover:bg-[#444]">
                        <Link href={ROUTING_CONSTANTS.GITHUB}>
                            <Github/>
                        </Link>
                    </button>
                    <button className="bg-[#333] text-white p-2 rounded-md mt-4 hover:bg-[#444]">
                        <Link href={ROUTING_CONSTANTS.LINKED_IN}>
                            <Linkedin/>
                        </Link>
                    </button>
                </div>
            </div>
        </div>
    )
}