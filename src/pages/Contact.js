
export default function Contact() {
  return (
    <section className="page-section" id="contact">
        <h2 className=" text-center text-uppercase  m-auto">Hit me up!</h2>
        <hr/>
        <div className="container">
          <form target="_blank" action="https://formsubmit.co/676eb6ebd07f887811064705af76dfc2" method="POST">
            <div className="form-group" id="contactForm">
              <div className="form-row">
                <div className="col mb-2">
                  <input type="text" name="name" className="form-control" placeholder="Name" required></input>
                </div>
                <div className="col mb-2">
                  <input type="email" name="email" className="form-control" placeholder="Email" required></input>
                </div>
                <div className="form-group mb-2 text-center">
                  <textarea placeholder="Your Message" className="form-control" name="message" rows="10" required></textarea>
                  <button type="submit" className="btn btn-lg subbtn btn-block mt-3">Submit Form</button>
                </div>
              </div>
            </div>
          </form>
        </div>
    </section>
  )
};