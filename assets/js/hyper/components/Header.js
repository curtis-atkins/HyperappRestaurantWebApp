import {h, app} from 'hyperapp'

export default function Header({state, actions}) {
  return (
    <header>
      <div class="logo">
        <h1>At Steak</h1>
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
    </header>




  )
}
// <Header state={state} actions={actions}/>
// <Button state={state} actions={actions}/>
