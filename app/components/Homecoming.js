import React from 'react';
import { Row, Col, Button } from 'antd';
import { RightOutlined } from '@ant-design/icons';
import Image from 'next/image';
import homecoming from '../../public/assests/homepage/homecoming.avif'


const Homecoming = () => {
    return (
        <Row className='homepage-craft-main py-36' >
            <Col span={24} className='p-content p15-left' > OUR CRAFT</Col>
            <Col className='image-holder' lg={24} >
                <Image className='image1'
                    src={homecoming}
                    alt='our-craft-img-1'
                />
            </Col>
            <Col className='content-holder d-flex' lg={24} >
                <Row className='d-flex space-between w-100 content-row'>
                    <Col lg={14}>
                        <h1 className='craft-heading'><span className='move-content'></span>HOMECOMING<br /></h1>
                    </Col>

                    {/* <Col lg={7} className='para d-flex justify-center flex-column'>
                        <div className='content'>
                            <p className='p-content' >
                            Three days, two globally recognised musicians, one incredible road trip. This Autumn Guinness proudly presents, Niall Horan’s Homecoming: The Road to Mullingar with Lewis Capaldi.
                            </p>
                            <Button className='find-out-btn' >
                                Find out more <RightOutlined />
                            </Button>
                        </div>
                    </Col> */}

                </Row>
            </Col>
        </Row>
    )
}

export default Homecoming;