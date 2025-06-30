class DatabaseConnection {
  private static instance: DatabaseConnection;

  constructor() {
    if (DatabaseConnection.instance) {
      throw new Error("Instance already exists. Use getInstance()");
    }
  }

  // static getInstance(): DatabaseConnection {
  //   if (!DatabaseConnection.instance) {
  //     DatabaseConnection.instance = new DatabaseConnection();
  //     Object.freeze(DatabaseConnection.instance);
  //   }

  //   return DatabaseConnection.instance;
  // }

  static getInstance(): DatabaseConnection {
    if (DatabaseConnection.instance) {
      throw new Error("Instance already exists");
    }
    DatabaseConnection.instance = new DatabaseConnection();
    return DatabaseConnection.instance;
  }
  connect() {
    console.log("Database connected.");
  }
  disconnect() {
    console.log("Database disconnected.");
  }
}

const db_connection = DatabaseConnection.getInstance();
db_connection.connect();

Object.freeze(db_connection);

try {
  const db2 = new (DatabaseConnection)();
  console.log(db2)
} catch (err: any) {
  console.error("Error:", err.message);
}

export { db_connection };
