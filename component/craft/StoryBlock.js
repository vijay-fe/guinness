import { RightOutlined } from "@ant-design/icons";
import { Image } from "antd";
import FindMore from "../common/FindMore";

const StoryBlock = ({ image, title, content, to, linkText, ...props }) => {
    return (
        <section className="story_block__wrapper in-container relative mb-[80px] w-full bg-black lg:mb-[96px]">
            <div className="relative w-full lg:w-[55%]">
                <figure className="aspect-w-16 aspect-h-9 lg:aspect-h-16 bg-gradient-bottom pointer-events-none relative z-10 w-full overflow-hidden bg-[#160b0e]">
                    <Image
                        src={image?.src || image}
                        preview={false}
                        style={{
                            maxHeight: "100%",
                            maxWidth: "100%",
                        }}
                        placeholder={
                            <Image
                                preview={false}
                                src={image?.blurDataURL || image}
                                width={image?.width || 200}
                                height={image?.height || 200}
                            />
                        }
                    />
                </figure>
            </div>
            <div className="pointer-events-none relative z-10 -mt-8 flex w-full flex-col lg:-mt-[35%] lg:min-h-[514px] lg:items-end lg:justify-end lg:pr-16">
                <div className="flex w-11/12 flex-col bg-black p-8 lg:w-[800px] lg:bg-transparent lg:p-0">
                    <div className="relative mb-6 lg:mb-8 lg:ml-64">
                        <h3 className="text-title mb-0 uppercase text-white transition-opacity delay-100 duration-300 ease-in-out">{title}</h3>
                    </div>
                    {
                        content &&
                        <div className="pointer-events-auto bg-black lg:p-16 lg:pr-0">
                            <div className="prose-p:text-body-sm prose-strong:text-white">
                                <div className="prose">
                                    {content?.map((paragraph, index) => (
                                        <p key={index}>{paragraph}</p>
                                    ))}
                                </div>
                            </div>
                            {
                                to && <FindMore to={to || "/"} title= {linkText || "Find Out More"} externalLink={props?.externalLink || false} />
                            }
                        </div>
                    }
                </div>
            </div>
        </section>
    );
};

export default StoryBlock;
