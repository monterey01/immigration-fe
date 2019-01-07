import React,{Component} from 'react'
import StepZilla from "react-stepzilla";
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';



class Form extends Component{

render(){
  const steps =
    [
      {name: 'Step 1', component: <Step1 />},
      {name: 'Step 2', component: <Step2 />},
      {name: 'Step 3', component: <Step3 />}
    ]
  return (
    <div class="container">

        <StepZilla showSteps={true} steps={steps} prevBtnOnLastStep={false} nextTextOnFinalActionStep={"Save"} stepsNavigation={true} nextButtonCls="btn-primary  float-right" backButtonCls="btn-primary float-left"  preventEnterSubmission={false} />

    </div>
    )
}

}

export {Form}
