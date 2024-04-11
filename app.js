function searchData() {
    const apiUrl = `https://dummyjson.com/products`;
  
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        const products = data.products;
        const productRow = document.getElementById('productRow');
  
        // Clear previous product cards
        productRow.innerHTML = '';
  
        products.forEach((product, index) => {
          if (index % 4 === 0) {
            // Create a new row for every 4 products
            const newRow = document.createElement('div');
            newRow.classList.add('row');
            productRow.appendChild(newRow);
          }
  
          let title = product.title;
          let image = product.thumbnail;
          let description = product.description;
          let price = product.price;
  
          // Create elements to display product information
          let productContainer = document.createElement('div');
          productContainer.classList.add('col-lg-4');
  
          let card = document.createElement('div');
          card.classList.add('card', 'mb-2');
          card.style.width = '20rem';
  
          let img = document.createElement('img');
          img.src = image;
          img.classList.add('card-img-top', 'prd_image');
          img.alt = title;
  
          let cardBody = document.createElement('div');
          cardBody.classList.add('card-body');
  
          let titleElement = document.createElement('h5');
          titleElement.classList.add('card-title');
          titleElement.textContent = title;
  
          let descriptionElement = document.createElement('p');
          descriptionElement.classList.add('card-text', 'prd_description');
          descriptionElement.textContent = description;
  
          let priceElement = document.createElement('p');
          priceElement.classList.add('card-text', 'prd_price');
          priceElement.textContent = `Price: ${price}`;
  
          // Append elements to the product container
          cardBody.appendChild(titleElement);
          cardBody.appendChild(descriptionElement);
          cardBody.appendChild(priceElement);
          card.appendChild(img);
          card.appendChild(cardBody);
          productContainer.appendChild(card);
  
          // Append the product container to the row
          productRow.lastChild.appendChild(productContainer);
        });
      });
  }
  