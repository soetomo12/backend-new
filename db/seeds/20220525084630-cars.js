'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('cars', 
    [
      {
        plate: "DBH-3491",
        manufacture: "Ford",
        model: "F150",
        image: "./images/car01.min.jpg",
        rent: 200000,
        capacity: 2,
        description:
          " Brake assist. Leather-wrapped shift knob. Glove box lamp. Air conditioning w/in-cabin microfilter.",
        availableAt: "2022-03-23T15:49:05.563Z",
        transmission: "Automatic",
        available: true,
        type: "Sedan",
        year: 2022,
        options: [
          "Cruise Control",
        ],
        specs: [
          "Brake assist",
        ],
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        plate: "WXB-3984",
        manufacture: "BMW",
        model: "X5",
        image: "./images/car02.min.jpg",
        rent: 800000,
        capacity: 6,
        description:
          " Rear passenger map pockets. Electrochromic rearview mirror. Dual chrome exhaust tips. Locking glove box.",
        availableAt: "2022-03-23T15:49:05.563Z",
        transmission: "Automatic",
        available: false,
        type: "Convertible",
        year: 2019,
        options: [
          "Keyless Entry",
        ],
        specs: [
          "Rear passenger map pockets",
        ],
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        plate: "OSL-4224",
        manufacture: "Lincoln",
        model: "MKZ",
        image: "./images/car03.min.jpg",
        rent: 900000,
        capacity: 6,
        description:
          " Driver & front passenger map pockets. Direct-type tire pressure monitor system. Cargo area lamp. Glove box lamp.",
        availableAt: "2022-03-23T15:49:05.563Z",
        transmission: "Automanual",
        available: true,
        type: "Sedan",
        year: 2021,
        options: [
          "Bucket Seats",
        ],
        specs: [
          "Driver & front passenger map pockets",
        
        ],
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        plate: "VPT-9753",
        manufacture: "BMW",
        model: "M5",
        image: "./images/car04.min.jpg",
        rent: 900000,
        capacity: 6,
        description: ' 6.1L SRT V8 "Hemi" engine.',
        availableAt: "2022-03-23T15:49:05.563Z",
        transmission: "Manual",
        available: true,
        type: "Hatchback",
        year: 2018,
        options: [
          "Alloy Wheels",
         
        ],
        specs: [
          '6.1L SRT V8 "Hemi" engine',
          
        ],
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        plate: "BHD-3923",
        manufacture: "Lincoln",
        model: "Navigator",
        image: "./images/car05.min.jpg",
        rent: 200000,
        capacity: 2,
        description:
          " Body color sill extension. Torsion beam rear suspension w/stabilizer bar. Front & rear passenger folding assist grips.",
        availableAt: "2022-03-23T15:49:05.563Z",
        transmission: "Automatic",
        available: false,
        type: "Minivan",
        year: 2020,
        options: [
          "CD (Multi Disc)",
      
        ],
        specs: [
          "Body color sill extension",
     
        ],
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        plate: "JPM-5482",
        manufacture: "Ford",
        model: "Fiesta",
        image: "./images/car06.min.jpg",
        rent: 900000,
        capacity: 4,
        description:
          " Tilt steering column. Carpeted cargo area. Tip start system. Leather-wrapped shift knob.",
        availableAt: "2022-03-23T15:49:05.563Z",
        transmission: "Automanual",
        available: true,
        type: "Hatchback",
        year: 2016,
        options: [
          "Leather Interior",
        
        ],
        specs: [
          "Tilt steering column",
        
        ],
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        plate: "BTW-1960",
        manufacture: "Honda",
        model: "Accord",
        image: "./images/car07.min.jpg",
        rent: 900000,
        capacity: 4,
        description:
          " Silver finish interior door handles. 160-amp alternator. Tire pressure monitoring system (TPMS). Cloth covered headliner.",
        availableAt: "2022-03-23T15:49:05.563Z",
        transmission: "Automatic",
        available: false,
        type: "Sedan",
        year: 2020,
        options: [
          "AM/FM Stereo",
        
        ],
        specs: [
          "Silver finish interior door handles",
          
        ],
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        plate: "YHD-4104",
        manufacture: "Lincoln",
        model: "Navigator",
        image: "./images/car08.min.jpg",
        rent: 300000,
        capacity: 2,
        description:
          " XM satellite radio receiver -inc: 90 day trial subscription. Dual front illuminated visor vanity mirrors.",
        availableAt: "2022-03-23T15:49:05.563Z",
        transmission: "Manual",
        available: true,
        type: "Regular Cab Pickup",
        year: 2014,
        options: [
          "Fog Lights",
          
        ],
        specs: [
          "XM satellite radio receiver -inc: 90 day trial subscription",
         
        ],
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        plate: "STL-7347",
        manufacture: "Buick",
        model: "LaCrosse",
        image: "./images/car09.min.jpg",
        rent: 1000000,
        capacity: 6,
        description:
          " Rear reading & courtesy lamps. Zone body construction -inc: front/rear crumple zones, hood deformation point.",
        availableAt: "2022-03-23T15:49:05.563Z",
        transmission: "Automatic",
        available: false,
        type: "Extended Cab Pickup",
        year: 2012,
        options: [
          "CD (Multi Disc)",
        
        ],
        specs: [
          "Rear reading & courtesy lamps",
          
        ],
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        plate: "TJW-7622",
        manufacture: "BMW",
        model: "X5",
        image: "./images/car10.min.jpg",
        rent: 300000,
        capacity: 6,
        description:
          " Cargo compartment lamp. Body color fascias w/bright insert. Front/rear stabilizer bars.",
        availableAt: "2022-03-23T15:49:05.563Z",
        transmission: "Manual",
        available: true,
        type: "Hatchback",
        year: 2019,
        options: [
          "Third Row Seats",
        
        ],
        specs: [
          "Cargo compartment lamp",

        ],
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        plate: "YND-1892",
        manufacture: "Chevy",
        model: "Malibu",
        image: "./images/car11.min.jpg",
        rent: 700000,
        capacity: 2,
        description:
          " Cloth covered headliner. Sentry Key theft deterrent system. Air conditioning w/in-cabin microfilter.",
        availableAt: "2022-03-23T15:49:05.563Z",
        transmission: "Automatic",
        available: false,
        type: "Coupe",
        year: 2019,
        options: [
          "Alloy Wheels",
        
        ],
        specs: [
          "Cloth covered headliner",
       
        ],
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        plate: "FZQ-1989",
        manufacture: "BMW",
        model: "X3",
        image: "./images/car12.min.jpg",
        rent: 800000,
        capacity: 4,
        description: " Multi-reflector halogen headlamps. Speed control.",
        availableAt: "2022-03-23T15:49:05.563Z",
        transmission: "Automanual",
        available: true,
        type: "Passenger Van",
        year: 2018,
        options: [
          "Premium Sound",
     
        ],
        specs: [
          "Multi-reflector halogen headlamps",
          
        ],
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        plate: "GAG-1943",
        manufacture: "Chevy",
        model: "Malibu",
        image: "./images/car13.min.jpg",
        rent: 900000,
        capacity: 6,
        description:
          " Leather-wrapped shift knob. Dual front illuminated visor vanity mirrors. Battery saver. Driver & front passenger map pockets.",
        availableAt: "2022-03-23T15:49:05.563Z",
        transmission: "CVT",
        available: true,
        type: "SUV",
        year: 2017,
        options: [
          "Memory Seats",
        
        ],
        specs: [
          "Leather-wrapped shift knob",
          
        ],
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        plate: "CVO-9549",
        manufacture: "Chevy",
        model: "Malibu",
        image: "./images/car14.min.jpg",
        rent: 700000,
        capacity: 2,
        description:
          " Front/rear side curtain airbags. Front & rear side curtain airbags. Body color front license plate brow. Rear body-color spoiler.",
        availableAt: "2022-03-23T15:49:05.563Z",
        transmission: "Manual",
        available: false,
        type: "Regular Cab Pickup",
        year: 2020,
        options: [
          "Bucket Seats",
        
        ],
        specs: [
          "Front/rear side curtain airbags",
          
        ],
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        plate: "JWU-8459",
        manufacture: "Lincoln",
        model: "MKS",
        image: "./images/car15.min.jpg",
        rent: 900000,
        capacity: 4,
        description:
          " Remote fuel lid release. Electronic parking brake. Daytime running lights (DRL). Silver finish interior door handles. Back-up camera.",
        availableAt: "2022-03-23T15:49:05.563Z",
        transmission: "Automanual",
        available: true,
        type: "Regular Cab Pickup",
        year: 2017,
        options: [
          "Third Row Seats",
          
        ],
        specs: [
          "Remote fuel lid release",
   
        ],
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        plate: "VOS-8183",
        manufacture: "Chevy",
        model: "Silverado",
        image: "./images/car16.min.jpg",
        rent: 200000,
        capacity: 6,
        description:
          " Rear window defroster. High performance suspension. 1.8L DOHC 16-valve I4 engine -inc: engine cover.",
        availableAt: "2022-03-23T15:49:05.563Z",
        transmission: "Automanual",
        available: true,
        type: "Convertible",
        year: 2021,
        options: [
          "Leather Interior",
         
        ],
        specs: [
          "Rear window defroster",
     
        ],
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        plate: "ENW-7713",
        manufacture: "Lincoln",
        model: "MKS",
        image: "./images/car17.min.jpg",
        rent: 1000000,
        capacity: 2,
        description:
          " Energy absorbing steering column. 3-point ELR/ALR front passenger seat belt w/pretensioner & load limiter.",
        availableAt: "2022-03-23T15:49:05.563Z",
        transmission: "Automanual",
        available: false,
        type: "Regular Cab Pickup",
        year: 2015,
        options: [
          "Alarm",
         
        ],
        specs: [
          "Energy absorbing steering column",
         
        ],
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        plate: "TPM-8174",
        manufacture: "Dodge",
        model: "Ram",
        image: "./images/car18.min.jpg",
        rent: 700000,
        capacity: 6,
        description:
          " 3-point ELR/ALR front passenger seat belt w/pretensioner & load limiter. Rear passenger map pockets. Black roof molding.",
        availableAt: "2022-03-23T15:49:05.563Z",
        transmission: "CVT",
        available: false,
        type: "Sedan",
        year: 2014,
        options: [
          "Moonroof/Sunroof",
         
        ],
        specs: [
          "3-point ELR/ALR front passenger seat belt w/pretensioner & load limiter",
         
        ],
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        plate: "ZAG-8112",
        manufacture: "Ford",
        model: "F150",
        image: "./images/car19.min.jpg",
        rent: 600000,
        capacity: 6,
        description: "",
        availableAt: "2022-03-23T15:49:05.563Z",
        transmission: "Automatic",
        available: false,
        type: "Convertible",
        year: 2021,
        options: [
          "CD (Single Disc)",
       
        ],
        specs: [
          "All-position 3-point seat belts -inc: outboard pretensioners & force limiters, dual front pwr shoulder height adjusters",
          
        ],
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        plate: "MRQ-2982",
        manufacture: "Audi",
        model: "A4",
        image: "./images/car20.min.jpg",
        rent: 700000,
        capacity: 6,
        description:
          " Pwr accessory delay. Tire pressure monitoring system (TPMS). Tilt/telescoping steering column.",
        availableAt: "2022-03-23T15:49:05.563Z",
        transmission: "Automatic",
        available: false,
        type: "Crew Cab Pickup",
        year: 2012,
        options: [
          "Navigation",
         
        ],
        specs: [
          "Pwr accessory delay",
          
        ],
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        plate: "ACT-6027",
        manufacture: "Dodge",
        model: "Durango",
        image: "./images/car21.min.jpg",
        rent: 400000,
        capacity: 6,
        description:
          " Floor carpeting. Electric speed-sensitive variable-assist pwr steering. Dana 44/226mm rear axle. Roof mounted antenna.",
        availableAt: "2022-03-23T15:49:05.563Z",
        transmission: "Manual",
        available: false,
        type: "SUV",
        year: 2013,
        options: [
          "Memory Seats",
        
        ],
        specs: [
          "Floor carpeting",
         
        ],
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        plate: "LSI-6227",
        manufacture: "Audi",
        model: "S5",
        image: "./images/car22.min.jpg",
        rent: 300000,
        capacity: 6,
        description:
          " Pwr front vented disc/rear drum brakes. Pwr windows -inc: 1-touch open/close. Cloth covered headliner.",
        availableAt: "2022-03-23T15:49:05.563Z",
        transmission: "Automatic",
        available: false,
        type: "Coupe",
        year: 2020,
        options: [
          "Memory Seats",
        
        ],
        specs: [
          "Pwr front vented disc/rear drum brakes",
       
        ],
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        plate: "OAI-9575",
        manufacture: "Toyota",
        model: "Camry",
        image: "./images/car23.min.jpg",
        rent: 200000,
        capacity: 6,
        description:
          " Intermittent rear wiper w/washer. Energy absorbing front/rear bumpers. Engine mounts -inc: (2) solid, (1) liquid-filled.",
        availableAt: "2022-03-23T15:49:05.563Z",
        transmission: "Automatic",
        available: false,
        type: "Extended Cab Pickup",
        year: 2022,
        options: [
          "Rear Window Defroster",
          
        ],
        specs: [
          "Intermittent rear wiper w/washer",
  
        ],
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        plate: "NHI-3883",
        manufacture: "Nissan",
        model: "Pathfiner",
        image: "./images/car24.min.jpg",
        rent: 600000,
        capacity: 6,
        description:
          " 200mm front axle. Roof mounted antenna. Cargo compartment cover. Rear bench seat -inc: (3) adjustable headrests.",
        availableAt: "2022-03-23T15:49:05.563Z",
        transmission: "Automatic",
        available: false,
        type: "Sedan",
        year: 2022,
        options: [
          "Moonroof/Sunroof",
       
        ],
        specs: [
          "200mm front axle",
          
        ],
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        plate: "IDN-5442",
        manufacture: "Honda",
        model: "Civic",
        image: "./images/car25.min.jpg",
        rent: 1000000,
        capacity: 2,
        description:
          " Electric speed-sensitive variable-assist pwr steering. Steel side-door impact beams. Dual bright exhaust tips.",
        availableAt: "2022-03-23T15:49:05.563Z",
        transmission: "CVT",
        available: false,
        type: "Wagon",
        year: 2015,
        options: [
          "CD (Single Disc)",
       
        ],
        specs: [
          "Electric speed-sensitive variable-assist pwr steering",
       
        ],
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ],
    {}
  );
},

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
