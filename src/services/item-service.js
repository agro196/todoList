export default class ItemService {
  data = [
    { id: 1, label: "Drink Coffee", important: false, done: false },
    { id: 2, label: "Read book", important: true, done: false },
    { id: 3, label: "Watch TV", important: false, done: false },
  ];

  getItems() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (Math.random() > 0.75) {
          reject(new Error("Something bad happened"));
        } else {
          resolve(this.data);
        }
      }, 700);
    });
  }
}
