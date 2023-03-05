import React, { useState, useEffect, useCallback } from 'react';
import { useT } from '../../../custom/hooks/useT';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import { OPENBUDGET_NAME, OPENBUDGET_FILES } from '../../../api/Urls';
import baseApi from '../../../api/baseApi';
import { Card, Col, Row, Table } from 'react-bootstrap';

const OchiqMalumot = () => {
    const [openBudgetName, setOpenBudgetName] = useState([])
    const [openBudgetFiles, setOpenBudgetFiles] = useState([])
    const [isLoading, setisLoading] = useState(true)
    const { t, lang } = useT()

    const getOpenBudgetFiles = useCallback(
        async () => {
            baseApi.fetchAll(OPENBUDGET_FILES)
            .then(response => {
                setOpenBudgetFiles(response.data)
                setisLoading(false);
            })
        }, []);
    
    useEffect(() => {
        getOpenBudgetFiles();
    }, []);

    return (
        
        <section className='text-section'>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-12'>
                        <div className='title-name'>
                            <h3>{t(`Ochiqma'lumotlar.${lang}`)}</h3>
                            <div className='text-title-line'></div>
                            
                        </div>
                    </div>
                </div>
                <div className='row pl-5'>
                    <div className='col-12 mb-4 p-2'>
                        {
                            isLoading ? <h5>{t(`load.${lang}`)}.....</h5> :
                            openBudgetFiles.map(item => (
                                <Card key={item.id} style={{ width: '100%', marginTop: "20px" }}>
                                    <div className='text-dark text-decoration-none'>
                                        <h6 className='fw-bold'>{item.categoryName}</h6>
                                    </div>
                                    <div className='qonun-date d-flex justify-content-between align-items-center' style={{marginBottom:"13px"}}>
                                        <span className='p-1 bg-secondary text-white'>{item.title}</span>
                                        <div>
                                                <a href={item.files} target="_blank" rel="noopener noreferrer">
                                                    <button className='btn btn-success ml-3' type="button">
                                                        <FileDownloadIcon />  {t(`download.${lang}`)}
                                                    </button>
                                                </a>
                                        </div>
                                    </div>
                                </Card>
                            ))
                        }
                        <div>
                         <div className='text-dark text-decoration-none'>
                            <h6 className='fw-bold'>Сўх-Оқтепа ирригация тизими бошқармасининг буюджет маблағлари хисобига амалга оширилган давлат харидлари тўғрисида маълумот</h6>
                        </div>
                        <div className='qonun-date d-flex justify-content-between align-items-center' style={{marginBottom:"13px"}}>
                            <span className='p-1 bg-secondary text-white'>Avtomatika aklli suv 6 oy lik hisoboti</span>
                            <div>
                                    <a href='/files/Ochiq malumotlar/автоматика аклли сув 6 ой ли.pdf' target="_blank" rel="noopener noreferrer">
                                        <button className='btn btn-success ml-3' type="button">
                                            <FileDownloadIcon />  {t(`download.${lang}`)}
                                        </button>
                                    </a>
                            </div>
                        </div>
                        <div className='qonun-date d-flex justify-content-between align-items-center' style={{marginBottom:"13px"}}>
                            <span className='p-1 bg-secondary text-white'>Avtomatika aklli suv 9 oy lik hisoboti</span>
                            <div>
                                    <a href='/files/Ochiq malumotlar/автоматика аклли сув 9 ой ли.pdf' target="_blank" rel="noopener noreferrer">
                                        <button className='btn btn-success ml-3' type="button">
                                            <FileDownloadIcon />  {t(`download.${lang}`)}
                                        </button>
                                    </a>
                            </div>
                        </div>
                        <div className='qonun-date d-flex justify-content-between align-items-center' style={{marginBottom:"13px"}}>
                            <span className='p-1 bg-secondary text-white'>Byudjet 3 oylik balansi</span>
                            <div>
                                    <a href='/files/Ochiq malumotlar/бюджет 3 ой баланс.pdf' target="_blank" rel="noopener noreferrer">
                                        <button className='btn btn-success ml-3' type="button">
                                            <FileDownloadIcon />  {t(`download.${lang}`)}
                                        </button>
                                    </a>
                            </div>
                        </div>
                        <div className='qonun-date d-flex justify-content-between align-items-center' style={{marginBottom:"13px"}}>
                            <span className='p-1 bg-secondary text-white'>Byudjet 3 oylik Otchet</span>
                            <div>
                                    <a href='/files/Ochiq malumotlar/бюджет 3 ой отчет.pdf' target="_blank" rel="noopener noreferrer">
                                        <button className='btn btn-success ml-3' type="button">
                                            <FileDownloadIcon />  {t(`download.${lang}`)}
                                        </button>
                                    </a>
                            </div>
                        </div>
                        <div className='qonun-date d-flex justify-content-between align-items-center' style={{marginBottom:"13px"}}>
                            <span className='p-1 bg-secondary text-white'>Byudjet 6 oylik Balans</span>
                            <div>
                                    <a href='/files/Ochiq malumotlar/бюджет 6 ой баланс.pdf' target="_blank" rel="noopener noreferrer">
                                        <button className='btn btn-success ml-3' type="button">
                                            <FileDownloadIcon />  {t(`download.${lang}`)}
                                        </button>
                                    </a>
                            </div>
                        </div>
                        <div className='qonun-date d-flex justify-content-between align-items-center' style={{marginBottom:"13px"}}>
                            <span className='p-1 bg-secondary text-white'>Byudjet 6 oylik</span>
                            <div>
                                    <a href='/files/Ochiq malumotlar/бюджет 6 ойлик.pdf' target="_blank" rel="noopener noreferrer">
                                        <button className='btn btn-success ml-3' type="button">
                                            <FileDownloadIcon />  {t(`download.${lang}`)}
                                        </button>
                                    </a>
                            </div>
                        </div>
                        <div className='qonun-date d-flex justify-content-between align-items-center' style={{marginBottom:"13px"}}>
                            <span className='p-1 bg-secondary text-white'>Byudjet 9 oylik Balans</span>
                            <div>
                                <a href='/files/Ochiq malumotlar/бюджет 9 ой баланс.pdf' target="_blank" rel="noopener noreferrer">
                                    <button className='btn btn-success ml-3' type="button">
                                        <FileDownloadIcon />  {t(`download.${lang}`)}
                                    </button>
                                </a>
                            </div>
                        </div>
                        <div className='qonun-date d-flex justify-content-between align-items-center' style={{marginBottom:"13px"}}>
                            <span className='p-1 bg-secondary text-white'>Byudjet 9 oylik Otchet 002</span>
                            <div>
                                <a href='/files/Ochiq malumotlar/бюджет 9 ой отчет 0002.pdf' target="_blank" rel="noopener noreferrer">
                                    <button className='btn btn-success ml-3' type="button">
                                        <FileDownloadIcon />  {t(`download.${lang}`)}
                                    </button>
                                </a>
                            </div>
                        </div>
                        <div className='qonun-date d-flex justify-content-between align-items-center' style={{marginBottom:"13px"}}>
                            <span className='p-1 bg-secondary text-white'>Byudjet 9 oylik Otchet</span>
                            <div>
                                <a href='/files/Ochiq malumotlar/бюджет 9 ой отчет.pdf' target="_blank" rel="noopener noreferrer">
                                    <button className='btn btn-success ml-3' type="button">
                                        <FileDownloadIcon />  {t(`download.${lang}`)}
                                    </button>
                                </a>
                            </div>
                        </div>


                        <div className='text-dark text-decoration-none'>
                            <h6 className='fw-bold'>Сўх-Оқтепа ирригация тизими бошқармаси тасарруфидаги машина ва меҳанизмлар тўғрисида ва уларга олинган ёқилғи хисоботи 2022 йил холатига</h6>
                        </div>
                        <div className='qonun-date d-flex justify-content-between align-items-center' style={{marginBottom:"13px"}}>
                            <span className='p-1 bg-secondary text-white'>Oyma-oy olingan yoqilg'i</span>
                            <div>
                                    <a href='/files/Ochiq malumotlar/Oyma-oy yoqilgi.xlsx' target="_blank" rel="noopener noreferrer">
                                        <button className='btn btn-success ml-3' type="button">
                                            <FileDownloadIcon />  {t(`download.${lang}`)}
                                        </button>
                                    </a>
                            </div>
                        </div>
                        <div className='qonun-date d-flex justify-content-between align-items-center' style={{marginBottom:"13px"}}>
                            <span className='p-1 bg-secondary text-white'>Boshqarma tasarufidagi mashina va mexanizmlar 2022 yil</span>
                            <div>
                                    <a href='/files/Ochiq malumotlar/mashina va mehanizmlar.xls' target="_blank" rel="noopener noreferrer">
                                        <button className='btn btn-success ml-3' type="button">
                                            <FileDownloadIcon />  {t(`download.${lang}`)}
                                        </button>
                                    </a>
                            </div>
                        </div>
                        

                        <div className='text-dark text-decoration-none'>
                            <h6 className='fw-bold'>Сўх-Оқтепа ирригация тизими бошқармасининг 2022 йил учун сув миқдори (лиминт)</h6>
                        </div>
                        <div className='qonun-date d-flex justify-content-between align-items-center' style={{marginBottom:"13px"}}>
                            <span className='p-1 bg-secondary text-white'>2022 yil reja, chorak</span>
                            <div>
                                    <a href='/files/Ochiq malumotlar/2022 yil reja, chorak.xlsx' target="_blank" rel="noopener noreferrer">
                                        <button className='btn btn-success ml-3' type="button">
                                            <FileDownloadIcon />  {t(`download.${lang}`)}
                                        </button>
                                    </a>
                            </div>
                        </div>
                        <div className='qonun-date d-flex justify-content-between align-items-center' style={{marginBottom:"13px"}}>
                            <span className='p-1 bg-secondary text-white'>2022-2023 Limit Farg'ona</span>
                            <div>
                                    <a href='/files/Ochiq malumotlar/2022-2023 limitFargona.xls' target="_blank" rel="noopener noreferrer">
                                        <button className='btn btn-success ml-3' type="button">
                                            <FileDownloadIcon />  {t(`download.${lang}`)}
                                        </button>
                                    </a>
                            </div>
                        </div>
                        <div className='text-dark text-decoration-none'>
                            <h6 className='fw-bold'>Ўзбекистон Республикаси Президентининг 24.02.2021 йил ПҚ 5005 қарорига асосан Сўх-Оқтепа ирригация тизими бошқармасида 2022 йилда рақамли техналаогияларини  жорий қилиш  "Smart Water" ("Аққили сув" ) қурилмаларини  сотиб олиш бўйича маълумот </h6>
                        </div>    
                        <div className='qonun-date d-flex justify-content-between align-items-center' style={{marginBottom:"13px"}}>
                            <span className='p-1 bg-secondary text-white'>Avtomatika aklli suv 6 oy lik hisoboti</span>
                            <div>
                                    <a href='/files/Ochiq malumotlar/автоматика аклли сув 6 ой ли.pdf' target="_blank" rel="noopener noreferrer">
                                        <button className='btn btn-success ml-3' type="button">
                                            <FileDownloadIcon />  {t(`download.${lang}`)}
                                        </button>
                                    </a>
                            </div>
                        </div>
                        <div className='qonun-date d-flex justify-content-between align-items-center' style={{marginBottom:"13px"}}>
                            <span className='p-1 bg-secondary text-white'>Avtomatika aklli suv 9 oy lik hisoboti</span>
                            <div>
                                    <a href='/files/Ochiq malumotlar/автоматика аклли сув 9 ой ли.pdf' target="_blank" rel="noopener noreferrer">
                                        <button className='btn btn-success ml-3' type="button">
                                            <FileDownloadIcon />  {t(`download.${lang}`)}
                                        </button>
                                    </a>
                            </div>
                        </div>
                        <div className='qonun-date d-flex justify-content-between align-items-center' style={{marginBottom:"13px"}}>
                            <span className='p-1 bg-secondary text-white'>Avtomatika aklli suv qurilmasi 5 ta </span>
                            <div>
                                    <a href='/files/Ochiq malumotlar/автоматика аклли сув 9 ой ли.pdf' target="_blank" rel="noopener noreferrer">
                                        <button className='btn btn-success ml-3' type="button">
                                            <FileDownloadIcon />  {t(`download.${lang}`)}
                                        </button>
                                    </a>
                            </div>
                        </div>
                        <div className='qonun-date d-flex justify-content-between align-items-center' style={{marginBottom:"13px"}}>
                            <span className='p-1 bg-secondary text-white'>Avtomatika aklli suv qurilmasi 5 ta </span>
                            <div>
                                    <a href='/files/Ochiq malumotlar/5 ta.pdf' target="_blank" rel="noopener noreferrer">
                                        <button className='btn btn-success ml-3' type="button">
                                            <FileDownloadIcon />  {t(`download.${lang}`)}
                                        </button>
                                    </a>
                            </div>
                        </div>
                        <div className='qonun-date d-flex justify-content-between align-items-center' style={{marginBottom:"13px"}}>
                            <span className='p-1 bg-secondary text-white'>Avtomatika aklli suv qurilmasi 10 ta </span>
                            <div>
                                    <a href='/files/Ochiq malumotlar/10 ta.pdf' target="_blank" rel="noopener noreferrer">
                                        <button className='btn btn-success ml-3' type="button">
                                            <FileDownloadIcon />  {t(`download.${lang}`)}
                                        </button>
                                    </a>
                            </div>
                        </div>
                        <div className='qonun-date d-flex justify-content-between align-items-center' style={{marginBottom:"13px"}}>
                            <span className='p-1 bg-secondary text-white'>Avtomatika aklli suv qurilmasi 14 ta </span>
                            <div>
                                    <a href='/files/Ochiq malumotlar/14 ta.pdf' target="_blank" rel="noopener noreferrer">
                                        <button className='btn btn-success ml-3' type="button">
                                            <FileDownloadIcon />  {t(`download.${lang}`)}
                                        </button>
                                    </a>
                            </div>
                        </div>
                        <div className='qonun-date d-flex justify-content-between align-items-center' style={{marginBottom:"13px"}}>
                            <span className='p-1 bg-secondary text-white'>Avtomatika aklli suv qurilmasi 15 ta </span>
                            <div>
                                    <a href='/files/Ochiq malumotlar/15 ta.pdf' target="_blank" rel="noopener noreferrer">
                                        <button className='btn btn-success ml-3' type="button">
                                            <FileDownloadIcon />  {t(`download.${lang}`)}
                                        </button>
                                    </a>
                            </div>
                        </div>


                        <div className='text-dark text-decoration-none'>
                            <h6 className='fw-bold'>Fuqorolar murojatlarining soni</h6>
                        </div>
                        <div className='text-dark text-decoration-none'>
                            <h6 className='fw-bold'>Rivojlantirish jamg'armasidagi tushgan pullar</h6>
                        </div>
                         
                         </div>
                    </div>
                </div>
               
            </div>
        </section>
    )
}

export default OchiqMalumot;
