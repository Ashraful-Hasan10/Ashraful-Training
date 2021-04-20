import React from 'react';
import Testimonial from '../Testimonial/Testimonial';
import './Testimonials.css';


const testimonialData = [
    {
        quote : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo! ',
        name : 'Wilson Harry',
        from : 'Arizona',
        img : "https://static01.nyt.com/newsgraphics/2020/11/12/fake-people/4b806cf591a8a76adfc88d19e90c8c634345bf3d/fallbacks/mobile-05.jpg"
    },
    {
        quote : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo! ',
        name : 'Ema Gomez',
        from : 'California',
        img : "https://i2-prod.dailystar.co.uk/incoming/article22840723.ece/ALTERNATES/s615b/2_Screen-Shot-2020-10-13-at-201610.jpg"
    },
    {
        quote : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo! ',
        name : 'Aliza Farari',
        from : 'New York',
        img : "https://www.gannett-cdn.com/presto/2020/09/25/USAT/f4d10bd0-7f11-413f-9d69-c67d8e7d7f03-Arif_Zahir.jpg?width=660&height=660&fit=crop&format=pjpg&auto=webp"
    }
]

const Testimonials = () => {
    return (
       <section className="testimonials my-5 py-5">
           <div className="container">
               <div className="section-header">
                   <h1 className="text-primary text-uppercase">Testimonial</h1>
                   <h2>What Our Customers <br/> Tells About Us </h2>
               </div>
               <div className="card-deck mt-5">
                    {
                        testimonialData.map(testimonial => <Testimonial testimonial={testimonial} key={testimonial.name}/>)
                    }
                </div>
           </div>
       </section>
    );
};

export default Testimonials;