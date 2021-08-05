import React, { useEffect, useState } from "react";
import { AppNavigation, Modal } from "@mtm/components";
import {
  GetPersonSummaryData,
  GetPersonApplicationType,
} from "../../types/PersonTypes";
import {
  Organization,
  GetOverallHealthDetailsType,
} from "../../types/MemberTypes";
// import * as AppSettingsService from "../../services/AppSettingsService";
//import * as AuthService from "../../services/AuthService/AuthService";
import { useTranslation } from "react-i18next";
import styles from "./Header.module.scss";
import "./Header.scss";
//import phoneValidation from "../../helpers/PhoneValidation";

type HeaderProps = {
  isCollapsed: boolean;
  handler: Function;
  applications: GetPersonApplicationType[];
  profile: GetPersonSummaryData;
  organizations: Organization[];
  pages?: any[];
  onPageSelection?: (id: string) => void;
  healthPlans: GetOverallHealthDetailsType;
};

const appSettings = "";//AppSettingsService;
const authService = "";//AuthService;

export default function Header(props: HeaderProps) {
  const { i18n, t } = useTranslation();
  const userLinks = [
    {
      id: "account-settings",
      display: t("USER_PROFILE"),
      icon: "",
      link: "#/profile",
    },
    {
      id: "help",
      display: "Help",
      icon: "",
    },
    {
      id: "signout",
      display: t("SIGNOUT"),
      icon: "",
    },
  ];

  const languages = [
    {
      id: "Spanish",
      display: "Espanol",
      icon: "",
    },
    {
      id: "English",
      display: "English",
      icon: "",
    },
  ];

  const menuItems = [
    {
      id: "1",
      title: t("TRIPS"),
      icon: "car",
      link: "/trips",
    },
    {
      id: "2",
      title: t("MENU_REQUEST_RIDE"),
      icon: "square_plus",
      link: "/request-ride",
    },
  ];

  const [isShowHelpModalVisible, setIsShowHelpModalVisible] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("mtmlink-language") != null) {
      i18n.changeLanguage(localStorage.getItem("mtmlink-language") || "");
    }
  }, [i18n]);

  function getAppMappingUrl(appId: number) {
     let appUrl: any = null;
    // const app = applications.find((obj) => obj.webApplicationId === appId);
    // if (app && app.webApplicationUrl) {
    //   const dbAppUrl = app.webApplicationUrl.replace("/", "");
    //   appUrl = appSettings.getAppMapping()[dbAppUrl];
    // }

     return appUrl;
  }

  function handleWebAppSelected(appId: number) {
    const appUrl = getAppMappingUrl(appId);

    if (appUrl) {
      window.location.href = appUrl;
    }
  }

  function handleUserLinkSelected(linkId: string) {
    if (linkId === "signout") {
     // authService.logout();
    } else if (linkId === "help") {
      showHelpModal();
    } else {
      const userLink = userLinks.find((obj) => obj.id === linkId);
      if (userLink && userLink.link) {
        window.location.hash = userLink.link;
      }
    }
  }

  function onLanguageLinkSelection(languageValue: string) {
    i18n.changeLanguage(languageValue);
  }

  function onMenuItemClick(id: any) {
    const item = menuItems.find((item) => item.id === id);

    if (item) {
      window.location.hash = `${item.link}`;
    }
  }

  function showHelpModal() {
    setIsShowHelpModalVisible(true);
  }

  function getHelpContent() {
    return (
      <>
        <p className={styles.modalBodyContent}>{t("HEADER_HELP_MSG")}</p>
        <p className={styles.modalBodyContent}>
          {healthPlans.healthCoverageDetails.map((healthPlan) => {
            return (
              <div>
                {healthPlan.healthPlanName}:{" "}
                <a href={`tel:${healthPlan.healthPlanPhoneNumber}`}>
                  {/* {phoneValidation(healthPlan.healthPlanPhoneNumber)} */}
                </a>
              </div>
            );
          })}
        </p>
      </>
    );
  }
  function handleToggleShowHelp() {
    setIsShowHelpModalVisible(!isShowHelpModalVisible);
  }
  const { profile, applications, organizations, healthPlans } = props;

  const userProfile = {
    lastName: profile.personInfo ? profile.personInfo.lastName : "",
    firstName: profile.personInfo ? profile.personInfo.firstName : "",
    role: organizations.length > 0 ? organizations[0].organizationName : "",
  };

  const primaryLanguage = profile.personInfo
    ? profile.personInfo.primaryLanguage
    : "";

  return (
    <>
      <AppNavigation
        isDefault={true}
        profile={userProfile}
        userLinks={userLinks}
        webApps={applications}
        onUserLinkSelection={handleUserLinkSelected}
        onWebAppSelected={handleWebAppSelected}
        showTranslation={true}
        showHelpIcon={true}
        languages={languages}
        languagePlaceholder={primaryLanguage}
        onLanguageLinkSelection={onLanguageLinkSelection}
        menuItems={menuItems}
        onMenuItemClick={onMenuItemClick}
        helpContent={getHelpContent()}
      />
      <div id="modalWrapperMobile">
        <Modal
          handleSuccess={handleToggleShowHelp}
          handleCancel={handleToggleShowHelp}
          visible={isShowHelpModalVisible}
          okText=""
          cancelText=""
          className={styles.modalWrapperMobile}
        >
          {getHelpContent()}
        </Modal>
      </div>
    </>
  );
}
