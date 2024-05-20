import { Row } from "antd";
import Image from "next/image";

export default function HeroCard({title, image, content}){
    return(
        <Row className="hero_card_container">
            <div className="card_title">
                <h2>{title}</h2>
            </div>
            <div className="card_image_section">
                <Image src={image} alt={title} />
            </div>
            <div className="card_content">
                <p>{content}</p>
            </div>
        </Row>
    )
}