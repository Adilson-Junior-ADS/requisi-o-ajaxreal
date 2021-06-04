$(document).ready(
    function GETUsers(){
    $.ajax({
            type:'GET',
            url:'http://10.0.0.107:9000/users',
            success: function(data){
                $.each(data, function(i, user){
                    $('#tabela_user').append(
                        '<tr> ' +
                        '<td>'+user.guuid+'</td>'+
                        '<td>'+user.nomr+'</td>'+
                        '<td>'+user.CPF+'</td>'+
                        '<td>'+user.Cargo+'</td>'+
                        '<td>'+user.Endereço+'</td>'+
                        '</tr>'
                    )

                })
            },
            error: function(data){
                console.log(data)
            }
        })
    
    }
)    
