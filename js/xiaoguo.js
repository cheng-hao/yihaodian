window.onload=function(){
//大轮播
		var images=$(".images2");
		var bts=$(".bts");
		var num=1;
		var bottom=$("#nav-bottom")
		var arr1=["#fd0a40","#ff55ab","#d31c0e","#2027bd","#4da5fe","#608eb0"]
		function move(){
			if(num==6){
				num=0
			}
			for(var i=0;i<images.length;i++){
				images[i].style.zIndex=2;
				bts[i].style.background="#000";
				bts[i].style.color="#fff";
			}
			images[num].style.zIndex=3;
			bottom.style.background=arr1[num];
			bts[num].style.background="#fff";
			bts[num].style.color="#000";
			num++;
		}
		var t=setInterval(move,2000)
		for(var i=0;i<bts.length;i++){
      		bts[i].index=i;
      		bts[i].onmouseover=function(){
      			clearInterval(t);
      			for(var j=0;j<bts.length;j++){
      				images[j].style.zIndex=2;
                    bts[j].style.background="#000";
                    bts[j].style.color="#fff";
      			}
      			images[this.index].style.zIndex=3;
      			bts[this.index].style.background="#fff";
      			bts[this.index].style.color="#000";
      			bottom.style.background=arr1[this.index];
      		}
      		bts[i].onmouseout=function(){
      			t=setInterval(move,2000);
      			num=this.index+1;
      		}
      	}
//顶部下拉
var yiji1=$(".yiji1")[0];
var erji=$(".erji")[0];
yiji1.onmouseover=function(){
    erji.style.display="block"
  }
yiji1.onmouseout=function(){
    erji.style.display="none"
  }
/*for(var i=0;i<erji.length;i++){
  erji[i].index=i;
  erji[i].onmouseover=function(){
    submenu[this.index].style.display="block"
  }
  erji[i].onmouseout=function(){
    submenu[this.index].style.display="none"
  }
}*/
		var yiji=$(".yiji");
    	var erji2=$(".erji2");
    	for(var i=0;i<yiji.length;i++){
  			yiji[i].index=i;
  			yiji[i].onmouseover=function(){
   			erji2[this.index].style.display="block"
  }
  			yiji[i].onmouseout=function(){
    		erji2[this.index].style.display="none"
  }
}
//导航详细
var xiangxili=$(".xiangxili");
var xiangxi=$(".xiangxi");
for(var i=0;i<xiangxili.length;i++){
  xiangxili[i].index=i;
  xiangxili[i].onmouseover=function(){
  xiangxi[this.index].style.display="block";
}
xiangxili[i].onmouseout=function(){
  xiangxi[this.index].style.display="none";
}
}

//搜索框
var text=$(".shuruk")[0];
text.onfocus=function(){
  this.style.color="#222";
  if(this.value=="圣诞节跨年幸福购 5折抢福袋"){
    this.value="";
  }
}
text.onblur=function(){
  if(this.value==""){
    this.value="圣诞节跨年幸福购 5折抢福袋"
  }else{
    this.value="圣诞节跨年幸福购 5折抢福袋"
  }
}
//楼层轮播
    var limages=$(".f1-images");
    var lbts=$(".f1-btns");
    var num1=1;
    function move1(){
      if(num1==3){
        num1=0
      }
      for(var i=0;i<limages.length;i++){
        limages[i].style.zIndex=2;
        lbts[i].style.background="#fff";
      }
      limages[num1].style.zIndex=3;
      lbts[num1].style.background="red";
      num1++;
    }
    var t1=setInterval(move1,2000)
    for(var i=0;i<lbts.length;i++){
          lbts[i].index=i;
          lbts[i].onmouseover=function(){
            clearInterval(t1)
            for(var j=0;j<lbts.length;j++){
              limages[j].style.zIndex=2;
              lbts[j].style.background="#fff";
            }
            limages[this.index].style.zIndex=3;
            lbts[this.index].style.background="red";
          }
          lbts[i].onmouseout=function(){
            t1=setInterval(move1,2000);
            num1=this.index+1;
          }
        }

function louc(loucimg,loucbtn){
    var num1=1;
    function move1(){
      if(num1==3){
        num1=0
      }
      for(var i=0;i<loucimg.length;i++){
        loucimg[i].style.zIndex=2;
        loucbtn[i].style.background="#fff";
      }
      loucimg[num1].style.zIndex=3;
      loucbtn[num1].style.background="red";
      num1++;
    }
    var t1=setInterval(move1,2000)
    for(var i=0;i<loucbtn.length;i++){
          loucbtn[i].index=i;
          loucbtn[i].onmouseover=function(){
            clearInterval(t1)
            for(var j=0;j<loucbtn.length;j++){
              loucimg[j].style.zIndex=2;
              loucbtn[j].style.background="#fff";
            }
            loucimg[this.index].style.zIndex=3;
            loucbtn[this.index].style.background="red";
          }
          loucbtn[i].onmouseout=function(){
            t1=setInterval(move1,2000);
            num1=this.index+1;
          }
        }
}
var loucimg=$(".f2-images");        
var loucbtn=$(".f2-btns");
louc(loucimg,loucbtn);
var loucimg=$(".f3-images");        
var loucbtn=$(".f3-btns");
louc(loucimg,loucbtn);
var loucimg=$(".f4-images");        
var loucbtn=$(".f4-btns");
louc(loucimg,loucbtn);
var loucimg=$(".f5-images");        
var loucbtn=$(".f5-btns");
louc(loucimg,loucbtn);
var loucimg=$(".f6-images");        
var loucbtn=$(".f6-btns");
louc(loucimg,loucbtn);
var loucimg=$(".f7-images");        
var loucbtn=$(".f7-btns");
louc(loucimg,loucbtn);
var loucimg=$(".f8-images");        
var loucbtn=$(".f8-btns");
louc(loucimg,loucbtn);

//图片左移

        var imgyi=$(".imgyi");
      for(var i=0;i<imgyi.length;i++){
          imgyi[i].index=i;
          imgyi[i].onmouseover=function(){
          imgyi[this.index].style.cssText="position:relative;left:-2px;box-shadow:0px 0px 0px rgba(0,0,0,0.1);"
        }
        imgyi[i].onmouseout=function(){
          imgyi[this.index].style.cssText="position:relative;left:0px;box-shadow:0px 0px 0px rgba(0,0,0,0.1);"
        }
    }
   
//楼层跳转      
  var btn=$(".fdtubtn");
  var floor=$(".aaa");
  var fdtu=$(".fdtu")[0];
  var xianshi=$(".xianshi");
  var btnfanhui=$(".fdtubtnfanhui")[0];

  var ch=document.documentElement.clientHeight;

  btnfanhui.onclick=function(){
      var obj=document.documentElement.scrollTop?document.documentElement:document.body;
      animate(obj,{scrollTop:0},600,Tween.Linear)
  }
  window.onscroll=function(){
    var scrollT=getscrollt();
  if(scrollT>=580){
      fdtu.style.display="block";
    }else{
      fdtu.style.display="none";
    }
  for(var i=0;i<btn.length;i++){
    btn[i].index=i;
    btn[i].onclick=function(){
      var obj=document.documentElement.scrollTop?document.documentElement:document.body;
      animate(obj,{scrollTop:floor[this.index].offsetTop})
    }
  }
    for(var i=0;i<floor.length;i++){
    if(floor[i].offsetTop<scrollT+ch/2){
      for(var j=0;j<btn.length;j++){
        xianshi[j].style.display="none";
    }
    xianshi[i].style.display="block";
   }
 }  
  }

   for(var i=0;i<btn.length;i++){
      btn[i].index=i;
      hover(btn[i],function(){
          xianshi[this.index].style.display="block";
        },function(){
        xianshi[this.index].style.display="none";
      })
    }
//发光效果
    var tupian=$(".fg");
      for(var i=0;i<tupian.length;i++){
      tupian[i].index=i;
      tupian[i].onmouseover=function(){
        animate(tupian[this.index],{opacity:0.8},120,function(){
          animate(tupian[this.index],{opacity:1},50)
        })
      }
    }
//  10选项卡
  var word=$(".word")
  var conbox=$(".sg-imgbox")
  for(var i=0;i<word.length;i++){
    word[i].index=i;
    word[i].onmouseover=function(){
      for(var j=0;j<conbox.length;j++){
        conbox[j].style.display="none";
        word[j].style.color="#666";
        word[j].style.textDecoration="none";
      }
      conbox[this.index].style.display="block";
      this.style.color="#CEA145";
      this.style.textDecoration="underline";
    }
  }         


}