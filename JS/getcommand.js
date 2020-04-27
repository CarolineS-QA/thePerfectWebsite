const REQ = new XMLHttpRequest();
const URL = "https://petstore.swagger.io/v2"
const id = localStorage.getPet('id');

console.log(username);

REQ.open("GET", URL + "/id/${id}");
REQ.setRequestHeader("Content-Type", "JS/json");
REQ.responseType = "json";
REQ.onload = () => {
    if (REQ.status === 200) {
        let responseobj = REQ.response;
        document.querySelector('#id').value = responseobj.id;
        document.querySelector('#catagory').value = responseobj.catagory;
        document.querySelector('#name').value = responseobj.name;
        document.querySelector('#status').value = responseobj.status;
    }
}