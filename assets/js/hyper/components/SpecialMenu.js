import {h, app} from 'hyperapp'

export default function SpecialMenu({state, actions}) {

const loopSpecialMenu = () => {
  return state.specialMenuData.map((item)=>{
    console.log(item.title)
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
        <a target="_blank"  /*onclick={src="/img/steakhouse-menu.png"}*/ class="view-menu"><strong>View Full Menu</strong></a>
      </div>
    </section>
  )
}
