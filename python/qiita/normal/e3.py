# def proxy_function(*args, **kwargs):
    # return another_function(*args, **kwargs)

def format_message(*items, **options):
    separator = options.get('separator', ', ')
    prefix = options.get('prefix', '')
    suffix = options.get('suffix', '')

    return f'{prefix}{separator.join(str(item) for item in items)}{suffix}'

print(format_message(1, 2, 3, separator=' | ', prefix='[', suffix=']'))