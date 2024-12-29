export default function About() {
    return (
      <div className="flex items-center space-x-20 justify-center my-32">
        <div className="rounded-lg bg-[#111111] text-neutral-300 p-6 border-2 border-[#999] ">
          <h1 className="text-4xl mb-4">About Me:</h1>
          <p className="text-xl">Hello! I'm <span className="text-white font-bold">Jack Campanale</span></p>
          <p className="text-xl">I'm currently an Associate Software Engineer at <span className="text-orange-700 font-bold">Optum</span></p>
          <p className="text-xl">I've interned at <span className="text-orange-700 font-bold">Optum</span> and <span className="text-red-700 font-bold">Fastly</span></p>
        </div>
      </div>
    )
  }