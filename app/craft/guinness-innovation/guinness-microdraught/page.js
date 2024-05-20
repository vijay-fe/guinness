import { Col, Row } from "antd";
import BottomTabMenu from "../../../../component/common/BottomTabMenu";
import CraftCommonHeroCard from "../../../../component/common/CraftCommonHeroCard";
import SideTabMenu from "../../../../component/common/SideTabMenu";
import CarftActionBox from "../../../../component/craft/CarftActionBox";
import CraftFlexBox from "../../../../component/craft/CraftFlexBox";
import TwoColumnFlexBox from "../../../../component/craft/TwoColumnFlexBox";
import innovationImage from "../../../../public/assests/crafts/innovation.avif";
import microdraught_at_home from "../../../../public/assests/crafts/microdraught_at_home.png";
import science_behind_pour from "../../../../public/assests/crafts/science_behind_pour.png";
import tabsData from "../../../../utils/data/tabsData.json";


export default function Page() {
    return (
        <main className='craft_main_container'>
            <Col>
                <CraftCommonHeroCard
                    title={"PLUG, POUR AND ENJOY!"}
                    image={innovationImage}
                    content={[
                        `Guinness takes a bold new step in its long history of innovation with the launch of GUINNESS MICRODRAUGHT. The new cutting-edge technology serves beautiful, Draught Guinness on tap, without requiring the gas cylinder used with traditional taps.`
                    ]}
                />
            </Col>
            <Col span={24} className="mobile_tab_navigator">
                <BottomTabMenu tabsData={tabsData?.guinness_microdraught} />
            </Col>
            <Row className="craft_main_section">
                <div className="craft_left_section">
                    <SideTabMenu tabsData={tabsData?.guinness_microdraught} />
                </div>
                <div className="craft_right_section">
                    <Col id="the-science-behind-the-pour" className="mb-20">
                        <TwoColumnFlexBox
                            image={science_behind_pour}
                            title={`THE SCIENCE BEHIND THE POUR`}
                            content={[
                                `The secret to how Guinness MicroDraught produces beautiful Guinness every time is the world-first patent-finding double coaxial piercing of a unique, specially designed can, which is filled with the very same Guinness that is kegged in St James’s Gate and poured in pubs around the world.`,
                                `Guinness MicroDraught uses an air pump - as opposed to the gas cylinder used in the traditional system - to push the liquid out of the can and through the standard Guinness Draught spout. The result is a beautiful two-part pour with the iconic surge and settle and cold, smooth taste that makes Guinness Draught a beer loved by consumers around the world.`,
                                `Two years in development, the pioneering Guinness MicroDraught dispense technology is the biggest technological leap for Guinness since the advent of the widget in 1988. The innovative, new Guinness MicroDraught system promises to enable licensed premises around the world to pour perfect Guinness Draught, no matter their size or setup.`,
                                `This innovation will further enable Guinness to be enjoyed at its finest worldwide, in new places and spaces, adding 12,000 more outlets across 150 countries, so that millions more consumers across the globe may enjoy a perfect Guinness serve.`
                            ]}
                        />
                    </Col>
                    <Col id="microdraught-at-home" className="mb-20">
                        <CraftFlexBox
                            title={"MICRODRAUGHT AT HOME"}
                            image={microdraught_at_home}
                            to={"https://guinnesswebstore.com/"}
                            externalLink={true}
                            linkText={"Visit Guinness Webstore"}
                            content={
                                [
                                    `Guinness MicroDraught is a world first. With its innovative plug and pour technology, you can pour and savour a satisfyingly smooth Draught Guinness from the comfort of your own home without the need for kegs, beer lines, or gas canisters. The sleek Guinness MicroDraught easily clamps onto your home bar or tabletop and works with specially designed Guinness MicroDraught cans to give you the ultimate at home Guinness experience. The new focal point of your home, we think!`
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
