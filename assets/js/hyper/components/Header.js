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
            <a href="#">Party Platters</a>
            <a href="#">Locations</a>
            <a href="#">Rewards</a>
            <a href="#">Reservations</a>
          </nav>
        </div>
      </div>
    </header>




  )
}
// <Header state={state} actions={actions}/>
// <Button state={state} actions={actions}/>
