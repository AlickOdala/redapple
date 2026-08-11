import react from "react";

const pictures = {
  Poster: [
    { name: "poste1", url: "poster1" },
    { name: "poste2", url: "poster2" },
    { name: "poste3", url: "poster3" },
    { name: "poste4", url: "poster4" },
  ],
  Flyer: [
    { name: "flyer1", url: "flyer1" },
    { name: "flyer2", url: "flyer2" },
    { name: "flyer3", url: "flyer3" },
    { name: "flyer4", url: "flyer4" },
  ],
  Card: [
    { name: "card1", url: "card1" },
    { name: "card2", url: "card2" },
    { name: "card3", url: "card3" },
    { name: "card4", url: "card4" },
  ],
  BusinessKit: [
    { name: "kit1", url: "kit1" },
    { name: "kit2", url: "kit2" },
    { name: "kit3", url: "kit3" },
    { name: "kit4", url: "kit4" },
  ],
};

const toFilter = "flyer";

class FilterEngine {
  constructor() {
    this.data = Object.values(pictures).flat();
    this.filter = String(toFilter.trim().toLowerCase() ?? "");
    this.filterAll();
  }
  filterAll() {
    this.data.filter((item) => {
      item.includes("flyer");
    });
  }
}

export default FilterEngine;

/*
class filsterEgine {
    constructor(data, toFilter) {
        this.filter = String(toFilter.trim().toLowerCase() ?? "")
        this.data = Object.entries(data).flat().filter(Boolean)
        //this.items = Object.values(data).flat().filter(Boolean) 
    }

    category(){
        const filter = this.category.filter(([key, value])=>{
            if(key){
               const cat = key.toLowerCase();
            const filterCat = cat.includes(this.filter)
            return filterCat 
            } else {

            }
            
        })
        const categoryItems = Object.values(filter).flat()
        return Object.values(categoryItems)
    }

    filterAll(){
        this.data.map(([key, value])=>{
            if ({key}){
                key.filter((category)=>{
                const category = key.toLowerCase()
                const filtered = category.includes(this.filter)

                return Object.values(filtered).flat()
            })
            } else if (value) {
                
            }
            
            

        })
    }
}





*/

/*const items = this.items.filter((img) => {
          const name = (img?.name ?? "").toLowerCase();
          const imag = name.includes(this.filter);
          return imag;
        });

        return Object.values(items);
try {
      const FilterCategory = () => {
        if (categoryFilter !== "Filter All") {
          
          
          const Filter = category.filter(([key, value]) => {
            const cat = key.toLowerCase();
            const filterCat = cat.includes(querry);
            return filterCat;
          });
          const newObj = Object.values(Filter).flat();
          const images: any = newObj[1];
          return Object.values(images);
        } else {
          return allImages;
        }
      };

      const hundleFilter = () => {
        //const dataset = await data;
        //search querry
        const q = String(searched ?? " ")
          .trim()
          .toLowerCase();

        if (!q) {
          if (categoryFilter) {
            return FilterCategory();
          } else {
            return allImages;
          }
        }
        const picturs = Object.values(allImages).flat().filter(Boolean);

        const filts = picturs.filter((img) => {
          setCategoryFilter("");
          const name = (img?.name ?? "").toLowerCase();
          const imag = name.includes(q);
          return imag;
        });

        return Object.values(filts);
      };
      const results: any = hundleFilter();
      setImages(results);
    } catch (error) {
    } finally {
    }
    */
