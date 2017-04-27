class Api::ReviewsController < ApplicationController

  def create
    
  end

  private
  def review_params
    params.require(:review).permit(:spot_id, :rating, :body)
  end
end
