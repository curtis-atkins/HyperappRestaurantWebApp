const reviewLeftClicked =  function (state, actions) {
  return (
    {
      reviewStatus: {
      currentReview: state.reviewStatus.currentReview - 1
      }
    }
  )
}


const reviewRightClicked = function (state, actions) {
  return (
    {
      reviewStatus: {
      currentReview: state.reviewStatus.currentReview + 1
      }
    }
  )
}

export const actions = {
  reviewLeftClicked,
  reviewRightClicked
}
