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
            <a href="#">Home</a>
            <a href="#">Our Story</a>
            <a href="#">Special Menu</a>
            <a href="#">Review</a>
            <a href="#">Reservations</a>
            <a href="#">Contact Us</a>
          </nav>
        </div>
      </div>
    </header>
  )
}
