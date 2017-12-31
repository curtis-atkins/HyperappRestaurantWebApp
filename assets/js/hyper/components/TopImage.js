import {h, app} from 'hyperapp'

export default function TopImage({state, actions}) {
  return (
    <section id="TopImage">
    <div class="overlay">
      <div class="container">
        <div class="title">
          <div class="motto">
            <h5>Welcome</h5>
            <h1>Prime Beef Steak</h1>
              <h1>Restaurant</h1>
          </div>
          <div class="details">
            <div class="contact-info">
              <div class="container">
                <h6>Book Table Directly:</h6>
                <h3>(919) 555-8004</h3>
                <h6>Opening Hours | <strong>Monday-Thursday: </strong> 11:30am-9:30pm || <strong>Weekend: </strong> 11am - 11pm</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </section>
  )
}
// <Header state={state} actions={actions}/>
// <Button state={state} actions={actions}/>
