export const api = {
  async getUsers() {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    return res.json();
  }
};
