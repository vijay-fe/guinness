import Image from 'next/image'
import React from 'react'

export default function CraftCommonHeroCard({ image, title, content, classes }) {
    return (
        <section className="in-container grid_r3_container">
            <div className="md:mb-30 relative mb-14 bg-black pt-2 text-white md:mt-[68px]">
                <div className={`relative grid_r3_title z-20 -mb-6 flex flex-col md:items-end lg:-mb-12 px-10 ${classes?.title && classes?.title}`}>
                    <h2 className="text-title  mb-0 inline-block indent-6 md:max-w-[974px] md:indent-0 lg:text-title">
                        {title}
                    </h2>
                </div>
                <div className="relative z-10 flex w-full h-full justify-end before:h-full md:pl-0 pl-4">
                    <figure className="relative w-full aspect-w-16 aspect-h-12 md:aspect-h-7">
                    <div className="image_shadow_layer"></div>
                        <Image alt={title} src={image} className="grid_r3_image " />
                    </figure>
                </div>
                <div className="relative z-10 flex w-full flex-col justify-between md:flex-row md:-mt-16">
                    <div className="relative bg-black pl-8 pr-6 pt-6 md:basis-7/12 md:pl-16 md:pr-10 md:pt-10">
                        <div className="prose prose-p:text-body-sm md:prose-p:text-body-lg ">
                            <div className="prose grid_r3_content">
                                {
                                    content?.map((section, index) => <p key={index}>{section}</p>)
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}