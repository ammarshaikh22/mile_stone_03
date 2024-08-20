export interface MenuList {
    id: number;
    name: string;
    url: string;
}
export interface Product {
    id: number
    img: string
    productName: string
}
export interface Policies {
    id: number,
    heading: string,
    para: string,
    img: string
}

export interface FooterData {
    id: number,
    heading: string,
    data: [
        { title: string, url: string },
        { title: string, url: string },
        { title: string, url: string },
        { title: string, url: string },
        { title: string, url: string },
        { title: string, url: string },
    ],
}

export interface CarouselData {
    id: number,
    heading: string,
    subHeading: string,
    detail: string
    pic: string,
}

export interface FashionRevolutionType {
    id: number
    img: string
    heading: string
    sub:string
}