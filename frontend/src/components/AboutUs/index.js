import "./style.css"

const About=()=>{
return(
    <div> <section id="about" className="about">
    <div class="container aos-init aos-animate" data-aos="fade-up">

      <div class="section-title">
        <h2 className="cta">About Us</h2>
        <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
      </div>

      <div class="row">
        <div >
          <img src="assets/images/about.jpg" className="img-fluid" alt=""></img>
        </div>
        <div >
          <h3>Voluptatem dignissimos provident quasi corporis voluptates sit assumenda.</h3>
          <p class="fst-italic">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
            magna aliqua.
          </p>
          <ul>
          <img src="assets/images/gallery-7.jpg" className="aboutimg" ></img>
            <li className="lim"> Ullamco laboris nisi ut aliquip ex ea commodo consequat,Ullamco laboris nisi ut aliquip ex ea commodo consequat</li>

            <img src="assets/images/gallery-1.jpg" className="aboutimg"></img>
            <li className="lim"> Duis aute irure dolor in reprehenderit in voluptate velit,dolor in reprehenderit in voluptate velit,dolor in reprehenderit in voluptate velit.</li>
            <img src="assets/images/gallery-3.jpg" className="aboutimg"></img >
            <li className="lim"> Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla pariatur.</li>
          </ul>
          <p>
            Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
            velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum
          </p>
        </div>
      </div>

    </div>
  </section></div>
)

}

export default About