
// creating a content variable so that i can insert my combined data into the html page //
const mealList = document.getElementById('meal');

// get the search text //
window.onload = () => {
	
	const searchFieldElement = document.getElementById("searchField");
	document.getElementById("get_meal").onclick = (event) => {
		searchMeal(searchFieldElement.value);
	};
}

// send request to api using the fetch method //
function searchMeal(query) {
	const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`;
	fetch(url)

	//turn the response into json so that we can work with the data //
	.then(response => response.json())
	.then(data => {

		//view data on the console to make sure you are getting data from api//
		console.log(data)

		//clears the previous results every time you search//
		let html = "";

		//working though the data, pullling info and inserting into html//
        if(data.meals){

			//this is so you will replicate this format for every meal//
            data.meals.forEach(meal => {
                html += `
                    <div  data-id = "${meal.idMeal}">
                        <div>
                            <img src = "${meal.strMealThumb}" alt = "food">
                        </div>
                        <div class = "meal-name">
                            <h3>${meal.strMeal}</h3>
                            <a href = "${meal.strYoutube}" class = "recipe-btn">Watch Video</a>
                        </div>
                    </div>
                `;
            });

			//removes no found text //
            mealList.classList.remove('notFound');
        } else{

			//no recipe found text//
            html = "we didn't find any meal";
			//inserts into page
            mealList.classList.add('notFound');
        }
        mealList.innerHTML = html;
    });
}
	

