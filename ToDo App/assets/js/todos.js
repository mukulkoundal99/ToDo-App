//Check off todos
$("ul").on("click","li",function(){
	$(this).toggleClass("completed");
});

//Click on X to delete todo
$("ul").on("click","span",function(event){
	$(this).parent().fadeOut(500,function(){
		$(this).remove();
	});
	event.stopPropagation();
});

$("input[type = 'text']").keypress(function(event){
	if(event.which === 13){
		//grabbing new todo text
		var todoText = $(this).val();
		$(this).val("");
		// create new li and add
		if(todoText){
			$("ul").append("<li><span><i class='fas fa-trash-alt'></i></span> " + todoText + "</li>");
		}
	}
});

$(".fa-pencil-alt").click(function(){
	$("input[type = 'text']").fadeToggle(400);
});