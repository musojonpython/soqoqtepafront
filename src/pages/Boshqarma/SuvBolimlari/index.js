import React from 'react';
import { Table } from 'react-bootstrap';
import { useT } from '../../../custom/hooks/useT';

const SuvBolimlari = () => {
    const { t, lang } = useT();

    const datas = [
        {
            title: t(`SuvBolimlari1.title.${lang}`),
            name: t(`SuvBolimlari1.name.${lang}`),
            address: t(`SuvBolimlari1.address.${lang}`),
            phone: '(97)-417-86-40',
            image: ('/img/maruf.jpg')
        },
        {
            title: t(`SuvBolimlari2.title.${lang}`),
            name: t(`SuvBolimlari2.name.${lang}`),
            address: t(`SuvBolimlari2.address.${lang}`),
            phone: '(97)-590-44-33',
            image: ('/img/sad.jpg')
        },
        {
            title: t(`SuvBolimlari3.title.${lang}`),
            name: t(`SuvBolimlari3.name.${lang}`),
            address: t(`SuvBolimlari3.address.${lang}`),
            phone: '(90)-851-24-24',
            image: ('/img/mar.jpg')
        },
        {
            title: t(`SuvBolimlari4.title.${lang}`),
            name: t(`SuvBolimlari4.name.${lang}`),
            address: t(`SuvBolimlari4.address.${lang}`),
            phone: '(91)-699-97-33',
            image: ('/img/ras.jpg')
        },
        {
            title: t(`SuvBolimlari5.title.${lang}`),
            name: t(`SuvBolimlari5.name.${lang}`),
            address: t(`SuvBolimlari5.address.${lang}`),
            phone: '(90)-164-09-51',
            image: ('/img/shar.jpg')
        },
        {
            title: t(`SuvBolimlari6.title.${lang}`),
            name: t(`SuvBolimlari6.name.${lang}`),
            address: t(`SuvBolimlari6.address.${lang}`),
            phone: '(90)-570-23-10',
            image: ('/img/mur.jpg')
        },
        {
            title: t(`SuvBolimlari7.title.${lang}`),
            name: t(`SuvBolimlari7.name.${lang}`),
            address: t(`SuvBolimlari7.address.${lang}`),
            phone: '(90)-856-11-45',
            image: ('/img/xur.jpg')
        },
        {
            title: t(`SuvBolimlari8.title.${lang}`),
            name: t(`SuvBolimlari8.name.${lang}`),
            address: t(`SuvBolimlari8.address.${lang}`),
            phone: '(99)-222-82-80',
            image: ('/img/umd.jpg')
        },
        {
            title: t(`SuvBolimlari9.title.${lang}`),
            name: t(`SuvBolimlari9.name.${lang}`),
            address: t(`SuvBolimlari9.address.${lang}`),
            phone: '(99)-222-82-80',
            image: ('/img/joh.jpg')
        }
    ]

    return (
        <section className='text-section'>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-12'>
                        <div className='title-name'>
                            <h3>{t(`SuvBolimlari.${lang}`)}</h3>
                            <div className='text-title-line'></div>
                        </div>
                    </div>
                </div>
                <div className='row pl-5'>
                    <div className='col'>
                        <h5 className='mt-3 mb-3'>{t(`SuvBolimlariT.${lang}`)}</h5>
                    </div>
                </div>
                <div className='row pl-3 pr-3'>
                    {
                        datas.map((item, inx) => (
                            <div key={inx} className='col-12 col-md-10 mb-4 mx-auto'>
                                <div className='row'>
                                    <div className='col-md-3'>
                                        <img src={item.image} width={'100%'} alt='image' />
                                    </div>
                                    <div className='col-md-9'>
                                        <Table striped bordered hover>
                                            <tbody>
                                                <tr>
                                                    <th colSpan={2}>{item.title}</th>
                                                </tr>
                                                <tr>
                                                    <th colSpan={2}>{item.name}</th>
                                                </tr>
                                                <tr>
                                                    <td>{t(`PhoneNumber.${lang}`)}</td>
                                                    <td>{item.phone}</td>
                                                </tr>
                                                <tr>
                                                    <td>{t(`address.${lang}`)}</td>
                                                    <td>{item.address}</td>
                                                </tr>
                                            </tbody>
                                        </Table>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    );
}

export default SuvBolimlari;
