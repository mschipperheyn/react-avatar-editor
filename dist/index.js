!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t(require("prop-types"),require("react"),require("react-dom")):"function"==typeof define&&define.amd?define(["prop-types","react","react-dom"],t):e.AvatarEditor=t(e.PropTypes,e.React,e.ReactDOM)}(this,function(e,t,o){"use strict";function i(e,t){return new Promise(function(o,i){var n,a=new Image;a.onload=function(){return o(a)},a.onerror=i,!1==(null!==(n=e)&&!!n.match(/^\s*data:([a-z]+\/[a-z]+(;[a-z-]+=[a-z-]+)?)?(;base64)?,[a-z0-9!$&',()*+;=\-._~:@/?%\s]*\s*$/i))&&t&&(a.crossOrigin=t),a.src=e})}e=e&&e.hasOwnProperty("default")?e.default:e,t=t&&t.hasOwnProperty("default")?t.default:t,o=o&&o.hasOwnProperty("default")?o.default:o;var n=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},a=function(){function e(e,t){for(var o=0;o<t.length;o++){var i=t[o];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,o,i){return o&&e(t.prototype,o),i&&e(t,i),t}}(),r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var i in o)Object.prototype.hasOwnProperty.call(o,i)&&(e[i]=o[i])}return e},s=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},h=function(){return function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var o=[],i=!0,n=!1,a=void 0;try{for(var r,s=e[Symbol.iterator]();!(i=(r=s.next()).done)&&(o.push(r.value),!t||o.length!==t);i=!0);}catch(e){n=!0,a=e}finally{try{!i&&s.return&&s.return()}finally{if(n)throw a}}return o}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),u=function(e){var t=!1;return{promise:new Promise(function(o,i){e.then(function(e){return t?i({isCanceled:!0}):o(e)},function(e){return i(t?{isCanceled:!0}:e)})}),cancel:function(){t=!0}}},c=!("undefined"==typeof window||"undefined"==typeof navigator||!("ontouchstart"in window||navigator.msMaxTouchPoints>0)),d="undefined"!=typeof File,p={touch:{react:{down:"onTouchStart",mouseDown:"onMouseDown",drag:"onTouchMove",move:"onTouchMove",mouseMove:"onMouseMove",up:"onTouchEnd",mouseUp:"onMouseUp"},native:{down:"touchstart",mouseDown:"mousedown",drag:"touchmove",move:"touchmove",mouseMove:"mousemove",up:"touchend",mouseUp:"mouseup"}},desktop:{react:{down:"onMouseDown",drag:"onDragOver",move:"onMouseMove",up:"onMouseUp"},native:{down:"mousedown",drag:"dragStart",move:"mousemove",up:"mouseup"}}},l=c?p.touch:p.desktop,g="undefined"!=typeof window&&window.devicePixelRatio?window.devicePixelRatio:1,m={x:.5,y:.5},v=function(e){function p(){var e,t,o;n(this,p);for(var i=arguments.length,a=Array(i),h=0;h<i;h++)a[h]=arguments[h];return t=o=s(this,(e=p.__proto__||Object.getPrototypeOf(p)).call.apply(e,[this].concat(a))),o.state={drag:!1,my:null,mx:null,image:m},o.handleImageReady=function(e){var t=o.getInitialSize(e.width,e.height);t.resource=e,t.x=.5,t.y=.5,o.setState({drag:!1,image:t},o.props.onImageReady),o.props.onLoadSuccess(t)},o.clearImage=function(){var e=o.canvas;e.getContext("2d").clearRect(0,0,e.width,e.height),o.setState({image:m})},o.handleMouseDown=function(e){(e=e||window.event).preventDefault(),o.setState({drag:!0,mx:null,my:null})},o.handleMouseUp=function(){o.state.drag&&(o.setState({drag:!1}),o.props.onMouseUp())},o.handleMouseMove=function(e){if(e=e||window.event,!1!==o.state.drag){e.preventDefault();var t=e.targetTouches?e.targetTouches[0].pageX:e.clientX,i=e.targetTouches?e.targetTouches[0].pageY:e.clientY,n={mx:t,my:i},a=o.props.rotate;if(a=(a%=360)<0?a+360:a,o.state.mx&&o.state.my){var s=o.state.mx-t,h=o.state.my-i,u=o.state.image.width*o.props.scale,c=o.state.image.height*o.props.scale,d=o.getCroppingRect(),p=d.x,l=d.y;p*=u,l*=c;var g=function(e){return e*(Math.PI/180)},m=Math.cos(g(a)),v=Math.sin(g(a)),f=l+-s*v+h*m,y={x:(p+s*m+h*v)/u+1/o.props.scale*o.getXScale()/2,y:f/c+1/o.props.scale*o.getYScale()/2};o.props.onPositionChange(y),n.image=r({},o.state.image,y)}o.setState(n),o.props.onMouseMove(e)}},o.setCanvas=function(e){o.canvas=e},s(o,t)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(p,t.Component),a(p,[{key:"componentDidMount",value:function(){this.props.disableHiDPIScaling&&(g=1);var e=o.findDOMNode(this.canvas).getContext("2d");if(this.props.image&&this.loadImage(this.props.image),this.paint(e),document){var t=!!function(){var e=!1;try{var t=Object.defineProperty({},"passive",{get:function(){e=!0}});window.addEventListener("test",t,t),window.removeEventListener("test",t,t)}catch(t){e=!1}return e}()&&{passive:!1},i=l.native;document.addEventListener(i.move,this.handleMouseMove,t),document.addEventListener(i.up,this.handleMouseUp,t),c&&(document.addEventListener(i.mouseMove,this.handleMouseMove,t),document.addEventListener(i.mouseUp,this.handleMouseUp,t))}}},{key:"componentDidUpdate",value:function(e,t){this.props.image&&this.props.image!==e.image||this.props.width!==e.width||this.props.height!==e.height?this.loadImage(this.props.image):this.props.image||this.clearImage();var i=o.findDOMNode(this.canvas),n=i.getContext("2d");n.clearRect(0,0,i.width,i.height),this.paint(n),this.paintImage(n,this.state.image,this.props.border),e.image===this.props.image&&e.width===this.props.width&&e.height===this.props.height&&e.position===this.props.position&&e.scale===this.props.scale&&e.rotate===this.props.rotate&&t.my===this.state.my&&t.mx===this.state.mx&&t.image.x===this.state.image.x&&t.image.y===this.state.image.y||this.props.onImageChange()}},{key:"componentWillUnmount",value:function(){if(document){var e=l.native;document.removeEventListener(e.move,this.handleMouseMove,!1),document.removeEventListener(e.up,this.handleMouseUp,!1),c&&(document.removeEventListener(e.mouseMove,this.handleMouseMove,!1),document.removeEventListener(e.mouseUp,this.handleMouseUp,!1))}}},{key:"isVertical",value:function(){return this.props.rotate%180!=0}},{key:"getBorders",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.props.border;return Array.isArray(e)?e:[e,e]}},{key:"getDimensions",value:function(){var e=this.props,t=e.width,o=e.height,i=e.rotate,n=e.border,a={},r=this.getBorders(n),s=h(r,2),u=s[0],c=s[1],d=t,p=o;return this.isVertical()?(a.width=p,a.height=d):(a.width=d,a.height=p),a.width+=2*u,a.height+=2*c,{canvas:a,rotate:i,width:t,height:o,border:n}}},{key:"getImage",value:function(){var e=this.getCroppingRect(),t=this.state.image;e.x*=t.resource.width,e.y*=t.resource.height,e.width*=t.resource.width,e.height*=t.resource.height;var o=document.createElement("canvas");this.isVertical()?(o.width=e.height,o.height=e.width):(o.width=e.width,o.height=e.height);var i=o.getContext("2d");return i.translate(o.width/2,o.height/2),i.rotate(this.props.rotate*Math.PI/180),i.translate(-o.width/2,-o.height/2),this.isVertical()&&i.translate((o.width-o.height)/2,(o.height-o.width)/2),i.drawImage(t.resource,-e.x,-e.y),o}},{key:"getImageScaledToCanvas",value:function(){var e=this.getDimensions(),t=e.width,o=e.height,i=document.createElement("canvas");return this.isVertical()?(i.width=o,i.height=t):(i.width=t,i.height=o),this.paintImage(i.getContext("2d"),this.state.image,0,1),i}},{key:"getXScale",value:function(){var e=this.props.width/this.props.height,t=this.state.image.width/this.state.image.height;return Math.min(1,e/t)}},{key:"getYScale",value:function(){var e=this.props.height/this.props.width,t=this.state.image.height/this.state.image.width;return Math.min(1,e/t)}},{key:"getCroppingRect",value:function(){var e=this.props.position||{x:this.state.image.x,y:this.state.image.y},t=1/this.props.scale*this.getXScale(),o=1/this.props.scale*this.getYScale(),i={x:e.x-t/2,y:e.y-o/2,width:t,height:o},n=0,a=1-i.width,s=0,h=1-i.height;return(this.props.disableBoundaryChecks||t>1||o>1)&&(n=-i.width,a=1,s=-i.height,h=1),r({},i,{x:Math.max(n,Math.min(i.x,a)),y:Math.max(s,Math.min(i.y,h))})}},{key:"loadImage",value:function(e){var t;d&&e instanceof File?this.loadingImage=u((t=e,new Promise(function(e,o){var n=new FileReader;n.onload=function(t){try{var n=i(t.target.result);e(n)}catch(t){o(t)}},n.readAsDataURL(t)}))).promise.then(this.handleImageReady).catch(this.props.onLoadFailure):"string"==typeof e&&(this.loadingImage=u(i(e,this.props.crossOrigin)).promise.then(this.handleImageReady).catch(this.props.onLoadFailure))}},{key:"getInitialSize",value:function(e,t){var o=void 0,i=void 0,n=this.getDimensions();return n.height/n.width>t/e?i=e*((o=this.getDimensions().height)/t):o=t*((i=this.getDimensions().width)/e),{height:o,width:i}}},{key:"paintImage",value:function(e,t,o){var i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:g;if(t.resource){var n=this.calculatePosition(t,o);e.save(),e.translate(e.canvas.width/2,e.canvas.height/2),e.rotate(this.props.rotate*Math.PI/180),e.translate(-e.canvas.width/2,-e.canvas.height/2),this.isVertical()&&e.translate((e.canvas.width-e.canvas.height)/2,(e.canvas.height-e.canvas.width)/2),e.scale(i,i),e.globalCompositeOperation="destination-over",e.drawImage(t.resource,n.x,n.y,n.width,n.height),e.restore()}}},{key:"calculatePosition",value:function(e,t){e=e||this.state.image;var o=this.getBorders(t),i=h(o,2),n=i[0],a=i[1],r=this.getCroppingRect(),s=e.width*this.props.scale,u=e.height*this.props.scale,c=-r.x*s,d=-r.y*u;return this.isVertical()?(c+=a,d+=n):(c+=n,d+=a),{x:c,y:d,height:u,width:s}}},{key:"paint",value:function(e){e.save(),e.scale(g,g),e.translate(0,0),e.fillStyle="rgba("+this.props.color.slice(0,4).join(",")+")";var t=this.props.borderRadius,o=this.getDimensions(),i=this.getBorders(o.border),n=h(i,2),a=n[0],r=n[1],s=o.canvas.height,u=o.canvas.width;t=Math.max(t,0),t=Math.min(t,u/2-a,s/2-r),e.beginPath(),function(e,t,o,i,n,a){if(0===a)e.rect(t,o,i,n);else{var r=i-a,s=n-a;e.translate(t,o),e.arc(a,a,a,Math.PI,1.5*Math.PI),e.lineTo(r,0),e.arc(r,a,a,1.5*Math.PI,2*Math.PI),e.lineTo(i,s),e.arc(r,s,a,2*Math.PI,.5*Math.PI),e.lineTo(a,n),e.arc(a,s,a,.5*Math.PI,Math.PI),e.translate(-t,-o)}}(e,a,r,u-2*a,s-2*r,t),e.rect(u,0,-u,s),e.fill("evenodd"),e.restore()}},{key:"render",value:function(){var e=this.props,o=(e.scale,e.rotate,e.image,e.border,e.borderRadius,e.width,e.height,e.position,e.color,e.style),i=(e.crossOrigin,e.onLoadFailure,e.onLoadSuccess,e.onImageReady,e.onImageChange,e.onMouseUp,e.onMouseMove,e.onPositionChange,e.disableBoundaryChecks,e.disableHiDPIScaling,function(e,t){var o={};for(var i in e)t.indexOf(i)>=0||Object.prototype.hasOwnProperty.call(e,i)&&(o[i]=e[i]);return o}(e,["scale","rotate","image","border","borderRadius","width","height","position","color","style","crossOrigin","onLoadFailure","onLoadSuccess","onImageReady","onImageChange","onMouseUp","onMouseMove","onPositionChange","disableBoundaryChecks","disableHiDPIScaling"])),n=this.getDimensions(),a={width:n.canvas.width,height:n.canvas.height,cursor:this.state.drag?"grabbing":"grab",touchAction:"none"},s={width:n.canvas.width*g,height:n.canvas.height*g,style:r({},a,o)};return s[l.react.down]=this.handleMouseDown,c&&(s[l.react.mouseDown]=this.handleMouseDown),t.createElement("canvas",r({ref:this.setCanvas},s,i))}}]),p}();return v.propTypes={scale:e.number,rotate:e.number,image:e.oneOfType([e.string].concat(function(e){if(Array.isArray(e)){for(var t=0,o=Array(e.length);t<e.length;t++)o[t]=e[t];return o}return Array.from(e)}(d?[e.instanceOf(File)]:[]))),border:e.oneOfType([e.number,e.arrayOf(e.number)]),borderRadius:e.number,width:e.number,height:e.number,position:e.shape({x:e.number,y:e.number}),color:e.arrayOf(e.number),crossOrigin:e.oneOf(["","anonymous","use-credentials"]),onLoadFailure:e.func,onLoadSuccess:e.func,onImageReady:e.func,onImageChange:e.func,onMouseUp:e.func,onMouseMove:e.func,onPositionChange:e.func,disableBoundaryChecks:e.bool,disableHiDPIScaling:e.bool},v.defaultProps={scale:1,rotate:0,border:25,borderRadius:0,width:200,height:200,color:[0,0,0,.5],onLoadFailure:function(){},onLoadSuccess:function(){},onImageReady:function(){},onImageChange:function(){},onMouseUp:function(){},onMouseMove:function(){},onPositionChange:function(){},disableBoundaryChecks:!1,disableHiDPIScaling:!1},v});
