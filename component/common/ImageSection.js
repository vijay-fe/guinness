import Image from "next/image";

const ImageSection = ({ title, content, image }) => {
  return (
    <div className="relative mx-auto max-w-[1440px] overflow-hidden">
      <div className="w-full">
        <div className="in-container lg:mb-30 mb-20">
          <div className="relative z-30 -mb-8 w-full px-9 lg:hidden">
            <h3 className="text-headline-1 w-10/12 text-white">{title}</h3>
          </div>
          <section className="flex h-full w-full flex-col overflow-hidden px-8 lg:flex-row-reverse lg:items-center lg:px-0">
            <div className="relative flex w-full justify-end lg:-ml-20 lg:flex-1 xl:-ml-64">
              <figure className="aspect-w-16 aspect-h-12 lg:aspect-h-9 bg-gradient-top relative w-full overflow-hidden before:md:hidden">
                <span className="absolute inset-0 m-0 box-border block overflow-hidden border-0 p-0">
                  <Image
                    alt={title}
                    src={image}
                  />
                </span>
              </figure>
            </div>
            <div className="basis-12/12 relative z-10 w-full lg:mt-0 lg:basis-7/12">
              <h3 className="text-headline-1 mb-[24px] hidden w-8/12 px-10 pb-0 text-white lg:mb-8 lg:block lg:w-full lg:px-0 lg:pt-16">{title}</h3>
              <div className="relative flex w-full flex-col lg:w-8/12 lg:flex-row">
                <div className="bg-black pt-8 lg:pr-10 lg:pt-10">
                  <div className="prose prose-p:text-body-sm">
                    <div className="prose">{content}</div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default ImageSection;
