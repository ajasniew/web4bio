/*var images = ['http://www.creativereview.co.uk/images/uploads/2012/10/1_press_image_l_for_the_lol_of_cats_l_maru_0.jpg',
              'http://blog.naseeb.com/wp-content/uploads/2010/12/cute-cat.jpg',
              'http://www.helpinghomelesscats.com/images/cat1.jpg'];*/

var images = ['https://ajasniew.github.io/images/LUAD_400_Det_ST_ASSG2/TCGA-L9-A444-01Z-00-DX1_appMag_40_244_142.png',
              'https://ajasniew.github.io/images/LUAD_400_Det_ST_ASSG2/TCGA-49-6761-01Z-00-DX1_appMag_40_281_86.png',
              'https://ajasniew.github.io/images/LUAD_400_Det_ST_ASSG2/TCGA-49-6761-01Z-00-DX1_appMag_40_271_93.png'];

var loop = 0;

function refreshImages() {
    $('#myimage').attr('src', images[loop]);

    loop++;

    if (loop === images.length) {
        loop = 0;
    }
}

var setInt = self.setInterval(function() {
    refreshImages();
}, 1000);

$('#stop').click(function() {
    setInt = window.clearInterval(setInt);
});