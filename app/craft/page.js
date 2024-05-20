import Spacer from '../../component/common/Spacer';
import CarftActionBox from '../../component/craft/CarftActionBox';
import CraftBoxK1 from '../../component/craft/CraftBoxK1';
import CraftCommonSection from '../../component/craft/CraftCommonSection';
import CraftGridBox from '../../component/craft/CraftGridBox';
import craftImg from "../../public/assests/crafts/Guinness_-_Our_Story_GB_Hero.avif";
import carftCridImage from "../../public/assests/crafts/Hero_Half_image_wp_in_gl.avif";
import craftImg2 from "../../public/assests/crafts/Hero__1_3840.avif";
import craftImg3 from "../../public/assests/crafts/craft_beer_bird_transport.avif";
export default function Craft() {
    return (
        <main className='craft_main_container'>
            <CraftBoxK1 />
            <Spacer space={70} />
            <CraftCommonSection title={"OUR CRAFT"} name={"THE STORY OF GUINNESS"} image={craftImg} content={"From Arthur Guinness' legacy of philanthropy to how Guinness has been taking care of its people for over 200 years."} />
            <Spacer space={70} />
            <CraftCommonSection title={"OUR CRAFT"} name={"REGENERATIVE FARMING"} image={craftImg2} content={"We are working alongside Irish barley farmers to support them on the transition towards regenerative agriculture. We aim to scale the adoption of practices that employ nature-based solutions to support the production of low carbon barley and improve shared natural resources such as biodiversity and water under a regeneratively-grown model."} />
            <Spacer space={70} />
            <CraftGridBox image={carftCridImage} title={"our craft"} name={"INNOVATION AT GUINNESS"} content={"Through the years, Guinness’ dedication to innovation has remained a key part of the brand’s mission."} />
            <Spacer space={70} />
            <CraftCommonSection title={"OUR CRAFT"} name={"GUINNESS ADVERTISING"} image={craftImg3} content={"Find out how Guinness has been carving its creative path for almost a century, amassing decades of iconic print, TV and digital advertising campaigns."} />
            <Spacer space={70} />
            <CarftActionBox />
        </main>
    )
}