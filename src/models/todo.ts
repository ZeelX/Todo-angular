export class Todo{

  private _what!:string;
  private _when!:string;


  get what(): string {
    return this._what;
  }

  set what(value: string) {
    this._what = value;
  }

  get when(): string {
    return this._when;
  }

  set when(value: string) {
    this._when = value;
  }
}
