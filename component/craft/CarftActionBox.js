import { Button, Col, Row } from "antd";

export default function CarftActionBox() {
    return (
        <Row className="craft_action_box_contanier">
            <div className="craft_action_box_body">
                <div className="craft_action_box_title">
                    <h2>
                        SUBSCRIBE
                    </h2>
                </div>
                <div className="craft_action_box_content">
                    KEEP UPDATED WITH ALL THINGS GUINNESS
                </div>
                <div className="craft_action_box_button">
                    <Button className="subscribe_button">
                        SIGN UP
                    </Button>
                </div>
            </div>
        </Row>
    )
}