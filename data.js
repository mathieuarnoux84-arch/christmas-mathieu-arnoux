const wishlistData = [
    {
        "id": 1,
        "title": "Apple Magic Mouse (Noir)",
        "price": 119.00,
        "image": "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MXK63?wid=1000&hei=1000&fmt=jpeg&qlt=95&.v=1664481896734",
        "link": "https://www.apple.com/fr/shop/product/mxk63z/a/magic-mouse-usb%E2%80%91c-surface-multi-touch-noir",
        "priority": "High",
        "category": "Souris"
    },
    {
        "id": 2,
        "title": "Dieter Rams: Ten Principles for Good Design",
        "price": 54.95,
        "image": "https://m.media-amazon.com/images/I/71mvTROy+CL._SL1500_.jpg",
        "link": "https://www.amazon.fr/dp/1838661530",
        "priority": "Medium",
        "category": "Livre"
    },
    {
        "id": 3,
        "title": "Jean Droit Uniqlo JWA (Bleu)",
        "price": 49.90,
        "image": "https://image.uniqlo.com/UQ/ST3/eu/imagesgoods/479816/item/eugoods_68_479816_3x4.jpg?width=400",
        "link": "https://www.uniqlo.com/fr/fr/products/E479816-000/00?colorDisplayCode=68&sizeDisplayCode=032",
        "priority": "Medium",
        "category": "Pantalon"
    },
    {
        "id": 4,
        "title": "Jean Droit Uniqlo JWA (Gris)",
        "price": 49.90,
        "image": "https://image.uniqlo.com/UQ/ST3/eu/imagesgoods/479816/item/eugoods_07_479816_3x4.jpg?width=400",
        "link": "https://www.uniqlo.com/fr/fr/products/E479816-000/00?colorDisplayCode=07&sizeDisplayCode=032",
        "priority": "Medium",
        "category": "Pantalon"
    },
    {
        "id": 5,
        "title": "Pull Dégradé Soufflé Uniqlo",
        "price": 39.90,
        "image": "https://image.uniqlo.com/UQ/ST3/eu/imagesgoods/479840/item/eugoods_04_479840_3x4.jpg?width=400",
        "link": "https://www.uniqlo.com/fr/fr/products/E479840-000/00?colorDisplayCode=04&sizeDisplayCode=004",
        "priority": "Medium",
        "category": "Pull"
    },
    {
        "id": 6,
        "title": "Initio Blessed Baraka Eau de Parfum",
        "price": 202.50,
        "image": "https://beautinow.com/wp-content/uploads/2023/08/3701415900127_1.jpg",
        "link": "https://beautinow.com/products/initio-blessed-baraka-eau-de-parfum/",
        "priority": "High",
        "category": "Parfum"
    },
    {
        "id": 7,
        "title": "Pentagram : Living by Design ",
        "price": 120.89,
        "image": "https://m.media-amazon.com/images/I/61fOqRmGk4L._SL1500_.jpg",
        "link": "https://www.amazon.fr/dp/0500027463",
        "priority": "Low",
        "category": "Livre"
    },
    {
        "id": 8,
        "title": "The Art of Noticing",
        "price": 20.33,
        "image": "https://m.media-amazon.com/images/I/91Ml-fRs9vL._SL1500_.jpg",
        "link": "https://www.amazon.fr/dp/1529104432",
        "priority": "Low",
        "category": "Livre"
    },
    {
        "id": 9,
        "title": "Zuiver Deskmat Monochrome Waves",
        "price": 29.95,
        "image": "https://woocommerce-1553216-6015412.cloudwaysapps.com/wp-content/uploads/2024/01/monochrome-waves-top-down.webp",
        "link": "https://www.zuiver.one/deskmats/monochrome-waves",
        "priority": "Low",
        "category": "Tapis de souris"
    },
    {
        "id": 10,
        "title": "Virgil Abloh. Nike. ICONS",
        "price": 57.99,
        "image": "https://m.media-amazon.com/images/I/71WlaSfm6iL._SL1500_.jpg",
        "link": "https://www.amazon.fr/dp/383658509X",
        "priority": "High",
        "category": "Livre"
    },
    {
        "id": 11,
        "title": "Soft minimal : Norm Architects",
        "price": 60.00,
        "image": "https://m.media-amazon.com/images/I/614BMt+f0cL._SY522_.jpg",
        "link": "https://www.amazon.fr/dp/3967040550",
        "priority": "Medium",
        "category": "Livre"
    },
    {
        "id": 12,
        "title": "Asics Gel-Kayano 14 (Crème/Argent)",
        "price": 152.00,
        "image": "https://www.asphaltgold.com/cdn/shop/files/5lDJ2r1i72YLuFXogbOH-1203A759-102-Asics-GEL-Kayano-12.1-Cream-Pure-Silver-of-sm-2_768x768_crop_center.jpg?v=1755523141",
        "link": "https://www.asphaltgold.com/fr/products/asics-gelkayano-121-cream-pure-silver",
        "priority": "High",
        "category": "Chaussures",
        "size": "43,5"
    },
    {
        "id": 13,
        "title": "The design book",
        "price": 18.66,
        "image": "https://m.media-amazon.com/images/I/61mgH2zcLIL._SL1500_.jpg",
        "link": "https://www.amazon.fr/dp/1838661433",
        "priority": "Low",
        "category": "Livre"
    },
    {
        "id": 14,
        "title": "Chargeur UGREEN Nexode 100W GaN",
        "price": 34.99,
        "image": "https://m.media-amazon.com/images/I/51vTslonsTL._AC_SL1500_.jpg",
        "link": "https://www.amazon.fr/UGREEN-Charger-GaNInfinity-Compatible-MacBook/dp/B0CQN1MC42",
        "priority": "Medium",
        "category": "Chargeur"
    },
    {
        "id": 15,
        "title": "KAWS (Rizzoli)",
        "price": 49.99,
        "image": "https://img.bstn.com/eyJidWNrZXQiOiJic3RuLWltYWdlLXNlcnZlciIsImtleSI6ImNhdGFsb2cvcHJvZHVjdC85NzgwLTg0NzgtMzQzLTQxLzk3ODAtODQ3OC0zNDMtNDEtMDEuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7ImZpdCI6ImNvbnRhaW4iLCJ3aWR0aCI6MTYwMCwiaGVpZ2h0IjoyMDAwLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
        "link": "https://www.bstn.com/eu_fr/p/rizzoli-kaws-by-monica-ramirez-montagut-9780-8478-343-41-0280347",
        "priority": "High",
        "category": "Livre"
    },
    {
        "id": 16,
        "title": "Timeless Treasures (Montres)",
        "price": 69.99,
        "image": "https://img.bstn.com/eyJidWNrZXQiOiJic3RuLWltYWdlLXNlcnZlciIsImtleSI6ImNhdGFsb2cvcHJvZHVjdC85NzgtMy05NjE3MS00MzUtMy85NzgtMy05NjE3MS00MzUtMy0wMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsiZml0IjoiY29udGFpbiIsIndpZHRoIjoxNjAwLCJoZWlnaHQiOjIwMDAsImJhY2tncm91bmQiOnsiciI6MjU1LCJnIjoyNTUsImIiOjI1NSwiYWxwaGEiOjF9fX19",
        "link": "https://www.bstn.com/eu_fr/p/teneues-timeless-treasures-the-fascination-of-certified-pre-owned-watches-by-ralph-jahns-978-3-96171-435-3-0297832",
        "priority": "High",
        "category": "Livre"
    },
    {
        "id": 17,
        "title": "Pull Episodes Project",
        "price": 69.95,
        "image": "https://www.episodesproject.com/cdn/shop/files/EP.6-Sweatshirt-Blue-Flatlay-_NEW__1_c2c235cd-8cf3-483e-b386-e354440cce5c.jpg?v=1753627482&width=1646",
        "link": "https://www.episodesproject.com/products/disc-sweatshirt-cobalt-630gsm",
        "priority": "High",
        "category": "Vetements"
    },
    {
        "id": 18,
        "title": "Salomon XT-4 OG (Vanilla Ice)",
        "price": 139.00,
        "image": "https://www.asphaltgold.com/cdn/shop/files/ziZwxol7n4eeCoofL21Z-L47741200-Salomon-XT-4-OG-Vanilla-Ice-Ballad-Blue-Tender-Peach-of-sm-1_768x768_crop_center.jpg?v=1758624767",
        "link": "https://www.asphaltgold.com/products/salomon-xt4-og-vanilla-ice-ballad-blue-tender-peach",
        "priority": "High",
        "category": "Chaussures",
        "size": "43 1/3"
    },
    {
        "id": 19,
        "title": "Striped Combat Longsleeve",
        "price": 54.99,
        "image": "https://99based.com/cdn/shop/files/Bild-5_7acdb411-530e-496e-9669-dc181d121e89.png?v=1763055984",
        "link": "https://99based.com/products/striped-combat-longsleeve-red?variant=52575754780939",
        "priority": "Medium",
        "category": "Vetements",
        "size": "M"
    },
    {
        "id": 20,
        "title": "Asics GEL-NYC Oatmeal",
        "price": 118.00,
        "image": "https://www.asphaltgold.com/cdn/shop/files/GwkRwmQMHM5P70dHsK3c_1203A739-250-Asics-GEL-NYC-Oatmeal-Bisque-SM-1_768x768_crop_center.jpg?v=1750771727",
        "link": "https://www.asphaltgold.com/fr/products/asics-gelnyc-oatmeal-bisque?wgu=300900_214131_17637574511365_35fd4b5a02&wgexpiry=1795293451&utm_source=affiliate&utm_medium=track_webgains&utm_campaign=214131&source=webgains",
        "priority": "High",
        "category": "Chaussures",
        "size": "43,5"
    }
];
