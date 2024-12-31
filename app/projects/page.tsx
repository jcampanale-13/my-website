import { Project } from "../components/project/project";
import pathly from '../../public/pathly.png'
import optum from '../../public/optum.png'
import twgbam from '../../public/twgbam.png'
import question from '../../public/question.png'
import { DESCRIPTIONS_CONSTANTS } from "../constants/descriptions.constants";

export default function About() {
    return (
      <div className="flex flex-col items-center">
        <div className="rounded-lg bg-[#111111] text-neutral-300 p-6 border-2 border-[#999] mt-6">
          <h1 className="text-4xl">Projects outside of Work</h1>
        </div>
        <div className="flex flex-wrap gap-4 my-16">
            <Project title="Pathly Traceroute Visualizer" content={DESCRIPTIONS_CONSTANTS.PATHLY} img={pathly} rounded={true} imgAlt="Logo for Pathly Traceroute Visualizer" extra={DESCRIPTIONS_CONSTANTS.PATHLY_EXTRA} link={DESCRIPTIONS_CONSTANTS.PATHLY_LINK}/>
            <Project title="Custom DevOps Dashboard for Optum Developers" content={DESCRIPTIONS_CONSTANTS.NAVI} img={optum} imgAlt="Logo for Optum"/>
            <Project title="Tale of the Wand Guy" content={DESCRIPTIONS_CONSTANTS.TWGBAM} img={twgbam} imgAlt="Tale of the Wand Guy Logo" extra={DESCRIPTIONS_CONSTANTS.TWGBAM_EXTRA} link={DESCRIPTIONS_CONSTANTS.TWGBAM_LINK}/>
            <Project title="Personal Project" content={DESCRIPTIONS_CONSTANTS.PERSONAL} img={question} imgAlt="Unreal Engine 5 Logo" extra={DESCRIPTIONS_CONSTANTS.PERSONAL_EXTRA} link={DESCRIPTIONS_CONSTANTS.PERSONAL_LINK}/>
        </div>
      </div>
    )
  }