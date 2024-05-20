import { Col, Row } from "antd";
import BottomTabMenu from "../../../component/common/BottomTabMenu";
import CraftCommonHeroCard from "../../../component/common/CraftCommonHeroCard";
import SideTabMenu from "../../../component/common/SideTabMenu";
import Spacer from "../../../component/common/Spacer";
import CarftActionBox from "../../../component/craft/CarftActionBox";
import CraftFlexBox from "../../../component/craft/CraftFlexBox";
import ParallelFlexBox from "../../../component/craft/ParallelFlexBox";
import QualityBox from "../../../component/craft/QualityBox";
import TheLeaseOfLife from "../../../component/craft/TheLeaseOfLife";
import TwoColumnFlexBox from "../../../component/craft/TwoColumnFlexBox";
import GuinnessInAfricaImage from "../../../public/assests/crafts/1960s_Nigeria_Promotional_Shot_Mas1440.avif";
import ArthurGuinness from "../../../public/assests/crafts/Arthur_Guinness.avif";
import neverSettleImage from "../../../public/assests/crafts/Guinness.Com_Archive_Materials_GDB_SV07.0058.02_Mas.avif";
import heroImage from "../../../public/assests/crafts/Guinness_-_Our_Story_GB_Hero_3840.avif";
import theHarpImage from "../../../public/assests/crafts/Guinness_Harp_Rgb_Social_Simp_Extreme_Logo.avif";
import howsThatForQualityImage from "../../../public/assests/crafts/hows_that_for_quality.avif";
import tabsData from "../../../utils/data/tabsData.json";


export default function ChildPages() {
    return (
        <main className='craft_main_container'>
            <Col>
                <CraftCommonHeroCard 
                title="the story of guinness" 
                image={heroImage} 
                content={[
                    "It takes a thirst for adventure to do things the Guinness way. From our humble beginnings in 1759 to the present day, we’ve gone to extraordinary lengths to bring you exceptional beer. But we’re not ones to rest on our laurels. As we like to put it: our greatest work is yet to come." 
                ]}
                 />
            </Col>
            <Spacer space={70} />
            <Col span={24} className="mobile_tab_navigator">
                <BottomTabMenu tabsData={tabsData?.guinness_story} />
            </Col>
            <Row className="craft_main_section">
                <div className="craft_left_section">
                    <SideTabMenu tabsData={tabsData?.guinness_story} />
                </div>
                <div className="craft_right_section">
                    <Col id="the-ease-of-life">
                        <CraftFlexBox
                            title={"the lease of life"}
                            image={ArthurGuinness}
                            content={
                                [
                                    "At this stage you’d be forgiven for thinking the story of ‘Arthur Guinness’ was a myth. But he was very real, and every pint served around the world is one more pint of his undeniable legacy. Arthur Guinness was the first in a long line of Guinness Master Brewers and the craft of brewing at St. James’s Gate Brewery was handed down from generation to generation. Arthur himself most likely developed his passion for brewing from his father, Richard, who was said to be in charge of brewing in the Celbridge estate of Dr. Arthur Price, later Archbishop of Cashel’",
                                    "On 31st December 1759, the man signed a NINE THOUSAND YEAR lease on St. James’s Gate Brewery in Dublin. If that’s not belief, we don’t know what is. And now we can see that his belief was a vision. A vision he saw before any of us were even born. His entrepreneurial spirit was on another level.",
                                ]
                            }
                        />
                        <Spacer space={70} />
                        <TheLeaseOfLife id={""} />
                    </Col>
                    <Col id="the-harp">
                        <CraftFlexBox
                            title={"the harp"}
                            image={theHarpImage}
                            content={
                                [
                                    'If you see the cover of an Irish passport, you’ll see nothing but a Harp. It’s the official national emblem of Ireland. You’ll notice the harp on Irish coins too. In fact, if you see someone tossing a coin in Ireland, you might even hear them call ‘Heads or Harps?’ instead of ‘Heads or Tails.’ The design stems from the 15th Century "Brian Boru" harp, a symbol that reflects Irish culture and arts. But it was Guinness that staked a claim on the harp first. By the 1860’s, Guinness stout was available all over the world and the Guinness family were in search of a symbol that would firmly identify Guinness as an Irish product and the harp was recognised as the symbol of all that was great about Irish culture and heritage. Therefore, when the Irish Free State was created in 1922, the Irish government in turn had to position their harp facing the other way due to trademark registration. If you’re looking back at old Guinness memorabilia, you’ll notice that the number of strings on the Guinness Harp varies. That’s because the design became more minimal over the years, losing strings along the way, since it first made its appearance on a Guinness bottle label in 1862.A designer called Gerry Barney was instrumental (excuse the pun) in the Harp’s evolution having re-designed the Harp in 1968, and again in 2005. Cheers, Gerry! And if you’re ever in Dublin, before you pop into the Guinness Storehouse, slip into the Trinity College Library. You can see the real "Brian Boru" harp, sitting unaware of its own history. Or is it?',
                                ]
                            }
                        />
                    </Col>
                    <Col id="hows-that-for-quality">
                        <QualityBox
                            title={"how's that for quality?"}
                            content={"Nowadays, it’s not that hard-to-find people who are willing to quality test our Guinness, with a dedicated quality team hard at work across the globe to ensure only the best quality pint is poured, every time. But 130 odd years ago, it was a different story altogether. In the 1890s, a fearless group of men chose to set sail around the world to report back on the standard of Guinness. From South Africa to Australia and China to Brazil, they literally risked their lives travelling the world by steamship, enduring stormy seas to ensure that Guinness was being shipped, stored and served in quality conditions. Wow. Sending an email doesn’t seem as romantic now, does it?"}
                            image={howsThatForQualityImage}
                        />
                        <ParallelFlexBox />
                    </Col>
                    <Col id="never-settle">
                        <TwoColumnFlexBox
                            image={neverSettleImage}
                            title={"NEVER SETTLE"}
                            content={[
                                "The Guinness legacy runs much deeper than just creating delicious brews. Arthur Guinness felt it was important to give back to the city that hosts the brewery. This legacy of philanthropic tradition was in turn passed on from father to son for seven generations, and still lives on within Guinness today.",
                                `In the 1800s, the Guinness family contributed to the restoration of St. Patricks Cathedral in Dublin. St. Stephen’s Green, a private green reserved for the city’s wealthiest residents, was purchased by Arthur Edward Guinness and donated to the City so the green space could be enjoyed by everyone within in the area.`,
                                `The Guinness Trust in London and the Iveagh Trust in Dublin was established in 1890 by Edward Cecil Guinness, 1st Lord Iveagh, to help underprivileged communities living in the inner city. In Dublin, Guinness supported families through the construction of well-built flats, a hostel, an in-door clothes and food market as well as a Play Centre - Ireland’s first creche.`,
                                `A level of employee welfare was also pioneered by Guinness, leading the way in Ireland towards better relationships between employees and employers. The brewery paid in general 10% higher than the average industrial wage in Dublin at the time and in 1870, a medical centre was established to provide free healthcare not just to employees but to their families. Guinness began to introduce employee benefits such as paid annual holidays, free meals, annual excursions and a beer allowance and in the 1880s, introduced a pension scheme for all employees.`,
                                `Arthur understood the importance of valuing his employees, leading to a happier working environment and in turn, better beer created with passion. He also understood the value of supporting the community around him and it still remains a big focus in Guinness today. From initiatives such as Water of Life, providing safe drinking water to people across the continent of Africa, to Raising the Bar, aimed at supporting hospitality men and women throughout the Covid-19 crisis, Arthur’ legacy of philanthropic tradition still lives and breathes within the walls of St. James’s Gate and beyond, and will for many more years to come.`
                            ]}
                        />
                    </Col>
                    <Col id="guinness-in-africa">
                        <CraftFlexBox
                            title={"GUINNESS IN AFRICA"}
                            image={GuinnessInAfricaImage}
                            content={
                                [
                                    "Guinness, with its iconic black liquid, has had a special place in the hearts of African consumers for almost two centuries. The first recorded shipment of Guinness to the African continent arrived in Sierra Leone in 1827. Some 135 years later in 1962 the first Guinness brewery outside of Ireland and the United Kingdom followed, the Guinness Brewery at Ikeja, Nigeria.",
                                    "Today, Guinness has operations across sub-Saharan Africa that are home to a number of Africa-first innovations. The original innovation being Guinness Foreign Extra Stout first brewed over two centuries ago to ensure the Guinness liquid survived the long sea journey to foreign shores. Then we have Guinness Smooth, a smooth, distinctive beer with the perfect balance of flavour, the character of Guinness.",
                                ]
                            }
                        />
                    </Col>
                </div>
            </Row>
            <CarftActionBox />
        </main>
    )
}