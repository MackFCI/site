// JavaScript Document
$('#main').corner("keep");
$('#banner img').corner("tr");
$('#menu a').corner("5px");

$(document).ready(function(){
	//código para galeria de fotos
	$("ul.thumb li").hover(function() {
		$(this).css({'z-index' : '10'});
		$(this).find('img').addClass("hover").stop()
			.animate({
				marginTop: '-110px',
				marginLeft: '-110px',
				top: '50%',
				left: '50%',
				width: '174px',
				height: '174px',
				padding: '20px'
			}, 200);
		} , function() {
		$(this).css({'z-index' : '0'});
		$(this).find('img').removeClass("hover").stop()
			.animate({
				marginTop: '0',
				marginLeft: '0',
				top: '0',
				left: '0',
				width: '100px',
				height: '100px',
				padding: '5px'
			}, 400);
	});
	//Trocar imagem ao clicar
	$("ul.thumb li a").click(function() {
		var mainImage = $(this).attr("href"); //Encontrar o endereço (caminho) da imagem
		$("#img_grande img").attr({ src: mainImage });
		return false;
	});
	//http://www.sohtanaka.com/web-design/fancy-thumbnail-hover-effect-w-jquery/
	
	//código para prettyPhoto
	$("a[rel^='prettyPhoto']").prettyPhoto({
		theme: 'pp_default', /* light_rounded / dark_rounded / light_square / dark_square / facebook */
		social_tools: false
	});
});

function abrirProgramacao(){
	largura = screen.availWidth;
	altura = screen.availHeight;
	mapa = window.open('','mapa','toolbar=no,location=no,status=no,menubar=no,scrollbars=yes,resizable=yes,width='+largura+',height='+altura);
	mapa.moveTo(0,0);
	mapa.document.write('<img src="_img/programacao.jpg" alt="Programação" width="'+(largura-50)+'" onclick="javascript:window.close();" title="Clique para fechar" />');
}
function abrirMapa(){
	largura = screen.availWidth;
	altura = screen.availHeight;
	mapa = window.open('','mapa','toolbar=no,location=no,status=no,menubar=no,scrollbars=yes,resizable=yes,width='+largura+',height='+altura);
	mapa.moveTo(0,0);
	mapa.document.write('<img src="_img/mapa_full.jpg" alt="Mapa do local" width="'+(largura-50)+'" onclick="javascript:window.close();" title="Clique para fechar" />');
}