import csv
import json

# Specify the path to your CSV file
csv_file_path = 'src\components\weatherWarning\warncellids.csv'

# Specify the path where you want to save the JSON file
json_file_path = 'src\components\weatherWarning\warncellids.json'

# Read data from CSV and convert to a list of dictionaries
csv_data = {}
with open(csv_file_path, 'r', encoding='utf-8') as file:
    for n,line in enumerate(file):
        if n > 0:
            # Use try-except to handle potential issues with empty lines or incorrect CSV format
            try:
                key, value = line.strip().split(';', 1)
                csv_data[value] = key
            except ValueError:
                # Handle cases where the line doesn't contain the expected number of fields
                print(f"Skipping invalid line: {line.strip()}")

# Write data to JSON file
with open(json_file_path, 'w',encoding='utf-8') as json_file:
    json.dump(csv_data,json_file, ensure_ascii=False, indent=2)

print(f'Conversion complete. JSON file saved at: {json_file_path}')
