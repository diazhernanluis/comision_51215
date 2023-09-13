
fetch('http://localhost:8080/v1/api/order').then( res => res.json()).then( info => {

    const fragment = document.createDocumentFragment();

    info.forEach(order => {
        console.log(order);
        const div = document.createElement('div');
        const priceParagraph = document.createElement('p');
        const statusParagraph = document.createElement('p');
        const number = document.createElement('p');

        priceParagraph.innerHTML = `Total de las orden: ${order.totalPrice}`;
        statusParagraph.innerHTML = `status: ${order.status}`;
        number.innerHTML = `orden numero: ${order.number}`;

        div.appendChild(number);
        div.appendChild(priceParagraph);
        div.appendChild(statusParagraph);

        fragment.appendChild(div);
    });

    const orderContainer = document.getElementById('orders');
    orderContainer.appendChild(fragment);
})