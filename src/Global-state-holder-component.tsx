import react from 'react'
import {store,view} from '@risingstack/react-easy-state'
import { type } from 'os'

export var state = store({
    ordersList : [
        {
            id:1,
            order:23456,
            date:'12/nov/2020',
            costomer:'john',
            rasturant:'linken',
            paymentStatus:'paid',
            total:'1050',
            orderStatus:'delivered',
            orderType:'take away',
            paymentMethod:'digital payment',
            image:'https://demo.6amtech.com/stackfood/storage/app/public/product/2021-08-21-6120f4c2d5003.png',
            type:'big',
            quantity:'2',
            selectedItem:'chiken burger',
            

        },
        {
            id:2,
            order:9809,
            date:'12/nov/2020',
            costomer:'amjad',
            rasturant:'linken',
            paymentStatus:'unpaid',
            total:'1300',
            orderStatus:'pending',
            orderType:'take away',
            paymentMethod:'digital payment',
            type:'big',
            quantity:'2',
            selectedItem:'chiken burger',
            image:'https://demo.6amtech.com/stackfood/storage/app/public/product/2021-08-21-6120f4c2d5003.png',
        },
        {
            id:3,
            order:23490,
            date:'12/Nov/2020',
            costomer:'ismail',
            rasturant:'Hot Chilli',
            paymentStatus:'unpaid',
            total:'1050',
            orderStatus:'pending',
            orderType:'take away',
            paymentMethod:'digital payment',
            type:'big',
            quantity:'2',
            selectedItem:'chiken burger',
            image:'https://demo.6amtech.com/stackfood/storage/app/public/product/2021-08-21-6120f4c2d5003.png',
            
                        

        },
        {
            id:4,
            order:23490,
            date:'11/Nov/2020',
            costomer:'jamil',
            rasturant:'Burger King',
            paymentStatus:'unpaid',
            total:'2040',
            orderStatus:'pending',
            orderType:'take away',
            paymentMethod:'digital payment',
            type:'big',
            quantity:'2',
            selectedItem:'chiken burger',
            image:'https://demo.6amtech.com/stackfood/storage/app/public/product/2021-08-21-6120f4c2d5003.png',
        },
        {
            id:5,
            order:23490,
            date:'12/Nov/2020',
            costomer:'ismail',
            rasturant:'Hot Chilli',
            paymentStatus:'unpaid',
            total:'1050',
            orderStatus:'pending',
            orderType:'take away',
            paymentMethod:'digital payment',
            type:'big',
            quantity:'2',
            selectedItem:'chiken burger',
            image:'https://demo.6amtech.com/stackfood/storage/app/public/product/2021-08-21-6120f4c2d5003.png',
        },
        {
            id:6,
            order:23490,
            date:'11/Nov/2020',
            costomer:'jamil',
            rasturant:'Burger King',
            paymentStatus:'unpaid',
            total:'2040',
            orderStatus:'pending',
            orderType:'take away',
            paymentMethod:'digital payment',
            type:'big',
            quantity:'2',
            selectedItem:'chiken burger',
            image:'https://demo.6amtech.com/stackfood/storage/app/public/product/2021-08-21-6120f4c2d5003.png',
        },
        {
            id:7,
            order:23490,
            date:'11/Nov/2020',
            costomer:'jamil',
            rasturant:'Burger King',
            paymentStatus:'failed',
            total:'2040',
            orderStatus:'cancelled',
            orderType:'take away',
            paymentMethod:'digital payment',
            type:'big',
            quantity:'2',
            selectedItem:'chiken burger',
            image:'https://demo.6amtech.com/stackfood/storage/app/public/product/2021-08-21-6120f4c2d5003.png',
        },
        {
            id:8,
            order:23789,
            date:'11/Nov/2021',
            costomer:'ajmal',
            rasturant:'Pizano',
            paymentStatus:'failed',
            total:'500',
            orderStatus:'cancelled',
            orderType:'take away',
            paymentMethod:'digital payment',
            type:'big',
            quantity:'2',
            selectedItem:'chiken burger',
            image:'https://demo.6amtech.com/stackfood/storage/app/public/product/2021-08-21-6120f4c2d5003.png',
        },
        {
            id:9,
            order:23470,
            date:'11/Dec/2020',
            costomer:'kamaal',
            rasturant:'Red Chilli',
            paymentStatus:'unpaid',
            total:'590',
            orderStatus:'pending',
            orderType:'take away',
            paymentMethod:'digital payment',
            type:'big',
            quantity:'2',
            selectedItem:'chiken burger',
            image:'https://demo.6amtech.com/stackfood/storage/app/public/product/2021-08-21-6120f4c2d5003.png',
        },
        {
            id:10,
            order:23490,
            date:'11/Nov/2020',
            costomer:'Waqar',
            rasturant:'Burger King',
            paymentStatus:'paid',
            total:'680',
            orderStatus:'delivered',
            orderType:'take away',
            paymentMethod:'digital payment',
            type:'small',
            quantity:'1',
            selectedItem:'chiken burger',
            image:'https://demo.6amtech.com/stackfood/storage/app/public/product/2021-08-21-6120f4c2d5003.png',
        },

        {
            id:11,
            order:23440,
            date:'11/Nov/2021',
            costomer:'hassan',
            rasturant:'Burger King',
            paymentStatus:'unpaid',
            total:'680',
            orderStatus:'processing',
            orderType:'take away',
            paymentMethod:'digital payment',
            type:'small',
            quantity:'1',
            selectedItem:'chiken burger',
            image:'https://demo.6amtech.com/stackfood/storage/app/public/product/2021-08-21-6120f4c2d5003.png',
        },

        {
            id:12,
            order:23441,
            date:'6/Nov/2021',
            costomer:'ali',
            rasturant:'Red Chilli',
            paymentStatus:'unpaid',
            total:'680',
            orderStatus:'accepted',
            orderType:'take away',
            paymentMethod:'digital payment',
            type:'small',
            quantity:'1',
            selectedItem:'chiken burger',
            image:'https://demo.6amtech.com/stackfood/storage/app/public/product/2021-08-21-6120f4c2d5003.png',
        },

        {
            id:13,
            order:23441,
            date:'5/Nov/2021',
            costomer:'shoib',
            rasturant:'Hot Souce',
            paymentStatus:'unpaid',
            total:'620',
            orderStatus:'accepted',
            orderType:'take away',
            paymentMethod:'COD',
            type:'small',
            quantity:'1',
            selectedItem:'chiken burger',
            image:'https://demo.6amtech.com/stackfood/storage/app/public/product/2021-08-21-6120f4c2d5003.png',
        },

        {
            id:14,
            order:33441,
            date:'7/Nov/2021',
            costomer:'ali',
            rasturant:'Red Chilli',
            paymentStatus:'unpaid',
            total:'680',
            orderStatus:'accepted',
            orderType:'take away',
            paymentMethod:'COD',
            type:'small',
            quantity:'1',
            selectedItem:'chiken burger',
            image:'https://demo.6amtech.com/stackfood/storage/app/public/product/2021-08-21-6120f4c2d5003.png',
        },

        {
            id:15,
            order:25441,
            date:'10/Nov/2021',
            costomer:'shehzad',
            rasturant:'KKR',
            paymentStatus:'unpaid',
            total:'680',
            orderStatus:'accepted',
            orderType:'take away',
            paymentMethod:'COD',
            type:'small',
            quantity:'1',
            selectedItem:'chiken burger',
            image:'https://demo.6amtech.com/stackfood/storage/app/public/product/2021-08-21-6120f4c2d5003.png',
        },

        {
            id:16,
            order:25441,
            date:'11/Nov/2021',
            costomer:'moin ali',
            rasturant:'Student Kafe',
            paymentStatus:'paid',
            total:'680',
            orderStatus:'accepted',
            orderType:'take away',
            paymentMethod:'COD',
            type:'small',
            quantity:'1',
            selectedItem:'chiken burger',
            image:'https://demo.6amtech.com/stackfood/storage/app/public/product/2021-08-21-6120f4c2d5003.png',
        },
    ],

    deliverymanList :[
        
        {
            id:1,
            name:'ali',
            picture:'https://demo.6amtech.com/stackfood/storage/app/public/delivery-man/2021-08-21-6121202170757.png'
        },

        {
            id:2,
            name:'hassan',
            picture:'https://demo.6amtech.com/stackfood/storage/app/public/delivery-man/2021-08-21-6121202170757.png'
        },

        {
            id:3,
            name:'zohaib',
            picture:'https://demo.6amtech.com/stackfood/storage/app/public/delivery-man/2021-08-21-6121202170757.png'
        },

        {
            id:4,
            name:'awais',
            picture:'https://demo.6amtech.com/stackfood/storage/app/public/delivery-man/2021-08-23-6122ba05169d8.png'
        },

        {
            id:5,
            name:'shehzad',
            picture:'https://demo.6amtech.com/stackfood/storage/app/public/delivery-man/2021-08-23-6122ba05169d8.png'
        },
    ],

    customerList : [
        {   
            id:1,
            name:'abdul wahab',
            profilePic:'https://demo.6amtech.com/stackfood/storage/app/public/delivery-man/2021-08-21-6121202170757.png',
            email:'wahab23@gmail.com',
            mobileNumber:'+92302-7656890',
            deliveryLocation:'6FQM+WM2 Multan Pakistan'

        },
    ],

    rastauranstList : [
        {   
            id:1,
            rastaurantName:'chilli chatni',
            owner:'mr.shehzad',
            logo:'https://demo.6amtech.com/stackfood/storage/app/public/restaurant/2021-08-21-61200b96cd8f4.png',
            mobileNumber:'+92302-7656890',
            zone:'nazimabad',

        },

        {   
            id:2,
            rastaurantName:'burger king',
            owner:'mr.amir',
            logo:'https://demo.6amtech.com/stackfood/storage/app/public/restaurant/2021-08-21-61200b96cd8f4.png',
            mobileNumber:'+92302-7656890',
            zone:'shamsabad',

        },

        {   
            id:3,
            rastaurantName:'red chilli',
            owner:'mr.umair',
            logo:'https://demo.6amtech.com/stackfood/storage/app/public/restaurant/2021-08-21-61200b96cd8f4.png',
            mobileNumber:'+92302-7656890',
            zone:'islamabad',

        },

        {   
            id:4,
            rastaurantName:'burger king',
            owner:'mr.amir',
            logo:'https://demo.6amtech.com/stackfood/storage/app/public/restaurant/2021-08-21-61200b96cd8f4.png',
            mobileNumber:'+92302-7656890',
            zone:'shamsabad',

        },

        {   
            id:5,
            rastaurantName:'chilli chatni',
            owner:'mr.shehzad',
            logo:'https://demo.6amtech.com/stackfood/storage/app/public/restaurant/2021-08-21-61200b96cd8f4.png',
            mobileNumber:'+92302-7656890',
            zone:'nazimabad',

        },

    ],

    foodCategoryList : [
        {
            id:1,
            Name:'varieties',
            
        },
        {
            id:2,
            Name:'thai',
        },
        {
            id:3,
            Name:'snacks',
        },
        {
            id:4,
            Name:'snacks',
        },
        {
            id:5,
            Name:'pizza',
        },
        {
            id:6,
            Name:'pasta',
        },
        {
            id:7,
            Name:'mexican food',
        },
        {
            id:8,
            Name:'noodles',
        },
        {
            id:9,
            Name:'indian',
        },
        {
            id:10,
            Name:'kabab & more',
            status:'on',
        },
    ],

    attributesList :[
        {
            id:1,
            name:'capacity',
            
        },
        {
            id:2,
            name:'size',
            
        },
    ],

    addonsList :[
        {
            id:1,
            name:'chezee',
            price:'&100',
            restaurant:'burger king',
            
            
        },
        {
            id:2,
            name:'chezee',
            price:'&100',
            restaurant:'burger king',
        },
        {
            id:3,
            name:'zinger',
            price:'&150',
            restaurant:'burger king',
        },
        {
            id:4,
            name:'chiken',
            price:'&140',
            restaurant:'burger king',
        },
        {
            id:5,
            name:'chezee',
            price:'&100',
            restaurant:'burger king',
        },
        {
            id:6,
            name:'chezee',
            price:'&100',
            restaurant:'burger king',
        },
        {
            id:7,
            name:'chezee',
            price:'&100',
            restaurant:'burger king',
        },
        {
            id:8,
            name:'chezee',
            price:'&100',
            restaurant:'burger king',
        },
        {
            id:9,
            name:'chezee',
            price:'&100',
            restaurant:'burger king',
        },
        {
            id:10,
            name:'chezee',
            price:'&100',
            restaurant:'burger king',
        },
        {
            id:11,
            name:'chezee',
            price:'&100',
            restaurant:'burger king',
        },
        {
            id:12,
            name:'chezee',
            price:'&100',
            restaurant:'burger king',
        },
        {
            id:13,
            name:'chezee',
            price:'&100',
            restaurant:'burger king',
        }, {
            id:14,
            name:'chezee',
            price:'&100',
            restaurant:'burger king',
        }, {
            id:15,
            name:'chezee',
            price:'&100',
            restaurant:'burger king',
        }, {
            id:16,
            name:'chezee',
            price:'&100',
            restaurant:'burger king',
        }, {
            id:17,
            name:'chezee',
            price:'&100',
            restaurant:'burger king',
        }, {
            id:18,
            name:'chezee',
            price:'&100',
            restaurant:'burger king',
        },
    ],

    FoodsList : [
        {
            id:1,
            name:'fry',
            category:'fast food',
            restaurant:'borger king',
            price:'$150',
            status:'on'
        },

        {
            id:2,
            name:'fry',
            category:'fast food',
            restaurant:'borger king',
            price:'$150',
            status:'on'
        },

        {
            id:3,
            name:'fry',
            category:'fast food',
            restaurant:'borger king',
            price:'$150',
            status:'on'
        },

        {
            id:4,
            name:'burger',
            category:'fast food',
            restaurant:'borger king',
            price:'$150',
            status:'on'
        },

        {
            id:5,
            name:'fry',
            category:'fast food',
            restaurant:'borger king',
            price:'$150',
            status:'off'
        },

        {
            id:6,
            name:'fry',
            category:'fast food',
            restaurant:'hot souce',
            price:'$150',
            status:'on'
        },

        {
            id:7,
            name:'fry',
            category:'fast food',
            restaurant:'borger king',
            price:'$150',
            status:'off'
        },

        {
            id:8,
            name:'pizza',
            category:'fast food',
            restaurant:'borger king',
            price:'$250',
            status:'on'
        },
    ],

    addDeliveryMan : [
        {
            id:1,
            phone:2,
        },
    ],



})

