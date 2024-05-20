import Image from "next/image";

export default function QualityBox({ title, content, image,id }) {
    return (
        <div className="in-container" id={id}>
            <div className="title-wrapper">
                <h2 className="title">{title}</h2>
            </div>
            <section className="content-section">
                <div className="image-wrapper">
                    <figure className="image-container">
                        <span className="image-span">
                            <Image alt="how's that for quality" src={image} />
                        </span>
                    </figure>
                </div>
                <div className="text-wrapper">
                    <div className="text-content">
                        <div className="text-block">
                            <p>{content}</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>

    )
}