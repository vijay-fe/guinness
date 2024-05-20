import Image from "next/image";
import FindMore from "../common/FindMore";

export default function CraftFlexBox({ title, image, content, ...props }) {
    return (
        <div className="craft_flex_box_container" id={props?.id || title}>
            <div className="craft_flex_box_body">
                <div className="craft_flex_box_title">
                    <h2>{title}</h2>
                </div>
                <div className="craft_flex_box_content">
                    {
                        content.map((text, index) => {
                            return (
                                <div className="craft_flex_box_content_item" key={index}>
                                    <p>{text}</p>
                                </div>
                            )
                        })
                    }
                    {
                        props?.to && <FindMore to={props?.to || "/"} title={props?.linkText || "Find Out More"} externalLink={props?.externalLink || false} />
                    }
                </div>
            </div>
            <div className="craft_flex_box_image">
                <Image src={image} alt={title} />
            </div>
        </div>
    )
}