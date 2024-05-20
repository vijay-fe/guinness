import Image from "next/image";
import ventureImage from "../../public/assests/crafts/this_venture.avif";
export default function TheLeaseOfLife({id}) {
    return (
        <section className="the_lease_of_life_continer" id={id}>
            <div className="image_section">
                <Image className="image_section_image" src={ventureImage} alt="Arthur Guinness venture agreement"/>
            </div>
            <div className="body_section">
                <div className="body_content">
                    <p>Arthur Guinness was a philanthropist, a pragmatist, an innovator, a family man, and a fighter. The terms of the lease granted him use of a limited supply of water, and when Dublin Corporation tried to cut off the supply due to overuse, it’s written that ‘Mr Guinness violently rushed upon them wrenching a pickaxe from one and declaring with very much improper language, that they should not proceed’.</p>
                    <p>You see, signing the lease was one thing. Holding onto it, was another thing altogether. And Arthur was not about to let go during his lifetime. So, the journey continued.</p>
                    <p>More beer was brewed. More jobs created. And more tastebuds tantalised.</p>
                    <p>Sláinte, Arthur.</p>
                    <p>To the lease of life!</p>
                </div>
            </div>
        </section>
    )
}