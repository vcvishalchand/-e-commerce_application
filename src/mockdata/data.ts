import { Product } from '../type/types';

export const products: Product[] = [
    {
        id: 1, image: require('../assets/images/Cloths_item1.jpg'),
        category: 'Cloths', subCategory: 'Men', description: 'MR.SIGA Microfiber Cleaning Cloth, All-Purpose Cleaning Towels.',
        name: 'Cleaning Cloth', brand: 'Nike', color: 'Yellow', price: 100, quantity: 1, inventory: 5
    },
    {
        id: 2, image: require('../assets/images/Electronics_fan_item2.jpg'),
        category: 'Electronics', subCategory: '', description: 'Honeywell HYF290B Quietset 8-Speed Whole-Room Tower Fan.',
        name: 'Electronics Fan', brand: 'Dreo', color: 'Black', price: 1000, quantity: 1, inventory: 2
    },
    {
        id: 3, image: require('../assets/images/Baby_Cloths_item3.jpg'),
        category: 'Cloths', subCategory: 'Baby', description: 'The Children Place babys And Newborn Long Sleeve Dress Shirt.',
        name: 'Baby shirt and pants', brand: 'Zara', color: 'Black', price: 250, quantity: 1, inventory: 1
    },
    {
        id: 4, image: require('../assets/images/Winter_Cloths_item4.jpg'),
        category: 'Cloths', subCategory: '', description: 'Baby Long Sleeve Gentleman White Shirt Jumpsuit Overall Romper.',
        name: 'Newborn Baby suits', brand: 'H&M', color: 'Black', price: 999, quantity: 1, inventory: 3
    },
    {
        id: 5, image: require('../assets/images/Arts_Crafts_item5.jpg'),
        category: 'Arts & Crafts', subCategory: '', description: 'Drawing Painting Set for Kids Girls Boys Teens, Coloring Art Kit Gift Case.',
        name: 'Painting', brand: 'Gionlion', color: 'Purple', price: 499, quantity: 1, inventory: 9
    },
    {
        id: 6, image: require('../assets/images/ArtsCrafts_item6.jpg'),
        category: 'Arts & Crafts', subCategory: '', description: 'Art Supplies Kit for Painting & Drawing,Kids Art Set Case, Portable Art Box.',
        name: 'Painting Brush', brand: 'Gionlion', color: 'Pink', price: 349, quantity: 1, inventory: 4
    },
    {
        id: 7, image: require('../assets/images/ArtsCrafts_item7.jpg'),
        category: 'Arts & Crafts', subCategory: '', description: 'hapray Origami Kit 144 sheets Origami Paper for Kids 72 Patterns with Craft Guiding Book.',
        name: 'Art Paper', brand: 'Gionlion', color: 'Yellow', price: 342, quantity: 1, inventory: 6
    },
    {
        id: 8, image: require('../assets/images/Women_Cloths_item8.jpg'),
        category: 'Cloths', subCategory: 'Women', description: 'WEKILI Women Tops Long Sleeve Lace Scoop Neck A-line Tunic Blouse.',
        name: 'Plazo', brand: 'Zara', color: 'Pink', price: 189, quantity: 1, inventory: 2
    },
    {
        id: 9, image: require('../assets/images/Women_Cloths_item9.jpg'),
        category: 'Cloths', subCategory: 'Women', description: 'ODODOS Women Wide Leg Palazzo Lounge Pants with Pockets Light Weight Loose Comfy Casual Pajama.',
        name: 'Palazzo', brand: 'Zara', color: 'Purple', price: 300, quantity: 1, inventory: 1
    },
    {
        id: 10, image: require('../assets/images/Men_Cloths_item10.jpg'),
        category: 'Cloths', subCategory: 'Men', description: 'Men Slim Fit Men Three-Piece Suit One Button Solid Color Jacket Vest Pants Tuxedo.',
        name: 'Men Suits', brand: 'Zara', color: 'Blue', price: 4000, quantity: 1, inventory: 2
    },
    {
        id: 11, image: require('../assets/images/Men_Cloths_item11.jpg'),
        category: 'Cloths', subCategory: 'Men', description: 'Zaitun Mens Hooded Sweatshirt Long Sleeve Solid Knitted Hoodie Pullover Sweater.',
        name: 'Casual Hooded', brand: 'Zara', color: 'White', price: 880, quantity: 1, inventory: 2
    },
    {
        id: 12, image: require('../assets/images/Men_Cloths_item12.jpg'),
        category: 'Cloths', subCategory: 'Men', description: 'Winter Warm Knitted Sweater Men Casual Cotton Hooded.',
        name: 'Warm Sweater', brand: 'Zara', color: 'White', price: 500, quantity: 1, inventory: 3
    },
    {
        id: 13, image: require('../assets/images/Baby_Cloths_item3.jpg'),
        category: 'Cloths', subCategory: 'Men', description: 'Winter Warm Knitted Sweater Men Casual Cotton Hooded.',
        name: 'Cloths Warm Sweater', brand: 'H&M', color: 'Black', price: 5000, quantity: 1, inventory: 4
    },
    {
        id: 14, image: require('../assets/images/Women_Cloths_item8.jpg'),
        category: 'Cloths', subCategory: 'Men', description: 'Winter Warm Knitted Sweater Men Casual Cotton Hooded.',
        name: 'Cloths Warm Sweater', brand: 'H&M', color: 'Purpal', price: 1500, quantity: 1, inventory: 5
    },
    {
        id: 15, image: require('../assets/images/Women_Cloths_item9.jpg'),
        category: 'Cloths', subCategory: 'Men', description: 'Winter Warm Knitted Sweater Men Casual Cotton Hooded.',
        name: 'Cloths Warm Sweater', brand: 'H&M', color: 'Pink', price: 2500, quantity: 1, inventory: 5
    },
];

export const categories: string[] = [
    'Electronics', 'Cloths', 'Arts & Crafts'
];

