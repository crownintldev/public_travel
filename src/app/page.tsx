

import MainSlider from "@/components/Carousel/MainSlider";
import Booking from "@/components/DataDisplay/Booking";
import Destination from "@/components/Destination";
import Brand from "@/components/Carousel/Brand"
import React from "react";

import ChooseUs from "@/components/ChooseUs";
import Faq from "@/components/Home/Faq";
import VisaInfo from "@/components/Home/VisaInfo";
import { OurService } from "@/components/Home/OurService";
import Testimonial from "@/components/Carousel/Testimonial";
import malaysia1 from '../../public/assets/images/static/malaysia1.jpg'
import thailand1 from '../../public/assets/images/static/thailand1.jpg'
import indonesia1 from '../../public/assets/images/static/indonesia1.jpg'
import vietnam1 from '../../public/assets/images/static/vietnam1.jpg'
import nepal1 from '../../public/assets/images/static/nepal1.jpg'
import srilanka1 from '../../public/assets/images/static/srilanka1.jpg'
import singapore1 from '../../public/assets/images/static/singapore1.jpg'
import cambodia1 from '../../public/assets/images/static/cambodia1.jpg'
import egypt1 from '../../public/assets/images/static/egypt1.jpg'
import azerbaijan1 from '../../public/assets/images/static/azerbaijan1.jpg'
import tajikistan1 from '../../public/assets/images/static/tajikistan1.jpg'
import uzbekistan1 from '../../public/assets/images/static/uzbekistan1.jpg'
import jordan1 from '../../public/assets/images/static/jordan1.jpg'
import philippines1 from '../../public/assets/images/static/philippines1.jpg'
import kenya1 from '../../public/assets/images/static/kenya1.jpg'
import turkey1 from '../../public/assets/images/static/turkey1.jpg'
import dubai1 from '../../public/assets/images/static/dubai1.jpg'
import uk from '../../public/assets/images/static/uk.jpg'
import usa from '../../public/assets/images/static/usa.jpg'
import canada from '../../public/assets/images/static/canada.jpg'
import Flag from "@/components/Carousel/Flag";

export default function Home()
 {
  return (
    <>
    <MainSlider/>
    <Booking/>
    <Brand/>
    <Destination/>
    <Flag/>
    <VisaInfo
      heading="Visa"
      visaprocess={[
        {title:"Malaysia Visa",link:"/servicedetail/malaysia", image:malaysia1,  location:"Visa Service Center", para:"Malaysia is a vibrant and diverse country located in Southeast Asia, known for its stunning natural landscapes, rich cultural heritage, and modern cities."},
        {title:"Thailand Visa",link:"/servicedetail/thailand", image:thailand1,  location:"Visa Service Center", para:"Thailand is a stunning country located in Southeast Asia, renowned for its rich cultural heritage, ancient history, and breathtaking natural beauty."},
        {title:"Indonesia Visa",link:"/servicedetail/indonesia", image:indonesia1,  location:"Visa Service Center", para:"Indonesia is a vast archipelago nation located in Southeast Asia, comprised of thousands of islands, and home to a population of over 270 million people."},
        {title:"Vietnam Visa",link:"/servicedetail/vietnam", image:vietnam1,  location:"Visa Service Center", para:"Vietnam, located in Southeast Asia, is bordered by China to the north, Laos to the northwest, Cambodia to the southwest, and the South China Sea to the east."},
        {title:"Nepal Visa",link:"/servicedetail/nepal", image:nepal1,  location:"Visa Service Center", para:"Nepal is a country located in South Asia, bordered by China to the north and India to the south, east, and west."},
        {title:"Sri Lanka Visa",link:"/servicedetail/srilanka", image:srilanka1,  location:"Visa Service Center", para:"Sri Lanka is a tropical island nation located in the Indian Ocean, southeast of the Indian subcontinent."},
        {title:"Singapore Visa",link:"/servicedetail/singapore", image:singapore1,  location:"Visa Service Center", para:"Singapore, a small island city-state located in Southeast Asia, is known for its modern infrastructure, diverse culture, and thriving economy."},
        {title:"Combodia Visa",link:"/servicedetail/cambodia", image:cambodia1,  location:"Visa Service Center", para:"Cambodia is a Southeast Asian country located on the southern portion of the Indochinese peninsula."},
        {title:"Egypt Visa",link:"/servicedetail/egypt", image:egypt1,  location:"Visa Service Center", para:"Egypt is a country located in North Africa and the Middle East, renowned for its rich history, ancient civilization, and fascinating culture."},
        {title:"Azerbaijan Visa",link:"/servicedetail/azerbaijan", image:azerbaijan1,  location:"Visa Service Center", para:"Azerbaijan is a country located in the South Caucasus region of Eurasia, bordered by Russia to the north, Georgia to the northwest,"},
        {title:"Tajikistan Visa",link:"/servicedetail/tajikistan", image:tajikistan1,  location:"Visa Service Center", para:"Tajikistan is a Central Asian landlocked country that shares borders with Afghanistan to the south, Uzbekistan to the west,"},
        {title:"Uzbekistan Visa",link:"/servicedetail/uzbekistan", image:uzbekistan1,  location:"Visa Service Center", para:"Uzbekistan is a landlocked country in Central Asia, renowned for its rich history, diverse culture, and stunning architecture."},
        {title:"Jordan Visa",link:"/servicedetail/jordan", image:jordan1,  location:"Visa Service Center", para:"Jordan is a country in the Middle East, bordered by Syria to the north, Iraq to the northeast, Saudi Arabia to the east and south,"},
        {title:"Philippine Visa",link:"/servicedetail/philippine", image:philippines1,  location:"Visa Service Center", para:"The Philippines is an archipelagic country located in Southeast Asia. It is composed of more than 7,600 islands,"},
        {title:"Kenya Visa",link:"/servicedetail/kenya", image:kenya1,  location:"Visa Service Center", para:"Kenya is a country located in East Africa, with a population of over 54 million people. The country is known for its"},
        {title:"Turkey Visa",link:"/servicedetail/turkey", image:turkey1,  location:"Visa Service Center", para:"Turkey is a transcontinental country that straddles both Europe and Asia, with a rich cultural heritage and a history that"},
        {title:"Dubai Visa",link:"/servicedetail/dubai", image:dubai1,  location:"Visa Service Center", para:"Dubai is a city and emirate in the United Arab Emirates (UAE) located on the southeastern coast of the Persian Gulf."},
      ]}
    />
    <VisaInfo
      heading="Visa Processing"
      visaprocess={[
        {title:"Schengen File Processing",link:"/servicedetail/schengen", image:philippines1,location:" File Processing", para:"The Schengen Area is a zone consisting of 26 European countries that have abolished internal border controls and established a common visa policy."},
        {title:"USA File Processing",link:"/servicedetail/usa", image:usa,  location:" File Processing", para:"The United States of America, also known as the USA or just America, is a sizable and diversified nation that provides a wide range"},
        {title:"Canada File Processing",link:"/servicedetail/canada", image:canada,  location:" File Processing", para:"The second-largest nation in the world, Canada, is a riveting tourist destination renowned for its breathtaking natural scenery,"},
        {title:"UK File Processing",link:"/servicedetail/uk", image:uk,  location:" File Processing", para:"The United Kingdom, or UK as it is more frequently known, is an intriguing location that offers a combination of rich history,"},
      ]}
    />
    <OurService/>
    <ChooseUs/>
    
    <Testimonial/>
    <Faq
      faqs={
        [
            { title: "What services does Crown Travels offer?", content: "Crown Travels specializes in personalized travel planning and booking services, including flights, accommodations, guided tours, cruise bookings, travel insurance, and special event travel packages." },
            { title: "How can I book a trip with Crown Travels?", content: "You can book a trip with Crown Travels by visiting our website, calling our customer service number, or by visiting our office in person. Our travel experts will assist you in finding the best travel options to suit your needs." },
            { title: "Does Crown Travels offer international travel packages?", content: "Yes, Crown Travels offers a wide range of international travel packages. Whether you're looking for a beach getaway, a cultural excursion, or an adventure tour, we can arrange trips to destinations around the globe." },
            { title: "Can Crown Travels accommodate special travel requests or needs?", content: "Absolutely. We pride ourselves on creating customized travel experiences. Whether you have dietary restrictions, mobility concerns, or special requests, we work to accommodate your needs for a comfortable and enjoyable trip." },
            { title: "What is the cancellation policy at Crown Travels?", content: "Our cancellation policy varies depending on the type of booking and the suppliers' terms. We advise customers to review the terms and conditions at the time of booking, and for added protection, consider purchasing travel insurance through us." },
        ]
      }
    />
    </>
  );
}
