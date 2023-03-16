import React, { useEffect } from 'react'
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import Banner from './pages/Banner';
import NavbarMain from './pages/Navbar';
import Home from './pages/Home';
import './App.css';

import Boshqarma from './pages/Boshqarma'
import BoshqarmaHaqida from './pages/Boshqarma/BoshqarmaHaqida';
import Rahbariyat from './pages/Boshqarma/Rahbariyat';
import BoshqarmaNizomi from './pages/Boshqarma/BoshqarmaNizomi';
import BoshqarmaTuzilmasi from './pages/Boshqarma/BoshqarmaTuzilmasi';
import SuvBolimlari from './pages/Boshqarma/SuvBolimlari';
import MarkaziyApparat from './pages/Boshqarma/MarkaziyApparat';
import ByudjetQonun from './pages/Boshqarma/ByudjetQonun';
import OchiqMalumot from './pages/Boshqarma/OchiqMalumot';
import ElektronJamiyat from './pages/Boshqarma/ElektronJamiyat';
import BoshIshOrnlari from './pages/Boshqarma/BoshIshOrnlari';
import TenderlarTanlovlar from './pages/Boshqarma/TenderlarTanlovlar';
import Tadbirlar from './pages/Boshqarma/Tadbirlar';
// import Hayat from './pages/Boshqarma/Hayat';

import News from './pages/Yangiliklar'
import Yangiliklar from './pages/Yangiliklar/Yangiliklar';
import AxborotXizmati from './pages/Yangiliklar/AxborotXizmati';
import Elonlar from './pages/Yangiliklar/Elonlar';
import PresRelizlar from './pages/Yangiliklar/PresRelizlar';
import OAVVakillar from './pages/Yangiliklar/OAV';

import Fotogalereya from './pages/Mediagalereya/Fotogalereya';
import VideoMaterial from './pages/Mediagalereya/VideoMaterial';

import Datas from './pages/Malumotlar'
import SuvXojaligiFidoiylari from './pages/Malumotlar/SuvXojaligiFidoiylari';
import KorrupsiyagaQarshiKurash from './pages/Malumotlar/KorrupsiyagaQarshiKurash';
import RahbariyatMaruzalari from './pages/Malumotlar/RahbariyatMaruzalari';
import Statistika from './pages/Malumotlar/Statistika';
import SuvXojalikFaoliyatiTogrisida from './pages/Malumotlar/SuvXo’jalikFaoliyatiTo’g’risida';
import AxborotdanFoydalanuvchilarningSorovnomasi from './pages/Malumotlar/AxborotdanFoydalanuvchilarningSo’rovnomasi';
import RasmiyWebSahifa from './pages/Malumotlar/RasmiyWebSahifa';

import Hujjatlar from './pages/Hujjatlar';
import Qonunlar from './pages/Hujjatlar/Qonunlar';
import QonunDetails from './pages/Hujjatlar/Qonunlar/qonunDetails';
import Qarorlar from './pages/Hujjatlar/Qarorlar';
import QarorlarDetails from './pages/Hujjatlar/Qarorlar/qarorlarDetails';
import Farmonlar from './pages/Hujjatlar/Farmonlar';
import FarmonlarDetails from './pages/Hujjatlar/Farmonlar/FarmonDetails'
import NormativHujjatlar from './pages/Hujjatlar/NormativHujjatlar';
import NormativeDetails from './pages/Hujjatlar/NormativHujjatlar/normativeDetails';
import Dasturlar from './pages/Hujjatlar/Dasturlar';
import Loyihalar from './pages/Hujjatlar/Loyihalar';
import LoyihalarDetails from './pages/Hujjatlar/Loyihalar/LoyihalarDetails';

import Interaktive from './pages/InteraktivXizmatlar'
import JismoniyVaYuridikShaxslarMurojati from './pages/InteraktivXizmatlar/JismoniyVaYuridikShaxslarMurojati';
import MurojatYollash from './pages/InteraktivXizmatlar/MurojatYollash';
import TarjimaiHol from './pages/InteraktivXizmatlar/TarjimaiHol';
import IshTartibi from './pages/InteraktivXizmatlar/IshTartibi';

import FoydaliMaslahatlar from './pages/FoydaliMaslahatlar/index';
import Boglanish from './pages/Boglanish/index';
import Section4Home from './pages/Footer';
import Tenddetails from './pages/Boshqarma/TenderlarTanlovlar/tendDetails';
import TadDetails from './pages/Boshqarma/Tadbirlar/tadDetails';
import Newdetails from './pages/Yangiliklar/Yangiliklar/newDetails';
import ElonDetails from './pages/Yangiliklar/Elonlar/elonDetails';
import FotoDetails from './pages/Mediagalereya/Fotogalereya/fotoDetails';
import VideoDetails from './pages/Mediagalereya/VideoMaterial/videoDetails';
import DasturlarDetails from './pages/Hujjatlar/Dasturlar/farmonlarDetails';
import { fallbackLng, languages } from './constants';
import i18next from 'i18next';
import SuvXojalikBoshqarmasi from './pages/Boglanish/SuvXojalikBoshqarmasi';
import MurojatYollashBoglanish from './pages/Boglanish/MurojatYollash';
import Normative from './pages/Boshqarma/YoshlargaOidYangiliklar/normative';
import YoshlarYangiliklar from './pages/Boshqarma/YoshlargaOidYangiliklar/yoshlargaOidYangiliklar';
import YoshlarDetails from './pages/Boshqarma/YoshlargaOidYangiliklar/yoshlarDetails';

function App() {
  
  const {pathname} = useLocation();
  // pathname o'zgarganda tepaga otish
  useEffect(() => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })

  },[pathname])


  useEffect(() => {
    let currentLang = localStorage.getItem("langu");

    if (!currentLang) {
      localStorage.setItem("langu", fallbackLng);
    } else if (languages.includes(currentLang)) {
      i18next.changeLanguage(currentLang);
    };
  }, [i18next]);

  return (
    <div className="App p-0">
      <Banner />
        <NavbarMain />
        <Routes>
          <Route path='/' element={<Home />} />

          <Route path='boshqarma' element={<Boshqarma />}>
            <Route index element={<BoshqarmaHaqida />} />
            <Route path='raxbariyat' element={<Rahbariyat />} />
            <Route path='boshqarmaNizomi' element={<BoshqarmaNizomi />} />
            <Route path='boshqarmaTuzilmasi' element={<BoshqarmaTuzilmasi />} />
            {/* <Route path='hayat' element={<Hayat />} /> */}
            <Route path='suvBolimlari' element={<SuvBolimlari />} />
            <Route path='markaziyAparat' element={<MarkaziyApparat />} />
            <Route path='byudjetQonun' element={<ByudjetQonun />} />
            <Route path='ochiqMalumotlar' element={<OchiqMalumot />} />
            <Route path='elektronHukumat' element={<ElektronJamiyat />} />
            <Route path='normativ' element={<Normative />} />
            <Route path='yoshYangilik' element={<YoshlarYangiliklar />} />
            <Route path='yoshYangilik/:id' element={<YoshlarDetails />} />
            <Route path='boshIsh' element={<BoshIshOrnlari />} />
            <Route path='tenderlarTanlov' element={<TenderlarTanlovlar />} />
            <Route path="tenderlarTanlov/:id" element={<Tenddetails />} />
            <Route path='tadbirlar' element={<Tadbirlar />} />
            <Route path='tadbirlar/:id' element={<TadDetails />} />
          </Route>

          <Route path='News' element={<News />}>
            <Route index element={<Yangiliklar />} />
            <Route path=':id' element={<Newdetails />} />
            <Route path='AxborotXizmati' element={<AxborotXizmati />} />
            <Route path='Elonlar' element={<Elonlar />} />
            <Route path='Elonlar/:id' element={<ElonDetails />} />
            <Route path='PresRelizlar' element={<PresRelizlar />} />
            <Route path='OAVVakillar' element={<OAVVakillar />} />
          </Route>

          <Route path='Fotogalereya' element={<Fotogalereya />} />
          <Route path='Fotogalereya/:id' element={<FotoDetails />} />
          <Route path='VideoMaterial' element={<VideoMaterial />} />
          <Route path='VideoMaterial/:id' element={<VideoDetails />} />

          <Route path='datas' element={<Datas />}>
            <Route index element={<SuvXojaligiFidoiylari />} />
            <Route path='KorrupsiyagaQarshiKurash' element={<KorrupsiyagaQarshiKurash />} />
            <Route path='RahbariyatMaruzalari' element={<RahbariyatMaruzalari />} />
            <Route path='Statistika' element={<Statistika />} />
            <Route path='SuvXojalikFaoliyatiTogrisida' element={<SuvXojalikFaoliyatiTogrisida />} />
            <Route path='RasmiyWebSahifa' element={<RasmiyWebSahifa />} />
            <Route path='AxborotdanFoydalanuvchilarningSorovnomasi' element={<AxborotdanFoydalanuvchilarningSorovnomasi />} />
          </Route>

          <Route path='Hujjatlar' element={<Hujjatlar />}>
            <Route index element={<Qonunlar />} />
            <Route path=':id' element={<QonunDetails />} />
            <Route path='Qarorlar' element={<Qarorlar />} />
            <Route path='Qarorlar/:id' element={<QarorlarDetails />} />
            <Route path='Farmonlar' element={<Farmonlar />} />
            <Route path='Farmonlar/:id' element={<FarmonlarDetails />} />
            <Route path='NormativHujjatlar' element={<NormativHujjatlar />} />
            <Route path='NormativHujjatlar/:id' element={<NormativeDetails />} />
            <Route path='Dasturlar' element={<Dasturlar />} />
            <Route path='Dasturlar/:id' element={<DasturlarDetails />} />
            <Route path='Loyihalar' element={<Loyihalar />} />
            <Route path='Loyihalar/:id' element={<LoyihalarDetails />} />
          </Route>

          <Route path='Interaktive' element={<Interaktive />}>
            <Route index element={<JismoniyVaYuridikShaxslarMurojati />} />
            <Route path='MurojatYollash' element={<MurojatYollash />} />
            <Route path='TarjimaiHol' element={<TarjimaiHol />} />
            <Route path='IshTartibi' element={<IshTartibi />} />
          </Route>

          <Route path='FoydaliMaslahatlar' element={<FoydaliMaslahatlar />} />
          <Route path='Boglanish' element={<Boglanish />} >
            <Route index element={<SuvXojalikBoshqarmasi />} />
            <Route path='murojat' element={<MurojatYollashBoglanish />} />
          </Route>
        </Routes>
        <Section4Home />
    </div>
  );
}

export default App;
