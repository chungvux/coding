type Warehouse = {
  [event: string]: Array<Function>
}
type Store = {
  [event: string]: any
}
export class EventEmitter {
  #warehouse: Warehouse;
  #store: Store;

  constructor() {
    this.#warehouse = {};
    this.#store = {};
  }

  private changeArgs(args: Array<any>): undefined | Array<any> | any {
    if (args.length === 0) {
      return undefined;
    }

    if (args.length === 1) {
      return args[0];
    }

    if (args.length > 1) {
      return args;
    }
  }

  on(event: string, listener: Function) {
    if (this.#warehouse[event]) {
      this.#warehouse[event].push(listener);
    } else {
      this.#warehouse[event] = [listener];
    }
  }

  emit(event: string, isWait?: boolean, ...args: Array<any>) {
    const listeners = this.#warehouse[event];
    const arg = this.changeArgs(args);
    
    if (listeners && listeners.length > 0) {
      for (let i = 0; i < listeners.length; i++) {
        listeners[i](arg);
      }
    }

    if (isWait) {
      this.#store[event] = arg;
    }
  }

  callStore(event: string) {
    return this.#store[event];
  }

  removeListeners(event?: string) {
    if (event && event.trim()) {
      delete this.#store[event];
      delete this.#warehouse[event];
    } else {
      this.#store = {};
      this.#warehouse = {};
    }
  }
}