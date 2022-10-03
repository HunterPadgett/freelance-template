
export default function Contact() {
  return (
    <section className="page-section justify-center secondarybg" id="contact">
        <h2 className=" text-center text-uppercase  pt-5 text-white tshadow contactHeader">Email Us</h2>
        <hr/>
        <div className="container">
          <form target="_blank" action="https://formsubmit.co/676eb6ebd07f887811064705af76dfc2" method="POST">
            <div className="form-group" id="contactForm">
              <div className="form">
                <div className="pb-2 col-lg-4 col-md-8 col-sm-12 mx-auto ">
                  <input type="text" name="name" className="form-control justify-center items-center" placeholder="Name" required></input>
                </div>
                <div className="pb-2 col-lg-4 col-md-8 col-sm-12 mx-auto">
                  <input type="email" name="email" className="form-control " placeholder="Email" required></input>
                </div>
                <div className="form-group pb-3 text-center w- mx-auto">
                  <textarea placeholder="Your Message" className="form-control col-lg-7 col-sm-10 mx-auto" name="message" rows="10" required></textarea>
                  <button type="submit" className="btn col-md-4 col-sm-10 mx-auto btn-lg subbtn btn-block hover:bg-blue-900 text-white mt-3">Submit Form</button>
                </div>
              </div>
            </div>
          </form>
        </div>
    </section>
  )
};