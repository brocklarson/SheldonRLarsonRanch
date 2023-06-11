const today = new Date(); 
const nextWeek = new Date(today.getTime() + 7*24*60*60*1000); //Gets the date in one week from today
let urlStartDate, urlEndDate;

function parseURL(){
  const url= window.location.search;
  const urlCabinParse = url.substring(url.indexOf("selectCabin")+12,url.indexOf("&daterange"));
  document.getElementById('cabin-selection').value=urlCabinParse; //Sets the cabin on the bookNow page
  const urlDateParse = url.substring(url.indexOf("daterange")+10).replace(/%2F/gi, "/"); //Gets the date range from the URL
  const urlStartDateParse = urlDateParse.substring(0,10); //Parses for the start date
  const urlEndDateParse = urlDateParse.substring(13,23); //Parses for the end date
 
  return [urlStartDateParse, urlEndDateParse]
}
if(window.location.search != "") [urlStartDate, urlEndDate] = parseURL(); 

$(function() { //Function for the dateRangePicker
  const x=1
    $('input[name="daterange"]').daterangepicker({
      opens: 'center',
      drops: 'down',
      showDropdowns: true,
      alwaysShowCalendars: true,
      minDate: today,
      startDate: window.location.search == "" ? today : urlStartDate,
      endDate: window.location.search == "" ? nextWeek : urlEndDate,
      autoApply: true
      //isInvalidDate: function(date) { //This function is for any dates that can't be selected
        //if (date.format('YYYY-M-D') == '2019-10-25') {
        //    return true; 
        //}
    //}
      });
});