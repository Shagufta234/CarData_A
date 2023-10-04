import React, { useState } from 'react';
import CarList from './CarList';
import Pagination from './Pagination';
import SearchBar from './SearchBar';

const App = () => {
  const initialCars = [
    // Your initial car data here
    {
        // imageURL: 'https://img.freepik.com/free-photo/view-car-running-high-speed_23-2150635415.jpg',
        imageURL: 'https://stimg.cardekho.com/images/carexteriorimages/630x420/Mercedes-Benz/GLA/10849/1690447163011/front-left-side-47.jpg?impolicy=resize&imwidth=480',
        make: 'Honda1',
        model: 'Civic1',
        price: 2200012,
      },{
        imageURL :'https://www.autocar.co.uk/sites/autocar.co.uk/files/styles/gallery_slide/public/images/car-reviews/first-drives/legacy/mercedes-benz-eqa-2022-front-quarter-tracking.jpg?itok=2s0VjzKb',
        make: 'Honda2',
        model: 'Civi2c',
        price: 2200032,
      },{
        imageURL: 'https://img.freepik.com/free-photo/view-car-running-high-speed_23-2150635415.jpg',
                  
        make: 'Honda3',
        model: 'Civic3',
        price: 2200024,
      },{
        imageURL: 'https://img.freepik.com/premium-photo/bangkok-thailand-08082022-lamborghini-luxury-super-car-fast-sports-premium-lighting-background-3d-illustration_67092-1599.jpg',
        make: 'Honda4',
        model: 'Civic33',
        price: 2200055,
      },{
        // imageURL: 'https://img.freepik.com/free-photo/view-car-running-high-speed_23-2150635415.jpg',
        
        imageURL:'https://imgd.aeplcdn.com/0x0/n/cw/ec/51378/s5-sportback-exterior-right-front-three-quarter-5.jpeg?q=80',
        make: 'Honda5',
        model: 'Civic4',
        price: 2200033,
      },{
        imageURL: 'https://img.freepik.com/free-photo/view-car-running-high-speed_23-2150635415.jpg',
        make: 'Honda6',
        model: 'Civic333',
        price: 2200044,
      },
      {
        // imageURL: 'https://img.freepik.com/free-photo/view-car-running-high-speed_23-2150635415.jpg',
        imageURL        :'https://carsales.pxcrush.net/carsales//car/dealer/1o9rrxfefzkmi9l5z3ywbk793.jpg?pxc_method=gravityfill&pxc_bgtype=self&pxc_size=720,480',
        make: 'Honda7',
        model: 'Civic121',
        price: 2200045,
      },
      {
        // imageURL: 'https://img.freepik.com/free-photo/view-car-running-high-speed_23-2150635415.jpg',
        
        imageURL:'https://assets.architecturaldigest.in/photos/60004a09d68a278e29c86a11/16:9/w_2560%2Cc_limit/feature6-1366x768.jpg',
        make: 'Honda8',
        model: 'Civic432',
        price: 220004,
      },
      {
        imageURL: 'https://cdn.motor1.com/images/mgl/g440ng/s3/rimac-nevera.jpg',

        make: 'Honda9',
        model: 'Civic453',
        price: 220003,
      } ,
      {
        imageURL: 'https://media.istockphoto.com/id/1150425295/photo/3d-illustration-of-generic-hatchback-car-perspective-view.jpg?s=612x612&w=0&k=20&c=vws8oDFjcfGpqNAybWPxsA9XROdcBh2MXW2PGEDgk-8=',
        make: 'Honda10',
        model: 'Civic56',
        price: 220002,
      },
      {
        imageURL: 'https://i.i-sgcm.com/new_cars/cars/21550/21550_m.jpg',
        make: 'Honda11',
        model: 'Civic57',
        price: 220001,
      }
  ];

  const [cars, setCars] = useState(initialCars);
  const [currentPage, setCurrentPage] = useState(1);
  const carsPerPage = 9; // Change this based on your preference
  const [searchTerm, setSearchTerm] = useState('');

  // Handle pagination
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Handle search
  const handleSearch = (searchTerm) => {
    // Filter cars based on the search term
    const filteredCars = initialCars.filter((car) =>
      car.make.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Update the cars state with the filtered cars
    setCars(filteredCars);

    // Reset pagination to the first page
    setCurrentPage(1);
  };

  return (
    <div className="app">
      <h1>Car Selling App</h1>
      <SearchBar onSearch={handleSearch} />

      <h1>Car List</h1>
      <CarList
        cars={cars.slice(
          (currentPage - 1) * carsPerPage,
          currentPage * carsPerPage
        )}
      />
      <Pagination
        currentPage={currentPage}
        totalPages={Math.ceil(cars.length / carsPerPage)}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default App;
