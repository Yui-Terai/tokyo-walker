CREATE TABLE IF NOT EXISTS locations (
    id SERIAL PRIMARY KEY,
    category TEXT,
    name TEXT,
    jp_name TEXT,
    img TEXT,
    description TEXT,
    address TEXT,
    opening_hours TEXT,
    fee TEXT,
    website TEXT,
    hotels_nearby TEXT,
    latitude FLOAT,
    longitude FLOAT
);


CREATE TABLE IF NOT EXISTS lists (
    id SERIAL PRIMARY KEY,
    list_group TEXT
);


CREATE TABLE IF NOT EXISTS list_locations (
    id SERIAL PRIMARY KEY,
    list_id INTEGER,
    location_id INTEGER
);