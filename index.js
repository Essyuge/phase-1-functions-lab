// Code your solution in this file!
const scubeHeadquarters = 42;
 function distanceFromHqInBlocks( a, b= scubeHeadquarters) {
    return Math.abs(a-b);
  }

 function distanceFromHqInFeet(a, b) {
    return(distanceFromHqInBlocks(a,b)*264)

 }
 function distanceTravelledInFeet(a, b){
    return(distanceFromHqInFeet(a,b))

 }
 function calculatesFarePrice(start, destination) {
    const distanceInFeet = distanceTravelledInFeet(start, destination);
    if(distanceInFeet <= 400){
      return 0
    } else if(distanceInFeet > 400 && distanceInFeet <= 2000){
      const chargableDistance = distanceInFeet - 400;
      return chargableDistance * 2/100
    } else if(distanceInFeet > 2000 && distanceInFeet <= 2500){
      return 25
    } else if(distanceInFeet > 2500){
      return 'cannot travel that far'
    }
  }