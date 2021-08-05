import React, { useContext } from "react";
import Header from "../../components/Header/Header";
import styles from "./HeaderLayout.module.scss";
import { GetPersonApplicationType } from "../../types/PersonTypes";
import { UserStateContext } from "../../context/UserProvider";

type HeaderLayoutProps = {
  isCollapsed: boolean;
  handler: Function;
  applications: GetPersonApplicationType[];
};

export default function HeaderLayout(props: HeaderLayoutProps) {
  const [userState] = useContext(UserStateContext);
  const { isCollapsed, handler, applications } = props;
  return (
    <div className={styles.container}>
      <div className={styles.headerContainer}>
        <Header
          isCollapsed={isCollapsed}
          applications={applications}
          handler={handler}
          profile={userState.userProfile}
          organizations={userState.organizations}
          healthPlans={userState.healthPlans}
        ></Header>
      </div>
    </div>
  );
}
