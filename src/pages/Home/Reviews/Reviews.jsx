import { useState } from "react";
import SectionTitle from "../../share/Sectiontitle/SectionTitle";
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import { Navigation } from 'swiper/modules';
import { Rating } from '@smastrom/react-rating';

import '@smastrom/react-rating/style.css';



const Reviews = () => {
    const [reviews, setReviews] = useState([])

    useState(() => {
        fetch('../../../../public/reviews.json')
            .then(res => res.json())
            .then(data => setReviews(data))
    })
    return (
        <div className="py-6">
            <SectionTitle
                heading={'TESTIMONIALS'}
                subheading={'What Our Clients Say'}
            ></SectionTitle>
            <div>
                <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                    {
                        reviews.map(review =>
                            <SwiperSlide key={review._id}>

                                <div className="text-center py-4 flex flex-col items-center">
                                    <Rating
                                        style={{ maxWidth: 180 }}
                                        value={review.rating}
                                        readOnly
                                    />
                                    
                                    <p className="px-16 py-8">{review.details}</p>
                                    <h1 className="text-[#CD9003]">{review.name}</h1>
                                </div>
                            </SwiperSlide>
                        )
                    }

                </Swiper>

            </div>
        </div>
    );
};

export default Reviews;