// Complete the function/method (depending on the language) to return true/True when its argument is an array that has the same nesting structures and same corresponding length of nested arrays as the first array.

// For example:

//  // should return true
// [ 1, 1, 1 ].sameStructureAs( [ 2, 2, 2 ] );          
// [ 1, [ 1, 1 ] ].sameStructureAs( [ 2, [ 2, 2 ] ] );  

//  // should return false 
// [ 1, [ 1, 1 ] ].sameStructureAs( [ [ 2, 2 ], 2 ] );  
// [ 1, [ 1, 1 ] ].sameStructureAs( [ [ 2 ], 2 ] );  

// // should return true
// [ [ [ ], [ ] ] ].sameStructureAs( [ [ [ ], [ ] ] ] ); 

// // should return false
// [ [ [ ], [ ] ] ].sameStructureAs( [ [ 1, 1 ] ] ); 

Array.prototype.sameStructureAs = function (other) {
// Return 'true' if and only if 'other' has the same
// nesting structure as 'this'.

// Note: You are given a function isArray(o) that returns
// whether its argument is an array.
    let result = true;
    if(this.length != other.length) result = false;
  
    this.forEach((element, i) => {
      if(isArray(element) != isArray(other[i])){
          result = false;
      }else if(isArray(element) && isArray(other[i])){
          if(element.length != other[i].length){
              result = false;
          }else{
            result = element.sameStructureAs(other[i]);
          }
      }  
  });
  return result;
};

console.log([ [ [ ], [ ] ] ].sameStructureAs( [ [ 1, 1 ] ] ));