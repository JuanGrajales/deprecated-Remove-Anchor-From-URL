function removeUrlAnchor(url){
  // create an array from url seperated by "#"
  var remove = url.split("#");

  // return the first element in the array
  return remove[0];
}

function testing(){
  // returns 'www.codewars.com'
  console.log(removeUrlAnchor('www.codewars.com#about'));
  
  // returns 'www.codewars.com?page=1' 
  console.log(removeUrlAnchor('www.codewars.com?page=1'));
}