$(document).ready(function(){
    $("#signup-form").validate({
        rules:{
            fname:{
                required:true,
                minlength:4
            },
            emailaddress:{
                required:true,
                email:true
            },
            subject:{
                required:true
            },
            message:{
                required:true,
                minlength:20

            }
        }
    })
})