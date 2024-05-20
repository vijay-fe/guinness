'use client' // Error components must be Client Components
 
import { useEffect } from 'react'
 
export default function Error({ error, reset }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])
 
  return (
    <div>
      <div class="in-container lg:mb-30 relative mb-14 pt-16 md:pt-[52px] lg:px-16 lg:pt-0">
        <section class="grid lg:-mt-3 lg:grid-flow-row lg:grid-cols-12 lg:grid-rows-1 lg:items-end lg:gap-8">
          <div class="relative z-10 order-1 px-8 pt-2 lg:col-span-8 lg:col-start-2 lg:row-span-1 lg:row-start-1 lg:-mr-8 lg:px-0 lg:pt-0 xl:col-span-6 xl:col-start-2">
            <h1 class="text-headline-1 mb-0 lg:pt-20">
              SORRY WE CAN&apos;T FIND THE PAGE YOU&apos;RE LOOKING FOR
            </h1>
          </div>
          <div class="relative z-10 order-3 col-span-full bg-black px-8 py-6 lg:order-2 lg:col-span-6 lg:col-start-2 lg:row-span-1 lg:row-start-2 lg:-mr-8 lg:px-0 lg:py-0 lg:pr-10 lg:pt-10 xl:col-span-5 xl:col-start-2">
            <div class="prose prose-p:text-body-sm lg:prose-p:text-body-lg">
              <a
                class="block md:inline-block "
                rel="noreferrer"
                target=""
                title="Visit Guinness link"
                href="/en/home"
              >
                <span class="btn-base btn-link btn-chevron relative mt-8">
                  {" "}
                  Visit Guinness.com
                </span>
              </a>
            </div>
          </div>
          <div class="relative z-0 order-2 col-span-12 -mt-16 pl-4 lg:order-3 lg:col-span-9 lg:col-start-4 lg:row-span-2 lg:row-start-1 lg:mt-0 xl:col-span-7 xl:col-start-6">
            <figure class="aspect-w-16 aspect-h-12 lg:aspect-h-15 xl:aspect-h-13 bg-gradient-corner-bottom relative w-full">
              {" "}
              <img src="/assests/404.avif" />{" "}
            </figure>
          </div>
        </section>
      </div>
    </div>
  )
}