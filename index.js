const today = new Date(); 
const nextWeek = new Date(today.getTime() + 7*24*60*60*1000); //Gets the date in one week from today

$(function() { //Function for the dateRangePicker
  const x=1
    $('input[name="daterange"]').daterangepicker({
      opens: 'center',
      drops: 'down',
      showDropdowns: true,
      alwaysShowCalendars: true,
      minDate: today,
      startDate: today,
      endDate: nextWeek,
      autoApply: true
      //isInvalidDate: function(date) { //This function is for any dates that can't be selected
        //if (date.format('YYYY-M-D') == '2019-10-25') {
        //    return true; 
        //}
    //}
      });
});
