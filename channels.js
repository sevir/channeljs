/**
 * Channels permits the communication between windows, frames and local
 * pages related in DOM

The MIT License

Copyright (c) 2001 DIGIO S.L.N.E.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
 */

(function($) {
  $.channels =  function(){
	 	var openedChannels = [];
	 	var publishedMethods = [];
	 	var manager = 0;
	 	var _findManager = function(){
	 		if( top.window.opener && !top.window.opener.closed){
				manager = top.window.opener;
			}else{
				manager = top;
			}
			return manager;
	 	}

	 	return{
			openChannel: function(){

			},
			publishMethods: function(){

			},
			bind: function(){

			},
			unbind: function(){

			}
	 	}
	 }
})(jQuery);
