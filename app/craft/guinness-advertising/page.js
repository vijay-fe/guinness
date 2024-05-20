import { Col, Row } from "antd";
import BottomTabMenu from "../../../component/common/BottomTabMenu";
import CraftCommonHeroCard from "../../../component/common/CraftCommonHeroCard";
import SideTabMenu from "../../../component/common/SideTabMenu";
import Spacer from "../../../component/common/Spacer";
import CarftActionBox from "../../../component/craft/CarftActionBox";
import CraftFlexBox from "../../../component/craft/CraftFlexBox";
import TwoColumnFlexBox from "../../../component/craft/TwoColumnFlexBox";
import bob_marly_ref_holding_beer from "../../../public/assests/crafts/bob_marly_ref_holding_beer.png";
import advertaisingImage from "../../../public/assests/crafts/craft_beer_bird_transport.avif";
import guinness_rugby from "../../../public/assests/crafts/guinness_rugby.avif";
import gloryImage from "../../../public/assests/crafts/john_glory_image.avif";
import troup_celebration_event from "../../../public/assests/crafts/troup_celebration_event.png";
import tabsData from "../../../utils/data/tabsData.json";



export default function Page() {
    return (
        <main className='craft_main_container'>
            <Col>
                <CraftCommonHeroCard
                    title={"GUINNESS ADVERTISING"}
                    image={advertaisingImage}
                    content={[
                        "For 170 years, Guinness never advertised. The beer did the talking. But in 1929, the Guinness family agreed that the brand could make ads… as long as the quality of the advertising was as good as the quality of the beer. A very simple and very effective stipulation. In February 1929, the first official Guinness advert appeared in the national British press with the slogan ‘Guinness is Good for You’.",
                        "And now, after a journey from toucans & surfers to ‘Sapeurs’ and a countless amount of ‘first sips’, it’s fair to say that Guinness advertising has captured the hearts and minds of generations. As Brian Sibley writes in his book ‘Guinness Advertising’, ‘Guinness has always been the hero of its own advertising, quite simply Guinness advertising has become an institution – like tea, cricket and fish and chips.’",
                        "All you have to do is search ‘Guinness ad’ online and you will find a world of delicious creativity and artwork. Well, that’s how Arthur might have described his beers, and with as many awards for the ads as the beer itself, the family’s only rule has clearly been upheld!",
                    ]}
                />
            </Col>
            <Spacer space={70} />
            <Col span={24} className="mobile_tab_navigator">
                <BottomTabMenu tabsData={tabsData?.guinness_advertising} />
            </Col>
            <Row className="craft_main_section">
                <div className="craft_left_section">
                    <SideTabMenu tabsData={tabsData?.guinness_advertising} />
                </div>
                <div className="craft_right_section">
                    <Col id="John-gilroy" className="mb-20">
                        <CraftFlexBox
                            title={"JOHN GILROY"}
                            image={gloryImage}
                            id="panel-john-gilroy-tab"
                            content={
                                [
                                    "You might not know his name, but you'll certainly know his art, from the iconic Guinness Toucan to the mischievous, stout drinking Ostrich. John Gilroy was a polymath of the painting world, with a mind unlike those of his peers. For this reason, the Guinness campaigns he brought to life from the 1930s to the 1960s remain as distinctive now as they were back then.",
                                    `The idea of using animals to advertise Guinness originally occurred to Gilroy after visiting the circus. While watching a performing sea-lion he entertained the curious thought that the animal would be smart enough to balance a glass of Guinness on its nose! Alas , it became the concept for one of the world's longest running advertising campaigns "My Goodness, MY GUINNESS”.`,
                                ]
                            }
                        />
                    </Col>
                    <Col id="guinness-sapeurs" className="my-20">
                        <TwoColumnFlexBox
                            image={troup_celebration_event}
                            title={`GUINESS "SAPEURS"`}
                            content={[
                                `The ‘Sapeurs’ is a group of humble and refined gentlemen from Brazzaville, the capital of the Republic of Congo, who have a deep-rooted pride in their aspirational culture. Their life is not defined by occupation or wealth, but by respect, a moral code and a desire to inspire others through their style and attitude.`,
                                `It’s not the fabric or cost of the suit that counts, it is the worth of the man inside it. The ‘Sapeurs’ are farmers, taxi drivers, carpenters and labourers, ordinary working men, who have a gift for the extraordinary. As they wash away the day’s grime and fastidiously dress in their unique style, we witness their transformation.`,
                                `The ad culminates in a brightly coloured and social affair, which sees the community unite and celebrate the bold choice to live a lifestyle that is not only unexpected, but within their local communities is a source of inspiration and positivity. The ‘Sapeurs’ inspire others to dream beyond their circumstances.`,
                                `The ‘Sapeurs’ advert was created in 2004 by advertising agency Abbott Mead Vickers BBDO, together with renowned director Nicolai Fuglsig.`,
                            ]}
                        />
                    </Col>
                    <Col id="liberty-fields" className="mb-20">
                        <CraftFlexBox
                            title={"LIBERTY FIELDS: GUINNESS RUGBY423"}
                            image={guinness_rugby}
                            content={
                                [
                                    `Liberty Fields is the latest of Guinness’ Made of More stories, and tells the remarkable tale of a group of women who defied the social conventions of 80s Japan, by forming an ultimately indomitable rugby team.`,
                                    `In 1989 Tokyo, women’s rugby was almost unheard of and the team faced ridicule and hostility from all angles.`,
                                    `But this scepticism only drove them to train harder, work longer and fight their way to the top.`,
                                    `Despite their humble beginnings, they soon became one of the strongest sides around and many of them were selected to represent their country in the women’s World Cup.`,
                                    `Liberty Fields RFC played at this level despite having no coach, no doctor and very little support, instead relying on what they did have – a team.`,
                                    `Balancing training with jobs and families, they set a new level for women’s sport in Japan, showing what you can achieve with grit, determination, and an unbreakable spirit.`
                                ]
                            }
                        />
                    </Col>
                    <Col id="advertising-in-africa" className="my-20">
                        <TwoColumnFlexBox
                            image={bob_marly_ref_holding_beer}
                            title={`ADVERTISING IN AFRICA`}
                            content={[
                                `Guinness has a history of iconic marketing made specifically for Africa, from the now legendary Michael Power campaign which created and featured an all-African action hero and culminated in the creation of an award-winning full length feature film, Critical Assignment to building an important association with football over the years, sponsoring broadcast of the English Premier League across Africa.`,
                                `Most recently, Guinness unveiled its first new Pan African campaign in five years - Black Shines Brightest. Created for Africa, by the talented Africa Guinness team, for their African markets, the campaign is inspired by the bold and unique black beer of Guinness stout and brings together passionate and creative individuals to celebrate the spirit of Guinness and its home.`,
                                `We are proud that through campaigns like this, the cultural and creative legacy of Guinness in Africa - and the special relationship with consumers across the continent – continues to shine bright.`
                            ]}
                        />
                    </Col>
                </div>
            </Row>
            <CarftActionBox />
        </main>
    )
}