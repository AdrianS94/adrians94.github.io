fetch("https://tribustest.free.beeceptor.com/api/people")
  .then((response) => response.json())
  .then((data) => {
    const content = data.map((item) => {
      if (item.gender === "Male") {
        return `<div class="card-male">
                        <img src="male.png" alt="">
                        <h2>First Name: ${item.first_name}</h2>
                        <h2>Last Name: ${item.last_name}</h2>
                        <p><i class="far fa-envelope"></i>email: ${item.email}</p>
                        <p>gender: ${item.gender}<i class="fas fa-male"></i></p>
                    </div>`;
      } else if (item.gender === "Female") {
        return `<div class="card-female">
                        <img src="female.png" alt="">
                        <h2>First Name: ${item.first_name}</h2>
                        <h2>Last Name: ${item.last_name}</h2>
                        <p><i class="far fa-envelope"></i>email: ${item.email}</p>
                        <p>gender: ${item.gender}<i class="fas fa-female"></i></p>
                    </div>`;
      }
    });
    document.getElementById("wrapper").innerHTML = content.join("");
  });