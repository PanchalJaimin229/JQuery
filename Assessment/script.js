
  // day-date function
  $(function showday(){

    function getMonthsName(m_no){
      let months_name = ['January', 'February', 'March', 'April', 'May','June', 'July', 'August', 'September', 'October','November', 'December'];
  
      return months_name[m_no];
     }

     function getWeekName(day){
      let week_name = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

      return week_name[day];
     }



    let dt = new Date();
    // weeks
    let day = dt.getDay();
    let weekName = getWeekName(day);
    let m = dt.getMonth();
    let month = getMonthsName(m);
    let d = dt.getDate();
    let year = dt.getFullYear();

    
   

    // 0-9 logic in day date format
    d = d<10 ? "0"+d : d;

    let days = weekName  + ","+ " " + month + " " + d + "," + " " + year;

    $("#day").html(days);
  })

  // time  function
  $(function showtime(){
      let dt = new Date();
    var h = dt.getHours();
    let m = dt.getMinutes();
    let s = dt.getSeconds();
    var session = "PM";

    // 12 hours logic
    if(h>12){
      h = h - 12; //(h= h-12 ) h = 13 -12 =1
    }

    // AM to PM logic/functionality
    if(h>=12){
      session ="AM";
    }

    // 0-9 clock format logic
     h = h<10 ? "0"+h : h;
     m = m<10 ? "0"+m : m;
     s = s<10 ? "0"+s : s;
    

    let clock = h  + ":" + m + ":" + s + " " + session;

    $(".after").html(clock);

    setInterval(showtime, 1000);
  })