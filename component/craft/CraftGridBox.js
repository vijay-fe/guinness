import { RightOutlined } from "@ant-design/icons";
import { Button, Col, Row } from "antd";
import Image from "next/image";
export default function CraftGridBox({ image, title, name, content }) {
    return (
        <Row className="craft_grid_box_container">
            <Col span={24} className="craft_box_common_title_mobile">
                <h2>{title}</h2>
            </Col>
            <Col className="craft_grid_box_content_wrapper">
                <div className="craft_grid_box_content_inner">
                    <div className="craft_box_common_heading">
                        <h2 className="craft_box_common_heading_fall">{title}</h2>
                    </div>
                    <div className="craft_box_common_title">
                        <h2 className="craft_box_common_title_scope">{name}</h2>
                    </div>
                    <div className="craft_box_common_content">
                        <p className="craft_box_common_para">{content}</p>
                        <Button className='find-out-btn' >
                            <span>Find out more</span> <RightOutlined />
                        </Button>
                    </div>
                </div>
            </Col>
            <Col className="dummy" span={12}></Col>
            <Col className="craft_grid_box_image_wrapper">
                <Image src={image} alt={title} />
            </Col>
        </Row>
    )
}
