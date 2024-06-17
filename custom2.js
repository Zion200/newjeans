$(function(){

    var count = 0;
	var piece = $('.Aimg > a');
	var gallery = $('.Bbbox');
	
	randomPosition();
	
	function randomPosition(){
		piece.each(function(){
			var tl = Math.random() * 1;
			var tt = Math.random() * 1;
			
			$(this).css({left:tl, top:tt});
		});
	}
	
	piece.draggable({
		stop:onStop
	});
	
	function onStop(){
		var tg = $(this);
		var id = tg.index();
		var ol = tg.offset().left;
		var ot = tg.offset().top;
		
		var galleryPiece = gallery.eq(id);
		var w = galleryPiece.width();
		var h = galleryPiece.height();
		var tl = galleryPiece.offset().left;
		var tt = galleryPiece.offset().top;
		
		var minLeft = tl - w;
		var minTop = tt - h;
		var maxLeft = tl + w;
		var maxTop = tt + h;
		var totalSize = gallery.size();
		
		if(ol > minLeft && ol < maxLeft && ot > minTop && ot < maxTop){
			tg.draggable('destroy');
			tg.animate({left:tl, top:tt}, 300, function(){
				count++;
				if(totalSize == count) {
					
					gallery.css({
						opacity:1,
						margin:0
					});
					
					
				}
			});
		}
	}
	
    
});