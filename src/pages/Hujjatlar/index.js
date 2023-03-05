import React from 'react';
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from 'cdbreact';
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom';
import { useT } from '../../custom/hooks/useT';
import '../Boshqarma/style.css';

const Sidebar = () => {
  const { t, lang } = useT();
  const { pathname } = useLocation();

  const setActiveClass = (path) => {
    if(path === pathname){
      return "active"
    }
    return ""
  }

  return (
    <div >
      <div className='container-fluid d-flex w-100 p-0 my-4'>
        <div id='zindex' style={{ display: 'flex', overflow: 'scroll initial', zIndex: "21", borderRight: "1px solid rgb(197, 191, 191) ", height: "450px" }}>
          <CDBSidebar textColor="#000000" backgroundColor="#fff">
            <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
              <a className="text-decoration-none" style={{ color: 'inherit' }}>
                {t(`Hujjatlar.${lang}`)}
              </a>
            </CDBSidebarHeader>
            <CDBSidebarContent className="sidebar-content">
              <CDBSidebarMenu>
                <Link to="/Hujjatlar">
                  <CDBSidebarMenuItem className={setActiveClass('/Hujjatlar')} icon="columns">{t(`laws.${lang}`)}</CDBSidebarMenuItem>
                </Link>
                <NavLink to="/Hujjatlar/Qarorlar">
                  <CDBSidebarMenuItem className={setActiveClass('/Hujjatlar/Qarorlar')} icon="file">{t(`Decisions.${lang}`)}</CDBSidebarMenuItem>
                </NavLink>
                <NavLink to="/Hujjatlar/Farmonlar">
                  <CDBSidebarMenuItem className={setActiveClass('/Hujjatlar/Farmonlar')} icon="table">{t(`farmon.${lang}`)}</CDBSidebarMenuItem>
                </NavLink>
            
                <NavLink to="/Hujjatlar/Dasturlar">
                  <CDBSidebarMenuItem className={setActiveClass('/Hujjatlar/Dasturlar')} icon="table">{t(`dastur.${lang}`)}</CDBSidebarMenuItem>
                </NavLink>
                <NavLink to="/Hujjatlar/Loyihalar">
                  <CDBSidebarMenuItem className={setActiveClass('/Hujjatlar/Loyihalar')} icon="list-alt">{t(`Loyihalar.${lang}`)}</CDBSidebarMenuItem>
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
