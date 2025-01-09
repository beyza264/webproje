 document.getElementById("form").addEventListener("submit", function(event) {
  event.preventDefault(); // Sayfanın yeniden yüklenmesini engeller

    const name = document.getElementById("name").value;
    const comment = document.getElementById("comment").value;

    if (name && comment) {
        const commentBox = document.createElement("div");
        commentBox.innerHTML = `<strong>${name}:</strong> <p>${comment}</p>`;
        commentBox.style.marginBottom = "15px";
        commentBox.style.borderBottom = "1px solid #ccc";
        commentBox.style.paddingBottom = "10px";

        document.getElementById("yazma").appendChild(commentBox);

        // Formu temizle
        document.getElementById("name").value = "";
        document.getElementById("comment").value = "";
    }
});

/*iletişim alanı için olan doğrulama kısmı*/ 

form.addEventListener("submit", function(event) {
    event.preventDefault();
    
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
  
    if (!email.includes("@")) {
      alert("Lütfen geçerli bir e-posta adresi girin.");
      return;
    }
  
    if (message.length < 10) {
      alert("Mesaj en az 10 karakter uzunluğunda olmalıdır.");
      return;
    }
  
    successMessage.style.display = "block";
    form.reset();
  });
  

form.addEventListener("submit", async function(event) {
    event.preventDefault();
  
    const formData = new FormData(form);
  
    try {
      const response = await fetch("https://yourserver.com/api/contact", {
        method: "POST",
        body: formData,
      });
  
      if (response.ok) {
        successMessage.style.display = "block";
        form.reset();
      } else {
        alert("Mesaj gönderilirken bir hata oluştu.");
      }
    } catch (error) {
      alert("Bir ağ hatası oluştu.");
    }
  });
  
// Oylama Fonksiyonu
const voteForm = document.getElementById("vote-form");
const resultsList = document.getElementById("results-list");

 voteForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const diziName = document.getElementById("dizi-name").value;

    if (diziName) {
        const listItem = document.createElement("li");
        listItem.textContent = diziName;
        resultsList.appendChild(listItem);

        document.getElementById("dizi-name").value = "";
    }
});
