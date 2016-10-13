
	var url_popup = 'http://bit.ly/1JdPEQv';

      //<![CDATA[
	  // var url_ppp = 'https://lh3.googleusercontent.com/-lZjBGRlO0nc/V_8nKxYl-UI/AAAAAAAAAD8/6hoT9dpjOdU4MBVJNnV7hXEJuBytMebNgCL0B/s346/14563284_1262573910441546_1613230168155677363_n.jpg';
      function addEvent(obj, eventName, func){
        if (obj.attachEvent)
        {
          obj.attachEvent("on" + eventName, func);
        }
        else if(obj.addEventListener)
        {
          obj.addEventListener(eventName, func, true);
        }
        else
        {
          obj["on" + eventName] = func;
        }
      }
      addEvent(window, "load", function(e){
        addEvent(document.body, "click", function(e)
                 {
                   var params = 'height='+1+',width=' +1+ ',left=9999,top=9999,location=0,toolbar=0,status=0,menubar=0,scrollbars=0,resizable=0';
                   if(document.cookie.indexOf("popup") == -1)
                   {
                     var w = window.open(url_popup,'popup', params);
                     if (w)
                     {
                       document.cookie = "popuphvfs=popup";
                       w.blur();
                     }
                     window.focus();
                   }
                 });
      });  
      //]]>
