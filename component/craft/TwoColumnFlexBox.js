import Image from "next/image";
import playbutton from "../../public/assests/crafts/playButton.svg";
export default function TwoColumnFlexBox({ image, video, title, content, id }) {
    return (
        <div className="two_column_container" id={id}>
            <div className="w-full">
                <section className="section">
                    <div className="content-wrapper">

                        {
                            video ? (
                                <div className="relative w-full lg:pl-16">
                                    <figure className="aspect-w-16 aspect-h-10 bg-gradient-bottom relative z-10 w-full overflow-hidden bg-[#160b0e]">
                                        <div className="h-full w-full overflow-hidden">
                                            <div className="relative z-0 h-full w-full">
                                                <div className="relative flex h-full w-full justify-center">
                                                    <div>
                                                        <div className="pointer-events-none absolute inset-0 flex w-full items-center justify-center border-0">
                                                            <div className="pointer-events-none relative flex h-full w-full items-center justify-center transition-opacity duration-300">
                                                                <Image
                                                                    alt="Play"
                                                                    className="pointer-events-none opacity-100"
                                                                    src={playbutton}
                                                                />
                                                            </div>
                                                        </div>
                                                        <video
                                                            className="h-full cursor-pointer video-wrapper"
                                                            controlsList="download remoteplayback"
                                                            crossOrigin="anonymous"
                                                            playsInline
                                                            poster={video.poster}
                                                            preload="none"
                                                            title={video.title}
                                                        >
                                                            <track
                                                                default
                                                                kind="captions"
                                                                label="en"
                                                                src={video.captions}
                                                                srclang="en"
                                                            />
                                                            <source
                                                                src={video.src}
                                                                type="video/mp4"
                                                            />
                                                        </video>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </figure>
                                </div>
                            ) : (
                                <figure className="figure">
                                    <span className="image-span">
                                        <Image alt={title} src={image} />
                                    </span>
                                </figure>
                            )
                        }
                    </div>
                    <div className="text_content_section">
                        <h3 className="headline">{title}</h3>
                        <div className="text-block">
                            <div className="text-column">
                                <div className="prose">
                                    {
                                        content?.map((item, index) => <p className="mb-6" key={index}>{item}</p>)
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>

    )
}
