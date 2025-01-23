fetch('https://jsonplaceholder.typicode.com/users')


  .then(response => response.json())
  .then(users => {
    const yervinshax1 = document.getElementById('yervini');
    users.forEach(user => {
      const inaRow = document.createElement('tr');
      yervinshax1.appendChild(inaRow);
      inaRow.innerHTML = `
        <td><input type="checkbox" /></td>
        <td><img src="images/rectangle 79.png" alt="Image" /></td>
        <td style = "display:flex;
        align-items:left;
        flex-direction:column;
        justify-content:center;
        width:10%" class="user">${
          user.name
        }</td>
        <td>704.555.0127</td>
        <td>August 2, 2013</td>
        <td>$17.0</td>
        <td><button style = "background-color:#DC3545;
        color:white;
        border-radius:15px;
        height:25px;
        width:150%;
        ">Danger</button></td>
        <td>...</td>
      `
      inaRow.style.textAlign = "left"
      inaRow.style.flexDirection = "row"
      inaRow.style.display = "flex"
      inaRow.style.alignItems = "center"
      inaRow.style.textAlign = "center"
      inaRow.style.width = "100%"
    });
  })


