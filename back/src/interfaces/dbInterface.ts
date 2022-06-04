interface IDataBase {
  connectionString: string;
  ssl: {
    rejectUnauthorized: boolean;
  };
}

export default IDataBase;
