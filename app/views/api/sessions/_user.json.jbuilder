if user
  json.extract! user, :fname, :lname
else
  json.extract! user.errors
end
