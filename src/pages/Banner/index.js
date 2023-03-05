import React from 'react';
import './style.css';
import PhoneIcon from '@mui/icons-material/Phone';
import HomeIcon from '@mui/icons-material/Home';
import { changeLang, setLang, getLang } from '../../helpers';
import { useT } from '../../custom/hooks/useT';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TelegramIcon from '@mui/icons-material/Telegram';
import InstagramIcon from '@mui/icons-material/Instagram';

const language = [
  {
    code: "en",
    name: "English",
    country_code: "en"
  },
  {
    code: "ru",
    name: "Pусский",
    country_code: "ru"
  },
  {
    code: "uz",
    name: "Uzbek",
    country_code: "uz"
  },
]

const handleChangeLng = (code) => {
  changeLang(code)
  setLang(code)
  window.location.reload();
}

const Banner = () => {

  const { t, lang } = useT()

  return (
    <section className='banner-section'>
          
      <div className="container-fluid d-flex justify-content-between align-items-center">
        <div className='flag d-flex align-items-center'>
          <img src='/img/flag.jpg' alt='flag' />
          <font className='logo-title '>{t(`welcomeP.${lang}`)}</font>
        </div>

        <div className='ummmm d-flex align-items-center'>
          <div className='logo d-flex align-items-center'>
            <img src='/logo.png' alt='logo' />
          </div>
          <div className='d-flex flex-column mx-3'>
            <div className='phone d-flex align-items-center d-none d-lg-flex'>
              <PhoneIcon className='icon' sx={{ fontSize: 33 }} />
              <div className="m-2">
                <span>{t(`contactCenter.${lang}`)}</span>
                <h6><a className='text-decoration-none' href="tel: +998 73 542 21 28">+998 73 542 21 28</a></h6>
              </div>
            </div>
           
            <div className='address d-flex align-items-center d-none d-lg-flex'>
              <HomeIcon className='icon' sx={{ fontSize: 33 }} />
              <div className="m-2">
                <span>{t(`address.${lang}`)}</span>
                <h6 style={{ fontSize: "14px", maxWidth: "150px" }}>{t(`tAddress.${lang}`)}</h6>
              </div>
            </div>
          </div>
          
        <div className="dropdown language" style={{ zIndex: "999898989898898" }}>
          <button className="btn btn-outline-primary dropdown-toggle text-uppercase" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
            {getLang()}
          </button>
          <ul id='langu' className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            {
              language.map(({ code, country_code }) => (
                <li
                  onClick={() => handleChangeLng(code)}
                  key={country_code}>
                  <a className="dropdown-item" href="#">{country_code}</a>
                </li>
              ))
            }
          </ul>
        </div>        
        </div>
      </div>
      <div className="container-fluid d-flex justify-content-between align-items-right">
        <div className='d-flex flex-column mx-3'>
          <div className='phone d-flex align-items-center d-none d-lg-flex'>
              <a  href=''> <FacebookIcon style={{fontSize:'30px', marginRight:'20px'}} />  </a>
              <a href=''> <InstagramIcon style={{fontSize:'30px', marginRight:'20px'}} />  </a>
              <a href=''> <TelegramIcon style={{fontSize:'30px', marginRight:'20px'}} />  </a>
              <a href=''> <YouTubeIcon style={{fontSize:'30px', marginRight:'20px'}} />  </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner;
