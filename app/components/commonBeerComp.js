"use client"
import React from "react";
import { Row, Col, Button } from 'antd';
import Image from "next/image";
import { RightOutlined } from '@ant-design/icons';
import { useRouter } from "next/navigation";

const CommonBeerComponent = ({heading , subheading , imgURL , content,url}) => {
    const router = useRouter()
    return (
        <div className="common-beer-main" onClick={()=>{
                    router.push(url)
        }}>
            <div className="common-beer-inner">
                <div  className="head" >
                    <p className="p-content">
                        {heading}
                    </p>
                </div>
                <div className="common-beer-image-holder relative">
                    <Image
                        src={imgURL}
                        alt='common-beer-img'
                    />
                    <div className="absolute top-0 left-0 h-full w-full bg-black bg-opacity-25 ">

                    </div>
                </div>
                <div className='hover-content-holder d-flex'  >
                    <div className='info-con d-flex space-aroun w-90 content-row'>
                        <div className="-m-5" lg={14}>
                            <h1 className='heading  !indent-5'>
                                {subheading}
                            </h1>
                        </div>

                        <div className='para d-flex justify-center flex-column'>
                            <div className='content'>
                                <p className='p-content' >
                                    {content}
                                </p>
                                <Button className='find-out-btn' >
                                    Find out more <RightOutlined />
                                </Button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default CommonBeerComponent;