import {h, app} from 'hyperapp'

export default function Footer({state, actions}) {
  return (
    <footer id="Footer">
      <div class="container">
        <nav class="footer-menu">
          <a href="#">Home</a>
          <p>|</p>
          <a href="#OurStory">Our Story  </a>
          <p>|</p>
          <a href="#SpecialMenu">Special Menu</a>
          <p>|</p>
          <a href="#Reviews">Reviews</a>
          <p>|</p>
          <a href="#Reservations">Reservations</a>
          <p>|</p>
          <a href="#ContactUs">Contact Us</a>
        </nav>

        <ul class="social-media">
          <li>
            <a href="https://twitter.com/" target="new">
              <i class="fa fa-twitter" aria-hidden="true"></i>
            </a>
          </li>
          <li>
            <a href="https://www.facebook.com/" target="new">
              <i class="fa fa-facebook" aria-hidden="true"></i>
            </a>
          </li>
          <li>
            <a href="https://plus.google.com/discover" target="new">
              <i class="fa fa-google-plus" aria-hidden="true"></i>
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/" target="new">
              <i class="fa fa-instagram" aria-hidden="true"></i>
            </a>
          </li>
          <li>
            <a href="https://www.snapchat.com/" target="new">
              <i class="fa fa-snapchat" aria-hidden="true"></i>
            </a>
          </li>
          <li>
            <a href="https://www.youtube.com/" target="new">
              <i class="fa fa-youtube" aria-hidden="true"></i>
            </a>
          </li>
        </ul>

        <div class="copyright">
          <i class="fa fa-copyright" aria-hidden="true"></i>
          Design by Curtis Atkins<br/>
          2018 All Rights Reserved
        </div>
      </div>
    </footer>
  )
}
