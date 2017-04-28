class Api::ReviewsController < ApplicationController

  def index
    @reviews = Review.find_reviews(spot_id)
    render :index
  end

  def create
    @review = Review.new(review_params)
    @review.author_id = current_user.id
    if @review.save
      render :show
    else
      render json: @review.errors.full_messages
    end
  end

  private
  def review_params
    params.require(:review).permit(:spot_id, :rating, :body)
  end

  def spot_id
    params[:spot_id].to_i
  end
end
