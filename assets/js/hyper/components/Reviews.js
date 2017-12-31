import {h, app} from 'hyperapp'

export default function Reviews({state, actions}) {
  return (
    <section id="Reviews">
      <div class="container">
        <div class="row">
          <div class="col-md-8">
              <img class="chef-img" src="/img/chef-roble2.jpg"/>
          </div>

          <div class= "col-md-4">
            <h5 class="comp-title">REVIEWS</h5>
            <h2> The Food's Masters Say About Us</h2>
            <div class="quote"><strong>"Best restaurant that I used to experience!"</strong></div>
            <p>Hammock shabby chic distillery schlitz, blog venmo retro brooklyn tousled gochujang air plant food
              truck. Kombucha hammock post-ironic selfies yuccie, keytar beard lomo.
            </p>
            <div class="quote"><strong>- Chef Robl&eacute; Ali</strong>,<br/>Executive Chef at Robl&eacute;	& Co., Streets, and regular contributor on ABC's "The Chew"</div>
            <div class="arrows">
              <i class="fa fa-arrow-left" aria-hidden="true"></i>
              <i class="fa fa-arrow-right ready" aria-hidden="true"></i>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
// <Header state={state} actions={actions}/>
// <Button state={state} actions={actions}/>
