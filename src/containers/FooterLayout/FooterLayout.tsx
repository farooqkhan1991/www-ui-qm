import React from "react";
import { AppFooter } from "@mtm/components";
import styles from "./FooterLayout.module.scss";

export default function FooterLayout() {
  return (
    <div className={styles.footerContainer}>
      
      <AppFooter />
    </div>
  );
}
