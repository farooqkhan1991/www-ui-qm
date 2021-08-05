import React, { useState, useEffect } from "react";
import { Redirect, Route, Switch, HashRouter } from "react-router-dom";
// import { getPersonApplications } from "../../services/PersonService";
// import {
//   isAuthenticated,
//   signIn,
// } from "../../services/AuthService/AuthService";
import HeaderLayout from "../HeaderLayout/HeaderLayout";
import FooterLayout from "../FooterLayout/FooterLayout";
import styles from "./DefaultLayout.module.scss";
// import routes from "../../routes";
import logo from "../../assets/images/mtm-logo-new.png";
import { UserProvider } from "../../context/UserProvider";
import { ToastProvider } from "../../context/ToastProvider";
import ToastContainer from "../ToastContainer/ToastContainer";
import { AppSideMenu, Layout } from "@mtm/components";
import { useTranslation } from "react-i18next";

export function DefaultLayout() {
  const [isCollapsed, setIsCollapsed] = useState<boolean>(true);
  const [apps, setApps] = useState<any>([]);
  const { t } = useTranslation();
  const menuItems = [
    {
      id: "1",
      title: "Trips",
      icon: "car",
      subMenuItems: [
        { id: "1", title: "View Rides" },
        { id: "2", title: "Request a Ride" },
      ],
    },
    {
      id: "2",
      title: "Assignments",
      icon: "clipboard",
      subMenuItems: [
        { id: "1", title: "View Asg" },
        { id: "2", title: "Manage Credentials" },
      ],
    },
    {
      id: "3",
      title: "Claims",
      icon: "paper",
    },
    {
      id: "4",
      title: "Credentialing",
      icon: "checkmark",
    },
    {
      id: "5",
      title: "Setup",
      icon: "gear",
    },
    {
      id: "6",
      title: "Claim GMR Trip",
      icon: "gmr",
    },
    {
      id: "7",
      title: "Where's My Ride",
      icon: "gps",
    },
    {
      id: "8",
      title: "Users",
      icon: "people",
    },
    {
      id: "9",
      title: "Online Access",
      icon: "globe2",
    },
  ];
  

  useEffect(() => {
  //   const cookies = document.cookie.split("; ");

  //   //check value from cookie or session
  //   const isValid =
  //     cookies.some((item) => item.trim().startsWith("fromLink=")) ||
  //     sessionStorage.getItem("fromLink");
  //   if (!isValid) {
  //     window.location.href =
  //       window.location.protocol +
  //       "//" +
  //       window.location.host.replace("urm", "mtmlink");
  //   } else {
  //     //set the value in session storage and delete the cookie
  //     sessionStorage.setItem("fromLink", "true");
  //     const domain = window.location.host
  //       .split(".")
  //       .slice(1)
  //       .join(".");
  //     document.cookie = `fromLink=; Max-Age=0; path=/; domain=${domain};`;
  //   }
   authorize();
   }, []);

  function toggle() {
    setIsCollapsed(!isCollapsed);
  }

  async function authorize() {
    const isUserAuthenticated = "";//await isAuthenticated();

    // if (!isUserAuthenticated) {
    //   await signIn();
    // }
    // getPersonApplications().then((applications) => {
    //   setApps(applications);
   // });

    setApps([
      {
        isActive: true,
        personID: 0,
        personTypeID: 2,
        webApplicationDesc: "View and cancel trips",
        webApplicationIcon: "smp.svg",
        webApplicationId: 3,
        webApplicationName: "Service Management Portal",
        webApplicationUrl: "/smp",
      },
    ]);
  }

  function onMenuItemClick(id: any) {
    const item = menuItems.find((item) => item.id === id);

    if (item) {
      // window.location.hash = `${item.link}`;
    }
  }

  function loading() {
    return (
      <div className="animated fadeIn pt-1 text-center">
        {/* <Spinner type="grow" color="secondary" /> */}
      </div>
    );
  }

  return (
    <HashRouter>
      

      
      
    <Layout>
    <Layout className={styles.app}>
      {/* <AppSideMenu
            menuItems={menuItems}
            onMenuItemClick={onMenuItemClick}
          /> */}
         {/* <HeaderLayout
                  isCollapsed={isCollapsed}
                  handler={toggle}
                  applications={apps}
                ></HeaderLayout> */}
                <FooterLayout />
    {/* <ToastProvider>
    <UserProvider>
 
 
 </UserProvider>
 </ToastProvider> */}

      </Layout>
     </Layout>
    
  </HashRouter>
   
  );
}
