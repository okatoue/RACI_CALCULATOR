import csv
import json

with open('LOOKUP table.csv', 'r') as csvfile:
    reader = csv.reader(csvfile)
    lookup_table = {}

    # iterate through each row in the CSV file
    for row in reader:
        Pipe_Mat = row[0]
        Pipe_size = row[2]
        Pipe_type = row[3]
        overall = row[0] + " " + row[3]

        # if the Pipe_Mat is not already in the lookup table, add it as a new dictionary
        if overall not in lookup_table:
            lookup_table[overall] = {}

        # if the Pipe_size is not already in the lookup table for this Pipe_Mat, add it as a new list
        if Pipe_size not in lookup_table[overall]:
            lookup_table[overall][Pipe_size] = []

    # write the resulting lookup table to a JSON file
    with open('lookup_table.json', 'w') as jsonfile:
        for key, value in lookup_table.items():
            jsonfile.write(f'"{key}" = {json.dumps(list(value.keys()))}\n')
