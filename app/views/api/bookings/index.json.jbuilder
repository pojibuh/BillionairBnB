@bookings.each do |booking|
  json.set! booking.id do
    json.extract! booking, :spot, :start_date, :end_date, :guest_number
  end
end
