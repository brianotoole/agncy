/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(0);

$(document).ready(function() {

});

$('#nav-toggle').on('click', function() {
  $('body').toggleClass('nav-open');
  //$('.line').toggleClass('fillWidth');
});

$(document).keyup(function(e) {
  var body = $('body');
  if (body.is('.nav-open') && e.keyCode == '27') {
    $('body').toggleClass('nav-open');
  }
});

// get shape of svg for anim
/*
var shape = document.querySelector('#lines');
var shapeLength = shape.getTotalLength();
console.log(shapeLength); //1689.4237060546875
*/



// Create Item
/*
$('.submit-item').on('click', function (event) {
    event.preventDefault(); // Stop form from causing a page refresh.
    var data = {};
		data.name = $("#submit-form").find("input").val();
    $.ajax({
        type: 'POST',
        data: JSON.stringify(data),
        contentType:'application/json',
        url: '/create',
        success: function(data) {
            //console.log(data);
            var name = data.name;
            var id = data.id;
            var itemHtml = '<li class="item" data-id="'+id+'"><a href="/delete/'+id+'">X</a><span>'+name+'</span>';
            $('ul.items').append(itemHtml);
            $("#submit-form").find("input").val('');
        }
    });
});

// Delete Item
$('li.item').on('click', function (event) {
  event.preventDefault();
  var id = $(this).attr('data-id');
  $(this).remove();
  $.ajax({
      type: 'GET',
      data: id,
      contentType:'application/json',
      url: '/delete/'+id
  });
});

// Login form validation
$('#login-form').submit(function(e) {
    e.preventDefault();
    var email = $('input#email').val();
    var password = $('input#password').val();

    if(email == "" && password == ""){
      $('.error.email').text("Please enter an email address.");
       $('.error.pass').text("Please enter a password.");
       $('#email').focus();
       setTimeout(function(){
             $('.error.pass').text("");
             $('.error.email').text("");
           }, 2000);
       return false;
    }

    if(email == ""){
       $('.error.email').text("Please enter an email address.");
       $('#email').focus();
       setTimeout(function(){
             $('.error.email').text("");
           }, 2000);
       return false;
    }

    if(password == ""){
       $('.error.pass').text("Please enter a password.");
       $('#password').focus();
       setTimeout(function(){
             $('.error.pass').text("");
           }, 2000);
       return false;
    }

    if(username != '' && password != '') {
        $.ajax({
            url: '/login',
            type: 'POST',
            data: {
                username: username,
                password: password
            },
            success: function(data) {
                console.log(data);
                // It looks like the page that handles the form returns JSON
                // Parse the JSON
                var obj = JSON.parse(data);

                if(obj.result != 'invalid') {
                    console.log('hi');
                }
            }
        });
    }
});
*/


/***/ })
/******/ ]);