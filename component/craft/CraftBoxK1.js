import { Col, Row } from "antd"
import craft_hero_img from "../../public/assests/crafts/Hero_Leader_1_Btm_Img.avif"
import Image from "next/image"

export default function CraftBoxK1() {
    return (
        <Row className="craft_box_k1_wrapper">
            <div className='craft_box_k1_image' >
                <Image
                    src={craft_hero_img}
                    alt='craft_hero_img'
                />
            </div>
            <div className="craft_box_k1_content">
                <div className="craft_bolx_k1_content_inner">
                <h2 className="craft_box_k1_heading">
                    CRAFTED IN DUBLIN, ENJOYED AROUND THE WORLD
                </h2>
                <p className="craft_box_k1_para">
                    It takes a thirst for adventure to do things the Guinness way. From our humble beginnings in 1759 to the present day, we’ve gone to extraordinary lengths to bring you exceptional beer. But we’re not ones to rest on our laurels. As we like to put it: our greatest work is yet to come.
                </p>
                </div>
            </div>
        </Row>
    )
}