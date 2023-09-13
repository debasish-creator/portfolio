import React from "react";
import styles from "./Education.module.css";
import EducationCode from "../../components/education-code/EducationCode";

const graduationData = {
  school: "National Institute of Technology, Rourkela",
  degree: "Bachelor's of Technology",
  major: "Electronics and Communication Engineering",
  cgpa: "8.41/10",
  start: "Dec 2020",
  end: "May 2024",
};

const highSchoolData = {
  school: "Tara Tarini Higher Secondary School",
  degree: "XII",
  major: "Science",
  percentage: "72.83",
  start: "Apr 2017",
  end: "Mar 2019",
};

const Education = () => {
  return (
    <div className={styles.container}>
      <div className={styles.container__left}>
        <h3>Graduation</h3>
        <EducationCode jsonData={graduationData} />
      </div>
      <div className={styles.container__right}>
        <h3>High School</h3>
        <EducationCode jsonData={highSchoolData} />
      </div>
    </div>
  );
};

export default Education;
