import React, { useCallback, useState, useEffect } from 'react';
import './style.css';
import { useT } from '../../../custom/hooks/useT';

import baseApi from '../../../api/baseApi';
import { STATISTICS_URL } from '../../../api/Urls';

const Statistika = () => {

    // const [isLoading, setisLoading] = useState(true);
    const [statistics, setStatistics] = useState([]);
    const { t, lang } = useT();

    const getStatistics = useCallback(
        async () => {
            baseApi.fetchAll(STATISTICS_URL)
            .then(res => {
                setStatistics(res.data)
            })
        }, [])

    useEffect(() => {
        getStatistics();
    }, [])

    return (
        <section className='text-section'>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-12'>
                        <div className='title-name'>
                            <h3>{t(`Statistics.${lang}`)}</h3>
                            <div className='text-title-line'></div>
                        </div>
                    </div>
                </div>
                <div className='row pl-3 pr-3 pb-5'>

                    <div>
                        <div className="gallery-wrapper">
                            <div className="image-wrapper">
                                <a href="#lightbox-image-1">
                                    <img src={statistics.statistics} alt="image" />
                                </a>
                            </div>
                            <div className="image-wrapper">
                                <a href="#lightbox-image-2">
                                    <img src={statistics.statistics2} alt="image" />
                                </a>
                            </div>
                            <div className="image-wrapper">
                                <a href="#lightbox-image-3">
                                    <img src={statistics.statistics3} alt="" />
                                </a>
                            </div>
                        </div>

                        <div className="gallery-lightboxes">

                            <div className="image-lightbox" id="lightbox-image-1">
                                <div className="image-lightbox-wrapper">
                                    <a href="#" className="close"></a>
                                    <a href="#lightbox-image-3" className="arrow-left"></a>
                                    <a href="#lightbox-image-2" className="arrow-right"></a>
                                    <img src={statistics.statistics} alt="image" />
                                </div>
                            </div>

                            <div className="image-lightbox" id="lightbox-image-2">
                                <div className="image-lightbox-wrapper">
                                    <a href="#" className="close"></a>
                                    <a href="#lightbox-image-1" className="arrow-left"></a>
                                    <a href="#lightbox-image-3" className="arrow-right"></a>
                                    <img src={statistics.statistics2} alt="image" />
                                </div>
                            </div>

                            <div className="image-lightbox" id="lightbox-image-3">
                                <div className="image-lightbox-wrapper">
                                    <a href="#" className="close"></a>
                                    <a href="#lightbox-image-2" className="arrow-left"></a>
                                    <a href="#lightbox-image-1" className="arrow-right"></a>
                                    <img src={statistics.statistics3} alt="" />
                                </div>
                            </div>

                        </div>
                    </div>

                    {/* <div className='col-md-6 mb-4'>
                    <a className="my_link" data-gall="gallery01" href="/img/1.png"><img src="/img/1.png" width={"100%"} alt="image alt"/></a>
                    </div> */}

                    {/* <div className='col-md-6 mb-4'>
                    <a className="my-image-links" data-gall="gallery01" href="/img/1.png"><img width={"100%"} src="/img/1.png"/></a>
                    </div>
                    <div className='col-md-6 mb-4'>
                    <a className="my-image-links" data-gall="gallery01" href="/img/1.png"><img width={"100%"} src="/img/1.png"/></a>
                    </div>
                    <div className='col-md-6 mb-4'>
                    <a className="my-image-links" data-gall="gallery01" href="/img/1.png"><img width={"100%"} src="/img/1.png"/></a>
                    </div>
                    <div className='col-md-6 mb-4'>
                    <a className="my-image-links" data-gall="gallery01" href="/img/1.png"><img width={"100%"} src="/img/1.png"/></a>
                    </div>
                    <div className='col-md-6 mb-4'>
                    <a className="my-image-links" data-gall="gallery01" href="/img/1.png"><img width={"100%"} src="/img/1.png"/></a>
                    </div> */}
                </div>
            </div>
        </section>
    );
}

export default Statistika;


// import React, { useCallback, useState, useEffect } from 'react';
// import './style.css';
// import { useT } from '../../../custom/hooks/useT';
// import baseApi from '../../../api/baseApi';
// import { STATISTICS_URL } from '../../../api/Urls';

// const Statistika = () => {

//     const [isLoading, setisLoading] = useState(true);
//     const [statistics, setStatistics] = useState([]);
//     const { t, lang } = useT();

//     const getStatistics = useCallback(
//         async () => {
//             baseApi.fetchAll(STATISTICS_URL)
//                 .then(res => {
//                     setStatistics(res.data)
//                     console.log(res.data.statistics);
//                 })
//         }, [])

//     useEffect(() => {
//         getStatistics();
//     }, [])


//     const propertyNames = Object.keys(statistics);
//     const propertyValues = Object.values(statistics);
//     const entries = Object.entries(statistics);

//     // console.log(propertyNames);
//     console.log(propertyValues);
//     // console.log(entries);

//     return (
//         <section className='text-section'>
//             <div className='container-fluid'>
//                 <div className='row'>
//                     <div className='col-12'>
//                         <div className='title-name'>
//                             <h3>Statistika</h3>
//                             <div className='text-title-line'></div>
//                         </div>
//                     </div>
//                 </div>
//                 <div className='row pl-3 pr-3 pb-5'>

//                     <div>
//                         <div className="gallery-wrapper">
//                             {
//                                 isLoading ? <h5>{t(`load.${lang}`)}...</h5> : Object.values(statistics).map((item, index) => (
//                                     <div className="image-wrapper">
//                                         <a href={`#lightbox-image-${index}`}>
//                                             <img src={item} alt="image" />
//                                         </a>
//                                     </div>
//                                 ))
//                             }
//                         </div>


                        {/* <div className="gallery-lightboxes">
                            {
                                isLoading ? <h5>{t(`load.${lang}`)}...</h5> : statistics.map((item, index) => (
                                    <div className="image-lightbox" id={`lightbox-image-${index}`}>
                                        <div className="image-lightbox-wrapper">
                                            <a href="#" className="close"></a>
                                            <img src={statistics.statistics} alt="image" />
                                        </div>
                                    </div>
                                ))
                            }
                        </div> */}

                    // </div>

                    {/* <div className='col-md-6 mb-4'>
                    <a className="my_link" data-gall="gallery01" href="/img/1.png"><img src="/img/1.png" width={"100%"} alt="image alt"/></a>
                    </div> */}

                    {/* <div className='col-md-6 mb-4'>
                    <a className="my-image-links" data-gall="gallery01" href="/img/1.png"><img width={"100%"} src="/img/1.png"/></a>
                    </div>
                    <div className='col-md-6 mb-4'>
                    <a className="my-image-links" data-gall="gallery01" href="/img/1.png"><img width={"100%"} src="/img/1.png"/></a>
                    </div>
                    <div className='col-md-6 mb-4'>
                    <a className="my-image-links" data-gall="gallery01" href="/img/1.png"><img width={"100%"} src="/img/1.png"/></a>
                    </div>
                    <div className='col-md-6 mb-4'>
                    <a className="my-image-links" data-gall="gallery01" href="/img/1.png"><img width={"100%"} src="/img/1.png"/></a>
                    </div>
                    <div className='col-md-6 mb-4'>
                    <a className="my-image-links" data-gall="gallery01" href="/img/1.png"><img width={"100%"} src="/img/1.png"/></a>
                    </div> */}
//                 </div>
//             </div>
//         </section>
//     );
// }

// export default Statistika;


