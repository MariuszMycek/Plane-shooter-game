!function(e){function t(t){for(var o,s,a=t[0],u=t[1],c=t[2],h=0,f=[];h<a.length;h++)s=a[h],r[s]&&f.push(r[s][0]),r[s]=0;for(o in u)Object.prototype.hasOwnProperty.call(u,o)&&(e[o]=u[o]);for(l&&l(t);f.length;)f.shift()();return i.push.apply(i,c||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],o=!0,a=1;a<n.length;a++){var u=n[a];0!==r[u]&&(o=!1)}o&&(i.splice(t--,1),e=s(s.s=n[0]))}return e}var o={},r={0:0},i=[];function s(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=e,s.c=o,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)s.d(n,o,function(t){return e[t]}.bind(null,o));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="";var a=window.webpackJsonp=window.webpackJsonp||[],u=a.push.bind(a);a.push=t,a=a.slice();for(var c=0;c<a.length;c++)t(a[c]);var l=u;i.push([95,1]),n()}({66:function(e,t,n){e.exports=n.p+"public/assets/images/heroPlane.png"},67:function(e,t,n){e.exports=n.p+"public/assets/images/enemyPlane.png"},68:function(e,t,n){e.exports=n.p+"public/assets/images/gameBG.png"},94:function(e,t,n){},95:function(e,t,n){"use strict";n.r(t);n(38);var o=n(66),r=n.n(o);n(73),n(81),n(82);function i(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var s=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.posX=t,this.posY=n,this.r=2,this.startAngle=0,this.endAngle=2*Math.PI}var t,n,o;return t=e,(n=[{key:"update",value:function(){var e=G.context;e.beginPath(),e.arc(this.posX,this.posY,this.r,this.startAngle,this.endAngle),e.fill()}},{key:"newPos",value:function(){this.posY-=1,this.posY<10&&R.bullets.shift()}},{key:"checkCollision",value:function(){var e=this;R.enemyPlanes.forEach(function(t,n){var o,r,i,s,a,u,c,l,h;(o=e.posX,r=e.posY,i=e.r,s=e.r,a=t.posX,u=t.posY,c=t.width,l=t.height,o<a+c&&a<o+i&&r<u+l&&u<r+s)&&(R.enemyPlanes.splice(n,1),R.bullets=R.bullets.filter(function(t){return t.posY!==e.posY}),h=1,M.playerPoints+=h)})}}])&&i(t.prototype,n),o&&i(t,o),e}();function a(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var u=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.image=new Image,this.image.src=r.a,this.width=48,this.height=48,this.speedX=0,this.posX=285,this.posY=550}var t,n,o;return t=e,(n=[{key:"update",value:function(){G.context.drawImage(this.image,this.posX,this.posY,this.width,this.height)}},{key:"newPos",value:function(){this.posX=Math.max(Math.min(this.posX+this.speedX,572),-2)}},{key:"shootTheBullet",value:function(){R.bullets.push(new s(this.posX+24,this.posY)),M.bulletsDistance=0}}])&&a(t.prototype,n),o&&a(t,o),e}(),c=n(67),l=n.n(c);function h(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var f=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.image=new Image,this.image.src=l.a,this.width=32,this.height=32,this.speedX=M.directionFactor[Math.floor(3*Math.random())],this.speedY=1,this.posX=t,this.posY=n}var t,n,o;return t=e,(n=[{key:"newPos",value:function(){this.posY+=this.speedY,this.posX+=this.speedX,this.posY>620&&R.enemyPlanes.shift(),(this.posX<1||this.posX>587)&&(this.speedX*=-1)}},{key:"update",value:function(){G.context.drawImage(this.image,this.posX,this.posY,this.width,this.height)}},{key:"checkTheGoal",value:function(){590===this.posY&&M.playerHealth--}}])&&h(t.prototype,n),o&&h(t,o),e}();function p(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var y=function(){function e(t,n,o){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.size="30px",this.font="Consolas",this.posX=t,this.posY=n,this.color="black",this.counter=0,this.text=o}var t,n,o;return t=e,(n=[{key:"update",value:function(){var e=G.context;e.font=this.size+" "+this.font,e.fillStyle=this.color,e.fillText(this.text,this.posX,this.posY)}},{key:"setText",value:function(e){this.text=e}},{key:"count",value:function(){this.counter++}},{key:"resetCounter",value:function(){this.counter=0}}])&&p(t.prototype,n),o&&p(t,o),e}();n(52),n(55),n(56),n(36),n(89),n(61),n(62),n(63),n(92),n(64),n(65);function d(e){return(d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function b(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function v(e,t){return!t||"object"!==d(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function m(e,t,n){return(m="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var o=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=g(e)););return e}(e,t);if(o){var r=Object.getOwnPropertyDescriptor(o,t);return r.get?r.get.call(n):r.value}})(e,t,n||e)}function g(e){return(g=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function w(e,t){return(w=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var P=function(e){function t(e,n,o,r,i){var s;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(s=v(this,g(t).call(this,e,n,o,r,i))).speedX=2,s.color="red",s.text="ALIEN SHOOTER",s}var n,o,r;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&w(e,t)}(t,y),n=t,(o=[{key:"newPos",value:function(){if(m(g(t.prototype),"count",this).call(this),!(this.posX<203))return this.counter>560&&this.moveRigth(),1120===this.counter?(R.enemyPlanes=[],R.bullets=[],M.playerHealth=6,M.playerPoints=0,M.bulletsDistance=0,M.enemyGenerationCounter=0,M.gameStatus="running",m(g(t.prototype),"resetCounter",this).call(this),void(this.posX=-400)):void 0;this.moveRigth()}},{key:"moveRigth",value:function(){this.posX+=this.speedX}}])&&b(n.prototype,o),r&&b(n,r),t}();function O(e){return(O="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function k(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function x(e,t){return!t||"object"!==O(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function X(e){return(X=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function Y(e,t){return(Y=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var j=function(e){function t(e,n,o,r,i){var s;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(s=x(this,X(t).call(this,e,n,o,r,i))).speedY=2,s.color="red",s.text="GAME OVER",s}var n,o,r;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&Y(e,t)}(t,y),n=t,(o=[{key:"newPos",value:function(){this.counter++,this.posY<300&&(this.posY+=this.speedY),560===this.counter&&(M.gameStatus="stop",this.counter=0,this.posY=-50)}}])&&k(n.prototype,o),r&&k(n,r),t}(),S=n(68),E=n.n(S);function T(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var C=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.image=new Image,this.image.src=E.a,this.width=618,this.height=824,this.speedY=.5,this.posX=0,this.posY=t}var t,n,o;return t=e,(n=[{key:"newPos",value:function(){"running"===M.gameStatus&&(this.posY+=this.speedY,824===this.posY&&(this.posY=-822))}},{key:"update",value:function(){G.context.drawImage(this.image,this.posX,this.posY,this.width,this.height)}}])&&T(t.prototype,n),o&&T(t,o),e}();n(94);n.d(t,"parameters",function(){return M}),n.d(t,"components",function(){return R}),n.d(t,"myGameArea",function(){return G});var _=document.querySelector("#startButton"),M={gameStatus:"stop",leftPressed:!1,rightPressed:!1,spacePressed:!1,directionFactor:[-1,0,1],enemyGenerationCounter:0,bulletsDistance:0,playerPoints:0,playerHealth:6},R={heroPlane:null,enemyPlanes:[],bullets:[],background:[]},G={canvas:document.createElement("canvas"),start:function(){this.canvas.width=618,this.canvas.height=620,this.context=this.canvas.getContext("2d"),document.body.insertBefore(this.canvas,document.body.childNodes[0]),this.interval=setInterval(I,10)},clear:function(){this.context.clearRect(0,0,this.canvas.width,this.canvas.height)}};function I(){switch(G.clear(),R.background.forEach(function(e){e.newPos(),e.update()}),M.gameStatus){case"start":R.startView.update(),R.startView.newPos();break;case"running":M.playerHealth>0?(M.enemyGenerationCounter+=1,M.enemyGenerationCounter>Math.floor(4e3*Math.random())+50&&(R.enemyPlanes.push(new f(Math.floor(588*Math.random()),-40)),M.enemyGenerationCounter=0),M.bulletsDistance+=3,R.heroPlane.newPos(),R.heroPlane.update(),R.bullets.forEach(function(e){e.update(),e.newPos(),e.checkCollision()}),M.spacePressed&&M.bulletsDistance>50&&R.bullets.length<=15&&R.heroPlane.shootTheBullet(),R.enemyPlanes.forEach(function(e){e.update(),e.newPos(),e.checkTheGoal()})):M.gameStatus="end";break;case"end":R.endView.update(),R.endView.newPos()}R.scoreText.update(),R.scoreText.setText("SCORE: "+M.playerPoints),R.livesText.update(),R.livesText.setText("LIVES: "+M.playerHealth)}document.addEventListener("keydown",function(e){e.preventDefault();var t=e.keyCode;37==t?(M.leftPressed=!0,R.heroPlane.speedX=-2):39==t?(M.rightPressed=!0,R.heroPlane.speedX=2):32===t&&(M.spacePressed=!0)}),document.addEventListener("keyup",function(e){e.preventDefault();var t=e.keyCode;37===t?(M.leftPressed=!1,R.heroPlane.speedX=0,M.rightPressed&&(R.heroPlane.speedX=2)):39===t?(M.rightPressed=!1,R.heroPlane.speedX=0,M.leftPressed&&(R.heroPlane.speedX=-2)):32===t&&(M.spacePressed=!1)}),document.addEventListener("DOMContentLoaded",function(){return R.heroPlane=new u,R.startView=new P(-400,300),R.endView=new j(236,-50),R.scoreText=new y(15,30),R.livesText=new y(470,30),R.background=[new C(0),new C(-823)],void G.start()}),_.addEventListener("click",function(){M.gameStatus="start"})}});
//# sourceMappingURL=app.519e89e7.js.map