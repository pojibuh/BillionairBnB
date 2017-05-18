class Api::BookingsController < ApplicationController

  def create
    if start_date == nil
      render(
        json: ['Your booking must have a start date.'],
        status: 422
      )
    elsif end_date == nil
      render(
        json: ['Your booking must have an end date.'],
        status: 422
      )
    elsif guests == 0
      render(
        json: ['There must be at least one guest.'],
        status: 422
      )
    elsif start_date != '' && end_date != '' && guests > 0
      parsed_start = Booking.date_convert(start_date)
      parsed_end = Booking.date_convert(end_date)
      @booking = Booking.new({
        start_date: parsed_start,
        end_date: parsed_end,
        spot_id: spot_id,
        user_id: current_user.id,
        guest_number: guests
      })

      no_overlap = Booking.no_overlap?(parsed_start, parsed_end, spot_id)
      guest_limit = Booking.guest_limit(spot_id)

      if no_overlap && guest_limit >= guests && @booking.save
        render :show
      elsif no_overlap == false && guest_limit < guests
        render(
          json: [
            'This booking conflicts with another. Try another date.',
            'There are too many guests for this location.'
          ],
          status: 422
        )
      elsif no_overlap == false
        render(
          json: ['This booking conflicts with another. Try another date.'],
          status: 422
        )
      elsif guest_limit < guests
        render(
          json: ['There are too many guests for this location.'],
          status: 422
        )
      end
    end

  end

  def index
    @bookings = Booking.find_bookings(current_user.id)
    render :index
  end

  private
  def booking_params
    params.require(:booking).permit(:start_date, :end_date, :guest_number, :spot_id, :user_id)
  end

  def start_date
    params["booking"]["start_date"]
  end

  def end_date
    params["booking"]["end_date"]
  end

  def guests
    params["booking"]["guest_number"].to_i
  end

  def spot_id
    params["booking"]["spot_id"].to_i
  end

end
