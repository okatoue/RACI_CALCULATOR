import csv
import json

with open('LOOKUP table.csv', 'r') as csvfile:
    reader = csv.reader(csvfile)
    lookup_table = {}

    # iterate through each row in the CSV file
    for row in reader:
        fruit = row[0]
        key = row[1]
        value = row[2]

        # if the fruit is not already in the lookup table, add it as a new key
        if fruit not in lookup_table:
            lookup_table[fruit] = {}

        # add the value to the appropriate list based on the key
        if key not in lookup_table[fruit]:
            lookup_table[fruit][key] = []
        lookup_table[fruit][key].append(value)

    # write the resulting lookup table to a JSON file
with open('lookup_table.json', 'w') as jsonfile:
    json.dump(lookup_table, jsonfile, indent=4, separators=(',', ': '))
    jsonfile.write('\n')
