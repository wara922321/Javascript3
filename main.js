function search(text){
  $(".keyword-list").each(function(index, element){
      let keyword = $(element).text();
      if(keyword.indexOf(text) === -1){
          $(element).parent().css("display", "none");
      }else{
          $(element).parent().css("display", "block");
      }
  });
}

$(".input-text").on("input", function(event){
  let text = $(".input-text").val();
  if(text === ""){
      $(".filter-img").css("display", "block");
  }else{
      search(text);
  }
});