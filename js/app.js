$(document).ready(function(){
	console.log("document is ready");
	$("#js-shopping-list-form").submit(function(event){
		event.preventDefault();
		var $newItem = $('#js-shopping-list-form :input').first().val();
		AddListItem($newItem);
		$("#js-shopping-list-form input").first().val("");
	});

	$(".shopping-list").on("click", ".shopping-item-toggle",function(event){
		$(this).parent().siblings(".shopping-item").toggleClass("shopping-item__checked");
	} )

	$(".shopping-list").on("click", ".shopping-item-delete",function(event){
		$(this).parents("li").remove();
	} )

});

function AddListItem(itemToAdd){
	$(".shopping-list").append(`<li>
        <span class="shopping-item">`
        +itemToAdd+
        `</span>
        <div class="shopping-item-controls">
          <button class="shopping-item-toggle">
            <span class="button-label">check</span>
          </button>
          <button class="shopping-item-delete">
            <span class="button-label">delete</span>
          </button>
        </div>
      </li>`);
}
