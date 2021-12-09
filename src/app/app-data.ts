import { InMemoryDbService } from 'angular-in-memory-web-api';

// import Data files
import { TeammateData } from './teammate/service/teammate-data';
// import { Teammate } from './teammate/service/teammate-interface';



export class AppData implements InMemoryDbService {

  createDb() {
    const teammates = TeammateData.teammates;
    // const productCategories = ProductCategoryData.categories;
    // const suppliers = SupplierData.suppliers;
    return { teammates };
  }
}
