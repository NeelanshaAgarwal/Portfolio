export const navLinks = [
    {
      id: 1,
      name: 'Home',
      href: '#home',
    },
    {
      id: 2,
      name: 'About',
      href: '#about',
    },
    {
      id: 3,
      name: 'Projects',
      href: '#projects',
    },
    {
      id: 4,
      name: 'Contact',
      href: '#contact',
    },
  ];

  export const calculateSizes = (isSmall) => {
    return {
      deskScale: isSmall? 1.0 : 2.0,
      deskPosition: isSmall ? [1.5,-8, 3] : [2.5,-9.5,-1.9],
      cubePosition: isSmall ? [-40, 15, -1.6] : [9, -5.5, 0],
      reactLogoPosition: isSmall ? [-1, 0, 0] : [12, 3, 0],
      ringPosition: isSmall ? [-13, -2, 0] : [-52, 15, 0],
      targetPosition: isSmall ? [28, 30, 50] : [-13, -13, -10],
    };
  };

  export const achievements = [
    {
      id: 1,
      name: 'Software Development',
      cname: 'Tach Analogy',
      duration: '10/2021 - 12/2021',
      title: "Completed intensive 30-day Winter 2021 software bootcamp, excelling in web development tasks.",
      pos: 'Certificste of excillence',
      icon: './assets/tech_logo.svg',
      iconBg: '#BEC1CF',
      certificate: './assets/certificate1.pdf',
    },
    {
      id: 2,
      name: 'Artificial Intelligence with Python',
      cname: 'Coincent from UDGAM IIT Guwahati',
      duration: '12/2021 - 01/2022',
      title: "Participated in ”Artificial Intelligence with Python” program.",
      pos: 'Certificste of participation',
      icon: './assets/coincent_logo.svg',
      iconBg: "#BEC1CF",
      certificate: './assets/certificate2.pdf',
    },
    {
      id: 3,
      name: 'Ui/Ux Hackathon 2023',
      cname: 'ByteVerse, NIT Patna',
      duration: '04/2023',
      title: "Participated in the UI/UX Hackathon 2023 organized by NIT Patna.",
      pos: 'Certificste of participation',
      icon: './assets/byteverse_logo.svg',
      iconBg: "#BEC1CF",
      certificate: './assets/certificate3.pdf',
    },
    {
      id: 4,
      name: 'HackFest Delhi/NCR Hackathon',
      cname: 'GeeksforGeeks',
      duration: '12/2023 - 01/2024',
      title: "Participated in HackFest Delhi/NCR Hackathon organized by GeeksforGeeks.",
      pos: 'Certificste of participation',
      icon: './assets/geeksforgeeks_logo.svg',
      iconBg: "#BEC1CF",
      certificate: './assets/certificate4.pdf',
    },
  ];
  
  export const technologies = [
    {
      name: "C++",
      icon: "/assets/tech_icons/cpp.png",
    },
    {
      name: "CSS 3",
      icon: "./assets/tech_icons/css.png",
    },
    {
      name: "Figma",
      icon: "./assets/tech_icons/figma.png",
    },
    {
      name: "Firebase",
      icon: "./assets/tech_icons/firebase.png",
    },
    {
      name: "Git",
      icon: "./assets/tech_icons/git.png",
    },
    {
      name: "GitHub",
      icon: "./assets/tech_icons/github.png",
    },
    {
      name: "HTML 5",
      icon: "./assets/tech_icons/html.png",
    },
    {
      name: "JavaScript",
      icon: "./assets/tech_icons/javascript.png",
    },
    {
      name: "MongoDB",
      icon: "./assets/tech_icons/mongodb.png",
    },
    {
      name: "MySQL",
      icon: "./assets/tech_icons/mysql.png",
    },
    {
      name: "Node.js",
      icon: "./assets/tech_icons/nodejs.png",
    },
    {
      name: "NumPy",
      icon: "./assets/tech_icons/numpy.png",
    },
    {
      name: "Pandas",
      icon: "./assets/tech_icons/pandas.png",
    },
    {
      name: "Python",
      icon: "./assets/tech_icons/python.png",
    },
    {
      name: "React.js",
      icon: "./assets/tech_icons/reactjs.png",
    },
    {
      name: "Redux",
      icon: "./assets/tech_icons/redux.png",
    },
    {
      name: "Tailwind CSS",
      icon: "./assets/tech_icons/tailwind.png",
    },
    {
      name: "TensorFlow",
      icon: "./assets/tech_icons/tensorflow.png",
    },
    {
      name: "OpenCv",
      icon: "./assets/tech_icons/opencv.png"
    },
    {
      name: "Three.js",
      icon: "./assets/tech_icons/threejs.png",
    },
    {
      name: "Express.js",
      icon: "./assets/tech_icons/expressjs.png",
    },
  ];
  
  export const projects = [
    {
      title: 'Face Mask Detection Project',
      desc: 'The Face Mask Detection project uses deep learning and computer vision to detect if a person is wearing a mask in real-time or static images. It utilizes a pre-trained CNN model with OpenCV for processing live video streams or uploaded images, promoting safety and compliance with mask-wearing regulations, especially in public spaces during health crises.',
      subdesc:
        'The Face Mask Detection project uses Python, TensorFlow/Keras, and OpenCV to identify "Mask On," "Mask Off," or "Improper Mask" statuses in real-time video or images. It leverages a CNN model with NumPy and Matplotlib for data handling and visualization, ensuring high accuracy and scalability for public safety applications.',
      tags: [
        {
          id: 1,
          name: 'Python',
          path: './assets/tech_icons/python.png',
        },
        {
          id: 2,
          name: 'TensorFlow',
          path: './assets/tech_icons/tensorflow.png',
        },
        {
          id: 3,
          name: 'Numpy',
          path: './assets/tech_icons/numpy.png',
        },
        {
          id: 4,
          name: 'OpenCv',
          path: './assets/tech_icons/opencv.png',
        },
      ],
      image: "./assets/Mask_noMask.png",
      source_code_link: "https://github.com/NeelanshaAgarwal/Face-Mask-Detection",
    },
    {
      title: 'Estate Galaxy (MERN)',
      desc: 'MERN Estate is a full-stack web application designed for property listings. It enables users to browse, create, update, and delete listings while supporting user authentication through email and Google OAuth. The app features an intuitive interface, search and filter options, and an admin panel for managing listings and users.',
      subdesc: "Built using React.js, Redux, and Tailwind CSS for the frontend and powered by Node.js, Express.js, and MongoDB on the backend, the project integrates Firebase Google OAuth and JWT for secure authentication. It is fully deployed on Render for reliable accessibility.",
      tags: [
        {
          id: 1,
          name: 'Redux',
          path: './assets/tech_icons/redux.png',
        },
        {
          id: 2,
          name: 'Tailwind CSS',
          path: './assets/tech_icons/tailwind.png',
        },
        {
          id: 3,
          name: 'React JS',
          path: './assets/tech_icons/reactjs.png',
        },
        {
          id: 4,
          name: 'Node JS',
          path: './assets/tech_icons/nodejs.png',
        },
        {
          id: 5,
          name: 'Express Js',
          path: './assets/tech_icons/expressjs.png',
        },
        {
          id: 6,
          name: 'MongoDB',
          path: './assets/tech_icons/mongodb.png',
        },
        {
          id: 7,
          name: 'FireBase',
          path: './assets/tech_icons/firebase.png',
        },
      ],
      image: "./assets/mern_estate.png",
      source_code_link: "https://github.com/NeelanshaAgarwal/mern-estate",
    },
  ];