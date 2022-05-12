import React from "react";
import { BsShieldFillCheck } from "react-icons/bs";
import { RiHeart2Fill } from "react-icons/ri";
import { BiSearchAlt } from "react-icons/bi";

import services_style from "./services.module.css";
import Fade from 'react-reveal/Fade';


const ServiceCard = ( { title, icon, subtitle } ) => (
    <div className={ `${ services_style.card} shadow-xl`}>
        <div>
            <img src={ icon } alt={ subtitle } className={ services_style.card_icon }/>
        </div>
        <div className={ services_style.card_showcasetext}>
            <h2>{ title }</h2>
            <p> { subtitle }</p>
        </div>
    </div>
    
);

export default function Services() {
  return (
      <div id="services">
          <div className={services_style.main}>
              <div className="body_container">
                  <div className={ services_style.servicesmain }>
                      <Fade bottom className="overflow-hidden">
                          <div className={ services_style.servicestexts }>
                              <h2 className={ services_style.services_h2 }>Services that we continue to improve</h2>
                              <p className={ services_style.services_p }>
                                  The best choice for buying and selling your crypto assets, with the various super friendly services we offer</p>
                          </div>
                      </Fade>
                      
                      <div className={ services_style.showcase }>
                          <Fade bottom className="overflow-hidden">
                              <ServiceCard
                                  title="Security gurantee"
                                  icon="./shield.png"
                                  subtitle="Security is guranteed. We always maintain privacy and maintain the quality of our products"
                              />
                          </Fade>
                          <Fade bottom className="overflow-hidden">
                              <ServiceCard
                                  title="Fastest transactions"
                                  icon="./dollar.png"
                                  subtitle="Security is guranteed. We always maintain privacy and maintain the quality of our products"
                              />
                          </Fade>
                          <Fade bottom className="overflow-hidden">
                              <ServiceCard
                                  title="Best exchange rates"
                                  icon="./time.png"
                                  subtitle="Security is guranteed. We always maintain privacy and maintain the quality of our products"
                              /> 
                          </Fade>
                          
                      </div>
                </div>
              </div>
       </div>   
          {/* <div className='Container'>
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
          </div> */}

    </div>
  )
}



