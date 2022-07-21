import bcrypt from 'bcryptjs';


const data = {
    users: [
        {
            name: 'Adhi',
            email: 'adhiyaman@gmail.com',
            password: bcrypt.hashSync('123456'),
            isAdmin:true,
        },
        {
            name: 'Anushree',
            email: 'anushreeadhiyaman@gmail.com',
            password: bcrypt.hashSync('123456'),
            isAdmin:false,
        },
    ],
    products: [
        {
            name: 'Free Shirt',
            slug: 'free-shirt',
            category: 'Shirts',
            image: '/images/shirt1.jpg',
            price: 999,
            brand:'Nike',
            rating: 4.5,
            numReviews: 8,
            countInStock: 20,
            description: 'A popular shirt',
        },
        {
            name: 'Slim Shirt',
            slug: 'slim-shirt',
            category: 'Shirts',
            image: '/images/shirt2.jpg',
            price: 699,
            brand:'adhiinc',
            rating: 4.5,
            numReviews: 8,
            countInStock: 20,
            description: 'A popular shirt',
        },
        {
            name: 'Skinny Shirt',
            slug: 'skinny-shirt',
            category: 'Shirts',
            image: '/images/shirt3.jpg',
            price: 849,
            brand:'dnmx',
            rating: 4.5,
            numReviews: 8,
            countInStock: 20,
            description: 'A popular shirt',
        },
        
        {
            name: 'Free Pant',
            slug: 'free-pant',
            category: 'pants',
            image: '/images/pants1.jpg',
            price: 659,
            brand:'Nike',
            rating: 4.5,
            numReviews: 8,
            countInStock: 20,
            description: 'A popular shirt',
        },
        {
            name: 'Slim Pant',
            slug: 'slim-pant',
            category: 'pants',
            image: '/images/pants2.jpg',
            price: 839,
            brand:'adhiinc',
            rating: 4.5,
            numReviews: 8,
            countInStock: 20,
            description: 'A popular shirt',
        },
        {
            name: 'Skinny Pant',
            slug: 'skinny-pant',
            category: 'pants',
            image: '/images/pants3.jpg',
            price: 999,
            brand:'dnmx',
            rating: 3,
            numReviews: 8,
            countInStock: 20,
            description: 'A popular shirt',
        },
        

    ],
};

export default data;