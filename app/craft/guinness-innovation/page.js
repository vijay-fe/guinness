import { Col, Row } from "antd";
import BottomTabMenu from "../../../component/common/BottomTabMenu";
import CraftCommonHeroCard from "../../../component/common/CraftCommonHeroCard";
import SideTabMenu from "../../../component/common/SideTabMenu";
import Spacer from "../../../component/common/Spacer";
import CarftActionBox from "../../../component/craft/CarftActionBox";
import CraftFlexBox from "../../../component/craft/CraftFlexBox";
import guinness_microdrafter from "../../../public/assests/crafts/Guinness_Microdraught_3.avif";
import michael from "../../../public/assests/crafts/Guinness_Site_Wide_Content_Michael_Ash.avif";
import draft_twin_image from "../../../public/assests/crafts/Guinness_draught_twin.avif";
import news_paper_img from "../../../public/assests/crafts/arafed_advertiser_for_a_guinness_beer_in_a_newspaper.avif";
import guinness_nitrosurge_image from "../../../public/assests/crafts/guinness_nitrosurge_image.avif";
import innovationImage from "../../../public/assests/crafts/innovation.avif";
import tabsData from "../../../utils/data/tabsData.json";


export default function page() {
    return (
        <main className='craft_main_container'>
            <Col>
                <CraftCommonHeroCard
                    title={"INNOVATION AT GUINNESS"}
                    image={innovationImage}
                    content={[
                        `Guinness’ dedication to innovation started with none other than the man himself, Arthur Guinness, who in 1801 created the brand’s first major innovation, West India Porter. He challenged himself to find a way to export his beer to countries like the West Indies. But he needed a seriously reliable preservation method and instead of looking outside for the answers, Arthur looked inside. By creating a recipe with a high alcohol and hops content, he made a more intense beer that could preserve itself for the long journeys overseas. Genius!`,
                        `Through the years, Guinness’ dedication to innovation has remained a key part of the brand’s mission. From the wide variety of beers and technical firsts such as the introduction of nitrogen to beer and the world-renowned widget through to the MV Miranda Guinness, built in 1977 as the world’s first bulk liquid carrier, commissioned to carry Guinness from Dublin to the UK. Guinness continues to push the boundaries within the world of brewing, having recently mastered the alcohol-free pint as well as Guinness MicroDraught – the keg so small it comes in a can.`,
                    ]}
                    classes={{
                        title: "title_lg",
                    }}
                />
            </Col>
            <Spacer space={70} />
            <Col span={24} className="mobile_tab_navigator">
                <BottomTabMenu tabsData={tabsData?.guinness_innovation} />
            </Col>
            <Row className="craft_main_section">
                <div className="craft_left_section">
                    <SideTabMenu tabsData={tabsData?.guinness_innovation} />
                </div>
                <div className="craft_right_section">
                    <Col className="mb-24">
                        <CraftFlexBox
                            title={"GUINNESS NITROSURGE"}
                            image={guinness_nitrosurge_image}
                            to={"/craft/guinness-innovation/guinness-nitrosurge"}

                            content={
                                [
                                    `Designed by our Guinness innovators, designers, and taste experts, NITROSURGE brings the iconic two-part pour to everyone, everywhere, every time.`
                                ]
                            }
                        />
                    </Col>
                    <Col className="mb-24">
                        <CraftFlexBox
                            title={"GUINNESS MICRODRAUGHT"}
                            image={guinness_microdrafter}
                            to={"/craft/guinness-innovation/guinness-microdraught"}
                            content={
                                [
                                    `Guinness takes a bold new step in its long history of innovation with GUINNESS MICRODRAUGHT. The cutting-edge technology serves beautiful, Draught Guinness on tap, without requiring the gas cylinder used with traditional taps.`
                                ]
                            }
                        />
                    </Col>
                    <Col className="mb-24">
                        <CraftFlexBox
                            title={"GUINNESS 0.0"}
                            image={draft_twin_image}
                            to={"/beers/guinness-zero"}
                            content={
                                [
                                    `Guinness 0.0 boasts the same beautiful smooth taste, perfectly balanced flavour, and unique dark ruby colour, only without the alcohol. Drawing on the proud 264 year history of innovation and Guinness brewing brilliance, in 2023 welaunched our ‘Singing Pints’ TVC to spearhead the largest responsible drinking campaign in Ireland that encouraged everyone to make it a St. Patrick’s Day to remember.`
                                ]
                            }
                        />
                    </Col>
                    <Col className="mb-24">
                        <CraftFlexBox
                            title={"MICHAEL ASH"}
                            image={michael}
                            content={
                                [
                                    `In 1951, Michael Ash joined the Guinness team. Nobody could have known that he’d eventually revolutionize the way in which Guinness is enjoyed throughout the world. A master mathematician turned master brewer, Michael Ash was someone with true creative brewing spirit, backed by a strong passion for science.`,
                                    `As soon as he stepped behind the brewery gates, Ash became fascinated by the idea of serving Guinness in draught format and was convinced that adding nitrogen to the beer was not only the most effective way to do this, but also that it would transform the actual beer itself.`,
                                    `Ash’s ‘Easy Serve’ system created the ‘surge and settle’ effect that draught Guinness is now famous for. What he called ‘a fresh approach’ was the world’s first nitro beer.`,
                                    `“I don’t think anyone has called me a genius…an achiever is what I like” - Michael Ash (1927 – 2016)`,
                                    `Humble too? Our kind of man!`,
                                    `So, the next time you’re patiently watching the surge and settle of your pint, think of the man behind the magic, Michael Ash.`,
                                    `Sláinte, Michael.`
                                ]
                            }
                        />
                    </Col>
                    <Col className="mb-24">
                        <CraftFlexBox
                            title={"THE WIDGET"}
                            image={news_paper_img}
                            content={
                                [
                                    "What’s the secret to making a beer that’s rich and creamy with a smooth, velvety texture? The answer is nitrogenation.",
                                    "But how do you use a technology that was originally designed to allow the beer to be poured in pubs on draught to deliver the perfect Guinness serve in a can? That’s where the widget comes in!",
                                    "A lot of innovation loses its magic with time. But the widget has never lost its magic. Just saying the word ‘widget’ puts us in a good mood.",
                                    "It’s essentially a small, white nitrogen filled ball that sits inside the can, and the second the can is opened, the widget does what it has so patiently been waiting to do.  It releases the magic surge of bubbles, replicating the draught experience in a can.",
                                    "In 2004, a survey of almost 9,000 people voted our little widget as being a greater invention than the internet. This isn’t a joke, the widget beat the internet. But our widget has managed to remain humble since then, resisting the temptation of getting a big head (get it?).",
                                    "The result? A perfectly smooth beer that’s unmistakably Guinness every time."
                                ]
                            }
                        />
                    </Col>
                </div>
            </Row>
            <Col>
                <CarftActionBox />
            </Col>
        </main>
    )
}
