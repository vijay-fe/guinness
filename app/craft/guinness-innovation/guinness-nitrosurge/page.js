import { Col } from 'antd';
import CraftCommonHeroCard from '../../../../component/common/CraftCommonHeroCard';
import CarftActionBox from '../../../../component/craft/CarftActionBox';
import StoryBlock from '../../../../component/craft/StoryBlock';
import nitrosurge_banner from "../../../../public/assests/crafts/nitrosurge_banner.avif";
import nitrosurge_pouring_image from "../../../../public/assests/crafts/nitrosurge_pouring_image.avif";
export default function page() {
  return (
    <main className='craft_main_container'>
        <Col>
        <CraftCommonHeroCard
                    classes={{
                        title: "title_md",
                    }}
                    title={`DELIVERS THE SATISFYINGLY SMOOTH GUINNESS YOU ENJOY, AT HOME.`}
                    image={nitrosurge_banner}
                    content={[
                        `Guinness NITROSURGE is your complete pouring experience, using innovative technology to put you in control of the iconic Guinness two-part pour. Designed by our Guinness innovators, designers, and taste experts, NITROSURGE brings the iconic two-part pour to everyone, everywhere, every time.`
                    ]}
                />
        </Col>
        <Col>
                <StoryBlock
                    image={nitrosurge_pouring_image}
                    title={"PUTTING THE CRAFT OF THE POUR IN YOUR HANDS.."}
                    content={[
                        `Guinness have married technology and innovation to create something special. GUINNESS NITROSURGE is your complete pouring experience. It delivers the satisfyingly smooth Guinness you enjoy, at home. The GUINNESS NITROSURGE Device uses ultrasonic technology to break down the nitrogen in Guinness and give you a beautifully smooth two-part pour every time.`,
                        `Expertly designed to create perfectly formed nitrogen bubbles, creating the surge and flavour of beautiful, great-tasting Guinness for every pour. The ergonomics, strength and frequency of pulsing and flow patterns are carefully tuned to work exclusively with GUINNESS NITROSURGE cans.`
                    ]}
                    to={"https://nitrosurge.guinness.com/en/"}
                    linkText={"Visit The Nitrosurge Website For More Info"}
                    externalLink={true}
                />
            </Col>
            <Col>
                <CarftActionBox />
            </Col>
    </main>
  )
}
