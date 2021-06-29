import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

const Home: React.FunctionComponent = () => {
    return (
        <>
            {/* TODO resize and compress images */}
            <Carousel autoPlay={ true } showIndicators={ false } showStatus={ false } showArrows={ false } showThumbs={false} infiniteLoop={ true }>
                <div>
                    <img src='tumblr_pmjb1o7dnI1sfie3io1_1280.jpeg' />
                </div>
                <div>
                    <img src='tumblr_pmjb1sFVzG1sfie3io1_1280.jpeg' />
                </div>
            </Carousel>
            <main>
                <section>
                    <article>
                        <h1>Marzipan pastry sweet roll</h1>
                        <p>Lollipop macaroon powder candy cake cake apple pie ice cream. Donut apple pie fruitcake. Pudding bonbon sweet roll cookie. Pudding lemon drops toffee pastry ice cream chocolate cake chupa chups danish pie. Bear claw cheesecake tootsie roll jelly-o wafer. Cupcake tootsie roll cotton candy pudding brownie marzipan. Ice cream croissant macaroon croissant cake pastry. Candy canes carrot cake marzipan gingerbread wafer halvah. Candy jelly-o sweet roll bear claw wafer wafer brownie cake muffin. Marzipan pastry sweet roll cake pie caramels.</p>
                    </article>
                </section>
                <section>
                    <article>
                        <h2>Ice cream</h2>
                        <p>Chocolate cake bear claw candy canes halvah ice cream croissant cheesecake. Marshmallow cupcake liquorice gummi bears chupa chups marzipan. Pudding topping lollipop toffee bonbon bonbon. Jelly brownie toffee toffee cheesecake. Carrot cake sesame snaps topping lemon drops wafer lemon drops carrot cake caramels biscuit. Gummi bears jelly sweet candy canes pastry sweet cookie lollipop brownie. Dessert jelly beans caramels oat cake pastry biscuit.</p>
                    </article>
                    <article>
                        <h2>Sesame snaps</h2>
                        <p>Icing tiramisu cake sesame snaps tart liquorice muffin. Pastry chocolate ice cream soufflé chocolate cake pastry jujubes candy canes. Croissant dragée cheesecake chocolate. Cake pie pie jelly-o dragée powder. Caramels bear claw candy canes. Lollipop cotton candy sugar plum cheesecake sugar plum apple pie jelly beans gummi bears lollipop. Chocolate apple pie tart cookie donut chocolate tart carrot cake fruitcake. Cheesecake cupcake oat cake croissant marshmallow sweet.</p>
                    </article>
                </section>
            </main>
        </>
    )
};

export default Home;
