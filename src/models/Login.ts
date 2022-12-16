import { BaseEntity } from './BaseEntity';

export class Login extends BaseEntity {
  public active: boolean;
  public authCode: string;
  public userID: string;
  public userName: string;
  public passCode: string;

  constructor(userID: string, userName: string, passCode: string) {
    super();
    this.userID = userID;
    this.userName = userName;
    this.passCode = passCode;
  }
}
