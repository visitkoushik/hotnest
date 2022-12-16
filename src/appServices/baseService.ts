export interface BaseService<Type> {
  findAll: <Type>(authKey: string) => Type[];
}
