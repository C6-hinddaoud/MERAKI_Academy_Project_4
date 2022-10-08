import "./style.css"

const Contact=()=>{
return(
    

<div className="DivcontactUs">
         
{/* <section id="contact" class="contact"> */}
      <div class="container mapContiner">

        <div class="section-title">
          <h2>Contact</h2>
          <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
        </div>

      </div>

      {/*  */}
<div  className="contactusMain" >
      <div>
        <iframe className="map"  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12097.433213460943!2d-74.0062269!3d40.7101282!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb89d1fe6bc499443!2sDowntown+Conference+Center!5e0!3m2!1smk!2sbg!4v1539943755621" frameborder="0" allowfullscreen=""></iframe>
      </div>

      <div class="container">

        <div >

          <div >

            <div class="row">
              <div >
                <div >
                  <i ></i>
                  <h3>Our Address</h3>
                  <p>A108 Adam Street, New York, NY 535022</p>
                </div>
              </div>
              <div >
                <div >
                  <i ></i>
                  <h3>Email Us</h3>
                  <p>info@example.com<br></br>contact@example.com</p>
                </div>
              </div>
              <div >
                <div >
                  <i ></i>
                  <h3>Call Us</h3>
                  <p>+1 5589 55488 55<br></br>+1 6678 254445 41</p>
                </div>
              </div>
            </div>

          </div>

          <div >
            <form action="forms/contact.php" method="post" role="form" class="php-email-form">
              <div class="row">
                <div class="col form-group">
                  <input type="text" name="name" class="form-control" id="name" placeholder="Your Name" required=""></input>
                </div>
                <div class="col form-group mt-3">
                  <input type="email" class="form-control" name="email" id="email" placeholder="Your Email" required=""></input>
                </div>
              </div>
              <div class="form-group mt-3">
                <input type="text" class="form-control" name="subject" id="subject" placeholder="Subject" required=""></input>
              </div>
              <div class="form-group mt-3">
                <textarea class="form-control" name="message" rows="5" placeholder="Message" required=""></textarea>
              </div>
              <div class="my-3">
                <div class="loading">Loading</div>
                <div class="error-message"></div>
                <div class="sent-message">Your message has been sent. Thank you!</div>
              </div>
              <div className=""><button  className="registerbtnadd">Send Message</button></div>
            </form>
          </div>

        </div>

      </div>
      </div>
    {/* </section> */}


</div>
)

}

export default Contact