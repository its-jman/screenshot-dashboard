import React from "react";
import { A } from "hookrouter";
import FormGroup from "src/components/formGroup";
import TaskToSurvey from "src/pages/surveys/components/taskToSurvey";

const Surveys = () => {
  return (
    <div>
      <A href={"/"}>Back</A>
      {/*<FormGroup
        name={"Task -> Survey"}
        description={
          "Configure the project type -> task name -> survey mapping here."
        }
      >*/}
      <TaskToSurvey />
      {/*</FormGroup>*/}
    </div>
  );
};

export default Surveys;
