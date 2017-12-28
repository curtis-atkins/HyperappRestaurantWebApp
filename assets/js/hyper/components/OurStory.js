import {h, app} from 'hyperapp'

export default function OurStory({state, actions}) {
  return (
    <section id="OurStory">
      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <h5 class="comp-title">OUR STORY</h5>
            <h2>Cooking is the art of adjustment</h2>
            <p>Hammock shabby chic distillery schlitz, blog venmo retro brooklyn tousled gochujang air plant food
              truck. Kombucha hammock post-ironic selfies yuccie, keytar beard lomo.
            </p>
            {/*<div class="quote">"The BEST steak in the entire Triangle area" </div>*/}
            <div class="quote"><strong>- Warrick Dunn</strong>, Master Chef at Prime Steak</div>

          <a href="#" class="reserve-btn">RESERVE</a>
          </div>
          <div class="col-md-6">
            {/*<img class="chef" src="/img/chef.jpg"/>*/}
            <div class="video-img">
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
// <Header state={state} actions={actions}/>
// <Button state={state} actions={actions}/>
