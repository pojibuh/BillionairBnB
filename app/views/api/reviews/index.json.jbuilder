@reviews.each do |review|
  json.set! review.id do
    json.extract! review, :spot, :author, :rating, :body
  end
end
