function lockBody(){return body[0].style.overflow="hidden",!0}function unlockBody(){return body[0].style.overflowY="scroll",!0}function checkPage(e){return body[0].className.indexOf(e)!==-1}var window_width=window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth,body=document.getElementsByTagName("body"),header={header_tag:document.getElementsByClassName("header")[0],header_w:0,header_h:0,title:document.getElementsByClassName("header__wrapper_title")[0],bg:document.getElementsByClassName("background")[0],menu:document.getElementsByClassName("menu")[0],init:function(){this.setBgSize()},setBgSize:function(){return this.header_w=this.header_tag.offsetWidth,this.header_h=this.header_tag.offsetHeight,this.menu.style.backgroundSize=this.header_w+"px "+this.header_h+"px",!0}};window.addEventListener("load",function(){header.init()});