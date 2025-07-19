CREATE TABLE IF NOT EXISTS activities (
                                          id            INTEGER PRIMARY KEY AUTOINCREMENT,
                                          title         TEXT UNIQUE NOT NULL,
                                          location      TEXT NOT NULL,
                                          imageUrl      TEXT NOT NULL,
                                          description   TEXT NOT NULL,
                                          schedule      TEXT NOT NULL,
                                          address       TEXT NOT NULL,
                                          organizer     TEXT NOT NULL,
                                          contact       TEXT NOT NULL,
                                          website       TEXT NOT NULL,
                                          maxParticipants INTEGER NOT NULL CHECK(maxParticipants > 0),
    createdAt     DATETIME DEFAULT CURRENT_TIMESTAMP
    );

CREATE TABLE IF NOT EXISTS pending (
                                       id            INTEGER PRIMARY KEY AUTOINCREMENT,
                                       title         TEXT NOT NULL,
                                       location      TEXT NOT NULL,
                                       imageUrl      TEXT NOT NULL,
                                       description   TEXT NOT NULL,
                                       schedule      TEXT NOT NULL,
                                       address       TEXT NOT NULL,
                                       organizer     TEXT NOT NULL,
                                       contact       TEXT NOT NULL,
                                       website       TEXT NOT NULL,
                                       maxParticipants INTEGER NOT NULL CHECK(maxParticipants > 0),
    createdAt     DATETIME DEFAULT CURRENT_TIMESTAMP
    );