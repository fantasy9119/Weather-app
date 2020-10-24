// Object property shorthand

const name = 'Fabian'
const userAge = 25

const user = {
    name,
    age: userAge,
    location:'Santiago'
}

//console.log(user)


// Object destructuring 


const product = {
    label: 'Red Notebook',
    price: 3,
    stock: 201,
    salePrice: undefined,
    rating: 4.2
}

// const label = produt.label
// const stock = product.stock

// const {label:productLabel,stock,rating = 5} = product
// console.log(productLabel,stock,rating)

const transaction = (type, {label, stock}) => {
        console.log(type,label,stock)
}

transaction('order', product)