
export default function Contact() {
  return (
    <section className="page-section justify-center" id="contact">
        <h2 className=" text-center text-uppercase  pt-5 text-white tshadow contactHeader">Email Us</h2>
        <hr/>
        <div className="container block">
          <form target="_blank" action="https://formsubmit.co/676eb6ebd07f887811064705af76dfc2" method="POST">
            <div className="form-group cols-1 " id="contactForm">
              <div className="form ">
                <div className="pb-2">
                  <input type="text" name="name" className="form-control " placeholder="Name" required></input>
                </div>
                <div className="pb-2">
                  <input type="email" name="email" className="form-control " placeholder="Email" required></input>
                </div>
                <div className="form-group pb-3 text-center ">
                  <textarea placeholder="Your Message" className="form-control " name="message" rows="10" required></textarea>
                  <button type="submit" className="btn btn-lg subbtn btn-block  text-white mt-3">Submit Form</button>
                </div>
              </div>
            </div>
          </form>
        </div>
    </section>
  )
};