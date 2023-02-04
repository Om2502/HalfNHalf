import sqlite3

# Connect to the database
conn = sqlite3.connect('beaches.db')

# Create a cursor object
cursor = conn.cursor()

# Create the beaches table
cursor.execute('''
CREATE TABLE beaches (
    id INTEGER PRIMARY KEY,
    name TEXT NOT NULL,
    state TEXT NOT NULL,
    location TEXT NOT NULL,
    sand_type TEXT NOT NULL,
    facilities TEXT NOT NULL
);
''')

# Add some data to the beaches table
beaches = [
    ('Cocoa Beach', 'Florida', 'East Coast', 'Fine Sand', 'Beach Volleyball Courts, Surfing, Fishing'),
    ('Huntington Beach', 'California', 'West Coast', 'Fine Sand', 'Surfing, Beach Volleyball Courts, Fishing'),
    ('Myrtle Beach', 'South Carolina', 'East Coast', 'Fine Sand', 'Mini Golf, Surfing, Fishing'),
    ('Waikiki Beach', 'Hawaii', 'West Coast', 'Fine Sand', 'Surfing, Snorkeling, Fishing'),
    ('Ocean City', 'Maryland', 'East Coast', 'Fine Sand', 'Mini Golf, Surfing, Fishing'),
    ('Venice Beach', 'California', 'West Coast', 'Fine Sand', 'Beach Volleyball Courts, Surfing, Fishing'),
  ('Clearwater Beach', 'Florida', 'West Coast', 'Fine Sand', 'Beach Volleyball Courts, Surfing, Fishing'),
  ('Santa Monica Beach', 'California', 'West Coast', 'Fine Sand', 'Surfing, Beach Volleyball Courts, Fishing'),
  ('Virginia Beach', 'Virginia', 'East Coast', 'Fine Sand', 'Mini Golf, Surfing, Fishing'),
  ('Waimea Bay Beach', 'Hawaii', 'West Coast', 'Fine Sand', 'Surfing, Snorkeling, Fishing'),
  ('Wildwood Beach', 'New Jersey', 'East Coast', 'Fine Sand', 'Mini Golf, Surfing, Fishing'),
  ('Miami Beach', 'Florida', 'East Coast', 'Fine Sand', 'Beach Volleyball Courts, Surfing, Fishing');

]

for beach in beaches:
    cursor.execute('''
    INSERT INTO beaches (name, state, location, sand_type, facilities)
    VALUES (?, ?, ?, ?, ?);
    ''', beach)

# Commit the changes
conn.commit()

# Query the beaches table
cursor.execute('''
SELECT * FROM beaches;
''')

# Print the results
for row in cursor.fetchall():
    print(row)

# Close the connection
conn.close()




# Connect to the database
conn = sqlite3.connect('casinos.db')

# Create a cursor object
cursor = conn.cursor()

# Create the casinos table
cursor.execute('''
CREATE TABLE casinos (
    id INTEGER PRIMARY KEY,
    name TEXT NOT NULL,
    state TEXT NOT NULL,
    location TEXT NOT NULL,
    games TEXT NOT NULL,
    hotel TEXT NOT NULL
);
''')

# Add some data to the casinos table
casinos = [
    ('MGM Grand', 'Nevada', 'Las Vegas', 'Slots, Table Games, Poker', 'Yes'),
    ('Caesars Palace', 'Nevada', 'Las Vegas', 'Slots, Table Games, Poker', 'Yes'),
    ('Bellagio', 'Nevada', 'Las Vegas', 'Slots, Table Games, Poker', 'Yes'),
    ('Foxwoods Resort Casino', 'Connecticut', 'Ledyard', 'Slots, Table Games, Poker', 'Yes'),
    ('Mohegan Sun', 'Connecticut', 'Uncasville', 'Slots, Table Games, Poker', 'Yes'),
    ('Harrah’s Resort Atlantic City', 'New Jersey', 'Atlantic City', 'Slots, Table Games, Poker', 'Yes'),
  ('The Venetian', 'Nevada', 'Las Vegas', 'Slots, Table Games, Poker', 'Yes'),
  ('The Palazzo', 'Nevada', 'Las Vegas', 'Slots, Table Games, Poker', 'Yes'),
  ('Wynn Las Vegas', 'Nevada', 'Las Vegas', 'Slots, Table Games, Poker', 'Yes'),
  ('Mohegan Sun Pocono', 'Pennsylvania', 'Wilkes-Barre', 'Slots, Table Games, Poker', 'Yes'),
  ('SugarHouse Casino', 'Pennsylvania', 'Philadelphia', 'Slots, Table Games, Poker', 'No'),
  ('Parx Casino', 'Pennsylvania', 'Bensalem', 'Slots, Table Games, Poker', 'No');

]

for casino in casinos:
    cursor.execute('''
    INSERT INTO casinos (name, state, location, games, hotel)
    VALUES (?, ?, ?, ?, ?);
    ''', casino)

# Commit the changes
conn.commit()

# Query the casinos table
cursor.execute('''
SELECT * FROM casinos;
''')

# Print the results
for row in cursor.fetchall():
    print(row)

# Close the connection
conn.close()

print(data[0]["city"])  # Output: New York
print(data[2]["crime"])  # Output: Theft
print(data[4]["score"])  # Output: 75

def create_index(data):
    index = {}
    for city, crime, score in data:
        if city not in index:
            index[city] = {}
        if crime not in index[city]:
            index[city][crime] = []
        index[city][crime].append(score)
    return index

data = [
    ("New York", "Burglary", 100),
    ("San Francisco", "Assault", 200),
    ("New York", "Assault", 150),
    ("San Francisco", "Burglary", 50)
]

index = create_index(data)
print(index)
