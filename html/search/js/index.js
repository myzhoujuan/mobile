
$(function () {
        $('#action_toutiao').on('tap',function(){
            $('.action-navigation').css('display','block');
        })
        $('.backdrop').on('tap',function(){
            $('.action-navigation').css('display','none');
        })
        var aANav=$('#navigation-categories li a');


    aANav.each(function(i){
        aANav.eq(i).on('tap',function(){
              //$('.action_toutiao').removeClass();
              $('#action_toutiao').removeClass().addClass('action_chooser action_'+this.className);
              $('.action-navigation').css('display','none');
//debugger;

              //$('.action_toutiao').addClass(' action_chooser');
              //$('.action_toutiao').addClass('action_'+this.className).addClass('action_chooser');
         })

      })

    $('#back_history').tap(function(){
        window.history.go(-1);
    })



})