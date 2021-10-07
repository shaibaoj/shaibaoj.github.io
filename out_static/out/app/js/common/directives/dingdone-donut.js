"use strict";define(function(require){var app=require("app");app.directive("dingdoneDonut",function(){return{restrict:"A",scope:{donutOption:"="},replace:!0,template:'<canvas class="dingdone-donut" width="200" height="200"></canvas>',link:function(scope,element,attrs,controller){function drawProgress(){ctx.lineWidth=8,ctx.strokeStyle="#f8f8f8",ctx.beginPath(),ctx.arc(200,200,180,0,2*Math.PI,!0),ctx.stroke(),scope.donutOption&&scope.donutOption.color&&(ctx.lineWidth=8,ctx.strokeStyle=scope.donutOption.color,ctx.beginPath(),ctx.arc(200,200,180,-.5*Math.PI,(2*scope.donutOption.progress-.5)*Math.PI,!1),ctx.stroke(),ctx.lineWidth=1,ctx.strokeStyle=scope.donutOption.color,ctx.fillStyle=scope.donutOption.color,ctx.beginPath(),ctx.arc(180*Math.cos((2*scope.donutOption.progress-.5)*Math.PI)+200,180*Math.sin((2*scope.donutOption.progress-.5)*Math.PI)+200,16,0,2*Math.PI,!1),ctx.fill(),ctx.stroke()),ctx.fillStyle="#e4e4e4",ctx.textBaseline="middle",ctx.textAlign="center",ctx.font="36px Hiragino Sans GB",ctx.fillText(scope.donutOption.resultText||"未打包",canvas.width/2,canvas.height/2)}var canvas=element[0];canvas.width=400,canvas.height=400;var ctx=canvas.getContext("2d");ctx.clearRect(0,0,400,400);var drawCommon=function(){var strokeStyle=scope.donutOption.color,fillStyle=scope.donutOption.bgColor,resultText=scope.donutOption.resultText;ctx.lineWidth=2,ctx.strokeStyle=strokeStyle,ctx.beginPath(),ctx.arc(200,200,180,0,2*Math.PI,!0),ctx.fillStyle=fillStyle,ctx.fill(),ctx.stroke(),ctx.fillStyle=strokeStyle,ctx.font="36px Hiragino Sans GB",ctx.textBaseline="middle",ctx.textAlign="center",ctx.fillText(resultText,canvas.width/2,canvas.height/2+40);var img=new Image;img.src=scope.donutOption.imgSrc,img.onload=function(){var left=(canvas.width-img.width)/2,top=(canvas.height-img.height)/2-30;ctx.drawImage(img,left,top)}};scope.$watch("donutOption",function(_new,_old,scope){var flag=scope.donutOption&&scope.donutOption.flag?scope.donutOption.flag:"processing";ctx.clearRect(0,0,400,400),"processing"===flag||"init"===flag||"building"===flag?drawProgress():drawCommon()},!0)}}})});