import { CarouselData, FashionRevolutionType, FooterData, MenuList, Policies, Product } from "@/types/interface";
import StarOutlineIcon from '@mui/icons-material/StarOutline';
export const menuList: MenuList[] = [
    {
        id: 1,
        name: "Home",
        url: "",
    },
    {
        id: 2,
        name: "Shop",
        url: "",
    },
    {
        id: 3,
        name: "About",
        url: "",
    },
    {
        id: 4,
        name: "Contact",
        url: "",
    },
];

export const policies: Policies[] = [
    {
        id: 1,
        heading: "Free Shipping",
        para: "On All Order Over $599",
        img: "/scooter.png",
    },
    {
        id: 2,
        heading: "Easy Returns",
        para: "30 Day Returns Policy",
        img: "/return.png",
    },
    {
        id: 3,
        heading: "Secure Payment",
        para: "100% Secure Gaurantee",
        img: "/card.png",
    },
    {
        id: 4,
        heading: "Special Support",
        para: "24/7 Dedicated Support",
        img: "/support.png",
    },
];

export const products: Product[] = [
    {
        id: 1,
        img: "/product3.png",
        productName: "ActiveWear",
    },
    {
        id: 2,
        img: "/product1.png",
        productName: "Hot Dresses",
    },
    {
        id: 3,
        img: "/product6.png",
        productName: "FootWear",
    },
    {
        id: 4,
        img: "/product5.png",
        productName: "SunGlasses",
    },
    {
        id: 5,
        img: "/product2.png",
        productName: "Coat & Jacket",
    },
    {
        id: 6,
        img: "/product4.png",
        productName: "Jewelry",
    },
];

export const carouselData: CarouselData[] = [
    {
        id: 1,
        heading: "Emma Johnson",
        subHeading: "Marketing Manager, TechSavvy",
        detail:
            "Working with this team has been an incredible experience. Their attention to detail and commitment to delivering exceptional results is truly commendable. I highly recommend their services",
        pic: "/author.png",
    },
    {
        id: 2,
        heading: "Michael Smith",
        subHeading: "CEO, InnovateX",
        detail:
            "I've had the pleasure of collaborating with this team on multiple projects. Their professionalism and expertise shine through in everything they do. They consistently exceed expectations and I look forward to future collaborations.",
        pic: "/author.png",
    },
    {
        id: 3,
        heading: "Sophia Martinez",
        subHeading: "Creative Director, Artistry Designs",
        detail:
            "I cannot speak highly enough of the creativity and dedication of this team. They have a unique ability to translate concepts into stunning visuals that perfectly capture the essence of our brand. Working with them has been a delight.",
        pic: "/author.png",
    },
];

export const footerData: FooterData[] = [
    {
        id: 1,
        heading: "Information",
        data: [
            { title: "About Company", url: "/" },
            { title: "Payment Type", url: "/" },
            { title: "Awards Winning", url: "/" },
            { title: "World Media Partner", url: "/" },
            { title: "Become an Agent", url: "/" },
            { title: "Refund Policy", url: "/" },
        ],
    },
    {
        id: 2,
        heading: "Category",
        data: [
            { title: "Hand Bags & Wallets", url: "/" },
            { title: "Beauty", url: "/" },
            { title: "Fragrances", url: "/" },
            { title: "Women Dresses", url: "/" },
            { title: "Mens Shirts", url: "/" },
            { title: "Women Jewelry", url: "/" },
        ],
    },
    {
        id: 3,
        heading: "Help & Support",
        data: [
            { title: "Vendor", url: "/" },
            { title: "FAQ Information", url: "/" },
            { title: "Return Policy", url: "/" },
            { title: "Shipping & Delivery", url: "/" },
            { title: "Order Tracking", url: "/" },
            { title: "Lists of Shops", url: "/" },
        ],
    },
];

export const fashionRevolution: FashionRevolutionType[] = [
    {
        id: 1,
        img: "/shirt.png",
        heading: "Western Fashion",
        sub: "When not in front of her computer screen croix wine in hand or in front of a mirror"
    },
    {
        id: 2,
        img: "/leaf.png",
        heading: "Fresh & Comfort",
        sub: "When not in front of her computer screen croix wine in hand or in front of a mirror"
    },
    {
        id: 3,
        img: "/bow.png",
        heading: "Cotton & Fabric",
        sub: "When not in front of her computer screen croix wine in hand or in front of a mirror"
    },
]

export const menuData = ["Default", "Popular", "New", "Discounted", "Trending", "Featured"]


export const filtrationMenu = [
    {
        id: 1,
        name: "Category",
        options: [
            "Beauty",
            "Fragrances",
            "Furniture",
            "Groceries",
            "Home-decoration",
            "Kitchen-accessories",
            "Laptops",
            "Mens-shirts",
            "Mens-shoes",
            "Mens-watches",
            "Mobile-accessories",
            "Motorcycle",
            "Skin-care",
            "Smartphones",
            "Sports-accessories",
            "Sunglasses",
            "Tablets",
            "Tops",
            "Vehicle",
            "Womens-bags",
            "Womens-dresses",
            "Womens-jewellery",
            "Womens-shoes",
            "Womens-watches"
        ]
    },
    {
        id: 2,
        name: "Rating",
        options: ["Rating of 5","Rating of 4","Rating of 3","Rating of 2","Rating of 1"]
    }
]

