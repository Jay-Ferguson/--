import barba from '@barba/core';

$('document').ready(function(){
     Barba.Pjax.start();
});


var FadeTransition = Barba.BaseTransition.extend({
  start: function() {
    
    Promise
      .all([this.newContainerLoading, this.startTransition()])
      .then(this.fadeIn.bind(this));
  },

fadeOut:function(){


     return $(this.oldContainer).animate({opacity:0}).promise();
},

  fadeIn: function() {
  
    var _this = this;
    var $el = $(this.newContainer);

    $(this.oldContainer).hide();

    $el.css({
      visibility: 'visible',
      opacity: 0
    });

    $el.animate({ opacity: 1}, 500, function() {
     
     _this.done();
    });
  }
});

Barba.Pjax.getTransition = function() {
     return transitionAnimation;
}






/*Everything that’s inside “barba-container” will be counted as the “oldContainer” and respectively, everything in between the barba-container of the destination page will be counted as the “newContainer”. If your header stays the same between pages, you can put this just below your nav menu just outside of the closing tag of your header. For example in WordPress, you could put the opening tags at the bottom of the header.php and the closing tags at the top of the footer.php. If you’d like to make a different transition. Try putting an element in between “barba-wrapper” and “barba-container” by which I mean in between the two opening tags. Anything in between these two tags will be kept so you can use it to add any kind of graphics you might want.

Additionally, you can use Google new “Universal Analytics” code as you normally would and page views are automatically sent when the user clicks a link.

One of the reasons this is great is because you can have several times more control over the resources that your website loads by creating custom logic. For instance, you can add the following after Barba.Pjax.start();
*/



