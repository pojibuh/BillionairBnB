class Api::SpotsController < ApplicationController

  def index
    spots = bounds ? Spot.in_bounds(bounds) : Spot.all
    @spots = guests ? spots.can_fit_guests(guests.to_i) : spots
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
    @spot = Spot.find_by(id: params[:id])
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
    params.require(:spots).permit(:price, :location, :image_url, :description, :owner_id)
  end

  def bounds
    params[:bounds]
  end

  def start_date
    params["start_date"]
  end

  def end_date
    params["end_date"]
  end

  def guests
    params[:guests]
  end
end
