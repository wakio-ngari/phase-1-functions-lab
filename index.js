
let distanceFromHqInBlocks = someValue;
 function distanceFromHqInBlocks(block) {
    const hqBlock = 42;  
    return Math.abs(hqBlock - block);
  }
  function distanceFromHqInFeet(block) {
    const blocks = distanceFromHqInBlocks(block);
    return blocks * 264;
  }
  
  function distanceTravelledInFeet(start, destination) {
    const distanceInBlocks = Math.abs(start - destination);
    return distanceInBlocks * 264;
  }
  
  function calculatesFarePrice(start, destination) {
    const distanceInFeet = distanceTravelledInFeet(start, destination);
    

    if (distanceInFeet <= 400) {
      return 0;
    }
    
     if (distanceInFeet <= 2000) {
      return (distanceInFeet - 400) * 0.02;
    }
    
      if (distanceInFeet > 2000 && distanceInFeet <= 2500) {
      return 25;
    }
    
    return 'cannot travel that far';
  }
  
  

  console.log(distanceFromHqInBlocks(50));  
  
  console.log(distanceTravelledInFeet(5, 10));  
  
  console.log(calculatesFarePrice(5, 10));  
  