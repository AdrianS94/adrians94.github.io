fetch("https://tribustest.free.beeceptor.com/api/people")
  .then((response) => response.json())
  .then((data) => {
    const content = data.map((item) => {
      if (item.gender === "Male") {
        return `<div class="card-male">
                        <h2>First Name: ${item.first_name}</h2>
                        <h2>Last Name: ${item.last_name}</h2>
                        <p>email: ${item.email}</p>
                        <p>gender: ${item.gender}</p>
                    </div>`;
      } else if (item.gender === "Female") {
        return `<div class="card-female">
                        <h2>First Name: ${item.first_name}</h2>
                        <h2>Last Name: ${item.last_name}</h2>
                        <p>email: ${item.email}</p>
                        <p>gender: ${item.gender}</p>
                    </div>`;
      }
    });
    document.getElementById("wrapper").innerHTML = content.join("");
  });