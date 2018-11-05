
function produceDrivingRange(blockRange){

  return function (tripStart,tripEnd){
    let tripDistance
    if(Number.parseInt(tripStart) > Number.parseInt(tripEnd))
    {
      tripDistance =  Number.parseInt(tripStart) - Number.parseInt(tripEnd)
    }
    else
    {
      tripDistance =  Number.parseInt(tripEnd) - Number.parseInt(tripStart)
    }
    if(tripDistance <= blockRange){
      console.log(blockRange)
      console.log(tripDistance)
      return `within range by ${blockRange - tripDistance}`
    }
    else{
      return `${tripDistance - blockRange} blocks out of range`
    }
  }
}

function produceTipCalculator(tip){
  return function (charge){
    return charge * tip;
  }
}

function createDriver(){
  let driverId = 0;
  return class {
    constructor(name){
      this.id = ++driverId
      this.name = name
    }
  }
}
