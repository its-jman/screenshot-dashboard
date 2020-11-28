import React from "react";

import styles from "./_taskToSurvey.module.css";

type TaskSurveyMapping = {
  projectTypes: string[];
  mapping: {
    taskTypes: string[];
    mapping: string;
  }[];
}[];

const data: TaskSurveyMapping = [
  {
    projectTypes: ["Engage Premium", "Engage Redesign"],
    mapping: [
      {
        taskTypes: ["Mood Board"],
        mapping: "1234"
      },
      {
        taskTypes: ["Launch", "Go Live"],
        mapping: "5678"
      },
      {
        taskTypes: ["Design Setup", "Production Design Setup"],
        mapping: "9531"
      }
    ]
  },
  {
    projectTypes: ["Rec", "Rec Lite"],
    mapping: [
      {
        taskTypes: ["GIS Integration"],
        mapping: "1234"
      },
      {
        taskTypes: ["Go Live"],
        mapping: "5678"
      }
    ]
  }
];

const TaskToSurvey = () => {
  return (
    <div className={styles.wrapper}>
      {data.map((e) => (
        <div
          key={e.projectTypes.join(",")}
          className={styles.projectMappingWrapper}
        >
          <div className={styles.projectWrapper}>
            {e.projectTypes.map((pt) => (
              <p key={pt}>{pt}</p>
            ))}
            <p>
              <button className={styles.add}>Add...</button>
            </p>
          </div>
          <div className={styles.taskMappingWrapper}>
            {e.mapping.map((mapping, i) => (
              <div key={i} className={styles.taskMapping}>
                <div className={styles.taskWrapper}>
                  {mapping.taskTypes.map((taskType) => (
                    <p key={taskType}>{taskType}</p>
                  ))}
                </div>
                <div className={styles.surveyWrapper}>{mapping.mapping}</div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default TaskToSurvey;
