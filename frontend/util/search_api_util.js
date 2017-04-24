export const fetchBounds = (address) => {
  return $.ajax({
    method: 'GET',
    url: `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=AIzaSyCeyaq4INBdNY82olkiTZT4o5RhTDTwLVs`
  });
};
