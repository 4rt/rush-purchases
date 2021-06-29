import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

const Home: React.FunctionComponent = () => {
    return (
        // TODO resize and compress images
        <Carousel autoPlay={true} showIndicators={false} showStatus={false} showArrows={false} showThumbs={false} infiniteLoop={true}>
            <div>
                <img src='tumblr_pmjb1o7dnI1sfie3io1_1280.jpeg' />
            </div>
            <div>
                <img src='tumblr_pmjb1sFVzG1sfie3io1_1280.jpeg' />
            </div>
        </Carousel>
    )
};

export default Home;
