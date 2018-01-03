import {h, app} from 'hyperapp'

export default function ContactUs({state, actions}) {
  return (
    <section id="ContactUs">
      <div class="container">
        <h5 class="comp-title">CONTACT US</h5>
        <h2>Delivering Delicious Dining Daily</h2>

        <div class="box">
          <div class="row">
            <div class="col-md-6">
              <div class="title">
                {state.companyInfoData.region}
              </div>
              <h6 class="address">
                {state.companyInfoData.address1} <br/>
              {state.companyInfoData.address2}
              </h6>
              <p class="email">
                <strong>Email</strong>:
                <a href="mailto:info@primebeefsteak.com"> {state.companyInfoData.email}</a>
              </p>
            </div>
            <div class="col-md-6">
              <h6>
                Phone:
              </h6>
              <div class="title">
                {state.companyInfoData.phone}
              </div>
              <h6>
                Lunch Service:
              </h6>
              <p>
                Monday - Thursday:  11:30am - 4:30pm
              </p>
              <p>
                Friday - Sunday:  11am - 4:30pm
              </p>

              <h6>
                Dinner Service:
              </h6>
              <p>Monday -Thursday: 4:30pm - 9:30pm
              </p>
              <p>Friday - Sunday:  4:30pm - 11pm
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
