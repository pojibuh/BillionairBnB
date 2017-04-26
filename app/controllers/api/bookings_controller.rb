class Api::BookingsController < ApplicationController

  def create
    parsed_start = Booking.date_convert(start_date)
    parsed_end = Booking.date_convert(end_date)
    @booking = Booking.new({
      start_date: parsed_start,
      end_date: parsed_end,
      spot_id: spot_id,
      user_id: current_user.id,
      guest_number: guests
    })
    if @booking.save && !Booking.overlap?(parsed_start, parsed_end, spot_id)
      render :show
    else
      render json: @booking.errors.full_messages
    end
  end

  private
  def booking_params
    params.require(:booking).permit(:start_date, :end_date, :guest_number, :spot_id)
  end

  def start_date
    params["booking"]["start_date"]
  end

  def end_date
    params["booking"]["end_date"]
  end

  def guests
    params["booking"]["guest_number"]
  end

  def spot_id
    params["booking"]["spot_id"].to_i
  end
end
