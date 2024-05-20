import Image from "next/image";
import image from "../../public/assests/crafts/A_M_S_arthur_pworld_traveller.avif";
export default function ParallelFlexBox() {
    return (
        <section className="parallel_flex_box_container">
            <div className="image_container">
                <figure className="image_figure">
                    <div className="left_overlay"></div>
                    <span className="image_span">
                        <Image alt="An old black and white image of three women sat on a chair." src={image} />
                    </span>
                </figure>
            </div>
            <div className="text_container">
                <div className="text_content_wrapper">
                    <div className="text_block">
                        <div className="text_content">
                            <p>These diary entries are brilliant. Have a read and a sup, then close your eyes and hop onto an imaginary Guinness time machine.</p>
                            <p>Arthur Shand – Sydney, Australia visited 6-16th Oct 1904</p>
                            <p>“Most of our Stout arrives by sailing vessels. ...When repacked, which can be done either on the docks or in the bonded warehouses, duty is paid on the actual quantity in good condition. The merchants here also are fully alive to the importance of cool storage for Stout. The consumption of Stout in general is, I think, greater than elsewhere in The Commmonwealth”</p>
                            <p>Arthur Shand – Boston, USA visited 8th – 10th May 1911</p>
                            <p>“There is a great Irish element in Boston, ... and the general public there are destined to be I think, very large consumers of draught stout... There are at present over 70 places drawing Extra Stout in the City, and a great majority of these are all first-className, 13 of them being hotels. I am pleased to say that it was a treat to see the condition in which the Stout is drawn, all from ice-boxes at a temperature which made the article extremely palatable.”</p>
                            <p>JC Haines - Straits Settlements, Singapore, Penang and Malacca visited 1900</p>
                            <p>“Although well-known Brands of Spirits and Wines are forged wholesale for the native trade, no instance is known of forgery of our Label, or, I may say, that of any Bottled Beer. Advertising in Local British papers is almost useless. We strongly advise the circulation of an advertisement in Chinese and Malay languages, in native characters.”</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}