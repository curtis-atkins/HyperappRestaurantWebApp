import {h, app} from 'hyperapp'

export default function Reviews({state, actions}) {
  const loopReviews = () => {
    return(
      <div>
        <h2>{state.reviewsData[state.reviewStatus.currentReview].company}</h2>
        <div class="quote"><strong>{state.reviewsData[state.reviewStatus.currentReview].highlight}</strong></div>
        <p>{state.reviewsData[state.reviewStatus.currentReview].review}</p>
        <div class="quote"><strong>{state.reviewsData[state.reviewStatus.currentReview].author}</strong>,<br/>{state.reviewsData[state.reviewStatus.currentReview].credits}
        </div>
      </div>
    )
  }

  const loopReviewImages = () => {
    return (
      <div>
        <img class="chef-img" src={`/img/${state.reviewsData[state.reviewStatus.currentReview].photo}`}/>
      </div>
    )
  }

  const leftClickBtn = () => {
    if(state.reviewStatus.currentReview > 0){
      actions.reviewLeftClicked()
    }
  }

const rightClickBtn = () => {
  if(state.reviewStatus.currentReview < (state.reviewsData.length - 1)){
    actions.reviewRightClicked()
  }
}

  return (
    <section id="Reviews">
      <div class="container">
        <div class="row">
          <div class="col-md-8">
            {loopReviewImages()}
          </div>
          <div class= "col-md-4">
            <h5 class="comp-title">REVIEWS</h5>

            {loopReviews()}
            <div class="arrows">
              <i onclick={leftClickBtn}
                class={`fa fa-arrow-left ${(state.reviewStatus.currentReview > 0) ?
                  'ready' : ''}`} aria-hidden="true"></i>
                <i onclick={rightClickBtn}
                  class={`fa fa-arrow-right ${(state.reviewStatus.currentReview <
                  (state.reviewsData.length -1)) ? 'ready' : ''}`} aria-hidden="true">
                </i>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
// <Header state={state} actions={actions}/>
// <Button state={state} actions={actions}/>
