import pprint

data = {
    'name': 'Alice',
    'age': 30,
    'address': {
        'street': '123 Main St',
        'city': 'Springfield',
        'state': 'IL',
    },
    'phones': [
        '217-555-1212',
        '312-555-1212',
    ],
}

pprint.pprint(data)