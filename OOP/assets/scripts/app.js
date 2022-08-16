/* Object: The things you work with in code  = `Instances` of classes(=based on classes) )*/
/* Class: `Blueprint` for objects(theoretical definition) -> Define how objects looks like, which properties and methods they have. */

/* Convention is to start class name with a capitcal character */
class Product {
    // Set the fields -> every field will be translated to a property in the object
    title = 'DEFAULT';
    imgUrl;
    description;
    price;

    constructor(title, image, desc, price) {
        this.title = title;
        this.imgUrl = image;
        this.description = desc;
        this.price = price;
    }
}

const product_list = {
    products: [
        new Product('A', 'iamge_link_a', 'This is A', 10.99),
        new Product('B', 'iamge_link_b', 'This is B', 15.99),
        new Product('C', 'iamge_link_c', 'This is C', 20.99)
    ], 
    render() {
        const renderHook = document.getElementById('app');
        const prod_list = document.createElement('ul');
        prod_list.className = 'product-list';
        for (const prod of this.products) {
            const prod_el = document.createElement('li');
            prod_el.className = `product-item`;
            prod_el.innerHTML =`
            <div>
                <img src=${prod.imgUrl} alt=${prod.title}> 
                <div class='project-item__content'>
                    <h2>${prod.title}</h2>
                    <h3>\$${prod.price}</h3>
                    <p><${prod.description}/p>
                </div>
            </div>
            `;
            prod_list.append(prod_el);
        }
        renderHook.append(prod_list);
    }
}

product_list.render();


