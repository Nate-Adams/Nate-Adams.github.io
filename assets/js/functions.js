$( document ).ready(function() {



// // JSON for my portfolio. Update if needed.
// var mywork = {
//   websites : {
//     wordpress : [
//       {
//         name : 'travel'},
//       {
//         name : 'weather'},
//       {
//         name : 'bakery'}
//     ],
//     frontend : [
//       {
//         name : 'serentals',
//         url : 'https://www.serentals.net/'},
//       {
//         name : 'contractormarketing',
//         url : 'http://contractormarketing.services/'},
//       {
//         name : 'lwcs',
//         url : 'http://lwcsinc.com/'},
//       {
//         name : 'toughercoatings',
//         url : 'http://www.toughercoatings.com/'},
//       {
//         name : 'texasfloorservices',
//         url : 'http://texasfloorservices.com/'}
//     ]
//   }
// };







































// Populate and Control Portfolio

function changeportfolio(tab) {

  var data, populate;

  data = [
    ['serentals', 'website', 'https://www.serentals.net/'],
    ['contractormarketing', 'website', 'http://contractormarketing.services/'],
    ['lwcs', 'website', 'http://lwcsinc.com/'],
    ['toughercoatings', 'website','http://www.toughercoatings.com/'],
    ['travel', 'website', ''],
    ['weather', 'website', ''],
    ['bakery', 'website', ''],
    ['texasfloorservices', 'website', 'http://texasfloorservices.com/'],


    ['storm-commercial', 'video', 'https://youtu.be/G1Tnh-SVksg'],
    ['lightning-ceramic', 'video', 'https://youtu.be/EGVPo2TmTjM'],
    ['storm-cali', 'video', 'https://youtu.be/Y60hj999EMI'],
    ['storm-vct', 'video', 'https://youtu.be/NnF6QzvflHQ'],
    ['storm-maneuverability', 'video', 'https://youtu.be/_35bGKLu7IU'],
    ['company-introduction', 'video', 'https://youtu.be/O038QxOqE6I'],


    ['stormdemo-logo', 'graphic', '/assets/files/img/logo_main_jpg_medium.jpg'],
    ['storm-flyer', 'graphic', '/assets/files/flyer/storm-flyer.pdf'],
    ['lightning', 'graphic', '/assets/files/flyer/lightning-flyer.pdf'],
    ['hurricane', 'graphic', '/assets/files/flyer/hurricane-flyer.pdf'],
    ['stormdemo-flyer', 'graphic', '/assets/files/flyer/california-storm-demo-flyer.pdf'],
    ['ultragenie', 'graphic', '/assets/files/flyer/ultragenie-flyer.pdf']
  ];

  populate = [];

  // $('.portfolio .col').css('animation', '');
  // $('.portfolio .col').css('animation', 'fadeIn .5s ease-in 1 forwards');




  $('.portfoliotabactive').removeClass('portfoliotabactive');
  $(this).addClass('portfoliotabactive');

  tab = $(this).attr('id').replace('portfoliotab-', '');



  for (var i = 0; i < 9; i++) {
    $('#portfolio-' + i).empty();
  }


  if (tab == 'all') {
    for (var i = 0; i < data.length; i++){
      populate.push(data[i]);
    }
  } else {
    for (var i = 0; i < data.length; i++){
      if (tab === data[i][1]){
        populate.push(data[i]);
      }
    }
  }


  for (var i = 0; i < populate.length; i++) {

    var imgstring = '<img src="assets/img/portfolio/'+ populate[i][1] +'_' + populate[i][0] + '.jpg", alt="' + populate[i][0] + '" width="270px" height="270px">';

    if (populate[i][2] !== '') {
      $('#portfolio-' + i).append(
        '<a href="'+ populate[i][2] +'" target="_blank">'+imgstring+'</a>');
    } else {
      $('#portfolio-' + i).append(imgstring);
    }
  }



}

var changeportfoliofirst = true;
changeportfolio.call( $('#portfoliotab-website') );
changeportfoliofirst= false;

$('.portfoliotab').bind("click", changeportfolio);









































// Skill Icon Hover Animations
$('.skillicon')
  .mouseover(function() {

    var src = $(this).attr("src");
    var name = $(this).attr("alt");

    $(this).before('<div id="icontextpopup">' + name + '</div>');

    var imagewidth = this.clientWidth;
    var imageheight = this.clientHeight;
    var textboxwidth = document.getElementById('icontextpopup').clientWidth;
    var translate = "translate(" + ((imagewidth / 2) - (textboxwidth / 2)) + "px, " + (imageheight + 25) + "px)";

    src = src.replace('.svg', '') + "_over.svg";
    $(this).attr("src", src);

    $('#icontextpopup').css("transform", translate);


  })
  .mouseout(function(){
    var src = $(this).attr('src').replace('_over.svg', '.svg');
    $(this).attr("src", src);

    $('#icontextpopup').remove();
});








});
