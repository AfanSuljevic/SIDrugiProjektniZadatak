document.addEventListener("DOMContentLoaded", function() {
    const trainingCells = document.querySelectorAll("#schedule-table td");

    trainingCells.forEach(cell => {
      cell.addEventListener("click", function() {
        const treningName = cell.textContent.trim();
        displayTreningDetails(treningName);
      });
    });

    function displayTreningDetails(treningName) {
      const treningInfoDiv = document.getElementById("trening-info");

      let details = "";

      switch (treningName) {
        case "Joga":
          details = `
            <h3>Joga</h3>
            <ul>
              <li>Vrsta: Fleksibilnost i opuštanje</li>
              <li>Trajanje: 60 minuta</li>
              <li>Opis: Joga je vježba koja kombinuje fizičke položaje, disanje i meditaciju kako bi poboljšala fleksibilnost i smanjila stres.</li>
            </ul>
          `;
          break;
        case "HIIT":
          details = `
            <h3>HIIT</h3>
            <ul>
              <li>Vrsta: Visoko intenzivni intervalni trening</li>
              <li>Trajanje: 30 minuta</li>
              <li>Opis: HIIT trening je sastavljen od intervala visoke i niske intenzivnosti, dizajniran za sagorevanje masti i poboljšanje kondicije.</li>
            </ul>
          `;
          break;
        case "Pilates":
          details = `
            <h3>Pilates</h3>
            <ul>
              <li>Vrsta: Snaga i fleksibilnost</li>
              <li>Trajanje: 45 minuta</li>
              <li>Opis: Pilates se fokusira na snagu trupa, ravnotežu i fleksibilnost, koristeći kontrolisane pokrete.</li>
            </ul>
          `;
          break;
        case "Cardio":
          details = `
            <h3>Cardio</h3>
            <ul>
              <li>Vrsta: Kardio trening</li>
              <li>Trajanje: 45 minuta</li>
              <li>Opis: Kardio treniranje uključuje vježbe koje povećavaju broj otkucaja srca i poboljšavaju kardiovaskularnu izdržljivost.</li>
            </ul>
          `;
          break;
        case "Snaga":
          details = `
            <h3>Snaga</h3>
            <ul>
              <li>Vrsta: Trening sa težinama</li>
              <li>Trajanje: 60 minuta</li>
              <li>Opis: Trening snage koristi teške tegove za izgradnju mišića i povećanje snage.</li>
            </ul>
          `;
          break;
        case "CrossFit":
          details = `
            <h3>CrossFit</h3>
            <ul>
              <li>Vrsta: Funkcionalni trening</li>
              <li>Trajanje: 45 minuta</li>
              <li>Opis: CrossFit je visoko intenzivan trening koji kombinuje vježbe snage i kondicije u dinamičnim i izazovnim rutinama.</li>
            </ul>
          `;
          break;
        default:
          details = `<p>Detalji za ovaj trening nisu dostupni.</p>`;
      }

      treningInfoDiv.innerHTML = details;
    }

    const form = document.getElementById("contact-form");
    const feedbackDiv = document.getElementById("form-feedback");

    form.addEventListener("submit", function(event) {
      event.preventDefault();

      const name = document.getElementById("name").value;
      const email = document.getElementById("email").value;
      const message = document.getElementById("message").value;

      if (name === "" || email === "" || message === "") {
        feedbackDiv.innerHTML = "<p class='error'>Molimo popunite sva polja.</p>";
        return;
      }

      feedbackDiv.innerHTML = "<p class='success'>Vaša poruka je uspešno poslata! Hvala što ste nas kontaktirali.</p>";

      form.reset();
      
    });


}); 