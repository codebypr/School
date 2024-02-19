
function TeacherForm() {
    return (
        <>
            <form className="row g-3 needs-validation" novalidate>
                <div className="col-md-4">
                    <label for="validationCustom01" className="form-label">First name</label>
                    <input type="text" className="form-control" id="validationCustom01" />
                   
                </div>
                <div className="col-md-4">
                    <label for="validationCustom02" className="form-label">Last name</label>
                    <input type="text" className="form-control" id="validationCustom02" />
                    
                </div>
                <div className="col-md-4">
                    <label for="validationCustomUsername" className="form-label">Email</label>
                    <div className="input-group has-validation">
                        <span className="input-group-text" id="inputGroupPrepend">@</span>
                        <input type="text" className="form-control" id="validationCustomUsername" aria-describedby="inputGroupPrepend" />
                       
                    </div>
                </div>
                <div className="col-md-4">
                    <label for="validationCustom03" className="form-label">City</label>
                    <input type="text" className="form-control" id="validationCustom03" required />
                    
                </div>
                <div className="col-md-4">
                    <label for="validationCustom04" className="form-label">State</label>
                    <select className="form-select" id="validationCustom04" required>
                        <option selected disabled value="">--select one--</option>
                        <option>Delhi</option>
                        <option>Delhi</option>
                        <option>Pune</option>
                        <option>Delhi</option>
                    </select>
                    
                </div>
                <div className="col-md-4">
                    <label for="validationCustom05" className="form-label">Zip</label>
                    <input type="text" className="form-control" id="validationCustom05" required />
                   
                </div>
                <div className="col-md-4">
                    <label for="validationCustom04" className="form-label">Course</label>
                    <select className="form-select" id="validationCustom04" required>
                        <option selected disabled value="">--select one--</option>
                        <option>Bachelor's</option>
                        <option>B.Com</option>
                        <option>BA</option>
                        <option>Master's</option>
                        <option>M.Tech</option>
                    </select>
                </div>
                <div className="col-md-4">
                    <label for="validationCustom04" className="form-label">Subject</label>
                    <select className="form-select" id="validationCustom04" required>
                        <option selected disabled value="">--select one--</option>
                        <option>Math</option>
                        <option>English</option>
                        <option>Hindi</option>
                        <option>Science</option>
                        <option>Computer</option>
                    </select>
                </div>
                <div className="col-12">
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="invalidCheck" required />
                        <label className="form-check-label" for="invalidCheck">
                            Agree to terms and conditions
                        </label>
                        
                    </div>
                </div>
                <div className="col-12">
                    <button className="btn btn-primary" type="submit">Submit form</button>
                </div>
            </form>
        </>
    );
}
export default TeacherForm;