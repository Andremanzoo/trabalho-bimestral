class Subject {
  constructor() {
    this.observers = [];
  }

  attach(observer) {
    this.observers.push(observer);
  }

  detach(observer) {
    const index = this.observers.indexOf(observer);
    if (index !== -1) {
      this.observers.splice(index, 1);
    }
  }

  notify() {
    for (const observer of this.observers) {
      observer.update();
    }
  }
}

class Observer {
  constructor(subject) {
    this.subject = subject;
    this.subject.attach(this);
  }

  update() {
    console.log('Mensagem recebida pelo Observer');
  }
}
