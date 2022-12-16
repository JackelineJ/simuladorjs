document.addEventListener('DOMContentLoaded', () => {
    fetchData()
    if (localStorage.getItem('shoppingCart')) {
        shoppingCart = JSON.parse(localStorage.getItem('shoppingCart'))
        theKart()
    }
})

const fetchData = async () => {
    try {
        const res = await fetch('../api.json')
        const data = await res.json()
        ghostingProducts(data)
        theButtons(data)
    } catch (error) {
        console.log(error)
    }
}

const productContainer = document.querySelector('#container-product')

const ghostingProducts = (data) => {
    const template = document.querySelector('#template-product').content
    const fragment = document.createDocumentFragment()

    data.forEach(product => {
        template.querySelector('img').setAttribute('src', product.thumbnailUrl)
        template.querySelector('h5').textContent = product.title
        template.querySelector('p span').textContent = product.price
        template.querySelector('button').dataset.id = product.id
        const clone = template.cloneNode(true)
        fragment.appendChild(clone)
    })
    productContainer.appendChild(fragment)
}

let shoppingCart = {}

const theButtons = (data) => {
    const buttonProduct = document.querySelectorAll('.card button')

    buttonProduct.forEach(btn => {
        btn.addEventListener('click', () => {
            const product = data.find(item => item.id === parseInt(btn.dataset.id))
            product.amount = 1
            if (shoppingCart.hasOwnProperty(product.id)) {
                product.amount = shoppingCart[product.id].amount + 1
            }
            shoppingCart[product.id] = { ...product }
            theKart()
        })
    })
}

const items = document.querySelector('#items')

const theKart = () => {

    items.innerHTML = ''

    const template = document.querySelector('#template-shopcart').content
    const fragment = document.createDocumentFragment()

    Object.values(shoppingCart).forEach(product => {
        template.querySelector('th').textContent = product.id
        template.querySelectorAll('td')[0].textContent = product.title
        template.querySelectorAll('td')[1].textContent = product.amount
        template.querySelector('span').textContent = product.price * product.amount
        
        template.querySelector('.btn-success').dataset.id = product.id
        template.querySelector('.btn-dark').dataset.id = product.id

        const clone = template.cloneNode(true)
        fragment.appendChild(clone)
    })

    items.appendChild(fragment)

    theFooter()
    ActionButton()

    localStorage.setItem('shoppingCart', JSON.stringify(shoppingCart))
}

const footer = document.querySelector('#footer-cart')
const theFooter = () => {

    footer.innerHTML = ''

    if (Object.keys(shoppingCart).length === 0) {
        footer.innerHTML = `
        <th scope="row" colspan="5">Your cart is empty</th>
        `
        return
    }

    const template = document.querySelector('#template-footer').content
    const fragment = document.createDocumentFragment()

    const amountProduct = Object.values(shoppingCart).reduce((acc, { amount }) => acc + amount, 0)
    const amountWithPrice = Object.values(shoppingCart).reduce((acc, {amount, price}) => acc + amount * price ,0)

    template.querySelectorAll('td')[0].textContent = amountProduct
    template.querySelector('span').textContent = amountWithPrice

    const clone = template.cloneNode(true)
    fragment.appendChild(clone)

    footer.appendChild(fragment)


    const emptyButton = document.querySelector('#empty-cart')
    emptyButton.addEventListener('click', () => {
        shoppingCart = {}
        theKart()
    })

    const purchaseButton = document.querySelector('#purchase')
    purchaseButton.addEventListener('click', () => {
        Swal.fire(
            'Purchase completed',
            'Thanks for supporting "GHOSTING"!',
            'success'
        )
    })
}

const ActionButton = () => {
    const addButton = document.querySelectorAll('#items .btn-success')
    const deleteButton = document.querySelectorAll('#items .btn-dark')

    addButton.forEach(btn => {
        btn.addEventListener('click', () => {
            const product = shoppingCart[btn.dataset.id]
            product.amount ++
            shoppingCart[btn.dataset.id] = { ...product }
            theKart()
        })
    })

    deleteButton.forEach(btn => {
        btn.addEventListener('click', () => {
            const product = shoppingCart[btn.dataset.id]
            product.amount--
            if (product.amount === 0) {
                delete shoppingCart[btn.dataset.id]
            } else {
                shoppingCart[btn.dataset.id] = { ...product }
            }
            theKart()
        })
    })
}