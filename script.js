document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault();
  
    var name = document.getElementById("name").value;
    var year = document.getElementById("year").value;
    var Branch = document.getElementById("Branch").value;
    var Total_Fees_Paid = document.getElementById("Total_Fees_Paid").value;
    
  
    var card = document.createElement("div");
    card.classList.add("col-md-4", "mb-4");
  
    var cardBody = document.createElement("div");
    cardBody.classList.add("card", "p-3");
  
    var nameElement = document.createElement("p");
    nameElement.classList.add("card-text");
    nameElement.innerText = "Name: " + name;
  
    var yearElement = document.createElement("p");
    yearElement.classList.add("card-text");
    yearElement.innerText = "Year: " + year;
  
    var BranchElement = document.createElement("p");
    BranchElement.classList.add("card-text");
    BranchElement.innerText = "Student Branch: " + Branch;

    var feesElement = document.createElement("p");
    feesElement.classList.add("card-text");
    feesElement.innerText = "Total_Fees_Paid: " + Total_Fees_Paid;
  
    cardBody.appendChild(nameElement);
    cardBody.appendChild(yearElement);
    cardBody.appendChild(BranchElement);
    cardBody.appendChild(feesElement);

    card.appendChild(cardBody);
  
    var output = document.getElementById("output");
    output.appendChild(card);
  });
  