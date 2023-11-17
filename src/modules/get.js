
window.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector('form');   

    form.addEventListener('submit', (e) => getReq(e));

    function getReq(e) {
        e.preventDefault();

        let formData = new FormData(form);
        formData.append("id", Math.random());
        
        let obj = {}; 
        formData.forEach((value, key) => {
            obj[key] = value;
        });

        async function getResource(url, data) {
            const res = await fetch(`${url}`, {
                method: "POST",
                headers: {
                    "Content-type": "application/json; charset=utf-8"
                },
                body: JSON.stringify(data)
            });
      
            if (!res.ok) {
              throw new Error(`Could not fetch ${url}, status: ${res.status}`);
            }
      
            return await res.json();
          };

        getResource("http://localhost:3000/Equipment", obj)          
        .then(data => data)
        .catch(err => console.error(err)); 
    }
});
