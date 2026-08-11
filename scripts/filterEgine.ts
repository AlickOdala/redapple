interface Prop {
  data?: any;
}

class FilterEnine {
  constructor({ data }: Prop) {
    this.data = data;
    this.toFiilter = 
  }
  dataCleaner() {
    const cleaned = this.data?.map((path, i) => {
      const id = i + 1;
      const parts = path.split("/");
      const category = parts[3];
      const service = parts[4];
      const name = parts.pop().split(".")[0];
      const url = path;

      return { id, name, service, category, url };
    });

    return cleaned;
  }

  filter() {

  }
}
