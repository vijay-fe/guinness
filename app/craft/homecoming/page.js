import { Col, Image } from "antd";
import CraftCommonHeroCard from "../../../component/common/CraftCommonHeroCard";
import Spacer from "../../../component/common/Spacer";
import CarftActionBox from "../../../component/craft/CarftActionBox";
import StoryBlock from "../../../component/craft/StoryBlock";
import homecomingBanner from "../../../public/assests/crafts/Guinness_homecoming_hero.avif";
import beach_meet_shoreImage from "../../../public/assests/crafts/beach_meet_shore.avif";
import homecoming_singing from "../../../public/assests/crafts/homecoming_singing.avif";
import life_like_pnever_left from "../../../public/assests/crafts/life_like_pnever_left.png";


export default function HomeComing() {
    return (
        <main className='craft_main_container'>
            <Col>
                <CraftCommonHeroCard
                    classes={{
                        title: "title_md",
                    }}
                    title="NIALL HORAN’S HOMECOMING: THE ROAD TO MULLINGAR WITH LEWIS CAPALDI"
                    image={homecomingBanner}
                    content={[
                        "Guinness proudly presents, Niall Horan’s Homecoming: The Road to Mullingar with Lewis Capaldi. Three days, two globally recognised musicians, one incredible road trip documented in an episode filled with fun, friendship and laughter.",
                        "What happens when two of the biggest names in music embark on a road trip in Ireland? A film that captures adventure, friendship, storytelling and non-stop laughter. All inspired by Horan’s desire to revisit and reconnect with all that he loves of home; to retrace the origins of the exciting life journey he’s on and experience the reality of Ireland today, alongside side his best friend, Lewis Capaldi."
                    ]}
                />
            </Col>
            <Col>
                <StoryBlock
                    image={life_like_pnever_left}
                    title={`“I FEEL LIKE I’VE NEVER LEFT”`}
                    linkTitle={""}
                />
            </Col>
            {/* <Spacer space={70} /> */}
            <Col className="lg-px-16 px-4">
                <Image
                    className="w-full h-full"
                    src={homecoming_singing?.src}
                    preview={false}
                    placeholder={
                        <Image
                        preview={false}
                        src={homecoming_singing?.blurDataURL}
                        />
                    }
                />
            </Col>
                <Spacer space={70} />
            <Col>
                <StoryBlock
                    image={beach_meet_shoreImage}
                    title={"A STORY OF FRIENDSHIP AND TALENT"}
                    content={[
                        `The film tells a story of friendship and talent while celebrating modern Irish culture through the lens of two global superstars who have an authentic connection to Ireland. Both Niall and Lewis not only embody the values of camaraderie and friendship, but as two global icons grounded in their roots, they never sway away from where they started from.`,
                        `The episode will air in the Republic of Ireland at 10pm on 16th October 2022, Virgin Media One.`,
                        ` in the following countries starting from 20.00hrs BST 21st October, 2022: USA, UK, Australia, Canada, Mexico, Spain, Germany, Austria and Italy.`,
                        `Please drink responsibly.`
                    ]}
                    linkTitle={""}
                />
            </Col>
            <Col>
                <CarftActionBox />
            </Col>
        </main>
    )
}