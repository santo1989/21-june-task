// fetch Api Get Data from URL;
fetchApiDataGet = () => {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => {
      console.log(data);
      let html = '';
      for(let i = 0; i < data.length; i++) {
        let htmlSegment = `<div class="col-md-4">
        <div class="card mb-4 shadow-sm">
          <div class="card-body">
            <h5 class="card-title">${data[i].title}</h5>
            <p class="card-text">${data[i].body}</p>
            <div class="d-flex justify-content-between align-items-center">
              <div class="btn-group">
                <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
                <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>
              </div>
              <small class="text-muted">9 mins</small>
            </div>
          </div>
        </div>
      </div>`;
  
        html += htmlSegment;
      }
  
      let fetchApiDataGet = document.querySelector('#fetchApiDataGet');
      fetchApiDataGet.innerHTML = html;
    })
    .catch(error => console.log(error));
  }
  
  
  
  const fetchApi = document.getElementById('fetchApiGet');
  fetchApi.addEventListener('click', fetchApiDataGet);