export class Observable {
  _value: unknown = null;
  observers: Function[] = [];

  constructor(initialValue: unknown) {
    this._value = initialValue;
  }

  set value(newValue) {
    this._value = newValue;
    this.notify();
  }

  get value() {
    return this._value;
  }

  subscribe = (callbackFunction: Function) => {
    this.observers.push(callbackFunction);
  };

  notify = () => {
    this.observers.forEach((observer) => {
      observer(this.value);
    });
  };

  unsubscribe = (callbackFunction: Function) => {
    const observers = this.observers.slice();

    this.observers = observers.filter((observer) => {
      return observer !== callbackFunction;
    });
  };
}
