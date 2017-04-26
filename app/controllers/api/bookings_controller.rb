class Api::BookingsController < ApplicationController

  def create
    @booking = Booking.new(booking_params)
    if @booking.save
      render :show
    else
      render json: @booking.errors.full_messages
    end
  end

  private
  def booking_params
    params.require(:booking).permit(:start_date, :end_date, :guest_number)
  end
end
