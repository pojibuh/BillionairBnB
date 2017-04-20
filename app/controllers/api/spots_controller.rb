class Api::SpotsController < ApplicationController

  def index
    @spots = Spot.all
    render :index
  end

  def create
    @spot = Spot.new(spot_params)
    if @spot.save
      render :show
    else
      render json: @spot.errors.full_messages
    end
  end

  def show
    @spot = Spot.find_by(params[:id])
    if @spot
      render :show
    else
      render json: @spot.errors.full_messages
    end
  end

  def destroy
    #save this for later
  end

  private
  def spot_params
    params.require(:spots).permit(:price, :location, :image_url, :description)
  end
end