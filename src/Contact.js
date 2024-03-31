import React from 'react'

function Contact() {
    return (
        <div>
            <form>
                <div class="form-col">
                    <div class="form-group col-md-6" style={{ textAlign: 'left' }}>
                        <label for="inputEmail4">Email</label>
                        <input type="email" class="form-control" id="inputEmail4" placeholder="Email" />
                        <br />
                        <label for="input">Inquiries or Feedback</label>
                        <input type="text" class="form-control" id="input" placeholder="Inquiries/Feedback" />
                    </div>

                </div>

                <br />
                <div class="form-row" style={{ marginLeft: '20px' }}>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" id="gridCheck" />
                        <label class="form-check-label" for="gridCheck">
                            Save my response
                        </label>
                    </div>
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default Contact

