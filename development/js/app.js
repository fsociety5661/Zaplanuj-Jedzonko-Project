//reload
const userName = document.querySelector(".user-name");
userName.addEventListener("click", ev => {
    location.reload();
});

// add name
const a = document.querySelector(".mesage_form_button");
const b = document.querySelector(".message_form_container").querySelector("input")
const messageForm = document.querySelector(".message_form");
const dashboard = document.querySelector(".app__dashboard");
a.addEventListener ("click", ev => {
    userName.innerText = b.value;
    if (b.value.length < 0){
        dashboard.style.display = "none";
        messageForm.style.display = "block";
    } else {
        dashboard.style.display = "block";
        messageForm.style.display = "none";
    }

    // const savedUserName =  b.value;
    // localStorage.setItem('savedName' , savedUserName);
    // console.log("Twoje imię to: ", localStorage.savedUserName);
});

// desktop.addEventListener ("click", ev => {
//     dashboard.style.display = "block";
//     messageForm.style.display = "none";
// });

//close info in dash board
const closeInfo = document.querySelectorAll(".widget");
closeInfo.forEach ( el => {
    el.lastElementChild.addEventListener("click", ev => {
        el.parentElement.removeChild(el);
    });
});

//add recipie
const addRecipes = document.querySelector(".add__recipes");
const newRecipes = document.querySelector(".new_recipes");
const newRecipesTitle = document.querySelector(".new_recipes_title");
addRecipes.addEventListener ("click", ev => {
    newRecipesTitle.innerText = "NOWY PRZEPIS";
    dashboard.style.display = "none";
    newRecipes.style.display = "block";
});

//edit recipe
const editRecipe = document.querySelector(".app__recipies").querySelectorAll(".action__edit");
editRecipe.forEach(el => {
    el.addEventListener("click", ev => {
        const recipeRow = el.parentElement.parentElement;
        let recipeName = document.querySelector("#recipe_title");
        let recipeDescription = document.querySelector("#recipe_description");
        recipeName.value = recipeRow.querySelector(".col__2").innerText;
        recipeDescription.value = recipeRow.querySelector(".col__3").innerText;
        newRecipesTitle.innerText = "EDYCJA PRZEPISU";
        appRecipies.style.display="none";
        newRecipes.style.display = "block";
    });
});

const instructions = document.querySelector(".instructions");
const instructionsTextarea = instructions.querySelector("textarea");
const instructionsButton = instructions.querySelector("i");
const instructionsList = instructions.querySelector(".instructions_list");
instructionsButton.addEventListener("click", ev => {
    newLi = document.createElement("li");
    newLi.innerText = instructionsTextarea.value;
    instructionsList.appendChild(newLi);
    instructionsTextarea.value = null;
});

const ingredients = document.querySelector(".ingredients");
const ingredientsTextarea = ingredients.querySelector("textarea");
const ingredientsButton = ingredients.querySelector("i");
const ingredientsList = ingredients.querySelector(".ingredients_list");
ingredientsButton.addEventListener("click", ev => {
    newLi = document.createElement("li");
    newLi.innerText = ingredientsTextarea.value;
    ingredientsList.appendChild(newLi);
    ingredientsTextarea.value = null;
});

//close and save new recipe
const newRecipesButton = document.querySelector(".new_recipes_button");
const recipesList = document.querySelector(".recipies__list");
newRecipesButton.addEventListener ("click", ev => {
    const recipeID = parseInt(recipesList.lastElementChild.id) + 1;
    let recipeName = document.querySelector("#recipe_title");
    let recipeDescription = document.querySelector("#recipe_description");
    let newDIV = document.createElement("div");
    newDIV.classList.add("recipie");
    newDIV.id = recipeID;
    newDIV.innerHTML = `<div class="col col__1">${recipeID}</div><div class="col col__2">${recipeName.value}</div>
    <div class="col col__3">${recipeDescription.value}</div>
    <div class="col col__4">
    <div class="action action__edit"></div>
    <div class="action action__remove"></div>
    </div>`;
    recipesList.appendChild(newDIV);
    newRecipes.style.display = "none";
    appRecipies.style.display = "block";
    recipeName.value = null;
    recipeDescription.value = null;
    const actionRemove = document.querySelectorAll(".action__remove");
    actionRemove.forEach( el => {
        el.addEventListener ("click", ev => {
            const recipieToRemove = el.parentElement.parentElement;
            recipieToRemove.parentElement.removeChild(recipieToRemove);
        });
    });
});

//add plan
const addPlanDashboard = document.querySelector(".add__plan");
addPlanDashboard.addEventListener ("click", ev => {
    addPlan.style.display = "block";
    dashboard.style.display = "none";
});

const addPlan = document.querySelector(".addplan");
const saveClose = document.querySelector(".addplan").querySelector(".button");
const tablePlan = document.querySelector(".addplan").querySelector("tbody").querySelectorAll("tr");
const tableFill = document.querySelector(".yourplan").querySelector("tbody").querySelectorAll("tr");

saveClose.addEventListener ("click", ev => {
    let tableFilled = [[], [], [], [], []];
    tablePlan.forEach (el => {
        el.querySelectorAll("td").forEach ((el, i) => {
            tableFilled[i].push(el.querySelector("select").value);
        });
    });
    // console.log(tableFilled);
    tableFill.forEach ((el, i) => {
        el.querySelectorAll("td").forEach ((el, j) => {
            el.innerText = tableFilled[i][j];
        });
    });
    addPlan.style.display = "none";
    appPlan.style.display = "block";
});

//left site buttons
const desktop = document.querySelector(".desktop");
const recipes = document.querySelector(".recipes");
const plans = document.querySelector(".plans");
const appPlan = document.querySelector(".app__plan");
const appRecipies = document.querySelector(".app__recipies");
desktop.addEventListener ("click", ev => {
    dashboard.style.display = "block";
    messageForm.style.display = "none";
    appRecipies.style.display="none";
    appPlan.style.display="none";
    addPlan.style.display="none";
    newRecipes.style.display="none";
});
recipes.addEventListener ("click", ev => {
    appRecipies.style.display="block";
    dashboard.style.display = "none";
    messageForm.style.display = "none";
    appPlan.style.display="none";
    addPlan.style.display="none";
    newRecipes.style.display="none";
});
plans.addEventListener ("click", ev => {
    appPlan.style.display="block";
    dashboard.style.display = "none";
    messageForm.style.display = "none";
    appRecipies.style.display="none";
    addPlan.style.display="none";
    newRecipes.style.display="none";
});

const appRecipiesClose = document.querySelector(".app__recipies__close");
appRecipiesClose.addEventListener ("click", ev => {
    appRecipies.style.display="none";
    newRecipes.style.display = "block";
});

const appPlansClose = document.querySelector(".app__plans__close");
appPlansClose.addEventListener ("click", ev => {
    appPlan.style.display="none";
    addPlan.style.display = "block";
});

// remove recipe and plan
const actionRemove = document.querySelectorAll(".action__remove");
actionRemove.forEach( el => {
    el.addEventListener ("click", ev => {
        const recipieToRemove = el.parentElement.parentElement;
        recipieToRemove.parentElement.removeChild(recipieToRemove);
    });
});