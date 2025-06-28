class DatabaseConnection {
  private static instance: DatabaseConnection;

  constructor() {
    if (DatabaseConnection.instance) {
      throw new Error("Instance already exists. Use getInstance()");
    }
  }

  static getInstance(): DatabaseConnection {
    if (!DatabaseConnection.instance) {
      DatabaseConnection.instance = new DatabaseConnection();
      Object.freeze(DatabaseConnection.instance); // freeze here to forbid Editing
    }

    return DatabaseConnection.instance;
  }

  connect() {
    console.log("Database connected.");
  }

  disconnect() {
    console.log("Database disconnected.");
  }
}

const db1 = DatabaseConnection.getInstance();
db1.connect();


try {
  const db2 = new (DatabaseConnection)();
} catch (err: any) {
  console.error("Error:", err.message);
}

export { DatabaseConnection };
