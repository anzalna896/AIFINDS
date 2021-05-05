import React from "react";
import {Link} from 'react-router-dom'

class Footer extends React.Component {
  render() {
    return (
      <footer
        class="page-footer font-small  pt-4"
        style={{ backgroundColor: "#304B83" }}
      >
        <div class="container text-center text-md-left">
          <div class="row">
            <div class="col-md-4 mx-auto">
              {/* <h5 class="font-weight-bold text-uppercase mt-3 mb-4">
                Alpha
              </h5> */}
              <div class="mt-3 mb-4">
                <img
                  style={{ height: 75 }}
                  src="https://files.slack.com/files-pri/TLTJJMQHF-FQMU49006/aifindsjob_web_logo.png"
                />
              </div>
              <p>
                AIFINDSJOB helps you plan for your future! Match your interests
                to university subjects and explore each recommendation to find
                out what suits you.
              </p>
            </div>

            <hr class="clearfix w-100 d-md-none" />

            <div class="col-md-2 mx-auto">
              <h5
                class="font-weight-bold text-uppercase mt-3 mb-4"
                style={{ color: "whitesmoke" }}
              >
                Job seekers
              </h5>

              <ul class="list-unstyled">
                <li>
                  <a href="#!">Job Search</a>
                </li>
                <li>
                  <Link to="/Register"> Register Now</Link>
                </li>
                <li>
                  <Link to="/login">Login</Link>
                </li>
                <li>
                  <a href="#!">Create Free Job Alert</a>
                </li>
              </ul>
            </div>

            <hr class="clearfix w-100 d-md-none" />

            <div class="col-md-2 mx-auto">
              <h5
                class="font-weight-bold text-uppercase mt-3 mb-4"
                style={{ color: "whitesmoke" }}
              >
                Employers
              </h5>

              <ul class="list-unstyled">
                <li>
                  <a href="https://careers.google.com/">Google</a>
                </li>
                <li>
                  <a href="https://www.facebook.com/careers/">Facebook</a>
                </li>
                <li>
                  <a href="https://careers.microsoft.com/us/en">Microsoft</a>
                </li>
                <li>
                  <a href="https://www.amazon.jobs/en-gb">Amazone</a>
                </li>
              </ul>
            </div>

            <hr class="clearfix w-100 d-md-none" />

            <div class="col-md-2 mx-auto">
              <h5
                class="font-weight-bold text-uppercase mt-3 mb-4"
                style={{ color: "whitesmoke" }}
              >
                Contact Us
              </h5>

              <ul class="list-unstyled">
                <li>
                  <a href="#!">aifindsjob@gmail.com</a>
                </li>
                <li>
                  <a href="#!">Phone : +91 98363562725</a>
                </li>
                <li>
                  <a href="#!">Kerala</a>
                </li>
                <li>
                  <a href="#!">India</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* <hr></hr> */}

        <ul class="list-unstyled list-inline text-center py-2">
          <li class="list-inline-item">
            <h5 class="mb-1" style={{ color: "whitesmoke" }}>
              Register for free
            </h5>
          </li>
          <li class="list-inline-item">
            <Link to="/Register">
              <a href="#!" class="btn btn-danger btn-rounded">
                Sign up!
              </a>
            </Link>
          </li>
        </ul>

        {/* <hr></hr> */}

        <ul className="list-unstyled list-inline text-center">
          <li className="list-inline-item">
            <a class="btn-floating btn-fb mx-1">
              <i className="fab fa-facebook-f"> </i>
            </a>
          </li>
          <li class="list-inline-item">
            <a class="btn-floating btn-tw mx-1">
              <i class="fab fa-twitter"> </i>
            </a>
          </li>
          <li class="list-inline-item">
            <a class="btn-floating btn-gplus mx-1">
              <i class="fab fa-google-plus-g"> </i>
            </a>
          </li>
          <li class="list-inline-item">
            <a class="btn-floating btn-li mx-1">
              <i class="fab fa-linkedin-in"> </i>
            </a>
          </li>
          <li class="list-inline-item">
            <a class="btn-floating btn-dribbble mx-1">
              <i class="fab fa-dribbble"> </i>
            </a>
          </li>
        </ul>

        <div class="footer-copyright text-center py-3">
          © 2019 Copyright:
          <a href="https://mdbootstrap.com/education/bootstrap/">
            {" "}
            aifindsjob.com
          </a>
        </div>
      </footer>
    );
  }
}

export default Footer;
