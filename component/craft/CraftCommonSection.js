import { Button, Col, Row } from "antd";
import Image from "next/image";
import { RightOutlined } from '@ant-design/icons';

export default function CraftCommonSection({ image, title, name, content }) {
    return (
        <Row className="craft_box_common_wrapper">
            <Col className="craft_box_common_title" span={24}>
                <h2 className="craft_box_common_title_scope">{title}</h2>
            </Col>
            <Col span={24} className='craft_box_common_image' >
                <Image src={image} alt={name} />
                <h2 className="craft_box_common_heading_fall">{name}</h2>
            </Col>
            <Col className="craft_box_common_content" span={24}>
                <h2 className="craft_box_common_heading">{name}</h2>
                <div className="content_box">
                    <p className="craft_box_common_para">{content}</p>
                    <Button className='find-out-btn' >
                        Find out more <RightOutlined />
                    </Button>
                </div>
            </Col>
        </Row>
    )
}