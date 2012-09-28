// Image Swapper - used in the MED VxF Help post-process to add 'zoom' functionality.
// Peter Greenways, Autodesk, November 2007

function swapper(choice,imgname,imgwidth) {

  sml = imgname + "_sml_zoom";
  lrg = imgname + "_lrg_zoom";
  document.images[imgname].width=imgwidth;
  
  if (choice == "1") {
    document.images[sml].src='../images/zoom_small_on.png';
    document.images[lrg].src='../images/zoom_large_off.png';
  }
  else {
    document.images[sml].src='../images/zoom_small_off.png';
    document.images[lrg].src='../images/zoom_large_on.png';
  }

}
