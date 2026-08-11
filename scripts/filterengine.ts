interface Prop {
  data?: any;
}

class FilterEngine {
  constructor(data) {
    this.data = data;
  }

  services() {
    const category = Object.values(this.data).flat();
    const merged = Object.assign({}, ...category);
    return merged;
  }

  toFilter(search) {
    const filter = Object.keys(this.services());
    const toFilter = String(search).toLowerCase();
    const searched = filter.filter((m) => {
      return m.toLowerCase().includes(toFilter);
    });
    const data = this.services();

    const stringedSearch: string = String(searched);

    const filtered = data[stringedSearch];

    return filtered;
  }
}

export default FilterEngine;
