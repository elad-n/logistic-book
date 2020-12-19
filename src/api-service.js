const drivers = [
    {
        "id": "5fde3bd381ac6d2ffb2170f0",
        "isActive": true,
        "balance": "$3,817.13",
        "picture": "http://placehold.it/32x32",
        "age": 29,
        "name": {
            "first": "Virgie",
            "last": "May"
        },
        "phone": "+1 (829) 503-3955",
        "latitude": "-19.445807",
        "longitude": "35.830965",
        "type": "driver",
        "task": null
    },
    {
        "id": "5fde3bd3f91a38883b5c337e",
        "visible": true,
        "balance": "$1,443.02",
        "picture": "http://placehold.it/32x32",
        "age": 32,
        "name": {
            "first": "Austin",
            "last": "Savage"
        },
        "phone": "+1 (864) 495-2772",
        "latitude": "45.741211",
        "longitude": "-120.096158",
        "type": "driver",
        "task": null
    },
    {
        "id": "5fde3bd3fa3c4c903b78b29c",
        "visible": true,
        "balance": "$2,164.81",
        "picture": "http://placehold.it/32x32",
        "age": 30,
        "name": {
            "first": "Dyer",
            "last": "Boyle"
        },
        "phone": "+1 (800) 573-2610",
        "latitude": "17.779864",
        "longitude": "7.508608",
        "type": "driver",
        "task": null
    },
    {
        "id": "5fde3bd345ff465e8adc3ff4",
        "visible": true,
        "balance": "$3,122.94",
        "picture": "http://placehold.it/32x32",
        "age": 20,
        "name": {
            "first": "Katharine",
            "last": "Wagner"
        },
        "phone": "+1 (999) 565-3743",
        "latitude": "12.645897",
        "longitude": "-71.447755",
        "type": "driver",
        "task": null
    },
    {
        "id": "5fde3bd3119fcc4cb9a9e499",
        "visible": true,
        "balance": "$1,383.04",
        "picture": "http://placehold.it/32x32",
        "age": 35,
        "name": {
            "first": "Rhoda",
            "last": "Whitaker"
        },
        "phone": "+1 (924) 411-3065",
        "latitude": "59.60381",
        "longitude": "6.970749",
        "type": "driver",
        "task": null
    },
    {
        "id": "5fde3bd3bf639f80a7921fca",
        "visible": true,
        "balance": "$1,589.85",
        "picture": "http://placehold.it/32x32",
        "age": 20,
        "name": {
            "first": "Daniel",
            "last": "Gallegos"
        },
        "phone": "+1 (826) 556-3072",
        "latitude": "47.218134",
        "longitude": "-9.852472",
        "type": "driver",
        "task": null
    },
    {
        "id": "5fde3bd3710ad02574d0c375",
        "visible": true,
        "balance": "$1,645.50",
        "picture": "http://placehold.it/32x32",
        "age": 25,
        "name": {
            "first": "Williams",
            "last": "Harvey"
        },
        "phone": "+1 (959) 424-2811",
        "latitude": "37.373228",
        "longitude": "-162.047879",
        "type": "driver"
    },
    {
        "id": "5fde3bd3a5118c03b5349b5d",
        "visible": true,
        "balance": "$2,507.98",
        "picture": "http://placehold.it/32x32",
        "age": 28,
        "name": {
            "first": "Mcfadden",
            "last": "Fields"
        },
        "phone": "+1 (959) 462-3293",
        "latitude": "-54.29565",
        "longitude": "-109.988268",
        "type": "driver",
        "task": null
    },
    {
        "id": "5fde3bd385548cd770fc2838",
        "visible": true,
        "balance": "$2,955.84",
        "picture": "http://placehold.it/32x32",
        "age": 25,
        "name": {
            "first": "Diana",
            "last": "Haynes"
        },
        "phone": "+1 (814) 495-2856",
        "latitude": "-62.500322",
        "longitude": "-120.412407",
        "type": "driver",
        "task": null
    },
    {
        "id": "5fde3bd35d83c7ed70f8ec6e",
        "visible": true,
        "balance": "$2,608.28",
        "picture": "http://placehold.it/32x32",
        "age": 26,
        "name": {
            "first": "Susanna",
            "last": "Lancaster"
        },
        "phone": "+1 (955) 534-3574",
        "latitude": "-11.175664",
        "longitude": "142.807857",
        "type": "driver",
        "task": null
    }
];
const tasks = [
    {
        "id": "5fd8f6950b2e296cf5628968",
        "title": "some title 1",
        "assignee": null,
        "address": "356 Rose Street, Hall, Ohio, 7921",
        "latitude": "-22.903027",
        "longitude": "34.663238",
        "visible": true,
        "type": 'task'
    },
    {
        "id": "5fd8f695193f026e4d9463ea",
        "title": "some title 2",
        "assignee": null,
        "address": "341 Gates Avenue, Rodanthe, Guam, 1130",
        "latitude": "-64.431172",
        "longitude": "-54.084753",
        "visible": true,
        "type": 'task'
    },
    {
        "id": "5fd8f6955aac60e95b90312c",
        "title": "some title 3",
        "assignee": null,
        "address": "539 Havemeyer Street, Soham, Missouri, 5092",
        "latitude": "16.934618",
        "longitude": "-11.636867",
        "visible": true,
        "type": 'task'
    },
    {
        "id": "5fd8f6957d2346e7084ffb3d",
        "title": "some title 4",
        "assignee": null,
        "address": "629 Dewey Place, Kylertown, Pennsylvania, 5768",
        "latitude": "-5.153544",
        "longitude": "-64.865833",
        "visible": true,
        "type": 'task'
    },
    {
        "id": "5fd8f69565278067ce36fd56",
        "title": "some title 5",
        "assignee": null,
        "address": "237 Clinton Avenue, Sunriver, Nevada, 7531",
        "latitude": "36.25944",
        "longitude": "114.476645",
        "visible": false,
        "type": 'task'
    },
    {
        "id": "5fd8f69525e92887880993a1",
        "title": "some title 6",
        "assignee": null,
        "address": "682 Lincoln Road, Convent, Oregon, 6682",
        "latitude": "-7.704561",
        "longitude": "-30.038579",
        "visible": false,
        "type": 'task'
    },
    {
        "id": "5fd8f6951314ead8cbc5b80d",
        "title": "some title 7",
        "assignee": null,
        "address": "546 Poly Place, Gadsden, Utah, 5263",
        "latitude": "79.831765",
        "longitude": "-168.726554",
        "visible": false,
        "type": 'task'
    },
    {
        "id": "5fd8f6950141c5cb32ae8b84",
        "title": "some title 8",
        "assignee": null,
        "address": "748 Cove Lane, Coaldale, Kentucky, 9031",
        "latitude": "-65.698824",
        "longitude": "82.828309",
        "visible": false,
        "type": 'task'
    }
];

class api {
    async getDrivers() {
        return drivers;
    }

    async getTasks() {
        return tasks;
    }
}

export default new api();