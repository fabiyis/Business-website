import { Carousel } from 'flowbite-react';

function BigCarousel() {
  return (
    <div className="pt-2">
      <Carousel className="h-[100vh]">
       
        <img alt="..." src='/images/home.jpg'/>
        <img alt="..." src='/images/home1.jpg'/>
        <img alt="..." src='/images/home2.jpg'/>
        <img alt="..." src='/images/home3.jpg'/>
        <img alt="..." src='/images/all STAR.jpg'/>
      </Carousel>
    </div>
  );
}

export default BigCarousel