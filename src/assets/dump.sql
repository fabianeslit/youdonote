CREATE TABLE IF NOT EXISTS youdonote(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    note_title TEXT, 
    note_desc TEXT,

);

INSERT or IGNORE INTO youdonote(id, note_title, note_desc) VALUES (1, 'Cook', 'Yummy');
INSERT or IGNORE INTO youdonote(id, note_title, note_desc) VALUES (2, 'Groceries', 'What A Man Gotta Do');
INSERT or IGNORE INTO youdonote(id, note_title, note_desc) VALUES (3, 'Exercise', 'Future');
INSERT or IGNORE INTO youdonote(id, note_title, note_desc) VALUES (4, 'Clean', 'Tattoos Together');
INSERT or IGNORE INTO youdonote(id, note_title, note_desc) VALUES (5, 'Fix bug', 'Whateva');