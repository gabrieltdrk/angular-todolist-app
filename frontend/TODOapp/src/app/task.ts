export class Task {
  _id: string | undefined;
  description: string;
  status: boolean;

  constructor(_description: string, _status: boolean) {
    this.description = _description;
    this.status = _status;
  }
}
