import React from 'react'
import TeacherForm from './teacherForm'

function RegistrationProcedure() {
  return (
    <>
    <div className="container pt-5 mt-5 mb-5">
    <div className="container bg-warning p-5 mt-5">
                <h1>How to apply?</h1>
                <b>Registration is open for grades IV–IX and XI. The school academic session starts in the first week of April every year and ends on March 31st of the subsequent year. Hence registration application should reach the school before 31st March in the year that admission is sought. Admission would be finalized after a counselling session with the child and on the availability of seats.</b>
                <p>It is desirable that all admission formalities are completed well before the end of March. However, limited vacancies may exist in the middle of academic year. Information on mid-year vacancies may be obtained by e-mailing the school admission office. However, it is best to apply early.</p>
            </div>
            <div className="container bg-danger p-5 mt-5 text-white">
                <h1>Registration Form</h1>
                <h6>Kindly provide the below details true and correct. If the child is selected for admission, he/she has to fully abide by the Rules & Regulations of the School. The Registration of the child does not guarantee his/her admission into the school.
                The Parent can deposit the Registration Fee (which is neither transferable nor refundable) through Demand Draft for Rs. 10,000 in favor of Tula’s International School, payable at Dehradun.</h6>
                <h6>School Fees can be deposited by Cash or Bank Transfer, click here for Bank Account Details.</h6>
            </div>
            <div className="container bg-info p-5 rounded-5 border border-2 shadow-lg mt-5">
                <TeacherForm/>
            </div>
     </div>       
    </>
  )
}

export default RegistrationProcedure