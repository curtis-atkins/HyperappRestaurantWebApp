import {h, app} from 'hyperapp'

export default function SpecialMenu({state, actions}) {

const loopSpecialMenu = () => {
  return state.specialMenuData.map((item)=>{
    return (
      <div class="col-md-4">
        <div class="box">
          <div class="box-img">
            <div
              class="price">{item.price}
            </div>
          </div>
          <span class="dish">{item.title}</span>
          <p class="ingredients"> {item.ingredients}
          </p>
        </div>
      </div>
    )
  })
}

  return (
    <section id="SpecialMenu" class="textureBG">
      <div class="container">
        <h5 class="comp-title">SPECIAL MENU</h5>
        <h2>Delicious Flavors Of Autumn</h2>
        <div class="row boxes">
          {loopSpecialMenu()}
        </div>
        <a target="_blank"  href="http://www.hydeparkrestaurants.com/dtlunch.pdf" class="view-menu"><strong>View Full Menu</strong></a>
      </div>
    </section>
  )
}
