   let toggleButton = document.querySelector(".darkmodeToggler");
   let isDarkMode = false;
   let heading = document.querySelector(' .container h1')
    toggleButton.addEventListener("click",darkmode)
    function darkmode()
    {
        let body = document.querySelector("body");
        body.classList.toggle("darkmode");
        isDarkMode = !isDarkMode;
        if(isDarkMode == true)
        {
            heading.innerHTML = "Dark Mode"
        }
        else
        {
            heading.innerHTML = "Light Mode"
        }
        
    }
