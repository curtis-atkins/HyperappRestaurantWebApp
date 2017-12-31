import {h, app} from 'hyperapp'

export default function SpecialMenu({state, actions}) {
  return (
    <section id="SpecialMenu" class="textureBG">
      <div class="container">
        <h5 class="comp-title">SPECIAL MENU</h5>
        <h2>Delicious Flavors Of Autumn</h2>
        <div class="row boxes">
          <div class="col-md-4">
            <div class="box">
              <div class="box-img">
                <div
                  class="price">$25
                </div>
              </div>
              <span class="dish">Super BBQ Grill No Smoke</span>
              <p class="ingredients"> Steak, Fried Eggs, Baked Potatoes,
              Vegetable Medley
              </p>
            </div>
          </div>
          <div class="col-md-4">
            <div class="box">
              <div class="box-img">
                <div
                  class="price">$42
                </div>
              </div>
              <span class="dish">Queen Of Autumn</span>
              <p class="ingredients">Warm Chicken Wings, Portabello Mushrooms,
                 Fresh Mozzarella
              </p>
            </div>
          </div>
          <div class="col-md-4">
            <div class="box">
              <div class="box-img">
                <div
                  class="price">$30
                </div>
              </div>
              <span class="dish">Royal Liver Fried</span>
              <p class="ingredients">Grilled Beef Steak, Roasted Red Potatoes
                 and Bell Peppers with Rosemary, Mushrooms,
                 Famous Sauce, Tomatoes
              </p>
            </div>
          </div>
        </div>
        <a href="#" class="view-menu"><strong>View Full Menu</strong></a>
      </div>
    </section>
  )
}
// <Header state={state} actions={actions}/>
// <Button state={state} actions={actions}/>
