import Image from "next/image"
import profile from "../../../public/profile.jpg"
import { Github, Linkedin } from "lucide-react"
import Link from "next/link"
import { ROUTING_CONSTANTS } from "@/app/constants/routing.constants"

export const HomePage = () => {
    return (
        <div className="flex flex-wrap items-center space-x-20 justify-center my-32">
            <div className="rounded-lg bg-[#111111] text-neutral-300 p-6 border-2 border-[#999] ">
                <h1 className="text-4xl">Hello! I&apos;m <span className="text-white font-bold">Jack Campanale</span></h1>
                <p className="text-xl">I&apos;m an Associate Software Engineer at <span className="text-orange-700 font-bold">Optum</span></p>
                <p className="text-xl">And Graduate of <span className="text-red-700 font-bold">Worcester Polytechnic Institute</span></p>
                <p className="text-xl">I&apos;ve interned at <span className="text-orange-700 font-bold">Optum</span> and <span className="text-red-700 font-bold">Fastly</span></p>
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
            <Image className="rounded-full transform transition-all hover:scale-125" src={profile} alt="Picture of the author"/>
        </div>
    )
}