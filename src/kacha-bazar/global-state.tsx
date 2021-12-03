import react from 'react'
import { store, view } from '@risingstack/react-easy-state'
import { boolean, number } from 'yup/lib/locale'


let c:
    {
        quantity: number,
        itemId: number
    }[] = [];


export var state = store({


    cartItems: c,
    popularProductsForDailyShoping: [
        {
            id: 1,
            prdctImg: 'https://kachabazar-store.vercel.app/_next/image?url=https%3A%2F%2Fi.postimg.cc%2FZ5yQ47YB%2FRainbow-Chard-Package-per-lb.jpg&w=256&q=75',
            description: '1lb',
            productName: 'rainbow chard',
            productPrice: '$12',
            status: 'false',
            detailDescription: 'Most fresh vegetables are low in calories and have a water content in excess of 70 percent, with only about 3.5 percent protein and less than 1 percent fat. ... The root '

        },

        {
            id: 2,
            prdctImg: 'https://kachabazar-store.vercel.app/_next/image?url=https%3A%2F%2Fi.postimg.cc%2FMTPyNwQC%2FClementine-5ct.jpg&w=256&q=75',
            description: '5cb',
            productName: 'Celimentine',
            productPrice: '$13',
            status: 'false',
            detailDescription: 'Most fresh vegetables are low in calories and have a water content in excess of 70 percent, with only about 3.5 percent protein and less than 1 percent fat. ... The root '

        },

        {
            id: 3,
            prdctImg: 'https://kachabazar-store.vercel.app/_next/image?url=https%3A%2F%2Fi.postimg.cc%2FryxzRchQ%2FKale-Sprouts-3oz.jpg&w=256&q=75',
            description: '3oz',
            productName: 'Kale Saprouts',
            productPrice: '$15',
            status: 'false',
            detailDescription: 'Most fresh vegetables are low in calories and have a water content in excess of 70 percent, with only about 3.5 percent protein and less than 1 percent fat. ... The root '

        },

        {
            id: 4,
            prdctImg: 'https://kachabazar-store.vercel.app/_next/image?url=https%3A%2F%2Fi.postimg.cc%2FqRpDcpsy%2FRainbow-Peppers-4ct.jpg&w=256&q=75',
            description: '4ct',
            productName: 'Rainbow Pepers',
            productPrice: '$15',
            status: 'false',
            detailDescription: 'Most fresh vegetables are low in calories and have a water content in excess of 70 percent, with only about 3.5 percent protein and less than 1 percent fat. ... The root '
        },

        {
            id: 5,
            prdctImg: 'https://kachabazar-store.vercel.app/_next/image?url=https%3A%2F%2Fi.postimg.cc%2FL8L3XGcP%2FBlackberries-1-25-qt.jpg&w=256&q=75',
            description: '25qt',
            productName: 'Bluebery',
            productPrice: '$15',
            status: 'false',
            detailDescription: 'Most fresh vegetables are low in calories and have a water content in excess of 70 percent, with only about 3.5 percent protein and less than 1 percent fat. ... The root '
        },

        {
            id: 6,
            prdctImg: 'https://kachabazar-store.vercel.app/_next/image?url=https%3A%2F%2Fi.postimg.cc%2FbvrsZtMt%2FCalabaza-Squash-Package-each.jpg&w=256&q=75',
            description: 'each',
            productName: 'Calabaza Saquash',
            productPrice: '$15',
            status: 'false',
            detailDescription: 'Most fresh vegetables are low in calories and have a water content in excess of 70 percent, with only about 3.5 percent protein and less than 1 percent fat. ... The root '
        },

        {
            id: 7,
            prdctImg: 'https://kachabazar-store.vercel.app/_next/image?url=https%3A%2F%2Fi.postimg.cc%2FGhRtkNVr%2FLettuce-1lb.jpg&w=256&q=75',
            description: '1lb',
            productName: 'Letuce',
            productPrice: '$14',
            status: 'false',
            detailDescription: 'Most fresh vegetables are low in calories and have a water content in excess of 70 percent, with only about 3.5 percent protein and less than 1 percent fat. ... The root '
        },

        {
            id: 8,
            prdctImg: 'https://kachabazar-store.vercel.app/_next/image?url=https%3A%2F%2Fi.postimg.cc%2F5y7rNDFv%2FRadicchio-12ct.jpg&w=256&q=75',
            description: '12ct',
            productName: 'Radicchio',
            productPrice: '$12',
            status: 'false',
            detailDescription: 'Most fresh vegetables are low in calories and have a water content in excess of 70 percent, with only about 3.5 percent protein and less than 1 percent fat. ... The root '
        },

        {
            id: 9,
            prdctImg: 'https://kachabazar-store.vercel.app/_next/image?url=https%3A%2F%2Fi.postimg.cc%2FwvzZWXpt%2FParsley-each.jpgg&w=256&q=75',
            description: 'each',
            productName: 'Parsley',
            productPrice: '$12',
            status: 'false',
            detailDescription: 'Most fresh vegetables are low in calories and have a water content in excess of 70 percent, with only about 3.5 percent protein and less than 1 percent fat. ... The root '
        },


        {
            id: 10,
            prdctImg: 'https://kachabazar-store.vercel.app/_next/image?url=https%3A%2F%2Fi.postimg.cc%2FNFXkHVKZ%2FStrawberries-9-25oz.jpg&w=256&q=75',
            description: '20oz',
            productName: 'Strawberrie',
            productPrice: '$12',
            status: 'false',
            detailDescription: 'Most fresh vegetables are low in calories and have a water content in excess of 70 percent, with only about 3.5 percent protein and less than 1 percent fat. ... The root '
        },


        {
            id: 11,
            prdctImg: 'https://kachabazar-store.vercel.app/_next/image?url=https%3A%2F%2Fi.postimg.cc%2FvHwg0D1J%2FCauliflower-1-35lb.jpg&w=256&q=75',
            description: '35lb',
            productName: 'Cauliflower',
            productPrice: '$15',
            status: 'false',
            detailDescription: 'Most fresh vegetables are low in calories and have a water content in excess of 70 percent, with only about 3.5 percent protein and less than 1 percent fat. ... The root '
        },


        {
            id: 12,
            prdctImg: 'https://kachabazar-store.vercel.app/_next/image?url=https%3A%2F%2Fi.postimg.cc%2F9FN3WwGS%2FOrganic-Purple-Cauliflower-1lb.jpg&w=256&q=75',
            description: '12ct',
            productName: 'Organic Purple Cauliflower',
            productPrice: '$12',
            status: 'false',
            detailDescription: 'Most fresh vegetables are low in calories and have a water content in excess of 70 percent, with only about 3.5 percent protein and less than 1 percent fat. ... The root '
        },

        {
            id: 13,
            prdctImg: 'https://kachabazar-store.vercel.app/_next/image?url=https%3A%2F%2Fi.postimg.cc%2FcJL8fjK6%2FAhold-Acorn-Squash-1ct.jpg&w=256&q=75',
            description: '1ct',
            productName: 'Ahold Acorn Squash',
            productPrice: '$15',
            status: 'false',
            detailDescription: 'Most fresh vegetables are low in calories and have a water content in excess of 70 percent, with only about 3.5 percent protein and less than 1 percent fat. ... The root '
        },

        {
            id: 14,
            prdctImg: 'https://kachabazar-store.vercel.app/_next/image?url=https%3A%2F%2Fi.postimg.cc%2Fd3r7qcfN%2FBok-Choy-Cabbage-per-lb.jpg&w=256&q=75',
            description: '1lb',
            productName: 'Bok Choy Cabbage',
            productPrice: '$12',
            status: 'false',
            detailDescription: 'Most fresh vegetables are low in calories and have a water content in excess of 70 percent, with only about 3.5 percent protein and less than 1 percent fat. ... The root '
        },

        {
            id: 15,
            prdctImg: 'https://kachabazar-store.vercel.app/_next/image?url=https%3A%2F%2Fi.postimg.cc%2FN0C2D4TD%2FAloe-Vera-Leaf-each.jpg&w=256&q=75',
            description: 'each',
            productName: 'Aloe Vera Leaf',
            productPrice: '$12',
            status: 'false',
            detailDescription: 'Most fresh vegetables are low in calories and have a water content in excess of 70 percent, with only about 3.5 percent protein and less than 1 percent fat. ... The root '
        },

        {
            id: 16,
            prdctImg: 'https://kachabazar-store.vercel.app/_next/image?url=https%3A%2F%2Fi.postimg.cc%2F8Ck40tYr%2FPineapple-1-5lb.jpg&w=256&q=75',
            description: '5lb',
            productName: 'Pineapple Imported',
            productPrice: '$12',
            status: 'false',
            detailDescription: 'Most fresh vegetables are low in calories and have a water content in excess of 70 percent, with only about 3.5 percent protein and less than 1 percent fat. ... The root '
        },

        {
            id: 17,
            prdctImg: 'https://kachabazar-store.vercel.app/_next/image?url=https%3A%2F%2Fi.postimg.cc%2FFstZ49qv%2FStrawberries-Package-2-25-oz.jpg&w=256&q=75',
            description: '25oz',
            productName: 'Strawberrie Package',
            productPrice: '$14',
            status: 'false',
            detailDescription: 'Most fresh vegetables are low in calories and have a water content in excess of 70 percent, with only about 3.5 percent protein and less than 1 percent fat. ... The root '
        },

        {
            id: 18,
            prdctImg: 'https://kachabazar-store.vercel.app/_next/image?url=https%3A%2F%2Fi.postimg.cc%2F3w03MCVn%2FOrganic-Broccoli-10oz.jpg&w=256&q=75',
            description: '10oz',
            productName: 'Organic Broccoli',
            productPrice: '$12',
            status: 'false',
            detailDescription: 'Most fresh vegetables are low in calories and have a water content in excess of 70 percent, with only about 3.5 percent protein and less than 1 percent fat. ... The root '
        },





    ],
    // for disconted items
    discountedItemsList: [


        {
            id: 1,
            prdctImg: 'https://kachabazar-store.vercel.app/_next/image?url=https%3A%2F%2Fi.postimg.cc%2FtJjqNZrD%2FOrange-Bell-Pepper-22ct.jpg&w=256&q=75',
            description: '1lb',
            productName: 'Organic Bell Pepper',
            productPrice: '$12',
            off: '13 % off'

        },

        {
            id: 2,
            prdctImg: 'https://kachabazar-store.vercel.app/_next/image?url=https%3A%2F%2Fi.postimg.cc%2FMTPyNwQC%2FClementine-5ct.jpg&w=256&q=75',
            description: '5cb',
            productName: 'Celimentine',
            productPrice: '$13',
            status: 'false',
            off: '12 % off'

        },

        {
            id: 3,
            prdctImg: 'https://kachabazar-store.vercel.app/_next/image?url=https%3A%2F%2Fi.postimg.cc%2FryxzRchQ%2FKale-Sprouts-3oz.jpg&w=256&q=75',
            description: '3oz',
            productName: 'Kale Saprouts',
            productPrice: '$15',
            status: 'false',
            off: '14 % off',

        },

        {
            id: 4,
            prdctImg: 'https://kachabazar-store.vercel.app/_next/image?url=https%3A%2F%2Fi.postimg.cc%2FqRpDcpsy%2FRainbow-Peppers-4ct.jpg&w=256&q=75',
            description: '4ct',
            productName: 'Rainbow Pepers',
            productPrice: '$15',
            status: 'false',
            off: '17 % off',

        },

        {
            id: 5,
            prdctImg: 'https://kachabazar-store.vercel.app/_next/image?url=https%3A%2F%2Fi.postimg.cc%2FL8L3XGcP%2FBlackberries-1-25-qt.jpg&w=256&q=75',
            description: '25qt',
            productName: 'Bluebery',
            productPrice: '$15',
            status: 'false',
            off: '6 % off',

        },

        {
            id: 6,
            prdctImg: 'https://kachabazar-store.vercel.app/_next/image?url=https%3A%2F%2Fi.postimg.cc%2FbvrsZtMt%2FCalabaza-Squash-Package-each.jpg&w=256&q=75',
            description: 'each',
            productName: 'Calabaza Saquash',
            productPrice: '$15',
            status: 'false',
            off: '10 % off',

        },

        {
            id: 7,
            prdctImg: 'https://kachabazar-store.vercel.app/_next/image?url=https%3A%2F%2Fi.postimg.cc%2FGhRtkNVr%2FLettuce-1lb.jpg&w=256&q=75',
            description: '1lb',
            productName: 'Letuce',
            productPrice: '$14',
            status: 'false',
            off: '12 % off',

        },

        {
            id: 8,
            prdctImg: 'https://kachabazar-store.vercel.app/_next/image?url=https%3A%2F%2Fi.postimg.cc%2F5y7rNDFv%2FRadicchio-12ct.jpg&w=256&q=75',
            description: '12ct',
            productName: 'Radicchio',
            productPrice: '$12',
            status: 'false',
            off: '19 % off',

        },

        {
            id: 9,
            prdctImg: 'https://kachabazar-store.vercel.app/_next/image?url=https%3A%2F%2Fi.postimg.cc%2FwvzZWXpt%2FParsley-each.jpgg&w=256&q=75',
            description: 'each',
            productName: 'Parsley',
            productPrice: '$12',
            status: 'false',
            off: '43 % off',

        },


        {
            id: 10,
            prdctImg: 'https://kachabazar-store.vercel.app/_next/image?url=https%3A%2F%2Fi.postimg.cc%2FNFXkHVKZ%2FStrawberries-9-25oz.jpg&w=256&q=75',
            description: '20oz',
            productName: 'Strawberrie',
            productPrice: '$12',
            status: 'false',
            off: '23 % off',

        },


        {
            id: 11,
            prdctImg: 'https://kachabazar-store.vercel.app/_next/image?url=https%3A%2F%2Fi.postimg.cc%2FvHwg0D1J%2FCauliflower-1-35lb.jpg&w=256&q=75',
            description: '35lb',
            productName: 'Cauliflower',
            productPrice: '$15',
            status: 'false',
            off: '9 % off',

        },


        {
            id: 12,
            prdctImg: 'https://kachabazar-store.vercel.app/_next/image?url=https%3A%2F%2Fi.postimg.cc%2F9FN3WwGS%2FOrganic-Purple-Cauliflower-1lb.jpg&w=256&q=75',
            description: '12ct',
            productName: 'Organic Purple Cauliflower',
            productPrice: '$12',
            status: 'false',
            off: '15 % off',

        },

        {
            id: 13,
            prdctImg: 'https://kachabazar-store.vercel.app/_next/image?url=https%3A%2F%2Fi.postimg.cc%2FNM54gLBs%2FSkylar-Rae-Cherries-16lb.jpg&w=256&q=75',
            description: '1ct',
            productName: 'Skylar Rae Cherries',
            productPrice: '$15',
            status: 'false',
            off: '11 % off',

        },

        {
            id: 14,
            prdctImg: 'https://kachabazar-store.vercel.app/_next/image?url=https%3A%2F%2Fi.postimg.cc%2FwMRsrmHN%2FMuscat-Grapes-Bag-per-lb.jpg&w=256&q=75',
            description: '1lb',
            productName: 'Musqat Grapes',
            productPrice: '$12',
            status: 'false',
            off: '16 % off',

        },

        {
            id: 15,
            prdctImg: 'https://kachabazar-store.vercel.app/_next/image?url=https%3A%2F%2Fi.postimg.cc%2FqvxQw91T%2FOrganic-Pomegranate-each.jpg&w=256&q=75',
            description: 'each',
            productName: 'Organic Pomegranate',
            productPrice: '$12',
            status: 'false',
            off: '13 % off',

        },

        {
            id: 16,
            prdctImg: 'https://kachabazar-store.vercel.app/_next/image?url=https%3A%2F%2Fi.postimg.cc%2F8Ck40tYr%2FPineapple-1-5lb.jpg&w=256&q=75',
            description: '5lb',
            productName: 'Pineapple Imported',
            productPrice: '$12',
            status: 'false',
            off: '50 % off',

        },

        {
            id: 17,
            prdctImg: 'https://kachabazar-store.vercel.app/_next/image?url=https%3A%2F%2Fi.postimg.cc%2FFstZ49qv%2FStrawberries-Package-2-25-oz.jpg&w=256&q=75',
            description: '25oz',
            productName: 'Strawberrie Package',
            productPrice: '$14',
            status: 'false',
            off: '20 % off',

        },

        {
            id: 18,
            prdctImg: 'https://kachabazar-store.vercel.app/_next/image?url=https%3A%2F%2Fi.postimg.cc%2F3w03MCVn%2FOrganic-Broccoli-10oz.jpg&w=256&q=75',
            description: '10oz',
            productName: 'Organic Broccoli',
            productPrice: '$12',
            status: 'false',
            off: '13 % off',

        },





    ],
    taseCardsDeck: [
        {
            id: 1,
            subheading: 'taste of',
            heading: 'fresh & natural',
            description: 'weekend discount offer'
        },

        {
            id: 2,
            subheading: 'taste of',
            heading: 'fish & meat',
            description: 'weekend discount offer'
        },

        {
            id: 3,
            subheading: 'taste of',
            heading: 'bread & bakery',
            description: 'weekend discount offer'
        },
    ],

    categoryFishAndMeat: [
        {
            id: 1,
            name: 'fish & meat',
        },

        {
            id: 2,
            name: 'fruit & vegetable',
        },

        {
            id: 3,
            name: 'fresh seafood',
        },

        {
            id: 4,
            name: 'cooking essentials',
        },

        {
            id: 5,
            name: 'breakfast',
        },

        {
            id: 6,
            name: 'drinks',
        },

        {
            id: 7,
            name: 'milk & dairy',
        },

        {
            id: 8,
            name: 'organic food',
        },

        {
            id: 9,
            name: 'honey',
        },

        {
            id: 10,
            name: 'sauces & pickles',
        },

        {
            id: 11,
            name: 'jam & jelly',
        },

        {
            id: 12,
            name: 'snacks & instant',
        },

        {
            id: 13,
            name: 'biscuit & cakes',
        },

        {
            id: 14,
            name: 'household tools',
        },

        {
            id: 15,
            name: 'baby care',
        },

        {
            id: 16,
            name: 'pet care',
        },

        {
            id: 17,
            name: 'beauty & health',
        },

        {
            id: 18,
            name: 'sports & fitness',
        },


    ],

    cartItem: 0,
    totalCartItems: () => {
        if (state.cartItems.length == 0) {
            return 0;
        }
        return state.cartItems.map(x => x.quantity).reduce((a, b) => a + b)
    },
    IncreaseCardItem: (id: number) => {
        if (state.cartItems.filter(x => x.itemId == id).length > 0) {

            var i = state.cartItems.findIndex(x => x.itemId == id);
            if (i != -1) {
                var cc = state.cartItems;
                cc[i].quantity++;
                state.cartItems = cc;

            }
        } else {
            state.cartItems = [...state.cartItems, {
                itemId: id,
                quantity: 1
            }]
        }

    },

    getQuantityInCart: (id: number) => {
        var i = state.cartItems.findIndex(x => x.itemId == id);

        if (i == -1) {
            return 0;
        } else {
            return state.cartItems[i].quantity
        }



    },
    DecreaseItems: (id: number) => {
        if (state.cartItems.filter(x => x.itemId == id).length > 0) {




            var i = state.cartItems.findIndex(x => x.itemId == id);
            if (state.cartItems[i].quantity < 2) {

                var cc = state.cartItems;
                cc.splice(i, 1);
                state.cartItems = cc;
                return;
            } else {
                var cc = state.cartItems;
                cc[i].quantity--;
                state.cartItems = cc;

            }


        }
    },
    addCartItem: () => state.cartItem++,
    subtractCartItem: () => state.cartItem--,
    setIsTrue: () => {
        if (state.popularProductsForDailyShoping.filter(x => x.id == state.getID)) {
            state.popularProductsForDailyShoping.filter(x => x.id == state.getID ? x.status = 'true' : x.status = "false")

        } else {
            state.popularProductsForDailyShoping.filter(x => x.status = 'false')
        }
    },
    setIsFalse: () => state.popularProductsForDailyShoping.filter(x => x.status = 'false'),
    getID: 0,


    fishAndMeatsList: [
        {
            id: 1,
            prdctImg: 'https://kachabazar-store.vercel.app/_next/image?url=https%3A%2F%2Fi.postimg.cc%2F43NMbZkD%2FUSDC-Fresh-Rainbow-Trout-per-lb.jpg&w=256&q=75',
            description: '1lb',
            productName: 'fresh rainbow trout',
            productPrice: '$12',
            status: 'false',
            detailDescription: 'Most fresh vegetables are low in calories and have a water content in excess of 70 percent, with only about 3.5 percent protein and less than 1 percent fat. ... The root '

        },

        {
            id: 2,
            prdctImg: 'https://kachabazar-store.vercel.app/_next/image?url=https%3A%2F%2Fi.postimg.cc%2F7Y0pqmnW%2FTilapia-10lb.jpg&w=256&q=75',
            description: '10lb',
            productName: 'tilapia',
            productPrice: '$13',
            status: 'false',
            detailDescription: 'Most fresh vegetables are low in calories and have a water content in excess of 70 percent, with only about 3.5 percent protein and less than 1 percent fat. ... The root '

        },

        {
            id: 3,
            prdctImg: 'https://kachabazar-store.vercel.app/_next/image?url=https%3A%2F%2Fi.postimg.cc%2FYqGsb8PS%2FHilsa-fish.jpg&w=256&q=75',
            description: '1kg',
            productName: 'hilsa fish',
            productPrice: '$15',
            status: 'false',
            detailDescription: 'Most fresh vegetables are low in calories and have a water content in excess of 70 percent, with only about 3.5 percent protein and less than 1 percent fat. ... The root '

        },

        {
            id: 4,
            prdctImg: 'https://kachabazar-store.vercel.app/_next/image?url=https%3A%2F%2Fi.postimg.cc%2F7Y0pqmnW%2FTilapia-10lb.jpg&w=256&q=75',
            description: '41lb',
            productName: 'halibut',
            productPrice: '$15',
            status: 'false',
            detailDescription: 'Most fresh vegetables are low in calories and have a water content in excess of 70 percent, with only about 3.5 percent protein and less than 1 percent fat. ... The root '
        },

        {
            id: 5,
            prdctImg: 'https://kachabazar-store.vercel.app/_next/image?url=https%3A%2F%2Fi.postimg.cc%2F63Mm1Pw8%2FFresh-Wild-King-Salmon-Steak-1lb.jpg&w=256&q=75',
            description: '1lb',
            productName: 'wild king selmon steak',
            productPrice: '$15',
            status: 'false',
            detailDescription: 'Most fresh vegetables are low in calories and have a water content in excess of 70 percent, with only about 3.5 percent protein and less than 1 percent fat. ... The root '
        },

        {
            id: 6,
            prdctImg: 'https://kachabazar-store.vercel.app/_next/image?url=https%3A%2F%2Fi.postimg.cc%2F5tqG80Rq%2FFresh-Whole-Canada-Salmon-25-5-oz.jpg&w=256&q=75',
            description: '5oz',
            productName: 'canada selmon',
            productPrice: '$15',
            status: 'false',
            detailDescription: 'Most fresh vegetables are low in calories and have a water content in excess of 70 percent, with only about 3.5 percent protein and less than 1 percent fat. ... The root '
        },

        {
            id: 7,
            prdctImg: 'https://kachabazar-store.vercel.app/_next/image?url=https%3A%2F%2Fi.postimg.cc%2FbvjWGb3w%2FFresh-Whole-Atlantic-Salmon-Steaks-1lb.jpg&w=256&q=75',
            description: '1lb',
            productName: 'atlantic selmon',
            productPrice: '$14',
            status: 'false',
            detailDescription: 'Most fresh vegetables are low in calories and have a water content in excess of 70 percent, with only about 3.5 percent protein and less than 1 percent fat. ... The root '
        },

        {
            id: 8,
            prdctImg: 'https://kachabazar-store.vercel.app/_next/image?url=https%3A%2F%2Fi.postimg.cc%2FcCVTpyzL%2FLing-Cod-Steak-1lb.jpg&w=256&q=75',
            description: '12ct',
            productName: 'ling cod steak',
            productPrice: '$12',
            status: 'false',
            detailDescription: 'Most fresh vegetables are low in calories and have a water content in excess of 70 percent, with only about 3.5 percent protein and less than 1 percent fat. ... The root '
        },

        {
            id: 9,
            prdctImg: 'https://kachabazar-store.vercel.app/_next/image?url=https%3A%2F%2Fi.postimg.cc%2FG3QLb33D%2FBlack-Pearls-Salmon-Filet-Portion-6-oz.jpg&w=256&q=75',
            description: '5oz',
            productName: 'Salmon Filet Portion',
            productPrice: '$12',
            status: 'false',
            detailDescription: 'Most fresh vegetables are low in calories and have a water content in excess of 70 percent, with only about 3.5 percent protein and less than 1 percent fat. ... The root '
        },


        {
            id: 10,
            prdctImg: 'https://kachabazar-store.vercel.app/_next/image?url=https%3A%2F%2Fi.postimg.cc%2FRhVzWfCH%2FCooked-Peeled-Deveined-Shrimp-2lb.jpg&w=256&q=75',
            description: '20oz',
            productName: 'Peeled Deveined Shrimp',
            productPrice: '$12',
            status: 'false',
            detailDescription: 'Most fresh vegetables are low in calories and have a water content in excess of 70 percent, with only about 3.5 percent protein and less than 1 percent fat. ... The root '
        },


        {
            id: 11,
            prdctImg: 'https://kachabazar-store.vercel.app/_next/image?url=https%3A%2F%2Fi.postimg.cc%2FW37vpSVV%2FChilean-Sea-Bass-per-lb.jpg&w=256&q=75',
            description: '1lb',
            productName: 'Chilean Sea Bass',
            productPrice: '$15',
            status: 'false',
            detailDescription: 'Most fresh vegetables are low in calories and have a water content in excess of 70 percent, with only about 3.5 percent protein and less than 1 percent fat. ... The root '
        },


        {
            id: 12,
            prdctImg: 'https://kachabazar-store.vercel.app/_next/image?url=https%3A%2F%2Fi.postimg.cc%2F43NMbZkD%2FUSDC-Fresh-Rainbow-Trout-per-lb.jpg&w=256&q=75',
            description: '1lb',
            productName: 'fresh rainbow trout',
            productPrice: '$12',
            status: 'false',
            detailDescription: 'Most fresh vegetables are low in calories and have a water content in excess of 70 percent, with only about 3.5 percent protein and less than 1 percent fat. ... The root '
        },

        {
            id: 13,
            prdctImg: 'https://kachabazar-store.vercel.app/_next/image?url=https%3A%2F%2Fi.postimg.cc%2FYqGsb8PS%2FHilsa-fish.jpg&w=256&q=75',
            description: '1kg',
            productName: 'hilsa fish',
            productPrice: '$15',
            status: 'false',
            detailDescription: 'Most fresh vegetables are low in calories and have a water content in excess of 70 percent, with only about 3.5 percent protein and less than 1 percent fat. ... The root '
        },

        {
            id: 14,
            prdctImg: 'https://kachabazar-store.vercel.app/_next/image?url=https%3A%2F%2Fi.postimg.cc%2Fjqk1HBZ9%2FHalibut-per-lb.jpg&w=256&q=75',
            description: '1lb',
            productName: 'halibut',
            productPrice: '$12',
            status: 'false',
            detailDescription: 'Most fresh vegetables are low in calories and have a water content in excess of 70 percent, with only about 3.5 percent protein and less than 1 percent fat. ... The root '
        },

        {
            id: 15,
            prdctImg: 'https://kachabazar-store.vercel.app/_next/image?url=https%3A%2F%2Fi.postimg.cc%2F63Mm1Pw8%2FFresh-Wild-King-Salmon-Steak-1lb.jpg&w=256&q=75',
            description: 'each',
            productName: 'wild king salmon steak',
            productPrice: '$12',
            status: 'false',
            detailDescription: 'Most fresh vegetables are low in calories and have a water content in excess of 70 percent, with only about 3.5 percent protein and less than 1 percent fat. ... The root '
        },

        {
            id: 16,
            prdctImg: 'https://kachabazar-store.vercel.app/_next/image?url=https%3A%2F%2Fi.postimg.cc%2F43NMbZkD%2FUSDC-Fresh-Rainbow-Trout-per-lb.jpg&w=256&q=75',
            description: '1lb',
            productName: 'fresh rainbow trout',
            productPrice: '$12',
            status: 'false',
            detailDescription: 'Most fresh vegetables are low in calories and have a water content in excess of 70 percent, with only about 3.5 percent protein and less than 1 percent fat. ... The root '

        },

        {
            id: 17,
            prdctImg: 'https://kachabazar-store.vercel.app/_next/image?url=https%3A%2F%2Fi.postimg.cc%2F7Y0pqmnW%2FTilapia-10lb.jpg&w=256&q=75',
            description: '10lb',
            productName: 'tilapia',
            productPrice: '$13',
            status: 'false',
            detailDescription: 'Most fresh vegetables are low in calories and have a water content in excess of 70 percent, with only about 3.5 percent protein and less than 1 percent fat. ... The root '

        },

        {
            id: 18,
            prdctImg: 'https://kachabazar-store.vercel.app/_next/image?url=https%3A%2F%2Fi.postimg.cc%2FYqGsb8PS%2FHilsa-fish.jpg&w=256&q=75',
            description: '1kg',
            productName: 'hilsa fish',
            productPrice: '$15',
            status: 'false',
            detailDescription: 'Most fresh vegetables are low in calories and have a water content in excess of 70 percent, with only about 3.5 percent protein and less than 1 percent fat. ... The root '

        },

        {
            id: 19,
            prdctImg: 'https://kachabazar-store.vercel.app/_next/image?url=https%3A%2F%2Fi.postimg.cc%2F7Y0pqmnW%2FTilapia-10lb.jpg&w=256&q=75',
            description: '41lb',
            productName: 'tilapia',
            productPrice: '$15',
            status: 'false',
            detailDescription: 'Most fresh vegetables are low in calories and have a water content in excess of 70 percent, with only about 3.5 percent protein and less than 1 percent fat. ... The root '
        },





    ],

})

