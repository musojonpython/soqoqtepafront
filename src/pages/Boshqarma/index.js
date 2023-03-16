import React, { useState } from 'react';
import {
  CDBSidebar,
  CDBSidebarHeader,
  CDBSidebarMenuItem,
  CDBSidebarContent,
  CDBSidebarMenu
} from 'cdbreact';
import { NavLink, Outlet, useLocation } from 'react-router-dom';
import { useT } from '../../custom/hooks/useT';

import 'bootstrap/dist/css/bootstrap.min.css'
import { Dropdown } from 'react-bootstrap';
import PersonIcon from '@mui/icons-material/Person';

const Sidebar = () => {
  const {pathname} = useLocation();
  const { t, lang } = useT();

  // Navlink tanlanganda active class qo'shish funksiyasi
  const setActiveClass = (path) => {
    if (pathname === path) {
      return "active";
    }
    return ""
  }

  return (
    <div>
      <div className='container-fluid d-flex w-100 p-0 my-4'>
        <div style={{ display: 'flex', overflow: 'scroll initial', zIndex: "21", borderRight: "1px solid rgb(197, 191, 191) ", height: "1020px" }}>
          <CDBSidebar textColor="#000000" backgroundColor="#fff">
            <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
              <a className="text-decoration-none" style={{ color: 'inherit' }}>
                {t(`Boshqarma.${lang}`)}
              </a>
            </CDBSidebarHeader>
            <CDBSidebarContent className="sidebar-content">
              <CDBSidebarMenu>
                <NavLink to="/boshqarma">
                  <CDBSidebarMenuItem
                  className={setActiveClass("/boshqarma")}
                    icon="columns"
                  >
                    {t(`bHaqidaTitle1.${lang}`)}
                  </CDBSidebarMenuItem>
                </NavLink>
                <NavLink to="/boshqarma/raxbariyat">
                  <CDBSidebarMenuItem className={setActiveClass("/boshqarma/raxbariyat")} icon="user">{t(`rahbariyat.${lang}`)}</CDBSidebarMenuItem>
                </NavLink>
                <NavLink to="/boshqarma/boshqarmaNizomi">
                  <CDBSidebarMenuItem className={setActiveClass("/boshqarma/boshqarmaNizomi")} icon="table">{t(`bNizomTitle1.${lang}`)}</CDBSidebarMenuItem>
                </NavLink>
                <NavLink to="/boshqarma/boshqarmaTuzilmasi">
                  <CDBSidebarMenuItem className={setActiveClass("/boshqarma/boshqarmaTuzilmasi")} icon="id-card">{t(`bTuzilmaTitle1.${lang}`)}</CDBSidebarMenuItem>
                </NavLink>
                {/* <NavLink to="/boshqarma/hayat">
                  <CDBSidebarMenuItem className={setActiveClass("/boshqarma/hayat")} icon="users">{t(`Hayat.${lang}`)}</CDBSidebarMenuItem>
                </NavLink> */}
                <Dropdown style={{ paddingLeft: "18px" }}>
                  <Dropdown.Toggle className={setActiveClass("/boshqarma/normativ")} style={{ fontWeight: "500", outline: "none", border: "none" }} variant="white" id="dropdown-basic">
                    <PersonIcon style={{ marginRight: "15px" }} /> {t(`yoshlargaOid.${lang}`)}
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <NavLink to="/boshqarma/normativ">
                      <Dropdown.Item href="#/action-1">{t(`normativeNavbar.${lang}`)}</Dropdown.Item>
                    </NavLink>
                    <NavLink to="/boshqarma/yoshYangilik">
                      <Dropdown.Item href="#/action-2">{t(`YangiliklarYoshlar.${lang}`)}</Dropdown.Item>
                    </NavLink>
                  </Dropdown.Menu>
                </Dropdown>

                <NavLink to="/boshqarma/suvBolimlari">
                  <CDBSidebarMenuItem className={setActiveClass("/boshqarma/suvBolimlari")} icon="puzzle-piece">{t(`SuvBolimlari.${lang}`)}</CDBSidebarMenuItem>
                </NavLink>
                <NavLink to="/boshqarma/markaziyAparat">
                  <CDBSidebarMenuItem className={setActiveClass("/boshqarma/markaziyAparat")} icon="cogs">{t(`Mapparat.${lang}`)}</CDBSidebarMenuItem>
                </NavLink>
                {/* <NavLink to="/boshqarma/byudjetQonun">
                  <CDBSidebarMenuItem className={setActiveClass("/boshqarma/byudjetQonun")} icon="table">{t(`Byudjetto’g’risidagiqonunchilik.${lang}`)}</CDBSidebarMenuItem>
                </NavLink> */}
                <NavLink to="/boshqarma/ochiqMalumotlar">
                  <CDBSidebarMenuItem className={setActiveClass("/boshqarma/ochiqMalumotlar")} icon="database">{t(`Ochiqma'lumotlar.${lang}`)}</CDBSidebarMenuItem>
                </NavLink>
                <NavLink to="/boshqarma/elektronHukumat">
                  <CDBSidebarMenuItem className={setActiveClass("/boshqarma/elektronHukumat")} icon="university">{t(`Elektronhukumat.${lang}`)}</CDBSidebarMenuItem>
                </NavLink>
                <NavLink to="/boshqarma/boshIsh">
                  <CDBSidebarMenuItem className={setActiveClass("/boshqarma/boshIsh")} icon="address-book">{t(`ishOrni.${lang}`)}</CDBSidebarMenuItem>
                </NavLink>


                <NavLink to="/boshqarma/tenderlarTanlov">
                  <CDBSidebarMenuItem className={setActiveClass("/boshqarma/tenderlarTanlov")} icon="calendar-check">{t(`tendrTanlov.${lang}`)}</CDBSidebarMenuItem>
                </NavLink>
                <NavLink to="/boshqarma/tadbirlar">
                  <CDBSidebarMenuItem className={setActiveClass("/boshqarma/tadbirlar")} icon="calendar">{t(`tadbir.${lang}`)}</CDBSidebarMenuItem>
                </NavLink>

              </CDBSidebarMenu>
            </CDBSidebarContent>
          </CDBSidebar>
        </div>
        <div className='w-100'>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
