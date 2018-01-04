import {h, app} from 'hyperapp'

export default function Header({state, actions}) {
  return (
    <header>
      <div class="container">
        <div class="logo">
          <h1>Prime Beef</h1>
        </div>
        <div class="nav-menu">
          <nav>
            <a href="#Home">Home</a>
            <a href="#OurStory">Our Story</a>
            <a href="#SpecialMenu">Special Menu</a>
            <a href="#Reviews">Reviews</a>
            <a href="#Reservations">Reservations</a>
            <a href="#ContactUs">Contact Us</a>
          </nav>
        </div>
      </div>
    </header>
  )
}
