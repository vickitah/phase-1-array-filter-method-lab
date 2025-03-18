// Code your solution here
// Function 1: findMatching
function findMatching(drivers, name) {
    return drivers.filter(driver => driver.toLowerCase() === name.toLowerCase());
  }
  
  // Function 2: fuzzyMatch
  function fuzzyMatch(drivers, letters) {
    return drivers.filter(driver => driver.toLowerCase().startsWith(letters.toLowerCase()));
  }
  
  // Function 3: matchName
  function matchName(drivers, name) {
    return drivers.filter(driver => driver.name === name);
  }
  
  // Test cases
  const driversList = ["Sam", "Sarah", "Sandy", "Bobby", "Billy"];
  const driversObjects = [
    { name: "Bobby", hometown: "New York" },
    { name: "Sam", hometown: "Los Angeles" },
    { name: "Sarah", hometown: "Chicago" }
  ];
  
  console.log(findMatching(driversList, "Sam")); // ["Sam"]
  console.log(findMatching(driversList, "sam")); // ["Sam"] (case insensitive)
  console.log(findMatching(driversList, "Tom")); // [] (no match)
  
  console.log(fuzzyMatch(driversList, "Sa")); // ["Sam", "Sarah", "Sandy"]
  console.log(fuzzyMatch(driversList, "bo")); // ["Bobby"]
  console.log(fuzzyMatch(driversList, "il")); // [] (only middle letters match, so no result)
  
  console.log(matchName(driversObjects, "Bobby")); // [{ name: "Bobby", hometown: "New York" }]
  console.log(matchName(driversObjects, "Tom")); // [] (no match)
  