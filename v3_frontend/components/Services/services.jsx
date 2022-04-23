import React from "react";
import { BsShieldFillCheck } from "react-icons/bs";
import { RiHeart2Fill } from "react-icons/ri";
import { BiSearchAlt } from "react-icons/bi";
const ServiceCard = ( { color, title, icon, subtitle } ) => (
    <div className="flex flex-row justify-start items-start white-glassmorphism p-3 m-2 cursor-pointer hover:shadow-xl">
        <div className={ `w-10 h-10 rounded-full flex justify-center items-center ${ color }` }>
            { icon }
        </div>
        <div className="ml-5 flex flex-col flex-1">
            <h3 className="mt-2 text-white text-lg">{ title }</h3>
            <p className="mt-1 text-white text-sm md:w-9/12">
                { subtitle }
            </p>
        </div>
    </div>
);

export default function Services() {
  return (
      <div id="services">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#ffff" fill-opacity="1" d="M0,224L48,218.7C96,213,192,203,288,165.3C384,128,480,64,576,37.3C672,11,768,21,864,69.3C960,117,1056,203,1152,213.3C1248,224,1344,160,1392,128L1440,96L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>
          <div className='Container'>
              <div className="flex w-full justify-center items-center">
                  <div className="flex mf:flex-row flex-col items-center justify-between md:p-20 py-12 px-4">
                      <div className="flex-1 flex flex-col justify-start items-start">
                          <h1 className="text-white text-3xl sm:text-5xl py-2 text-gradient ">
                              Services that we
                              <br />
                              continue to improve
                          </h1>
                          <p className="text-left my-2 text-white font-light md:w-9/12 w-11/12 text-base">
                              The best choice for buying and selling your crypto assets, with the
                              various super friendly services we offer
                          </p>
                      </div>

                      <div className="flex-1 flex flex-col justify-start items-center">
                          <ServiceCard
                              color="bg-[#2952E3]"
                              title="Security gurantee"
                              icon={ <BsShieldFillCheck fontSize={ 21 } className="text-white" /> }
                              subtitle="Security is guranteed. We always maintain privacy and maintain the quality of our products"
                          />
                          <ServiceCard
                              color="bg-[#F84550]"
                              title="Fastest transactions"
                              icon={ <RiHeart2Fill fontSize={ 21 } className="text-white" /> }
                              subtitle="Security is guranteed. We always maintain privacy and maintain the quality of our products"
                          />
                           <ServiceCard
                             color="bg-[#8945F8]"
                            title="Best exchange rates"
                                icon={ <BiSearchAlt fontSize={ 21 } className="text-white" /> }
                 subtitle="Security is guranteed. We always maintain privacy and maintain the quality of our products"
                /> 
                      </div>
                  </div>
              </div>
          </div>
          {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#ffff" fill-opacity="1" d="M0,224L48,218.7C96,213,192,203,288,165.3C384,128,480,64,576,37.3C672,11,768,21,864,69.3C960,117,1056,203,1152,213.3C1248,224,1344,160,1392,128L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg> */}
    </div>
  )
}



