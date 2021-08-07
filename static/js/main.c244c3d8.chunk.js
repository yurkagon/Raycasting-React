(this["webpackJsonpraycasting-react"]=this["webpackJsonpraycasting-react"]||[]).push([[0],{142:function(t,e,i){},144:function(t,e,i){},145:function(t,e,i){},146:function(t,e,i){},147:function(t,e,i){},148:function(t,e,i){},149:function(t,e,i){},150:function(t,e,i){"use strict";i.r(e);var n=i(1),a=i.n(n),s=i(50),o=i.n(s);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var r=function(t){t&&t instanceof Function&&i.e(3).then(i.bind(null,151)).then((function(e){var i=e.getCLS,n=e.getFID,a=e.getFCP,s=e.getLCP,o=e.getTTFB;i(t),n(t),a(t),s(t),o(t)}))},c=i(4),l=i(52),u=i(2),h=i(3),d=i(53),b=i(8),g=i(11),v=i(10),f=i(32),j=function(){function t(e){Object(u.a)(this,t),this.started=!1,this.position=void 0,this.position=e,y.getInstance().subscribe(this)}return Object(h.a)(t,[{key:"start",value:function(){this.started=!0}},{key:"isStarted",value:function(){return this.started}},{key:"destroy",value:function(){y.getInstance().unsubscribe(this)}}]),t}(),p=function(){function t(){Object(u.a)(this,t),this.subscribers=[],this.previousCall=void 0,this.deltaTimeValue=0}return Object(h.a)(t,[{key:"init",value:function(){var t=this;setInterval((function(){return t.update()}),10)}},{key:"subscribe",value:function(t){this.subscribers=[].concat(Object(f.a)(this.subscribers),[t])}},{key:"unsubscribe",value:function(t){var e=this.subscribers.findIndex((function(e){return t===e}));this.subscribers.splice(e,1),this.subscribers=Object(f.a)(this.subscribers)}},{key:"deltaTime",get:function(){return this.deltaTimeValue}},{key:"update",value:function(){this.subscribers.forEach((function(t){t instanceof j?(t.isStarted()||t.start(),t.update()):t()})),this.trackDeltaTime()}},{key:"trackDeltaTime",value:function(){var t=Date.now();this.previousCall&&(this.deltaTimeValue=(t-this.previousCall)/1e3),this.previousCall=t}}],[{key:"getInstance",value:function(){return this.instance||(this.instance=new t),this.instance}}]),t}();p.instance=void 0;var y=p,m=i(7),O=i(23),w=i(51),M=i.n(w),A=function(){function t(){Object(u.a)(this,t),this.data=null,this.tileSize=32}return Object(h.a)(t,[{key:"setData",value:function(t){this.data=t}},{key:"handleCollision",value:function(t){var e,i,n=this.convertPositionToGridPosition(t),a=null===(e=this.data)||void 0===e||null===(i=e[Math.floor(n.y)])||void 0===i?void 0:i[Math.floor(n.x)];if(!(" "!==a))return null;var s={x:n.x%1,y:n.y%1},o=s.y,r=s.x,c=[{side:"top",value:o},{side:"bottom",value:1-o},{side:"left",value:r},{side:"right",value:1-r}];return{point:t,gridPosition:n,floatPart:s,cell:a,collisionSide:M()(c,"value").side}}},{key:"convertPositionToGridPosition",value:function(t){return{x:t.x/this.tileSize,y:t.y/this.tileSize}}}],[{key:"getInstance",value:function(){return this.instance||(this.instance=new t),this.instance}}]),t}();A.instance=void 0;var x=A,k=function(){function t(e){var i=e.onMouseMove;Object(u.a)(this,t),this.moveState={toForward:!1,toBack:!1,toRight:!1,toLeft:!1,rotateLeft:!1,rotateRight:!1},this.mouseMoveCallback=void 0,this.attachKeyDown(),this.attachKeyUp(),this.mouseMoveCallback=i,this.attachMouseMove()}return Object(h.a)(t,[{key:"attachKeyDown",value:function(){var t=this;document.body.addEventListener("keydown",(function(e){var i=e.code;"KeyW"===i&&(t.moveState.toForward=!0),"KeyS"===i&&(t.moveState.toBack=!0),"KeyA"===i&&(t.moveState.toLeft=!0),"KeyD"===i&&(t.moveState.toRight=!0),"KeyQ"===i&&(t.moveState.rotateLeft=!0),"KeyE"===i&&(t.moveState.rotateRight=!0)}))}},{key:"attachKeyUp",value:function(){var t=this;document.body.addEventListener("keyup",(function(e){var i=e.code;"KeyW"===i&&(t.moveState.toForward=!1),"KeyS"===i&&(t.moveState.toBack=!1),"KeyA"===i&&(t.moveState.toLeft=!1),"KeyD"===i&&(t.moveState.toRight=!1),"KeyQ"===i&&(t.moveState.rotateLeft=!1),"KeyE"===i&&(t.moveState.rotateRight=!1)}))}},{key:"attachMouseMove",value:function(){var t=this;document.addEventListener("mousemove",(function(e){if(et.allowMouse){var i=e.movementX*et.mouseSensitivity;t.mouseMoveCallback(i)}}))}}]),t}(),S=function(t){Object(g.a)(i,t);var e=Object(v.a)(i);function i(){var t;if(Object(u.a)(this,i),(t=e.call(this)).position={rotation:-1.884955592153879,x:372.6884332630978,y:128.58201781700896},t.walkSpeed=50,t.rotationSpeed=1.3,t.radius=8,t.control=void 0,t.control=new k({onMouseMove:t.onMouseMove.bind(Object(O.a)(t))}),et.isDevelopment){var n=localStorage.getItem("player-position");n&&(t.position=JSON.parse(n))}return t}return Object(h.a)(i,[{key:"update",value:function(){var t=this.control.moveState,e=t.rotateLeft,i=t.rotateRight,n=t.toForward,a=t.toBack,s=t.toRight,o=t.toLeft,r=y.getInstance();if(e||i){var c=i?1:-1;this.setRotation(this.position.rotation+this.rotationSpeed*c*r.deltaTime)}if(n||a){var l=n?1:-1,u={x:Math.cos(this.position.rotation)*this.walkSpeed*l*r.deltaTime,y:Math.sin(this.position.rotation)*this.walkSpeed*l*r.deltaTime};this.moveBy(u)}if(s||o){var h=s?1:-1,d=s?-1:1,b={y:Math.cos(this.position.rotation)*this.walkSpeed*h*r.deltaTime,x:Math.sin(this.position.rotation)*this.walkSpeed*d*r.deltaTime};this.moveBy(b)}}},{key:"checkVisibility",value:function(t){var e=z.getInstance(),i=nt.getAngleBetween(this.position,t.position),n=nt.normalize(this.position.rotation-e.FOV/2),a=nt.normalize(this.position.rotation+e.FOV/2);return nt.isAngleBetweenAngles(i,n,a)?{angleBetweenTarget:i,fovAngleStart:n,fovAngleEnd:a}:null}},{key:"moveBy",value:function(t){var e=x.getInstance(),i=Object(m.a)(Object(m.a)({},this.position),{},{x:this.position.x+t.x,y:this.position.y+t.y});e.handleCollision(i)||(this.position=i,et.isDevelopment&&this.savePosition())}},{key:"onMouseMove",value:function(t){var e=y.getInstance();this.setRotation(this.position.rotation+t*e.deltaTime)}},{key:"setRotation",value:function(t){this.position=Object(m.a)(Object(m.a)({},this.position),{},{rotation:nt.normalize(t)})}},{key:"savePosition",value:function(){localStorage.setItem("player-position",JSON.stringify(this.position))}}],[{key:"getInstance",value:function(){return this.instance||(this.instance=new i),this.instance}}]),i}(j);S.instance=void 0;var I=S,C=function(){function t(e,i){Object(u.a)(this,t),this.point=void 0,this.angle=void 0,this.isRayFacingDown=void 0,this.isRayFacingUp=void 0,this.isRayFacingRight=void 0,this.isRayFacingLeft=void 0,this.collision=void 0,this.hitDistance=void 0,this.isVerticalCast=!1,this.isHorizontalCast=!1,this.stripHeight=0,this.maxDistance=300,this.grid=x.getInstance(),this.player=I.getInstance(),this.angle=nt.normalize(i),this.point=e,this.isRayFacingDown=this.angle>0&&this.angle<Math.PI,this.isRayFacingUp=!this.isRayFacingDown,this.isRayFacingRight=this.angle<.5*Math.PI||this.angle>1.5*Math.PI,this.isRayFacingLeft=!this.isRayFacingRight}return Object(h.a)(t,[{key:"cast",value:function(){var t=this.castHorizontal(),e=this.castVertical();if(t||e){var i=t?at(this.player.position,t.point):Number.MAX_VALUE,n=e?at(this.player.position,e.point):Number.MAX_VALUE;i<n?(this.collision=t,this.hitDistance=i,this.isHorizontalCast=!0):n<=i&&(this.collision=e,this.hitDistance=n,this.isVerticalCast=!0);this.stripHeight=1e4/(Math.cos(I.getInstance().position.rotation-this.angle)*this.hitDistance)}}},{key:"castHorizontal",value:function(){var t,e,i,n;t=Math.floor(this.player.position.y/this.grid.tileSize)*this.grid.tileSize,t+=this.isRayFacingDown?this.grid.tileSize:0,e=this.player.position.x+(t-this.player.position.y)/Math.tan(this.angle),i=this.grid.tileSize,i*=this.isRayFacingUp?-1:1,n=this.grid.tileSize/Math.tan(this.angle),n*=this.isRayFacingLeft&&n>0?-1:1,n*=this.isRayFacingRight&&n<0?-1:1;for(var a=e,s=t;a>=0&&a<=2e3&&s>=0&&s<=2e3;){var o=this.grid.handleCollision({x:a,y:s-(this.isRayFacingUp?1:0)});if(o)return o;a+=n,s+=i}}},{key:"castVertical",value:function(){var t,e,i,n;e=Math.floor(this.player.position.x/this.grid.tileSize)*this.grid.tileSize,e+=this.isRayFacingRight?this.grid.tileSize:0,t=this.player.position.y+(e-this.player.position.x)*Math.tan(this.angle),n=this.grid.tileSize,n*=this.isRayFacingLeft?-1:1,i=this.grid.tileSize*Math.tan(this.angle),i*=this.isRayFacingUp&&i>0?-1:1,i*=this.isRayFacingDown&&i<0?-1:1;for(var a=e,s=t;a>=0&&a<=2e3&&s>=0&&s<=2e3;){var o=this.grid.handleCollision({x:a-(this.isRayFacingLeft?1:0),y:s});if(o)return o;a+=n,s+=i}}},{key:"castLegacy",value:function(){for(var t=0;t<this.maxDistance;){var e={x:Math.cos(this.angle)*t,y:Math.sin(this.angle)*t},i={x:this.point.x+e.x,y:this.point.y+e.y},n=this.grid.handleCollision(i);if(n){this.collision=n,this.hitDistance=at(this.point,i),this.stripHeight=1e4/(Math.cos(I.getInstance().position.rotation-this.angle)*this.hitDistance);break}t+=.5}}}]),t}(),R=[["w","w2","w2","w","s","s","s","s","s","s","s","s","g","g2","g"],["w"," "," ","w","w"," ","w"," ","w","w2","w"," ","g3"," ","g2"],["w"," "," "," "," "," "," "," "," "," "," "," "," "," ","g"],["w"," "," ","w","w"," ","w"," ","w"," ","w"," ","g3"," ","g3"],["w","w2","w2","w","s","s","s","s","s"," ","s","s","s"," ","s"],["s","b","b","b","b","b","b","b","b2"," ","b2","b","b2"," ","b2"],["s","b2"," "," "," "," "," "," "," "," "," "," "," "," ","b"],["s"," "," ","b3"," ","b3","b3","b3"," "," ","b3","b3","b3"," ","b"],["s","b2"," "," "," "," "," "," "," "," "," "," "," "," ","b2"],["s","b","b","b","b","b","b","b","b","b","b","b","b","b2","b"],["s","s","s","s","s","s","s","s","s","s","s","s","s","s","s"]],D=function(t){Object(g.a)(i,t);var e=Object(v.a)(i);function i(){var t;Object(u.a)(this,i);for(var n=arguments.length,a=new Array(n),s=0;s<n;s++)a[s]=arguments[s];return(t=e.call.apply(e,[this].concat(a))).FOV=nt.toRad(60),t.raysCount=160,t.player=I.getInstance(),t.grid=x.getInstance(),t.rays=[],t}return Object(h.a)(i,[{key:"start",value:function(){Object(d.a)(Object(b.a)(i.prototype),"start",this).call(this),this.grid.setData(R)}},{key:"update",value:function(){this.rays=[];for(var t=this.FOV/this.raysCount,e=this.player.position.rotation-this.FOV/2,i=0;i<this.raysCount;i++){var n=e+t*i,a=new C(this.player.position,n);a.cast(),this.rays.push(a)}}},{key:"setRaysCount",value:function(t){this.raysCount=t}}],[{key:"getInstance",value:function(){return this.instance||(this.instance=new i),this.instance}}]),i}(j);D.instance=void 0;var z=D,N=function(){var t=Object(n.useState)(null),e=Object(c.a)(t,2),i=e[0],a=e[1];return Object(n.useEffect)((function(){var t=y.getInstance(),e=z.getInstance(),i=function(){a(e.player.position)};return t.subscribe(i),function(){return t.unsubscribe(i)}}),[]),i},F=function(){var t=Object(n.useState)([]),e=Object(c.a)(t,2),i=e[0],a=e[1];return Object(n.useEffect)((function(){var t=y.getInstance(),e=z.getInstance(),i=function(){a(e.rays)};return t.subscribe(i),function(){return t.unsubscribe(i)}}),[]),i},T=function(t){return Math.floor(1e3-t)},E=(i(142),i(0)),B=function(){var t=F(),e=z.getInstance(),i=ot(),n=i.width/e.raysCount;return Object(E.jsx)("div",{className:"div-render-strategy",children:t.map((function(t,e){if(!t.collision)return null;var a="top"===t.collision.collisionSide||"right"===t.collision.collisionSide?170:100,s=rt(a*t.stripHeight/i.height,a),o="rgb(".concat(s,", ").concat(s,", ").concat(s,")");return Object(E.jsx)("button",{className:"strip",style:{width:n,height:t.stripHeight,left:n*e,top:(i.height-t.stripHeight)/2,backgroundColor:o}},e)}))})},G=i(24),L=i.n(G),P=function(t){Object(g.a)(i,t);var e=Object(v.a)(i);function i(t){var n;return Object(u.a)(this,i),(n=e.call(this,t.position)).name=void 0,n.texture=void 0,n.widthCoefficient=void 0,n.originalSize=void 0,n.name=t.name,n.texture=t.texture,n.originalSize=t.originalSize,n.widthCoefficient=t.originalSize.width/t.originalSize.height,n}return Object(h.a)(i,[{key:"update",value:function(){}}]),i}(j),Y={guard:{texture:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAACSCAMAAACNHD8YAAAAt1BMVEUAAACoqKiMjIx8fHxUVFQ4ODhkZGRwcHBISEgsLCzAwMDQ0NAgICBIOBhsSCSIWDAAAACoaEAABPz8sIC8eEh0TCjwlFz8vJzQgFCcYDi0cETojFigZDz8pHD8/PzciFSQXDT8nGCAUCxAMBjIfExUPBw4LBQoIAxcQCDc3Ny0tLSYmJj8eADMYACcTAD8xKT8uJAAAKgAAEwAAHwAAHAAALwAAIgAAEAAANQAAKQAAGQAAFj///98T585AAAAPXRSTlMA//////////////////////////////////////////////////////////////////////////////////f/fQAAAAlwSFlzAAALEwAACxMBAJqcGAAABSBpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQwIDc5LjE2MDQ1MSwgMjAxNy8wNS8wNi0wMTowODoyMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0RXZ0PSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VFdmVudCMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTggKE1hY2ludG9zaCkiIHhtcDpDcmVhdGVEYXRlPSIyMDIxLTA4LTA2VDEzOjMyOjIzKzAzOjAwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyMS0wOC0wNlQyMTo0Njo1OCswMzowMCIgeG1wOk1ldGFkYXRhRGF0ZT0iMjAyMS0wOC0wNlQyMTo0Njo1OCswMzowMCIgZGM6Zm9ybWF0PSJpbWFnZS9wbmciIHBob3Rvc2hvcDpDb2xvck1vZGU9IjIiIHBob3Rvc2hvcDpJQ0NQcm9maWxlPSJzUkdCIElFQzYxOTY2LTIuMSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo0YzJkMjFlYy1iOTkwLTQ2MDktOTllNi05YzQ3YzJmYWEwNGYiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NGMyZDIxZWMtYjk5MC00NjA5LTk5ZTYtOWM0N2MyZmFhMDRmIiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6NGMyZDIxZWMtYjk5MC00NjA5LTk5ZTYtOWM0N2MyZmFhMDRmIj4gPHhtcE1NOkhpc3Rvcnk+IDxyZGY6U2VxPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0iY3JlYXRlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDo0YzJkMjFlYy1iOTkwLTQ2MDktOTllNi05YzQ3YzJmYWEwNGYiIHN0RXZ0OndoZW49IjIwMjEtMDgtMDZUMTM6MzI6MjMrMDM6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE4IChNYWNpbnRvc2gpIi8+IDwvcmRmOlNlcT4gPC94bXBNTTpIaXN0b3J5PiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PoA+DiUAAAPoSURBVGiB7dp9bxtFEMDh5+w7vzR24jRJVUoqlVJcRPn+3wSpjShCoqINtGlenNiOzzZ/nMZcSNwXCSR6l5EV3V1253e6ndmdmd3EfyzJ/wSQxN/Vb3YLuNYmI2FOGk/Gt4CQBgkpmMfD7BZQUlR8/SVjErLAfBKjBoAm3ZIDYxk/jGoPaJLRuTrNLQKQfwqj6oABeWkM5sxpBWB8CwA9EjaY0QRzMs5Z/it+8OUD0A/MWdwWqs8+oW9NAAO6NJiADqc0Ob4FhPZCFmzG9co6P86oLuABTQ65wyaHdFmwzQljUrIS/teaAR6SknPIkkaoW8mMnB0W8WTK+9oAHjKlER/9NfscMeFBBKlH3ImoApuM1jEqB1hpT2jR4BUJ+xGMHpdMs5AmI5rMeVN1wEr7lG2aXAYD+2BELxaGC1psccIW4xsZFQKUtadsh4oFi7DCHTZYMKEDUuackdOmycU/jLVCgPsknLMbVYMD9miXMpkp2GEcb9AMzJRJGOsFp5UD3KMNxtzlIP77Pe/IYt6fkDNljxmbLKMQM+UkcqErw1AtwIht0hKgYIzIGdMNH15hOmQsecN9ct7TLg9DVQD7cTEjoV9i9NliwTl9RnQCgzkPeMHTUgo0ryLgERdsRbc/Iy4fhBsXPvwkagoH4e1N0mjcJ+EuIy4rB8B3nJMzp0OfI9Aj5TdwCbLQLi5WgDQmx7fRoEqAPTKm9HlLziNOyUnpcsJmRKXFHNfghK+Z8ZKnzFjQ4JcqAgpG0e2YKc/IueQiovlV4F4sD42oeArA72ArYrXqAQoGxsy45MfYkJuExqMgFbctjtjjJTs0Iz88qy5gJT0egyUX4bEJb64CGpwGYMhZLJ9/S3UBZcY5GTPSKLtcB/zBBj6cQlUOgCENZlFqWaxplvBinYqqA3bJIuXr0mJRKrKgBZZ1BezSoM2UGR1ytnlPK04PoFdjwD0EoBEpzQFDzmNTvGBs1BJQHoBViarID4ucJ4npr9h9qS3gq9hCUCrBDDlkMwCrJbNWgJX2V9xhxG7kfnjMKW0aLGmRfe4YfPmAJ5zG+YAJvTigU3zoIa9p8ZB3tCPov5lRaUDhxr1SDrOSPm3mbNGgWT/AvTXTXCFDLplFTPaR+a6igMJXM7rxfZdXAa/Z4SQOM+2R1gwwuPbk+DMb1AHwTWkBSG8ClIP46w3qAPi2ZJo3Ar6hyfNaAorOadTBX9zUecBTLkuF8roBhix4frX2feN71BZQduPRmo6DsNSfP3zSq3KAols7bHT+MTMtNlQ+xKgWYMCzqIbnZPy0xgQH/MAkXmXde1QSkF9rsM5Me1dv1zrzlw/4CxIn1cAD0mV3AAAAAElFTkSuQmCC",originalSize:{width:96,height:146}}},Z=function(){function t(){Object(u.a)(this,t)}return Object(h.a)(t,null,[{key:"create",value:function(t,e){var i=Y[t],n=new P(Object(m.a)(Object(m.a)({},i),{},{position:e,name:t}));return this.sprites.push(n),n}},{key:"removeAll",value:function(){this.sprites.forEach((function(t){return t.destroy()})),this.sprites=[]}}]),t}();Z.sprites=[];var H=Z,V=(i(144),function(){var t=z.getInstance(),e=N(),i=ot();return e?Object(E.jsx)(n.Fragment,{children:H.sprites.map((function(n,a){var s=t.player.checkVisibility(n);if(!s)return null;var o=s.angleBetweenTarget,r=s.fovAngleStart,c=at(n.position,e),l=1e3/(Math.cos(e.rotation-o)*c),u=10*l,h=u*n.widthCoefficient,d=rt(2*u/i.height,1);return Object(E.jsx)("div",{className:L()("sprite",n.name),style:{width:h,height:u,top:(i.height-l)/2-2*l,left:i.width*nt.normalize(o-r)/t.FOV,zIndex:T(c)},children:Object(E.jsx)("img",{src:n.texture,style:{width:h,height:u,filter:"brightness(".concat(d,")"),left:-h/2}})},a)}))}):null}),Q=i.p+"static/media/s.2598404c.jpg",J=i.p+"static/media/w.c183bd8a.jpg",U=i.p+"static/media/w2.3d66fb1a.jpg",W={s:Q,w:J,g:i.p+"static/media/g.708ac57b.jpg",g2:i.p+"static/media/g2.58dc188c.jpg",g3:i.p+"static/media/g3.30f68b00.jpg",w2:U,b:i.p+"static/media/b.c4ba0bee.jpg",b2:i.p+"static/media/b2.91a79e2e.jpg",b3:i.p+"static/media/b3.aee621d9.jpg"},K=(i(145),function(t){var e=t.skyboxEnabled,i=F(),a=z.getInstance(),s=ot(),o=s.width/a.raysCount;return Object(n.useEffect)((function(){return H.create("guard",{x:200,y:200}),function(){return H.removeAll()}}),[]),Object(E.jsxs)("div",{className:L()("div-render-strategy-textured",e?"skybox":"gradient"),style:e?{backgroundPositionX:-a.player.position.rotation*s.width}:void 0,children:[i.map((function(t,e){if(!t.collision)return null;var i=("left"===t.collision.collisionSide||"right"===t.collision.collisionSide?t.collision.floatPart.y:t.collision.floatPart.x)*t.stripHeight*2;return Object(E.jsx)("div",{className:"strip",style:{width:o,height:t.stripHeight,left:o*e,top:(s.height-t.stripHeight)/2,zIndex:T(t.hitDistance)},children:Object(E.jsx)("div",{className:"texture",style:{backgroundImage:"url(".concat(W[t.collision.cell],")"),height:t.stripHeight,width:t.stripHeight,backgroundSize:"cover",backgroundPositionX:-i,opacity:2*t.stripHeight/s.height}})},e)})),Object(E.jsx)(V,{})]})}),X=i(25),q=(i(146),function(){var t=F(),e=z.getInstance(),i=ot();if(Object(n.useEffect)((function(){var t=e.raysCount;return e.setRaysCount(et.consoleRaysCount),function(){return e.setRaysCount(t)}}),[]),Object(n.useEffect)((function(){e.setRaysCount(Math.floor(i.width*et.viewportWidthToCharsScaleCoefficient))}),[i.width]),!t.length)return null;var a=Math.floor(i.height*et.viewportHeightToCharsScaleCoefficient),s=t.map((function(t){for(var e=Math.round(t.stripHeight/480*a),i=e>a?a:e,n=Array.from({length:i}).fill(st(i,a)),s=a-i,o=Math.ceil(s/2),r=s-o,c=0;c<o;c++)n.push(" ");for(var l=0;l<r;l++)n.unshift("_");return n})),o=Object(X.rotate)(s,270).map((function(t){return t.join("")})).join("\n");return Object(E.jsx)("div",{className:"text-render-strategy",children:Object(E.jsx)("textarea",{value:o,rows:a,readOnly:!0})})}),_=i.p+"static/media/devtools.39991061.jpeg",$=(i(147),function(){var t=Object(n.useState)(null),e=Object(c.a)(t,2),i=e[0],a=e[1],s=F(),o=z.getInstance(),r=ot();Object(n.useEffect)((function(){var t=o.raysCount;return o.setRaysCount(et.consoleRaysCount),function(){return o.setRaysCount(t)}}),[]);var l=Math.floor(et.consoleHeight);return Object(n.useEffect)((function(){if(!s.length)return null;var t=s.map((function(t){for(var e=Math.round(t.stripHeight/480*l),i=e>l?l:e,n=Array.from({length:i}).fill(st(i,l)),a=l-i,s=Math.ceil(a/2),o=a-s,r=0;r<s;r++)n.push(" ");for(var c=0;c<o;c++)n.unshift("_");return n})),e=Object(X.rotate)(t,270).map((function(t){return t.join("")})).join("\n");a(e)}),[s]),Object(n.useEffect)((function(){i&&console.log(i)}),[i]),Object(n.useEffect)((function(){return function(){return console.clear()}}),[]),Object(E.jsx)("div",{className:"console-render-strategy",children:Object(E.jsxs)("div",{className:"description",children:[Object(E.jsx)("h3",{children:"Open browser console"}),Object(E.jsx)("img",{src:_,width:r.width})]})})}),tt=function t(){Object(u.a)(this,t)};tt.isProduction=!0,tt.isDevelopment=!1,tt.allowMouse=!1,tt.viewPortSizeMultiplier=.9,tt.miniMapSizeMultiplier=.5,tt.textRenderCharSpectre=",,:;I&&00%$@@#",tt.viewportWidthToCharsScaleCoefficient=.33,tt.viewportHeightToCharsScaleCoefficient=.166,tt.consoleRaysCount=100,tt.consoleHeight=40,tt.mouseSensitivity=.1,tt.renderingStrategies=[{name:"HTML <div> Textured",component:K,raysCountChangeAvailable:!0,skybox:{default:!1}},{name:"HTML <div> Shaded",component:B,raysCountChangeAvailable:!0},{name:"HTML <textarea> (Only chrome)",component:q},{name:"Console in your Chrome (only) browser :D",component:$}];var et=tt,it=function(){function t(){Object(u.a)(this,t)}return Object(h.a)(t,null,[{key:"normalize",value:function(t){return(t%=2*Math.PI)<0&&(t=2*Math.PI+t),t}},{key:"isAngleBetweenAngles",value:function(t,e,i){var n=i-e<0?i-e+2*Math.PI:i-e;return(t-e<0?t-e+2*Math.PI:t-e)<n}},{key:"getAngleBetween",value:function(t,e){var i=t.x-e.x,n=e.y-t.y,a=Math.atan2(n,i);return this.normalize(Math.PI-a)}},{key:"log",value:function(t){console.log(this.toDeg(t))}}]),t}();it.toRad=function(t){return t*Math.PI/180},it.toDeg=function(t){return 180*t/Math.PI};var nt=it,at=function(t,e){return Math.sqrt(Math.pow(e.x-t.x,2)+Math.pow(e.y-t.y,2))},st=function(t,e){var i=",,:;I&&00%$@@#",n=Math.round(t/e*i.length);n<0&&(n=0),n>=i.length&&(n=i.length-1);return i[n]},ot=function(){var t=Object(l.a)();return{width:Math.round(t.width*et.viewPortSizeMultiplier),height:Math.round(t.height*et.viewPortSizeMultiplier)}},rt=function(t,e){return t>e?e:t},ct=function(){var t=N();if(!t)return null;var e=z.getInstance(),i=2*e.player.radius;return Object(E.jsx)("div",{className:"player-marker",style:{top:t.y/2,left:t.x/2},children:Object(E.jsx)("div",{className:"marker-body",style:{height:i,width:i,top:-e.player.radius,left:-e.player.radius,transform:"rotate(".concat(t.rotation,"rad)")}})})},lt=function(t){var e=t.from,i=t.to;i.x<e.x&&(e=t.to,i=t.from);var n=Math.sqrt(Math.pow(e.x-i.x,2)+Math.pow(e.y-i.y,2)),a=Math.atan((i.y-e.y)/(i.x-e.x));return Object(E.jsx)("div",{style:{position:"absolute",transform:"translate(".concat(e.x-.5*n*(1-Math.cos(a)),"px, ").concat(e.y+.5*n*Math.sin(a),"px) rotate(").concat(a,"rad)"),width:"".concat(n,"px"),height:"".concat(0,"px"),borderBottom:"2px solid yellow"}})},ut=function(){var t=F(),e=N();return e?Object(E.jsx)(n.Fragment,{children:t.map((function(t,i){return t.collision?i%20!==0?null:Object(E.jsx)(lt,{from:{x:e.x/2,y:e.y/2},to:{x:t.collision.point.x/2,y:t.collision.point.y/2}},i):null}))}):null},ht=function(){return function(){var t=Object(n.useState)(0),e=Object(c.a)(t,2),i=(e[0],e[1]),a=y.getInstance();Object(n.useEffect)((function(){var t=function(){i((function(t){return t+1}))};return a.subscribe(t),function(){a.unsubscribe(t)}}),[a])}(),Object(E.jsx)(n.Fragment,{children:H.sprites.map((function(t,e){return Object(E.jsx)("div",{style:{position:"absolute",top:t.position.y/2,left:t.position.x/2,width:3,height:3,backgroundColor:"green",borderRadius:10}},e)}))})},dt=(i(148),function(){var t=function(){var t=Object(n.useState)(null),e=Object(c.a)(t,2),i=e[0],a=e[1],s=Object(n.useState)(null),o=Object(c.a)(s,2),r=o[0],l=o[1];return Object(n.useEffect)((function(){var t=y.getInstance(),e=z.getInstance(),i=function(){a(e.grid.data),l(e.grid.tileSize)};return t.subscribe(i),function(){return t.unsubscribe(i)}}),[]),i?{data:i,tileSize:r}:null}();if(!t)return null;var e=t.tileSize/2,i=t.data.length,a=t.data[0].length*e,s=i*e;return Object(E.jsx)("div",{className:"ui-map",children:Object(E.jsxs)("div",{className:"cell-wrapper",style:{width:a,height:s},children:[Object(E.jsx)(ut,{}),t.data.map((function(t,i){return Object(E.jsxs)(n.Fragment,{children:[t.map((function(t,n){return" "===t?null:Object(E.jsx)("div",{className:"cell",style:{top:i*e,left:n*e,width:e,height:e,backgroundImage:"url(".concat(W[t],")")}},n)})),Object(E.jsx)(ct,{}),Object(E.jsx)(ht,{})]},i)}))]})})}),bt=function(){var t=z.getInstance(),e=Object(n.useState)(t.FOV),i=Object(c.a)(e,2),a=i[0],s=i[1],o=Object(n.useState)(t.raysCount),r=Object(c.a)(o,2),l=r[0],u=r[1],h=Object(n.useState)(et.renderingStrategies[0]),d=Object(c.a)(h,2),b=d[0],g=d[1],v=Object(n.useState)(et.allowMouse),f=Object(c.a)(v,2),j=f[0],p=f[1],m=Object(n.useState)(!0),O=Object(c.a)(m,2),w=O[0],M=O[1],A=Object(n.useState)(et.renderingStrategies[0].skybox.default),x=Object(c.a)(A,2),k=x[0],S=x[1];Object(n.useEffect)((function(){y.getInstance().init()}),[]),Object(n.useEffect)((function(){t.FOV=a}),[a]),Object(n.useEffect)((function(){et.allowMouse=j}),[j]),Object(n.useEffect)((function(){t.raysCount=l}),[l]),Object(n.useEffect)((function(){u(t.raysCount)}),[b,t]);var I=ot(),C=I.height,R=I.width;return Object(E.jsxs)("div",{className:"App",children:[Object(E.jsxs)("div",{className:"game-view-port",style:{width:R,height:C},children:[Object(E.jsx)(b.component,{skyboxEnabled:k}),w&&Object(E.jsx)(dt,{})]}),Object(E.jsxs)("div",{className:"settings",children:[Object(E.jsxs)("div",{className:"settings-block",children:[Object(E.jsxs)("div",{children:["Rendering strategy:"," ",Object(E.jsx)("select",{onChange:function(t){var e=et.renderingStrategies.find((function(e){return e.name===t.target.value}));g(e)},value:b.name,autoFocus:!1,children:et.renderingStrategies.map((function(t){return Object(E.jsx)("option",{value:t.name,children:t.name},t.name)}))})]}),Object(E.jsxs)("div",{children:["FOV:","  ",Object(E.jsx)("input",{type:"range",min:"20",max:"360",value:nt.toDeg(a),step:"10",onChange:function(t){return s(nt.toRad(Number(t.target.value)))}}),"Value: ",Math.round(nt.toDeg(a)),"\xb0 (default: 60\xb0)"]}),b.raysCountChangeAvailable&&Object(E.jsxs)("div",{children:["RAYS:",Object(E.jsx)("input",{type:"range",min:"10",max:"500",value:l,step:"10",onChange:function(t){return u(Number(t.target.value))}}),"Value: ",l," (default: 160)"]})]}),Object(E.jsxs)("div",{className:"settings-block",children:[Object(E.jsxs)("div",{children:[Object(E.jsx)("input",{checked:j,onChange:function(t){return p(t.target.checked)},type:"checkbox",id:"allow-mouse"}),Object(E.jsx)("label",{htmlFor:"allow-mouse",children:"Allow mouse"})]}),Object(E.jsxs)("div",{children:[Object(E.jsx)("input",{checked:w,onChange:function(t){return M(t.target.checked)},type:"checkbox",id:"allow-minimap"}),Object(E.jsx)("label",{htmlFor:"allow-minimap",children:"Allow minimap"})]}),b.skybox&&Object(E.jsxs)("div",{children:[Object(E.jsx)("input",{checked:k,onChange:function(t){return S(t.target.checked)},type:"checkbox",id:"allow-skybox"}),Object(E.jsx)("label",{htmlFor:"allow-skybox",children:"Skybox"})]})]}),Object(E.jsxs)("div",{className:"settings-block",children:[Object(E.jsx)("div",{children:"WASD - to move"}),Object(E.jsx)("div",{children:"Q and E - to rotate"})]})]})]})};i(149);o.a.render(Object(E.jsx)(a.a.StrictMode,{children:Object(E.jsx)(bt,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)})),r()}},[[150,1,2]]]);
//# sourceMappingURL=main.c244c3d8.chunk.js.map