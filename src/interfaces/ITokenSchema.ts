interface ITokenSchema {
  required(token: string): void;
  validate(token: string): void;
}

export default ITokenSchema;