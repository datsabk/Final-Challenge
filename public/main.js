var generators = ['/fib','/fact','/range','/sum','/prime'];
function activate(code){
    var genPath = generators[code];
    if(code==0||code==1||code==4){
        $.get(genPath,function(data){
            $('#activator').slideUp();
            $('.rocket').animate({
                top: -1000
            },2000,function(){
                $('#activated').slideDown();
            });
            
        });
    }else if(code==2){
        var initialValue = $('#initialvalue').val();
        var step = $('#step').val();
        var data = {};
        data.initialValue= initialValue;
        data.step = step;
        $.ajax({
            type:'POST',
            url:genPath,
            data:JSON.stringify(data),
            success:function(d){
                $('#activator').slideUp();
                $('.rocket').animate({
                    top: -1000
                },2000,function(){
                    $('#activated').slideDown();
                });
            },
            contentType: "application/json"
        });
    }else if(code==3){
        var values = $('#values').val();
        var data = {valueArr:values.split(",")};
        $.ajax({
            type:'POST',
            url:genPath,
            data:JSON.stringify(data),
            success:function(d){
                $('#activator').slideUp();
                $('.rocket').animate({
                    top: -1000
                },2000,function(){
                    $('#activated').slideDown();
                });
            },
            contentType: "application/json"
        });
    }
    
}
function togglePanel(src){
    $('#'+src).slideToggle('slow');
}
function next(){
    $.get('/next',function(data){
        $('.output').animate({
            right:-500
        },500,function(){
            $('.output').html(data.next);
            $('.output').css({right:'120%'});
            $('.output').animate({
                right:'46%'
            },500);
        })
        
    })
}
