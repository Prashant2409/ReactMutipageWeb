import React, { useState } from 'react';
import workapi from './api/Workapi';

const HowItWorks = () => {

   const [workdata,setWorkdata] = useState(workapi);
    console.log(workdata);

    return (
        <>
        <section>
            <div className='work-container container'>
                <h1 className='main-heading text-center'>How does It Works</h1>
                <div className='row'>
                {workdata.map((currElem) => {
                    const {id,logo,title,info} = currElem;
                  return (
                      <>
                      <div className='col-12 col-lg-4 text-center work-container-subdiv' key={id}>
                        <i class={`fontawesome-style ${logo}`}></i>
                        <h2 className='sub-heading'>{title}</h2>
                        <p className='main-hero-para w-100'>
                            {info}
                        </p>
                    </div>

                      </>
                  )
                })}
                </div>
            </div>
        </section>

        </>
    );
}

export default HowItWorks;