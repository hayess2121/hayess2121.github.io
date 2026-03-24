// This is a small program. There are only two sections. This first section is what runs
// as soon as the page loads.
$(document).ready(function () {
  render($("#display"), image);
  $("#apply").on("click", applyAndRender);
  $("#reset").on("click", resetAndRender);
});

/////////////////////////////////////////////////////////
//////// event handler functions are below here /////////
/////////////////////////////////////////////////////////

// this function resets the image to its original value; do not change this function
function resetAndRender() {
  reset();
  render($("#display"), image);
}

// this function applies the filters to the image and is where you should call
// all of your apply functions
function applyAndRender() {
  // Multiple TODOs: Call your apply function(s) here
  applyFilter(reddify);
  applyFilterNoBackground(decreaseBlue);
  applyFilter(increaseGreenByBlue);
  applyFilterNoBackground(reddify);
 

  // do not change the below line of code
  render($("#display"), image);
}

/////////////////////////////////////////////////////////
// "apply" and "filter" functions should go below here //
/////////////////////////////////////////////////////////

// TODO 1, 2, 3 & 5: Create the applyFilter function here
function applyFilter(filterFunction)
{
for (let i = 0; i < image.length; i++)
{
  for (let j = 0; j < image[i].length; j++)
  {
    let pixel = image[i][j]
    let pixelArray = rgbStringToArray(pixel)
    //
    filterFunction(pixelArray)
    let updatedPixel = rgbArrayToString(pixelArray)
    image[i][j] = updatedPixel
    console.log(image[i][j])
  }
}
}

// TODO 9 Create the applyFilterNoBackground function
function applyFilterNoBackground(filterFunction)
{
  var backGroundColor = image[0][0]
  for (let i = 0; i < image.length; i++)
  {
    for (let j = 0; j < image[i].length; j++)
    {
      if (image[i][j] !== image[0][0])
      {
      image[i][j] = keepInBounds(rgbArrayToString(filterFunction(rgbStringToArray(image[i][j]))))
      }
    }
  }

}

// TODO 6: Create the keepInBounds function
function keepInBounds(number)
{
if(number < 0)
{
  return 0
}
else if(number > 255)
{
  return 255
}
else
{
  return number
}
}
// TODO 4: Create reddify filter function
function reddify(pixelArray)
{
pixelArray[RED] = 255
return pixelArray[RED]
}

// TODO 7 & 8: Create more filter functions
function decreaseBlue(pixelArray)
{
pixelArray[BLUE] = pixelArray[BLUE] - 50
pixelArray[BLUE] = keepInBounds(pixelArray[BLUE])
return pixelArray
}
function increaseGreenByBlue(pixelArray)
{
  pixelArray[GREEN] += pixelArray[BLUE]
  pixelArray[GREEN] = keepInBounds(pixelArray[GREEN])
  return pixelArray
}
// CHALLENGE code goes below here
