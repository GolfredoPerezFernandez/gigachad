import React, { useEffect, useState } from "react";
import cn from "classnames";
import styles from "./PageLoader.module.css";

const PageLoader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading((loading) => !loading), 1000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className={cn(styles.preloader)}>
       
       <img height={100} src={"/img/logo/logo.png"} alt="" />
      </div>
    );
  } else {
    return null;
  }
};

export default PageLoader;
