// import { InMemoryDbService } from 'angular-in-memory-web-api';

import { Teammate } from './teammate-interface';

export class TeammateData {

  static teammates: Teammate[] = [
    {
      id: 1,
      firstname: 'Babatoonday',
      lastname: 'Mattieu',
      role: 'Frontend-Engineer',
      employmentDate: 'November 4, 2019',
      description: 'Leaf rake with 48-inch wooden handle.',
      salary: 300.00,
      starRating: 4.2,
      imageUrl: 'https://media.istockphoto.com/photos/portrait-of-young-man-against-white-background-picture-id916534092?b=1&k=6&m=916534092&s=170667a&w=0&h=3ZYjJJ2Yhk_jk6MLjeHd5lhs2Xn9HUPqZ_5SL8pshQM=',
      category: 'Developer',
      contactInfo: null
    },
    {
      id: 2,
      firstname: 'Michael',
      lastname: 'Mensah',
      role: 'Frontend-Engineer',
      employmentDate: 'November 4, 2018',
      description: 'Leaf rake with 48-inch wooden handle.',
      salary: 300.00,
      starRating: 4.2,
      imageUrl: 'https://media.istockphoto.com/photos/passport-photo-of-a-laughing-african-american-businesswoman-picture-id863712310?b=1&k=6&m=863712310&s=170667a&w=0&h=ptotefB_7XtacpU0oYwnagTl0BgCd3F90AZ-Xfg2Eyw=',
      category: 'Developer',
      contactInfo: null
    },
    {
      id: 3,
      firstname: 'Folaranmi',
      lastname: 'Olujobi',
      role: 'Frontend-Engineer',
      employmentDate: 'November 4, 2018',
      description: 'Leaf rake with 48-inch wooden handle.',
      salary: 300.00,
      starRating: 4.2,
      imageUrl: 'https://media.istockphoto.com/photos/portrait-of-young-man-against-white-background-picture-id916534092?b=1&k=6&m=916534092&s=170667a&w=0&h=3ZYjJJ2Yhk_jk6MLjeHd5lhs2Xn9HUPqZ_5SL8pshQM=',
      category: 'Developer',
      contactInfo: null
    },
    {
      id: 4,
      firstname: 'Kolakanni',
      lastname: 'Apanisile',
      role: 'Backend-Engineer',
      employmentDate: 'November 4, 2019',
      description: 'Leaf rake with 48-inch wooden handle.',
      salary: 300.00,
      starRating: 4.2,
      imageUrl: 'https://media.istockphoto.com/photos/portrait-of-young-man-against-white-background-picture-id916534092?b=1&k=6&m=916534092&s=170667a&w=0&h=3ZYjJJ2Yhk_jk6MLjeHd5lhs2Xn9HUPqZ_5SL8pshQM=',
      category: 'Developer',
      contactInfo: null
    },
    {
      id: 5,
      firstname: 'Adeyemi',
      lastname: 'Adeleke',
      role: 'Backend-Engineer',
      employmentDate: 'November 4, 2018',
      description: 'Leaf rake with 48-inch wooden handle.',
      salary: 300.00,
      starRating: 4.2,
      imageUrl: 'https://media.istockphoto.com/photos/portrait-of-young-man-against-white-background-picture-id916534092?b=1&k=6&m=916534092&s=170667a&w=0&h=3ZYjJJ2Yhk_jk6MLjeHd5lhs2Xn9HUPqZ_5SL8pshQM=',
      category: 'Developer',
      contactInfo: null
    },
    {
      id: 6,
      firstname: 'Ahmed',
      lastname: 'Abayomi',
      role: 'UI-UX',
      employmentDate: 'November 4, 2018',
      description: 'Leaf rake with 48-inch wooden handle.',
      salary: 300.00,
      starRating: 4.2,
      imageUrl: 'https://media.istockphoto.com/photos/portrait-of-young-man-against-white-background-picture-id916534092?b=1&k=6&m=916534092&s=170667a&w=0&h=3ZYjJJ2Yhk_jk6MLjeHd5lhs2Xn9HUPqZ_5SL8pshQM=',
      category: 'Design',
      contactInfo: null
    },
    {
      id: 7,
      firstname: 'Tosin',
      lastname: 'Lasisi',
      role: 'Product Designer',
      employmentDate: 'November 4, 2019',
      description: 'Leaf rake with 48-inch wooden handle.',
      salary: 300.00,
      starRating: 4.2,
      imageUrl: 'https://media.istockphoto.com/photos/portrait-of-young-man-against-white-background-picture-id916534092?b=1&k=6&m=916534092&s=170667a&w=0&h=3ZYjJJ2Yhk_jk6MLjeHd5lhs2Xn9HUPqZ_5SL8pshQM=',
      category: 'Design',
      contactInfo: null
    },
    {
      id: 8,
      firstname: 'Kafayat',
      lastname: 'Akinwande',
      role: 'Finanacial Analyst',
      employmentDate: 'November 4, 2018',
      description: 'Leaf rake with 48-inch wooden handle.',
      salary: 300.00,
      starRating: 4.2,
      imageUrl: 'https://media.istockphoto.com/photos/portrait-of-young-man-against-white-background-picture-id916534092?b=1&k=6&m=916534092&s=170667a&w=0&h=3ZYjJJ2Yhk_jk6MLjeHd5lhs2Xn9HUPqZ_5SL8pshQM=',
      category: 'Business',
      contactInfo: null
    },
    {
      id: 9,
      firstname: 'Folashade',
      lastname: 'Campbell',
      role: 'Product Owner',
      employmentDate: 'November 4, 2019',
      description: 'Leaf rake with 48-inch wooden handle.',
      salary: 300.00,
      starRating: 4.2,
      imageUrl: 'https://media.istockphoto.com/photos/portrait-of-young-man-against-white-background-picture-id916534092?b=1&k=6&m=916534092&s=170667a&w=0&h=3ZYjJJ2Yhk_jk6MLjeHd5lhs2Xn9HUPqZ_5SL8pshQM=',
      category: 'Business',
      contactInfo: null
    },
    {
      id: 10,
      firstname: 'Adebimpe',
      lastname: 'Samson',
      role: 'Product Owner',
      employmentDate: 'November 4, 2019',
      description: 'Leaf rake with 48-inch wooden handle.',
      salary: 300.00,
      starRating: 4.2,
      imageUrl: 'https://media.istockphoto.com/photos/portrait-of-young-man-against-white-background-picture-id916534092?b=1&k=6&m=916534092&s=170667a&w=0&h=3ZYjJJ2Yhk_jk6MLjeHd5lhs2Xn9HUPqZ_5SL8pshQM=',
      category: 'Business',
      contactInfo: null
    }

  ];
}
