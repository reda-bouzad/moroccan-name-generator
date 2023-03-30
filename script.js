var xhr = new XMLHttpRequest();
document.getElementById('my-btn').addEventListener('click' , loadData)

function loadData(e){
    e.preventDefault();
    xhr.open('GET', 'data.json' , true);
    xhr.onload = function() {
        if(xhr.status == 200){
            var data = JSON.parse(this.responseText);
            const randomPerson = getRandomPerson(data);
            document.getElementById('text-field').innerHTML = " first name : " + randomPerson.firstName + 
            "<br>last name : " + randomPerson.lastName 
            +  "<br>" + randomPerson.firstName +" " +  randomPerson.lastName
        }
    }
    xhr.send();
    
    function getRandomPerson(data) {
        const firstName = data.firstNames[Math.floor(Math.random() * data.firstNames.length)];
        const lastName = data.lastNames[Math.floor(Math.random() * data.lastNames.length)];
        return { firstName, lastName };
    }
}

function copyText() {
    const copyField = document.getElementById("copy-field");
    copyField.select();
    document.execCommand("copy");
    alert("Text copied to clipboard");
  }

